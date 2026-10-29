//Floating Navbar when the Navbar is scrolled by.
import { navLinks } from "../data/content";
import { usePastHero } from "../hooks/usePastHero";

const items = [...navLinks, { to: "#contact", label: "Contact" }];

// Appears at the bottom of the screen when the visitor scrolls up
export default function FloatingNav() {
  const visible = usePastHero();

  return (
    <nav
      arai-label="Quick navigation"
      inert={!visible}
      aria-label="Quick navigation"
      className={`fixed inset-x-0 bottom-6 z-50 flex justify-center transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-ink/80 p-1.5 backdrop-blur-md">
        {items.map((item) => (
          <li key={item.to}>
            <a href=
              {item.to}
              className="block rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-accent hover:text-ink"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}