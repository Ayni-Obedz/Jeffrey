//The date of work done.
import { useState } from "react";
import type { WorkItem } from "../data/content";

type Props = { items: WorkItem[]; limit?: number; filterable?: boolean };

export default function WorkList({ items, limit, filterable = false }: Props) {
  const categories = ["All", ...Array.from(new Set(items.flatMap((i) => i.categories)))];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.categories.includes(active));
  const shown = filtered.slice(0, limit);

  return (
    <div>
      {filterable && (
        <div className="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filter work by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                active === c ? "border-accent bg-accent text-ink" : "border-white/20 text-white/70 hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div>
        {shown.map((item) => (
          <article key={item.title} className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-[1fr_1.2fr] md:gap-12">
            <div className="aspect-video overflow-hidden rounded-2xl bg-linear-to-br from-accent/40 via-ink to-leaf/40">
              {item.image ? (
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-white/50">[Project image]</div>
              )}
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2">
                {item.categories.map((c) => (
                  <span key={c} className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/70">
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/50">{item.date}</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight md:text-4xl">{item.title}</h3>
              <p className="mt-4 max-w-xl text-white/70">{item.blurb}</p>
              {item.result && <p className="mt-4 font-bold text-leaf">{item.result}</p>}
              <a href={item.href} className="mt-6 w-fit font-semibold text-accent underline-offset-4 hover:underline">
                Read the case study
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}