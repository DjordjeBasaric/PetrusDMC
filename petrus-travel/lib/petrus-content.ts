import type { Language } from "@/lib/i18n";
import { petrusHero as enHero } from "@/content/en/petrus-home";
import { petrusHero as deHero } from "@/content/de/petrus-home";
import { petrusNavLinks as enNavLinks } from "@/content/en/petrus-home";
import { petrusNavLinks as deNavLinks } from "@/content/de/petrus-home";
import { petrusSections as enSections } from "@/content/en/petrus-home";
import { petrusSections as deSections } from "@/content/de/petrus-home";

export type PetrusHeroContent = {
  eyebrow: string;
  title: string;
  lead: string;
  /** Overrides default hero photo when set (e.g. About page). */
  backgroundImage?: string;
  /** Tailwind classes for `object-position` on the hero image (e.g. `object-[50%_22%]`). */
  imageObjectPosition?: string;
};

const heroMap: Record<Language, PetrusHeroContent> = {
  en: enHero,
  de: deHero,
};

export function getPetrusHero(lang: Language): PetrusHeroContent {
  return heroMap[lang] ?? heroMap.en;
}

export type PetrusNavLink = {
  href: "" | "about" | "destinations" | "why" | "contact";
  label: string;
};

const navLinksMap: Record<Language, readonly PetrusNavLink[]> = {
  en: enNavLinks,
  de: deNavLinks,
};

export function getPetrusNavLinks(lang: Language): readonly PetrusNavLink[] {
  return navLinksMap[lang] ?? navLinksMap.en;
}

export type PetrusSection = {
  number: string;
  tagline: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  layout: "left" | "right";
};

const sectionsMap: Record<Language, PetrusSection[]> = {
  en: enSections,
  de: deSections,
};

export function getPetrusSections(lang: Language): PetrusSection[] {
  return sectionsMap[lang] ?? sectionsMap.en;
}
