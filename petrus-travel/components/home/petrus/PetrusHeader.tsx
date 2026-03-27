import type { PetrusNavLink } from "@/lib/petrus-content";
import type { Language } from "@/lib/i18n";
import { PetrusHeaderClient } from "./PetrusHeaderClient";

interface PetrusHeaderProps {
  lang: Language;
  navLinks: readonly PetrusNavLink[];
}

export function PetrusHeader(props: PetrusHeaderProps) {
  return <PetrusHeaderClient {...props} />;
}
