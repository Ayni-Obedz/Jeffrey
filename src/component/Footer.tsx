//The footer. Last down div.
import { site, socials } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-white/70 transition hover:text-accent">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}