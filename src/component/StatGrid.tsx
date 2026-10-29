import { stats } from "../data/content";
import CountUp from "./CountUp";

export default function StatGrid() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-ink p-6 md:p-8">
          <p className="text-4xl font-extrabold text-accent md:text-6xl">
            <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-sm text-white/60">{s.label}</p>
        </div>
      ))}
    </div>
  );
}