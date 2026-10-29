// SALESPULSE SECTION: sits directly below <Career /> in App
import { useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";

const SALESPULSE_URL = "https://salespulsetechnology.com/";

const tones = [
  { glow: "from-accent/20", text: "text-accent", bar: "bg-accent", btn: "bg-accent text-ink" },
  { glow: "from-leaf/20", text: "text-leaf", bar: "bg-leaf", btn: "bg-leaf text-ink" },
];

const process = [
  { title: "Strategy", text: "Understanding business goals and market opportunities." },
  { title: "Execution", text: "Launching campaigns, sales systems and tools." },
  { title: "Optimization", text: "Monitoring performance and improving results." },
  { title: "Growth", text: "Scaling what drives measurable growth." },
];

const services = [
  {
    title: "Digital Marketing",
    points: [
      "Digital marketing strategy and social media management",
      "Paid advertising on Meta, Google, TikTok and X",
      "SEO, email marketing and automation",
      "Content creation: graphics, motion graphics and video",
      "Influencer and campaign marketing",
    ],
  },
  {
    title: "Sales & Lead Generation",
    points: [
      "B2B lead generation and email outreach campaigns",
      "Sales funnel development",
      "CRM integration and sales automation",
      "Conversion optimization and sales process consulting",
    ],
  },
  {
    title: "Business Technology",
    points: [
      "Website design and optimization",
      "E-commerce development",
      "Marketing technology integration and business automation",
      "Data and analytics setup, CRM setup",
    ],
  },
  {
    title: "Business & Corporate Services",
    points: [
      "Business registration and company documentation",
      "Business compliance support",
      "Corporate profile development and process setup",
      "Startup support and advisory",
    ],
  },
];

function VisitButton({ className = "", label = "Learn more at SalesPulse" }: { className?: string; label?: string }) {
  return (
    <a
      href={SALESPULSE_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:scale-105 motion-reduce:transition-none ${className}`}
    >
      {label} <span aria-hidden>↗</span>
    </a>
  );
}

function BulletList({ points, tone, inView }: { points: string[]; tone: (typeof tones)[number]; inView: boolean }) {
  return (
    <ul className="space-y-4 self-center">
      {points.map((p, i) => (
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
  );
}

// First card: the company itself
function MainCard() {
  const [ref, inView] = useInView<HTMLDivElement>(0.25);
  const tone = tones[0];

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl bg p-8 shadow-2xl shadow-black/60 md:p-12">
      <div aria-hidden className={`absolute inset-0 bg-linear-to-br ${tone.glow} to-transparent`} />

      <div className="relative grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 md:h-20 md:w-20">
            <span className={``}> <img src="https://salespulsetechnology.com/wp-content/uploads/2026/03/Salespulse-logo-removebg-preview-e1773400272503.png" /> </span>
          </span>

          <p className="mt-6 w-fit rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/70">
            Digital marketing, sales enablement &amp; business technology
          </p>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            <a href={SALESPULSE_URL} target="_blank" rel="noreferrer" className="hover:text-accent">
              SalesPulse Technologies
            </a>
          </h3>
          <p className="mt-2 text-lg text-white/70">Chief Executive Officer</p>
          <p className="mt-1 text-sm text-white/50">Everything is sellable...</p>

          {/* The 4-step process, laid out like the career timeline bar */}
          <div className="mt-8">
            <div className="relative h-1.5 rounded-full bg-white/10">
              <div
                className={`absolute inset-y-0 left-0 rounded-full ${tone.bar} transition-all duration-1000 ease-out motion-reduce:transition-none`}
                style={{ width: inView ? "100%" : "0%" }}
              />
              {[0, 1, 2, 3].map((i) => (
                <span key={i} aria-hidden className="absolute -top-1 h-3.5 w-px bg-white/20" style={{ left: `${i * 33.33}%` }} />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-4 text-[10px] text-white/40 md:text-xs">
              {process.map((s) => (
                <span key={s.title}>{s.title}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="self-center">
          <p className="text-white/80">
            SalesPulse Technologies is a growth-driven digital marketing, sales enablement and business technology
            company. It helps businesses increase visibility, generate qualified leads and convert attention into
            revenue, combining marketing strategy, modern technology and sales systems so they can grow faster and
            operate more efficiently.
          </p>
          <div className="mt-8">
            <VisitButton className={tone.btn} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, points, index }: { title: string; points: string[]; index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>(0.25);
  const tone = tones[(index + 1) % tones.length];

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl bg-ink p-8 shadow-2xl shadow-black/60 md:p-12">
      <div aria-hidden className={`absolute inset-0 bg-linear-to-br ${tone.glow} to-transparent`} />

      <div className="relative grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <span className={`text-2xl font-extrabold ${tone.text}`}>{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h3>
          <p className="mt-2 text-lg text-white/70">What SalesPulse offers</p>
          <div className="mt-8 h-1.5 rounded-full bg-white/10">
            <div
              className={`h-full rounded-full ${tone.bar} transition-all duration-1000 ease-out motion-reduce:transition-none`}
              style={{ width: inView ? "100%" : "0%" }}
            />
          </div>
        </div>
        <BulletList points={points} tone={tone} inView={inView} />
      </div>
    </div>
  );
}

export default function Company() {
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const total = services.length + 1;

  // Same effect as Career: older cards shrink and dim as the next one slides over
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const els = cardRefs.current;
      if (!els[0]) return;

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
    <section id="company" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">CEO of SalesPulse</h2>
        <p className="mt-4 max-w-xl text-white/60">
          Alongside my career, I lead SalesPulse Technologies: what we do, how we work and the services we offer.
        </p>

        <ol className="mt-12 pb-8">
          {Array.from({ length: total }, (_, i) => (
            <li
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="mb-8 origin-top will-change-transform md:sticky md:mb-16"
              style={{ top: `calc(6rem + ${i * 1.1}rem)` }}
            >
              {i === 0 ? <MainCard /> : <ServiceCard index={i - 1} {...services[i - 1]} />}
            </li>
          ))}
        </ol>

        <div className="flex justify-center">
          <VisitButton className="bg-white text-ink" label="Want to know more? Visit the official SalesPulse site" />
        </div>
      </div>
    </section>
  );
}


// //For the SALESPULSE BRANCH PAGE
// import { site } from "../data/content";

// const pillars = [
//   { title: "What we do", text: "[Describe what the company does in two or three sentences.]", card: "bg-accent text-ink" },
//   { title: "Who we serve", text: "[Describe the customers and industries the company works with.]", card: "bg-leaf text-ink" },
//   { title: "How we work", text: "[Describe the approach: clear goals, honest reporting and steady follow-through.]", card: "bg-white text-ink" },
// ];

// export default function Company() {
//   return (
//     <section id="company" className="relative isolate overflow-hidden border-t border-white/10 py-24">
//       <div aria-hidden className="absolute -top-32 right-0 -z-10 h-28rem w-28rem animate-float rounded-full bg-accent/25 blur-[120px] motion-reduce:animate-none" />
//       <div className="mx-auto max-w-6xl px-6">
//         <h2 className="text-5xl font-extrabold tracking-tight md:text-8xl">{site.company}</h2>
//         <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
//           [One paragraph on the company story: why it exists, what it stands for and where it is going.]
//         </p>
//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           {pillars.map((p) => (
//             <article key={p.title} className={`rounded-3xl p-8 ${p.card}`}>
//               <h3 className="text-2xl font-extrabold tracking-tight">{p.title}</h3>
//               <p className="mt-3 opacity-80">{p.text}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }