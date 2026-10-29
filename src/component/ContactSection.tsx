//CONTACT SECTION 
import { site, socials } from "../data/content";

export default function ContactSection() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-white/10 py-28">
      <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-96 w-40rem -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight md:text-7xl">Let's talk about your growth opportunity.</h2>
        <p className="mx-auto mt-6 max-w-xl text-white/70">Tell me what you are working on and I will reply with the best way to move forward.</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block rounded-full bg-accent px-8 py-4 font-semibold text-ink transition hover:bg-white"
        >
          {site.email}
        </a>
        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-leaf hover:text-leaf"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}