import type { Language } from "@/lib/i18n";
import { PetrusFooter } from "@/components/home/petrus/PetrusFooter";

interface FooterProps {
  lang: Language;
}

/** Same footer as Petrus pages — used when LayoutShell wraps with Navbar. */
export function Footer({ lang }: FooterProps) {
  return <PetrusFooter lang={lang} />;
}
