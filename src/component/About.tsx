import { site, socials } from "../data/content";

const tools = ["Salesforce", "HubSpot", "Zoho"];

const education = [
  { years: "2011 – 2016", title: "University of Nigeria", detail: "Bachelor of Engineering (Hons), Agricultural and Bioresources" },
  { years: "2017 – 2018", title: "National Youth Service Corps", detail: "Mandatory national service year" },
];

export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden border-t border-white/10 bg-ink text-white">
      {/* Soft colour glows behind everything */}
      <div aria-hidden className="absolute -left-32 top-10 -z-20 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px]" />
      <div aria-hidden className="absolute bottom-0 right-1/4 -z-20 h-[24rem] w-[24rem] rounded-full bg-leaf/15 blur-[120px]" />

      {/* Portrait: put a transparent PNG at public/portrait.png. It sits on the right, behind the text. */}
      <img
        src="/Bro Jeff/Jeff.jpeg"
        alt={site.name}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="relative mx-auto mt-24 h-96 w-full object-contain object-bottom md:absolute md:bottom-0 md:right-0 md:-z-10 md:mt-0 md:h-full md:w-3/5 md:object-right-bottom"
      />
      {/* Darkens the left side so the text stays readable over the photo */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-transparent md:via-ink/50" />

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-10 md:py-24">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold tracking-tight md:text-7xl">Hello, I'm {site.name}.</h2>

          <p className="mt-6 text-lg text-white/70">
            A results-driven sales professional with over 6 years of experience driving revenue growth, managing client
            relationships and hitting sales targets across diverse industries.
          </p>
          <p className="mt-4 text-lg text-white/70">
            I use CRM tools to optimize sales processes, track performance and improve customer engagement. I'm skilled
            at spotting opportunities, negotiating deals and delivering tailored solutions, and I build strategic sales
            plans and long-term client partnerships that contribute to team success.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tools.map((t) => (
              <li key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/70">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">Education</h3>
            <ul className="mt-4 space-y-5 border-l border-white/15 pl-6">
              {education.map((e) => (
                <li key={e.title} className="relative">
                  <span aria-hidden className="absolute -left-[1.85rem] top-2 h-2 w-2 rounded-full bg-leaf" />
                  <p className="text-xs text-white/50">{e.years}</p>
                  <p className="font-bold">{e.title}</p>
                  <p className="text-sm text-white/70">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={site.cv} download className="rounded-full bg-white px-7 py-3 font-semibold text-ink transition hover:bg-accent">
              Download CV
            </a>
            <a href={`mailto:${site.email}`} className="rounded-full border-2 border-white px-7 py-3 font-semibold transition hover:border-accent hover:bg-accent hover:text-ink">
              Contact me
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:bg-leaf hover:text-ink">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


// import { site, socials } from "../data/content";

// export default function About() {
//   return (
//     <section id="about" className="bg pt-24 text-ink">
//       <div className="mx-auto grid max-w-6xl items-end gap-10 px-6 md:grid-cols-2">
//         <div className="pb-16">
//           <h2 className="text-5xl font-extrabold tracking-tight text-white/70 md:text-7xl">Hello, I'm {site.name}.</h2>
//           <p className="mt-6 max-w-lg text-lg text-white/70">[First paragraph: who you are and what you do.]</p>
//           <p className="mt-4 max-w-lg text-lg text-white/70">[Second paragraph: your background, what drives you and what you want to do next.]</p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a href={site.cv} download className="rounded-full bg-ink px-7 py-3 font-semibold text-white transition hover:bg-accent hover:text-ink">
//               Download CV
//             </a>
//             <a href={`mailto:${site.email}`} className="rounded-full border-2 border-ink px-7 py-3 font-semibold transition hover:border-accent hover:bg-accent">
//               Contact me
//             </a>
//           </div>

//           <ul className="mt-8 flex flex-wrap gap-3">
//             {socials.map((s) => (
//               <li key={s.label}>
//                 <a href={s.href} target="_blank" rel="noreferrer" className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium transition hover:bg-leaf">
//                   {s.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Portrait: put your PNG at public/portrait.png. It fades into the white background. */}
//         <div className="relative mx-auto h-28rem w-full max-w-md md:h-38rem">
//           <div aria-hidden className="absolute inset-x-0 bottom-0 flex h-4/5 items-center justify-center rounded-t-full bg-linear-to-t from-white via-accent/20 to-leaf/20 text-sm text-ink/40">
//             [Portrait]
//           </div>
//           <img
//             src=""
//             alt={site.name}
//             onError={(e) => {
//               e.currentTarget.style.display = "none";
//             }}
//             className="absolute inset-0 h-full w-full object-cover object-top mask-image:linear-gradient(to_bottom,black_65%,transparent)"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }