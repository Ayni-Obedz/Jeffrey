import { useEffect } from "react";
import { cases, type Case } from "../data/cases";

function Slot({ src }: { src?: string }) {
  return (
    <div className="aspect-video overflow-hidden rounded-2xl bg-white/[0.04]">
      {src && <img src={src} alt="" className="h-full w-full object-cover" />}
    </div>
  );
}

export default function CaseStudy({ study }: { study: Case }) {
  const next = cases[(cases.indexOf(study) + 1) % cases.length];

  useEffect(() => {
    document.title = study.title;
  }, [study]);

  return (
    <div className={`min-h-screen font-sans text-white ${study.page}`}>
      <article className="mx-auto max-w-3xl px-6 py-10 md:py-14">
        <a href="/#work" className="border-red/10  rounded-3xl text-sm text-white/60 transition hover:text-white">
          ← Work
        </a>

        <h1 className="mt-10 text-4xl font-extrabold tracking-tight md:text-5xl">{study.title}</h1>

        {study.tools && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {study.tools.map((t) => (
              <li key={t} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/70">
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8">
          <Slot src={study.hero} />
        </div>

        <div className="mt-8 space-y-4 text-lg leading-relaxed text-white/75">
          {study.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-8">
          <Slot src={study.figure} />
        </div>

        <ul className="mt-8 space-y-3 border-t border-white/10 pt-8 text-white/80">
          {study.work.map((w) => (
            <li key={w} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {w}
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
          {study.outcome.map((p, i) => (
            <p key={p} className={i === 0 ? "text-xl leading-relaxed md:text-2xl" : "text-white/70"}>
              {p}
            </p>
          ))}
        </div>

        <a href={`/work/${next.slug}`} className="mt-12 block border-t border-white/10 pt-8 text-white/60 transition hover:text-white">
          <span className="block text-sm">Next</span>
          <span className="text-xl font-bold text-white">{next.title}</span>
        </a>
      </article>
    </div>
  );
}
