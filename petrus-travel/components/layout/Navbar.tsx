import Link from "next/link";
import type { Language } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

const navLinks = [
  { href: "", label: "Home" },
  { href: "about", label: "About Us" },
  { href: "destinations", label: "Destinations" },
  { href: "why", label: "Why Work With Us" },
  { href: "contact", label: "Contact" },
] as const;

interface NavbarProps {
  lang: Language;
}

export function Navbar({ lang }: NavbarProps) {
  return (
    <header className="border-b border-beige-dark bg-white">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href={`/${lang}`}
          className="text-lg font-semibold tracking-tight text-burgundy hover:text-burgundy-dark"
        >
          Petrus Travel
        </Link>
        <div className="flex items-center gap-6 sm:gap-8">
          <ul className="flex flex-wrap items-center gap-4 sm:gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href || "home"}>
                <Link
                  href={href ? `/${lang}/${href}` : `/${lang}`}
                  className="text-sm font-medium text-[var(--color-text-muted)] hover:text-burgundy"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </nav>
    </header>
  );
}
