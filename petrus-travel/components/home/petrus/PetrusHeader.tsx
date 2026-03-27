import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { PetrusNavLink } from "@/lib/petrus-content";
import type { Language } from "@/lib/i18n";

interface PetrusHeaderProps {
  lang: Language;
  navLinks: readonly PetrusNavLink[];
}

export function PetrusHeader({ lang, navLinks }: PetrusHeaderProps) {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 flex h-16 items-center justify-between px-4 sm:px-8 lg:px-20">
      <Link
        href={`/${lang}`}
        className="font-playfair text-2xl font-bold capitalize tracking-wide text-black sm:text-3xl"
        aria-label="PETRUS Home"
      >
        PETRUS
      </Link>

      <nav
        className="flex items-center gap-6 sm:gap-10 lg:gap-14"
        aria-label="Main navigation"
      >
        <ul className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href || "home"}>
              <Link
                href={href === "" ? `/${lang}` : `/${lang}/${href}`}
                className="font-montserrat text-base font-bold text-black hover:text-petrus-accent sm:text-lg"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center gap-4">
          <LanguageSwitcher currentLang={lang} variant="dark" />
        </div>
      </nav>
    </header>
  );
}
