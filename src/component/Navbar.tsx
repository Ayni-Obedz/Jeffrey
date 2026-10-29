import { useState } from "react";
import { navLinks, site } from "../data/content";
import { usePastHero } from "../hooks/usePastHero";

const pill =
  "rounded-2xl border border-white/15 bg-ink/60 backdrop-blur-md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const past = usePastHero();

  return (
    <header
      inert={past}
      className={`fixed inset-x-0 top-0 z-50 ${
        past ? "invisible" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4 lg:py-4">

        {/* Name and logo */}
        <a
          href="#top"
          className={`${pill} flex w-fit min-w-0 items-center gap-2 px-3 py-2.5 text-base font-extrabold tracking-tight sm:gap-3 sm:px-4 sm:text-lg lg:justify-self-start lg:px-5 lg:py-3`}
        >
          {site.logo && (
            <img
              src={site.logo}
              alt=""
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="h-6 w-6 shrink-0 rounded-lg object-cover sm:h-7 sm:w-7"
            />
          )}

          <span className="truncate">{site.name}</span>
        </a>

        {/* Desktop and tablet navigation */}
        <nav
          className={`${pill} hidden items-center gap-0.5 p-1 sm:flex lg:gap-1 lg:p-1.5`}
        >
          {navLinks.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="whitespace-nowrap rounded-xl px-2.5 py-2 text-xs font-medium text-white/80 transition hover:text-accent md:px-3 md:text-sm lg:px-5 lg:py-2.5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Let's talk */}
        <a
          href="#contact"
          className={`${pill} hidden items-center justify-self-end gap-2 whitespace-nowrap px-3 py-2.5 text-xs font-semibold transition hover:border-accent hover:text-accent md:flex lg:gap-3 lg:px-5 lg:py-3 lg:text-sm`}
        >
          Let's talk

          <svg
            viewBox="0 0 12 12"
            className="h-3 w-3 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 9l6-6M4 3h5v5" />
          </svg>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className={`${pill} shrink-0 px-4 py-2.5 text-sm font-medium sm:hidden`}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && !past && (
        <nav
          className={`${pill} mx-4 flex flex-col gap-1 p-2 sm:hidden`}
        >
          {[...navLinks, { to: "#contact", label: "Contact" }].map(
            (l, index) => (
              <a
                key={`${l.to}-${index}`}
                href={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-white/80 transition hover:bg-white/10 hover:text-accent"
              >
                {l.label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
}




// import { useState } from "react";
// import { navLinks, site } from "../data/content";
// import { usePastHero } from "../hooks/usePastHero";

// const pill = "rounded-2xl border border-white/15 bg-ink/60 backdrop-blur-md";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const past = usePastHero();

//   return (
//     <header inert={past} className={`fixed inset-x-0 top-0 z-50 ${past ? "invisible" : ""}`}>
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr]">
//         {/* Name, with room for a logo image */}
//         <a
//           href="#top"
//           className={`${pill} flex w-fit items-center gap-3 px-5 py-3 text-lg font-extrabold tracking-tight md:justify-self-start`}
//         >
//           {site.logo && (
//             <img
//               src={site.logo}
//               alt=""
//               onError={(e) => {
//                 e.currentTarget.style.display = "none";
//               }}
//               className="h-7 w-7 rounded-lg object-cover"
//             />
//           )}
//           {site.name}
//         </a>

//         {/* Page links */}
//         <nav className={`${pill} hidden items-center gap-1 p-1.5 md:flex`}>
//           {navLinks.map((l) => (
//             <a key={l.to} href={l.to} className="rounded-xl px-5 py-2.5 text-sm font-medium text-white/80">
//               {l.label}
//             </a>
//           ))}
//         </nav>

//         {/* Let's talk */}
//         <a
//           href="#contact"
//           className={`${pill} hidden items-center gap-3 px-5 py-3 text-sm font-semibold md:flex md:justify-self-end`}
//         >
//           Let's talk
//           <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
//             <path d="M3 9l6-6M4 3h5v5" />
//           </svg>
//         </a>
//         {/* <a href={site.cv} download className={`${pill} hidden items-center gap-3 px-5 py-3 text-sm font-semibold md:flex md:justify-self-end`}>
//               Download CV
//             </a> */}

//         <button
//           type="button"
//           aria-expanded={open}
//           aria-label="Toggle menu"
//           onClick={() => setOpen(!open)}
//           className={`${pill} px-5 py-3 text-sm font-medium md:hidden`}
//         >
//           {open ? "Close" : "Menu"}
//         </button>
//       </div>

//       {open && !past && (
//         <nav className={`${pill} mx-6 flex flex-col gap-1 p-2 md:hidden`}>
//           {[...navLinks, { to: "#contact", label: "Contact" }].map((l) => (
//             <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-lg font-semibold text-white/80">
//               {l.label}
//             </a>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }


