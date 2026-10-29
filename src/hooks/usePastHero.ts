import { useEffect, useState } from "react";

// True once the visitor has scrolled past the first section (the one with id="top")
export function usePastHero() {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    // The -64px margin flips the state as the section's bottom reaches the navbar's bottom edge
    const io = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { rootMargin: "-64px 0px 0px 0px" },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return past;
}