//Statictics of past achievments and stuff.
import { leadsByMonth } from "../data/content";
import { useInView } from "../hooks/useInView";
import StatGrid from "./StatGrid";

export default function Analytics() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const max = Math.max(...leadsByMonth.map((d) => d.value));

  return (
    <section id="analytics" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">Results, measured.</h2>
        <p className="mt-4 max-w-xl text-white/60">The numbers behind the work, updated from real campaigns.</p>

        <div className="mt-12">
          <StatGrid />
        </div>

        <div ref={ref} className="mt-10 rounded-3xl border border-white/10 bg-white/0.03 p-6 md:p-10">
          <h3 className="mb-8 text-xl font-bold">Leads generated per month</h3>
          <div className="flex h-56 items-end gap-2 md:gap-4">
            {leadsByMonth.map((d, i) => (
              <div key={d.month} className="flex h-full flex-1 flex-col items-center gap-2">
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-md bg-linear-to-t from-leaf to-accent transition-all duration-1000"
                    style={{ height: inView ? `${(d.value / max) * 100}%` : "0%", transitionDelay: `${i * 60}ms` }}
                  />
                </div>
                <span className="text-xs text-white/50">{d.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}