// The profiles that are presented.
import { useEffect, useRef } from "react";

type Company = { name: string; logo?: string };
type Props = { companies: Company[]; duration?: number }; // duration in ms

export default function CompanyMarquee({ companies, duration = 30000 }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const animRef = useRef<Animation | null>(null);
  const row = [...companies, ...companies];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const anim = track.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      { duration, iterations: Infinity, easing: "linear" },
    );
    animRef.current = anim;
    return () => anim.cancel();
  }, [duration, companies]);

  return (
    <div
      onMouseEnter={() => animRef.current?.play()}
      onMouseLeave={() => animRef.current?.play()}
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <ul ref={trackRef} className="flex w-max items-center">
        {row.map((c, i) => (
          <li key={i} aria-hidden={i >= companies.length} className="shrink-0 pr-16">
            {c.logo ? (
              <img src={c.logo} alt={c.name} className="h-8 w-auto opacity-60 transition hover:opacity-100" />
            ) : (
              <span className="text-2xl font-extrabold tracking-tight text-white/50">{c.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
