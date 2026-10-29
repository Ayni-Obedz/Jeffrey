import { useCallback, useEffect, useRef, useState } from "react";
import { nodes, EDGES } from "../data/Network";

const centre = nodes[0];
const SPREAD = 1800; // ms for the light to travel from the centre to the farthest node (and again back)
const HOLD = 500; // ms pause while the outer nodes glow, before the light heads back
const RET = SPREAD + HOLD; // when the return trip starts
const TAIL = 15; // length of the glowing trail
const GLYPHS = ["0", "1", "{", "}", "<", ">", "/", "+", "=", "*", "[", "]"];

// How wide the network is allowed to get: 1 = square, 2.2 = very wide.
// It follows the shape of the screen, but never goes outside these limits.
const MIN_ASPECT = 0.8;
const MAX_ASPECT = 1.1;
const calcAspect = () =>
  Math.min(
    MAX_ASPECT,
    Math.max(
      MIN_ASPECT,
      window.innerWidth / Math.max(320, window.innerHeight - 112),
    ),
  );

const edges = EDGES;

// Distance from the centre node to every node, measured ALONG the lines (Dijkstra)
const adj: [number, number][][] = nodes.map(() => []);
edges.forEach(([a, b]) => {
  const w = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
  adj[a].push([b, w]);
  adj[b].push([a, w]);
});
const gd = nodes.map(() => Infinity);
gd[0] = 0;
const todo = new Set(nodes.map((_, i) => i));
while (todo.size) {
  let u = -1;
  todo.forEach((i) => {
    if (u < 0 || gd[i] < gd[u]) u = i;
  });
  todo.delete(u);
  if (!isFinite(gd[u])) break;
  adj[u].forEach(([v, w]) => {
    if (gd[u] + w < gd[v]) gd[v] = gd[u] + w;
  });
}
const maxG = Math.max(...gd.filter(isFinite));

// For each line: which end is nearer the centre, and how long the line is
const edgeInfo = edges.map(([a, b]) => ({
  near: gd[a] <= gd[b] ? a : b,
  far: gd[a] <= gd[b] ? b : a,
  len: Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y),
}));

function Placeholder({ tone }: { tone: number }) {
  const bg = ["#1e3a5f", "#0e4a3a", "#243447", "#2b4a6f"][tone % 4];
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <rect width="100" height="100" fill={bg} />
      <circle cx="50" cy="38" r="16" fill="#cbd5e1" />
      <path d="M18 100c0-20 14-32 32-32s32 12 32 32z" fill="#e2e8f0" />
    </svg>
  );
}

export default function NetworkHero() {
  const areaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const moverRefs = useRef<(HTMLDivElement | null)[]>([]); // moved by the cursor physics
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]); // lit up by the light
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const burstAt = useRef(0);
  const busy = useRef(false);
  const [bursts, setBursts] = useState<number[]>([]);
  const [aspect, setAspect] = useState(calcAspect);
  const globeRef = useRef<SVGSVGElement>(null);

  // Keep the network's shape in step with the screen
  useEffect(() => {
    const onResize = () => setAspect(calcAspect());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Cursor physics + the travelling light, drawn on the canvas
  useEffect(() => {
    const area = areaRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!area || !canvas || !ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mouse = { x: -9999, y: -9999 };
    const ns = nodes.map(() => ({ ox: 0, oy: 0, vx: 0, vy: 0 }));
    const density = window.innerWidth < 640 ? 0.6 : 1;
    const dots = edges.flatMap(([a, b], edge) => {
      const len = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
      const count = Math.max(2, Math.round(len * 0.8 * 1.4 * density));
      return Array.from({ length: count }, (_, k) => ({
        edge,
        t: (k + 1) / (count + 1),
        glyph: GLYPHS[(edge * 7 + k * 3) % GLYPHS.length],
        mass: 0.6 + ((edge + k) % 5) * 0.2,
        ox: 0,
        oy: 0,
        vx: 0,
        vy: 0,
      }));
    });

    let W = 0;
    let H = 0;
    let raf = 0;
    let visible = true;

    const fit = () => {
      const rect = area.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const step = () => {
      if (!W || !H) return;
      const now = performance.now();
      const R = H * 0.16;

      // Nodes (the centre node stays put so it is easy to click)
      nodes.forEach((n, i) => {
        const s = ns[i];
        if (!reduced && i !== 0) {
          const dx = (n.x / 100) * W + s.ox - mouse.x;
          const dy = (n.y / 100) * H + s.oy - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < R && d > 0.001) {
            const f = ((1 - d / R) * H * 0.01) / (0.8 + n.size / 10); // bigger nodes move less
            s.vx += (dx / d) * f;
            s.vy += (dy / d) * f;
          }
          s.vx -= s.ox * 0.06;
          s.vy -= s.oy * 0.06;
          s.vx *= 0.85;
          s.vy *= 0.85;
          s.ox += s.vx;
          s.oy += s.vy;
        }
        moverRefs.current[i]?.style.setProperty(
          "transform",
          `translate3d(${s.ox}px, ${s.oy}px, 0)`,
        );
      });

      // Lines follow the nodes
      edges.forEach(([a, b], i) => {
        const l = lineRefs.current[i];
        if (!l) return;
        l.setAttribute("x1", String(nodes[a].x + (ns[a].ox / W) * 100));
        l.setAttribute("y1", String(nodes[a].y + (ns[a].oy / H) * 100));
        l.setAttribute("x2", String(nodes[b].x + (ns[b].ox / W) * 100));
        l.setAttribute("y2", String(nodes[b].y + (ns[b].oy / H) * 100));
      });

      ctx.clearRect(0, 0, W, H);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const baseFont = `${Math.max(9, Math.round(H * 0.011))}px ui-monospace, monospace`;
      const litFont = `${Math.max(12, Math.round(H * 0.017))}px ui-monospace, monospace`;

      // Where is the light? Out along the webs, a pause, then back to the centre
      const el = burstAt.current ? now - burstAt.current : -1;
      let front = -1;
      let dir = 1; // 1 = light travelling out, -1 = light coming back
      if (el >= 0) {
        if (el < SPREAD) {
          front = (el / SPREAD) * (maxG + TAIL);
        } else if (el >= RET && el < RET + SPREAD) {
          front = (1 - (el - RET) / SPREAD) * maxG;
          dir = -1;
        } else if (el >= RET + SPREAD) {
          burstAt.current = 0;
        }
      }

      // Glowing pulse running along each line
      if (front >= 0) {
        const clamp = (v: number) => Math.min(1, Math.max(0, v));
        const at = (i: number) =>
          [
            (nodes[i].x / 100) * W + ns[i].ox,
            (nodes[i].y / 100) * H + ns[i].oy,
          ] as const;
        edgeInfo.forEach(({ near, far, len }) => {
          const start = gd[near];
          const head = clamp((front - start) / len);
          const tail = clamp((front - dir * TAIL - start) / len);
          if (head === tail) return;
          const [nx, ny] = at(near);
          const [fx, fy] = at(far);
          const hx = nx + (fx - nx) * head;
          const hy = ny + (fy - ny) * head;
          const tx = nx + (fx - nx) * tail;
          const ty = ny + (fy - ny) * tail;
          const g = ctx.createLinearGradient(tx, ty, hx, hy);
          g.addColorStop(0, "rgba(56,189,248,0)");
          g.addColorStop(1, "rgba(255,255,255,0.95)");
          ctx.strokeStyle = g;
          ctx.lineWidth = 3;
          ctx.lineCap = "round";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(hx, hy);
          ctx.stroke();
          ctx.shadowBlur = 0;
        });
      }

      // Code characters along the lines
      for (const p of dots) {
        const [a, b] = edges[p.edge];
        const ax = (nodes[a].x / 100) * W + ns[a].ox;
        const ay = (nodes[a].y / 100) * H + ns[a].oy;
        const bx = (nodes[b].x / 100) * W + ns[b].ox;
        const by = (nodes[b].y / 100) * H + ns[b].oy;
        const x = ax + (bx - ax) * p.t + p.ox;
        const y = ay + (by - ay) * p.t + p.oy;

        if (!reduced) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const d = Math.hypot(dx, dy);
          const r = R * 0.8;
          if (d < r && d > 0.001) {
            const f = ((1 - d / r) * H * 0.02) / p.mass;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
          p.vx -= p.ox * 0.1;
          p.vy -= p.oy * 0.1;
          p.vx *= 0.82;
          p.vy *= 0.82;
          p.ox += p.vx;
          p.oy += p.vy;
        }

        // Characters light up as the pulse passes them (out and back)
        let lit = 0;
        if (front >= 0) {
          const info = edgeInfo[p.edge];
          const fromNear = info.near === a ? p.t : 1 - p.t;
          const along = gd[info.near] + fromNear * info.len;
          lit = Math.max(0, 1 - Math.abs(along - front) / 8);
        }
        ctx.font = lit > 0.05 ? litFont : baseFont;
        ctx.fillStyle =
          lit > 0.05
            ? `rgba(255,255,255,${0.4 + lit * 0.6})`
            : "rgba(56,189,248,0.55)";
        ctx.fillText(p.glyph, x, y);
      }
    };

    const loop = () => {
      if (visible) step();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = area.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onUp = (e: PointerEvent) => {
      if (e.pointerType === "touch") onLeave();
    };

    fit();
    if (reduced) step();
    else raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      fit();
      if (reduced) step();
    });
    ro.observe(area);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(area);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("blur", onLeave);
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("blur", onLeave);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // The burst of light at the centre, fired when the light is back home
  const fireBurst = useCallback(() => {
    const id = Date.now();
    setBursts((b) => [...b, id]);
    window.setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 3000);

    globeRef.current?.animate(
      [
        { filter: "brightness(1)" },
        { filter: "brightness(1.9)", offset: 0.3 },
        { filter: "brightness(1)" },
      ],
      { duration: 1800, easing: "ease-out" },
    );
    nodeRefs.current[0]?.animate(
      [
        { boxShadow: "0 0 0 0 rgba(56,189,248,0)" },
        { boxShadow: "0 0 60px 24px rgba(56,189,248,0.95)", offset: 0.3 },
        { boxShadow: "0 0 0 0 rgba(56,189,248,0)" },
      ],
      { duration: 1600, easing: "ease-out" },
    );
    window.setTimeout(() => {
      busy.current = false;
    }, 1500);
  }, []);

  // Light goes out along the webs, lights each icon, returns to the centre, then the burst
  const sendLight = useCallback(() => {
    if (busy.current) return;
    busy.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fireBurst();
      return;
    }
    burstAt.current = performance.now();

    const glow = (el: HTMLDivElement | null, delay: number) =>
      el?.animate(
        [
          { boxShadow: "0 0 0 0 rgba(56,189,248,0)", filter: "brightness(1)" },
          {
            boxShadow: "0 0 36px 14px rgba(56,189,248,0.85)",
            filter: "brightness(1.5)",
            offset: 0.35,
          },
          { boxShadow: "0 0 0 0 rgba(56,189,248,0)", filter: "brightness(1)" },
        ],
        { duration: 1000, delay, easing: "ease-out" },
      );

    nodeRefs.current.forEach((el, i) => {
      if (i === 0) return;
      glow(el, (gd[i] / (maxG + TAIL)) * SPREAD); // glows as the light arrives
      glow(el, RET + ((maxG - gd[i]) / maxG) * SPREAD); // glows again as the light leaves for the centre
    });

    window.setTimeout(fireBurst, RET + SPREAD); // burst when the light is back at the centre
  }, [fireBurst]);

  // Sends the first light by itself shortly after the page opens
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(sendLight, 800);
    return () => window.clearTimeout(t);
  }, [sendLight]);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-12"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]"
      />

      {/* The network: a container, so cqh units scale with it */}
      <div
        ref={areaRef}
        className="relative"
        style={{
          containerType: "size",
          aspectRatio: aspect,
          width: `min(100vw, calc((100svh - 7rem) * ${aspect}))`,
        }}
      >
        {/* Globe: a light-blue sphere behind the web */}
        <svg
          ref={globeRef}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <radialGradient id="globeFill" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="55%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.04" />
            </radialGradient>
            <radialGradient id="globeShine" cx="38%" cy="32%" r="45%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="47" fill="url(#globeFill)" />
          <circle cx="50" cy="50" r="47" fill="url(#globeShine)" />
          {[
            [54, 16],
            [54, 34],
            [18, 54],
            [36, 54],
          ].map(([rx, ry]) => (
            <ellipse
              key={`${rx}-${ry}`}
              cx="50"
              cy="50"
              rx={rx}
              ry={ry}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              style={{ vectorEffect: "non-scaling-stroke" }}
            />
          ))}
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="rgba(56,189,248,0.15)"
            strokeWidth={1.5}
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
        </svg>

        {/* The webbing */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {edges.map(([a, b], i) => (
            <line
              key={`${a}-${b}`}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="rgba(255,255,255,0.28)"
              strokeWidth={1}
              style={{ vectorEffect: "non-scaling-stroke" }}
            />
          ))}
        </svg>

        {/* Code characters and the travelling light */}
        <canvas
          ref={canvasRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
        />

        {/* Centre glow, and the burst that fires when the light returns */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span
            className="absolute aspect-square w-[24cqh] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-accent/30 blur-2xl motion-reduce:animate-none"
            style={{ left: `${centre.x}%`, top: `${centre.y}%` }}
          />
          {bursts.map((id) => (
            <div key={id}>
              <span
                className="absolute aspect-square w-[30cqh] -translate-x-1/2 -translate-y-1/2 animate-flash rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(56,189,248,0.4)_40%,transparent_70%)]"
                style={{ left: `${centre.x}%`, top: `${centre.y}%` }}
              />
              {[0, 250, 500].map((d) => (
                <span
                  key={d}
                  className="absolute aspect-square w-[16cqh] -translate-x-1/2 -translate-y-1/2 animate-ring rounded-full border-2 border-accent"
                  style={{
                    left: `${centre.x}%`,
                    top: `${centre.y}%`,
                    animationDelay: `${d}ms`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* The icons */}
        {nodes.map((n, i) => {
          const body = (
            <div className="rounded-full bg-accent/15 p-[6%]">
              <div className="aspect-square overflow-hidden rounded-full border-2 border-white bg-ink">
                {n.src ? (
                  <img
                    src={n.src}
                    alt={n.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Placeholder tone={i} />
                )}
              </div>
            </div>
          );
          return (
            <div
              key={n.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${n.x}%`, top: `${n.y}%`, width: i === 0 ?  `max(${n.size}cqh, 44px)` : `max(${n.size}cqh, 28px)` }}
            >
              <div
                ref={(el) => {
                  moverRefs.current[i] = el;
                }}
                className="will-change-transform"
              >
                <div
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  className="animate-bob rounded-full motion-reduce:animate-none"
                  style={{
                    animationDelay: `${-i * 0.7}s`,
                    animationDuration: `${5 + (i % 4)}s`,
                  }}
                >
                  {i === 0 ? (
                    <button
                      type="button"
                      onClick={sendLight}
                      aria-label="Send out the light"
                      className="block w-full cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {body}
                    </button>
                  ) : (
                    body
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="absolute inset-x-0 bottom-4 px-4 text-center text-xs tracking-wider text-white/50 sm:bottom-6 sm:text-sm">
        CONNECTING YOUR ORGANIZATION TO THE WORLD
      </p>
    </section>
  );
}






