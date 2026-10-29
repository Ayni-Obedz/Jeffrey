import { useEffect, useRef } from "react";
import { roles, type Role } from "../data/content";
import { useInView } from "../hooks/useInView";

const NOW = new Date().getFullYear() + new Date().getMonth() / 12;
const TL_START = 2020;
const pos = (y: number) => ((y - TL_START) / (NOW - TL_START)) * 100; //Postion of the years along the bar, as a % from the left
const YEARS = Array.from({ length: Math.floor(NOW) - TL_START}, (_, i) => TL_START + i);

// Cards alternate between your sky blue and green
const tones = [
  { glow: "from-accent/20", text: "text-accent", bar: "bg-accent" },
  { glow: "from-leaf/20", text: "text-leaf", bar: "bg-leaf" },
];

function RoleCard({ role, index }: { role: Role; index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.25);
  const tone = tones[index % tones.length];
  const span = NOW - TL_START;
  const left = ((role.start - TL_START) / span) * 100;
  const width = Math.max(1.5, (((role.end ?? NOW) - role.start) / span) * 100);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl  bg-ink p-8 shadow-2xl shadow-black/60 md:p-12"
    >
      <div aria-hidden className={`absolute inset-0 bg-linear-to-br ${tone.glow} to-transparent`} />

      <div className="relative grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <span className="flex h-16 w-16 items-center justify-center overflow-hidden md:h-25 md:w-20 rounded-2xl"> 
            {role.logo ? (
             <img src={role.logo} alt={`${role.company} logo`} className="h-full w-full object-contain" />
            ) : (
              <span className={`text-2xl font-extrabol ${tone.text}`}>{String(index + 1).padStart(2, "0")}</span>  
            )}
          </span>

          <p className="mt-6 w-fit rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/70">
            {role.industry}
          </p>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            {role.url ? (
              <a href={role.url} target="_blank" rel="noreferrer" className="hover:text-accent">
                {role.company}
              </a>
            ) : (
              role.company
            )}
          </h3>
          <p className="mt-2 text-lg text-white/70">{role.role}</p>
          <p className="mt-1 text-sm text-white/50">
            {role.period}
            {role.note ? `, ${role.note}` : ""}
          </p>

          {/* Where this job sits between 2018 and now */}
          <div className="mt-8">
            <div className="relative h-1.5 rounded-full bg-white/10">
              <div
                className={`absolute inset-y-0 rounded-full ${tone.bar} transition-all duration-1000 ease-out motion-reduce:transition-none`}
                style={{ left: `${left}%`, width: inView ? `${width}%` : "0%" }}
              />
              {YEARS.map((y) => (
                <span key={y} aria-hidden className="absolute -top-1 h-3.5 w-px gb-white/20" style={{ left: `${pos(y)}%` }} />
              ))}
            </div>
            
            <div className="relative mt-3 h-4 text-10px text-white/40">
              {YEARS.map((y, i) => (
              <span
               key={y}
               className={`absolute top-0 ${i % 2 ? "hidden sm:block" : ""}`}
               style={{ left: `${pos(y)}%`, transform: i === 0 ? "none" : "translateX(-50%)" }}
              > 
               {y}
              </span>
              ))}
              <span className="absolute right-0 top-0">Now</span>
            </div>
          </div>
        </div>

        <ul className="space-y-4 self-center">
          {role.points.map((p, i) => (
            <li
              key={p}
              style={{ transitionDelay: `${i * 120}ms` }}
              className={`flex gap-3 text-white/80 transition-all duration-700 motion-reduce:transition-none ${
                inView ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              <span aria-hidden className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone.bar}`} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Career() {
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Older cards shrink and dim a little as each new card slides over them
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const els = cardRefs.current;
      if (!els[0]) return;

      // On small screens the cards are not pinned, so leave them alone
      if (getComputedStyle(els[0]).position !== "sticky") {
        els.forEach((el) => {
          if (el) {
            el.style.transform = "";
            el.style.filter = "";
          }
        });
        return;
      }

      const vh = window.innerHeight;
      const arrival = els.map((el, i) => {
        if (!el || i === 0) return 0;
        const stick = parseFloat(getComputedStyle(el).top) || 0;
        return Math.min(1, Math.max(0, (vh - el.getBoundingClientRect().top) / (vh - stick)));
      });

      els.forEach((el, i) => {
        if (!el) return;
        let depth = 0;
        for (let j = i + 1; j < arrival.length; j++) depth += arrival[j];
        el.style.transform = `scale(${Math.max(0.8, 1 - 0.04 * depth)})`;
        el.style.filter = `brightness(${Math.max(0.45, 1 - 0.16 * depth)})`;
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="career" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">My career</h2>
        <p className="mt-4 max-w-xl text-white/60">A little about where I've been: the companies, roles and years behind the work.</p>
        {/* <p className="mt-2 text-sm text-white/40">{roles.length} roles, keep scrolling</p> */}

        <ol className="mt-12 pb-8">
          {roles.map((r, i) => (
            <li
              key={r.company + r.period}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="mb-8 origin-top will-change-transform md:sticky md:mb-16"
              style={{ top: `calc(6rem + ${i * 1.1}rem)` }}
            >
              <RoleCard role={r} index={i} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}