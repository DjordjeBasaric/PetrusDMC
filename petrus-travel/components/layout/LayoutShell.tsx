"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import type { Language } from "@/lib/i18n";

interface LayoutShellProps {
  children: React.ReactNode;
  lang: Language;
}

export function LayoutShell({ children, lang }: LayoutShellProps) {
  const pathname = usePathname();
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;
  /** Full Petrus chrome (header/footer) is rendered on the page itself. */
  const isPetrusFullBleed =
    pathname === `/${lang}/about` ||
    pathname === `/${lang}/why` ||
    pathname === `/${lang}/contact` ||
    pathname === `/${lang}/destinations`;

  if (isHome || isPetrusFullBleed) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar lang={lang} />
      <div className="flex-1">{children}</div>
      <Footer lang={lang} />
    </div>
  );
}
