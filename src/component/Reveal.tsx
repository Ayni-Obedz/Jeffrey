// Fade-and-slide-up animation, driven by useInView.
import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = { children: ReactNode; delay?: number; className?: string };

// The delay only applies from the md breakpoint up (side-by-side cards).
// On a one-column phone layout every card reveals immediately as you reach it.
export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>(0);

  return (
    <div
      ref={ref}
      style={{ "--d": `${delay}ms` } as CSSProperties}
      className={`transition-[opacity,transform] duration-700 ease-out md:[transition-delay:var(--d)] motion-reduce:transition-none ${
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}
