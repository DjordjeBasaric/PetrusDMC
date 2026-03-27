import type { Language } from "@/lib/i18n";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer
      lang={lang}
      className="border-t border-beige-dark bg-beige"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="font-semibold tracking-tight text-burgundy">
          Petrus Travel
        </p>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Destination Management Company – Montenegro
        </p>
        <a
          href="mailto:info@petrustravel.com"
          className="mt-3 inline-block text-sm text-[var(--color-text-muted)] hover:text-burgundy"
        >
          info@petrustravel.com
        </a>
      </div>
    </footer>
  );
}
