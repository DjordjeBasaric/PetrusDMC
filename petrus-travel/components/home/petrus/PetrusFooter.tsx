import Link from "next/link";
import type { Language } from "@/lib/i18n";
import {
  getPetrusFooterContent,
  getPetrusNavLinks,
  type PetrusNavLink,
} from "@/lib/petrus-content";
import { PetrusLogo } from "./PetrusLogo";

interface PetrusFooterProps {
  lang: Language;
}

function navHref(lang: Language, href: PetrusNavLink["href"]): string {
  return href === "" ? `/${lang}` : `/${lang}/${href}`;
}

export function PetrusFooter({ lang }: PetrusFooterProps) {
  const copy = getPetrusFooterContent(lang);
  const navLinks = getPetrusNavLinks(lang);
  const year = new Date().getFullYear();

  return (
    <footer
      lang={lang}
      className="border-t border-black/10 bg-petrus-bg px-4 py-16 sm:px-8 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Link
            href={`/${lang}`}
            className="inline-flex max-w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            aria-label="Petrus Travel — Home"
          >
            <PetrusLogo lang={lang} className="block" />
          </Link>
          <p className="mt-6 font-montserrat text-base leading-relaxed text-black/85 sm:text-lg sm:leading-8">
            {copy.brandTagline}
          </p>
        </div>

        <nav
          className="lg:col-span-4"
          aria-labelledby="footer-explore-heading"
        >
          <h3
            id="footer-explore-heading"
            className="font-montserrat text-xl font-bold text-black sm:text-2xl"
          >
            {copy.exploreTitle}
          </h3>
          <ul className="mt-6 space-y-3 sm:space-y-4">
            {navLinks.map(({ href, label }) => (
              <li key={`${href}-${label}`}>
                <Link
                  href={navHref(lang, href)}
                  className="font-montserrat text-base font-medium text-black transition-colors hover:text-petrus-accent sm:text-lg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h3 className="font-montserrat text-xl font-bold text-black sm:text-2xl">
            {copy.contactTitle}
          </h3>
          <p className="mt-4 font-montserrat text-base leading-relaxed text-black/80 sm:text-lg">
            {copy.contactLead}
          </p>
          <p className="mt-6 font-montserrat text-sm font-semibold uppercase tracking-wide text-burgundy">
            {copy.emailLabel}
          </p>
          <a
            href={`mailto:${copy.contactEmail}`}
            className="mt-1 inline-block font-montserrat text-lg font-medium text-black underline-offset-4 transition-colors hover:text-petrus-accent hover:underline"
          >
            {copy.contactEmail}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-montserrat text-sm text-black/50 sm:text-base">
          © {year} {copy.copyrightSuffix}
        </p>
        <Link
          href={`/${lang}/contact`}
          className="font-montserrat text-sm font-medium text-black/60 underline-offset-4 transition-colors hover:text-petrus-accent hover:underline sm:text-base"
        >
          {copy.legalLabel}
        </Link>
      </div>
    </footer>
  );
}
