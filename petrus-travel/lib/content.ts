import type { Language } from "@/lib/i18n";
import type { PageContent } from "@/types/content";
import { homeContent as enHome } from "@/content/en/home";
import { aboutContent as enAbout } from "@/content/en/about";
import { destinationsContent as enDestinations } from "@/content/en/destinations";
import { whyContent as enWhy } from "@/content/en/why";
import { contactContent as enContact } from "@/content/en/contact";
import { homeContent as deHome } from "@/content/de/home";
import { aboutContent as deAbout } from "@/content/de/about";
import { destinationsContent as deDestinations } from "@/content/de/destinations";
import { whyContent as deWhy } from "@/content/de/why";
import { contactContent as deContact } from "@/content/de/contact";

export type ContentKey = "home" | "about" | "destinations" | "why" | "contact";

const contentMap: Record<Language, Record<ContentKey, PageContent>> = {
  en: {
    home: enHome,
    about: enAbout,
    destinations: enDestinations,
    why: enWhy,
    contact: enContact,
  },
  de: {
    home: deHome,
    about: deAbout,
    destinations: deDestinations,
    why: deWhy,
    contact: deContact,
  },
};

export function getContent(lang: Language, key: ContentKey): PageContent {
  return contentMap[lang][key];
}
