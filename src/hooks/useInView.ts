import { useEffect, useRef, useState } from "react";

// Returns [ref, inView]. inView turns true once, when the element has scrolled
// a little way into the screen (rootMargin shrinks the detection area from the bottom),
// so the fade-in is visible instead of finishing off-screen.
export function useInView<T extends Element>(
  threshold = 0,
  rootMargin = "0px 0px -80px 0px",
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Very old browsers: just show everything
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect(); // reveal once, don't hide again
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView] as const;
}



// import { useEffect, useRef, useState } from "react";

// export function useInView<T extends Element>(
//   threshold = 0.2,
//   rootMargin = "0px 0px -80px 0px",
// ) {
//   const ref = useRef<T>(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           io.disconnect();
//         }
//       },
//       { threshold, rootMargin },
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, [threshold, rootMargin]);

//   return [ref, inView] as const;
// }