import { useState } from "react";
import { navLinks, site } from "../data/content";
import { usePastHero } from "../hooks/usePastHero";

const pill = "rounded-2xl border border-white/15 bg-ink/60 backdrop-blur-md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const past = usePastHero();

  return (
    <header inert={past} className={`fixed inset-x-0 top-0 z-50 ${past ? "invisible" : ""}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Name, with room for a logo image */}
        <a
          href="#top"
          className={`${pill} flex w-fit items-center gap-3 px-5 py-3 text-lg font-extrabold tracking-tight md:justify-self-start`}
        >
          {site.logo && (
            <img
              src={site.logo}
              alt=""
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="h-7 w-7 rounded-lg object-cover"
            />
          )}
          {site.name}
        </a>

        {/* Page links */}
        <nav className={`${pill} hidden items-center gap-1 p-1.5 md:flex`}>
          {navLinks.map((l) => (
            <a key={l.to} href={l.to} className="rounded-xl px-5 py-2.5 text-sm font-medium text-white/80">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Let's talk */}
        <a
          href="#contact"
          className={`${pill} hidden items-center gap-3 px-5 py-3 text-sm font-semibold md:flex md:justify-self-end`}
        >
          Let's talk
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <path d="M3 9l6-6M4 3h5v5" />
          </svg>
        </a>
        {/* <a href={site.cv} download className={`${pill} hidden items-center gap-3 px-5 py-3 text-sm font-semibold md:flex md:justify-self-end`}>
              Download CV
            </a> */}

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className={`${pill} px-5 py-3 text-sm font-medium md:hidden`}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && !past && (
        <nav className={`${pill} mx-6 flex flex-col gap-1 p-2 md:hidden`}>
          {[...navLinks, { to: "#contact", label: "Contact" }].map((l) => (
            <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-lg font-semibold text-white/80">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}


// import { useState } from "react";
// import { navLinks, site } from "../data/content";
// import { usePastHero } from "../hooks/usePastHero";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const past = usePastHero();

//   return (
//     <header 
//      inert={past}
//      className= {`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md transition-all duration-300 ${
//      past ? "point-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100" 
//      }`}
//     >
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
//         <a href="#top" className="text-lg border font-extrabold tracking-tight">
//           {site.name}
//         </a>

//         <nav className="hidden items-center gap-8 md:flex">
//           {navLinks.map((l) => (
//             <a key={l.to} href={l.to} className="text-sm font-medium text-white/70 transition hover:text-accent">
//               {l.label}
//             </a>
//           ))}
//         </nav>

//         <a
//           href="#contact"
//           className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white md:inline-block"
//         >
//           Let's talk
//         </a>

//         <button
//           type="button"
//           aria-expanded={open}
//           aria-label="Toggle menu"
//           onClick={() => setOpen(!open)}
//           className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium md:hidden"
//         >
//           {open ? "Close" : "Menu"}
//         </button>
//       </div>

//       {open && (
//         <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-6 md:hidden">
//           {[...navLinks, { to: "#contact", label: "Contact" }].map((l) => (
//             <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="text-lg font-semibold">
//               {l.label}
//             </a>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }