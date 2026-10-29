//Animation for UseInView.
import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = { children: ReactNode; delay?: number; className?: string };

export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}