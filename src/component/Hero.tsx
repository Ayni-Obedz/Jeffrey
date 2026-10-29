//The main/first page.
import { useEffect, useRef } from "react";
import { site } from "../data/content";

// Replace these with Jeffrey's four titles
const titles = ["FOUNDER", "SALES EXECUTIVE", "MARKETING", "LEAD GENERATION SPECIALIST"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play once each time the section scrolls into view, then rewind when it leaves
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <video
        ref={videoRef}
        src="/Video background/1.mp4"
        poster="/Video background/shake. jeff.jpg"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute -top-40 left-1/4 h-32rem w-32rem animate-float rounded-full bg-accent/30 blur-[120px] motion-reduce:animate-none" />
        <div className="absolute -bottom-40 right-1/4 h-28rem] w-28rem animate-float-slow rounded-full bg-leaf/25 blur-[120px] motion-reduce:animate-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size:64px_64px mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)" />
      </div>

      <div className="mx-auto max-w-5xl">
        <ul className="mx-auto mb-8 flex flex-wrap items-center justify-center gap-3">
             {titles.map((t) => (
             <li
               key={t}
               className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
                 >
                <span className="h-2.5 w-2.5 rounded-full bg-leaf" />
                 {t}
               </li>
                ))}
        </ul>

        <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
          Revenue growth, built on relationships.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-/70 md:text-xl">
          {site.name} helps businesses win customers and scale. [ONE-LINE POSITIONING STATEMENT]
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#work" className="rounded-full bg-accent px-8 py-4 font-semibold text-ink transition hover:bg-white">
            View my work
          </a>
          <a href=
            "#contact"
            className="rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition hover:border-accent hover:text-accent"
          >
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}




// //Main/first page
// export default function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-ink text-white"
//     >
//       {/* Background */}
//       <div aria-hidden className="absolute inset-0 -z-10">
//         <div className="absolute -top-40 left-1/4 h-32rem w-32rem animate-float rounded-full bg-accent/30 blur-[120px] motion-reduce:animate-none" />
//         <div className="absolute -bottom-40 right-1/4 h-28rem w-28rem animate-float-slow rounded-full bg-leaf/25 blur-[120px] motion-reduce:animate-none" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size:64px_64px mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)" />
//       </div>

//       {/* Content */}
//       <div className="mx-auto max-w-5xl px-6 py-24 text-center">
//         <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
//           <span className="relative flex h-2.5 w-2.5">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
//             <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf" />
//           </span>
//           CEO · Sales · Marketing · Lead Generation
//         </div>

//         <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
//           Revenue growth, <span className="text-accent">built on relationships.</span>
//         </h1>

//         <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70 md:text-xl">
//           [FULL NAME] helps businesses win customers and scale. [ONE-LINE POSITIONING STATEMENT]
//         </p>

//         <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
//           <a
//             href="#work"
//             className="rounded-full bg-accent px-8 py-4 font-semibold text-ink transition hover:bg-white"
//           >
//             View my work →
//           </a>
//           <a
//             href="#contact"
//             className="rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition hover:border-accent hover:text-accent"
//           >
//             Let's talk
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }