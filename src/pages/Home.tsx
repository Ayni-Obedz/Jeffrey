// import { Link } from "react-router-dom";
// import NetworkHero from "../component/NetworkHero";
// import Hero from "../component/Hero"
// import CompanyMarquee from "../component/CompanyMarquee";
// import Analytics from "../component/Analytics";
// import WorkList from "../component/WorkList";
// import Career from "../component/Career";
// import Services from "../component/Services";
// import ContactSection from "../component/ContactSection";
// import { companies, works } from "../data/content";

// export default function Home() {
//   return (
//     <>
//       <NetworkHero />
//       <Hero />

//       <section className="border-y border-white/10 py-12">
//         <p className="mb-6 text-center text-sm text-white/50">Companies I've worked with</p>
//         <CompanyMarquee companies={companies} />
//       </section>

//       <Analytics />

//       <section id="work" className="border-t border-white/10 py-24">
//         <div className="mx-auto max-w-6xl px-6">
//           <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">Selected work</h2>
//           <div className="mt-12">
//             <WorkList items={works} limit={3} />
//           </div>
//           <Link to="/work" className="inline-block rounded-full border border-white/25 px-8 py-4 font-semibold transition hover:border-accent hover:text-accent">
//             View all work
//           </Link>
//         </div>
//       </section>

//       <Career />
//       <Services />
//       <ContactSection />
//     </>
//   );
// }