import { useState } from "react";
import { services } from "../data/content";
import Reveal from "./Reveal";

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="relative  overflow-hidden py-24">
      <div aria-hidden className="absolute -right-40 top-20 h-96 w-96 animate-float-slow rounded-full bg-accent/15 blur-[120px] motion-reduce:animate-none" />
      <div aria-hidden className="absolute -left-40 bottom-0 h-96 w-96 animate-float rounded-full bg-leaf/15 blur-[120px] motion-reduce:animate-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Services</h2>
          <p className="mt-4 max-w-xl text-white/60">What I can take on for your business.</p>
        </Reveal>

        {/* items-start so opening one card doesn't stretch its neighbours */}
        <div className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.title} delay={i * 120}>
                <article
                  className={`group relative isolate overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-2 hover:rotate-1 ${s.card}`}
                >
                  {/* Background image layer */}
                  {s.img && (
                    <img
                      src={s.img}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30 mix-blend-multiply transition duration-500 group-hover:scale-110 group-hover:opacity-40"
                    />
                  )}

                  {/* Title row + plus toggle */}
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${i}`}
                    className="flex min-h-32 w-full items-center justify-between gap-4 p-8 text-left"
                  >
                    <h3 className="text-2xl font-extrabold tracking-tight">{s.title}</h3>

                    <span
                      aria-hidden
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/30 transition duration-300 group-hover:bg-ink/10 ${
                        isOpen ? "rotate-45 bg-ink/10" : ""
                      }`}
                    >
                      <span className="absolute h-0.5 w-4 rounded bg-current" />
                      <span className="absolute h-4 w-0.5 rounded bg-current" />
                    </span>
                  </button>

                  {/* Details (animated height) */}
                  <div
                    id={`service-panel-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8">
                        <p className="opacity-80">{s.blurb}</p>
                        <ul className="mt-6 space-y-2 border-t border-ink/20 pt-6 text-sm font-medium">
                          {s.points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// //List of services offered
// import { services } from "../data/content";
// import Reveal from "./Reveal";

// export default function Services() {
//   return (
//     <section id="services" className="relative overflow-hidden border-t border-white/10 py-24">
//       <div aria-hidden className="absolute -right-40 top-20 h-96 w-96 animate-float-slow rounded-full bg-accent/15 blur-[120px] motion-reduce:animate-none" />
//       <div aria-hidden className="absolute -left-40 bottom-0 h-96 w-96 animate-float rounded-full bg-leaf/15 blur-[120px] motion-reduce:animate-none" />

//       <div className="relative mx-auto max-w-6xl px-6">
//         <Reveal>
//           <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Services</h2>
//           <p className="mt-4 max-w-xl text-white/60">What I can take on for your business.</p>
//         </Reveal>

//         <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {services.map((s, i) => (
//             <Reveal key={s.title} delay={i * 120} className="h-full">
//               <article className={`flex h-full flex-col rounded-3xl p-8 transition duration-300 hover:-translate-y-2 hover:rotate-1 ${s.card}`}>
//                 <h3 className="text-2xl font-extrabold tracking-tight">{s.title}</h3>
//                 <p className="mt-3 opacity-80">{s.blurb}</p>
//                 <ul className="mt-8 space-y-2 border-t border-ink/20 pt-6 text-sm font-medium">
//                   {s.points.map((p) => (
//                     <li key={p}>{p}</li>
//                   ))}
//                 </ul>
//               </article>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }