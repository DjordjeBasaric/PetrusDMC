import type { PageContent } from "@/types/content";

export const homeContent: PageContent = {
  pageTitle: "Petrus Travel | DMC Montenegro für Reiseveranstalter",
  pageDescription:
    "Petrus Travel ist eine Destination Management Company (DMC) in Montenegro für Reiseveranstalter und Reisebüros. Montenegro entdecken: Adriaküste, Nationalparks, Wein & Gastronomie und authentische Erlebnisse – mit zuverlässiger Unterstützung vor Ort.",
  hero: {
    title: "DMC Montenegro für Reiseveranstalter und Reisebüros",
    subtitle:
      "Authentische Reiseprogramme und zuverlässige Unterstützung vor Ort. Wir übernehmen die Details – Sie liefern Ihren Kunden ein außergewöhnliches Erlebnis.",
    leftColumn: {
      title: "Küste & Kultur",
      text: "Montenegro verbindet Adriaküste mit UNESCO-Stätten. Von Kotor bis Budva gestalten wir Programme, die Erbe und Gastfreundschaft zeigen.",
    },
    rightColumn: {
      title: "Natur & Abenteuer",
      text: "Durmitor, Biogradska Gora und der Skadar-See bieten Wandern, Rafting und Natur. Wir erstellen naturorientierte Reiserouten für Ihre Kunden.",
    },
  },
  services: [
    {
      title: "Reiseplanung & Itinerary-Erstellung",
      text: "Wir erstellen maßgeschneiderte Reiserouten nach Ihren Kundenwünschen, Gruppengröße und Budget. Von FIT über Gruppen bis MICE.",
    },
    {
      title: "Lokale Expertise",
      text: "Wir sind in Montenegro ansässig und kennen das Reiseziel in- und auswendig. Von verborgenen Schätzen bis zur Logistik.",
    },
    {
      title: "Dedizierter B2B-Partner",
      text: "Wir arbeiten ausschließlich mit Reiseveranstaltern und Reisebüros. Ein Ansprechpartner, transparente Preise und zuverlässiger Support.",
    },
  ],
  featuredSection: {
    title: "Bucht von",
    subtitle: "Kotor",
    description:
      "Die Bucht von Kotor ist UNESCO-Welterbe. Historische Städte, Bergkulissen und malerische Straßen machen sie zum Kernstück vieler Reiseprogramme in Montenegro.",
    image: "/home/petrus/svetistefan.webp",
    author: { name: "Petrus Travel", role: "DMC" },
  },
  sections: [
    {
      title: "Montenegro entdecken",
      text: "Montenegro verbindet Adriaküste, Gebirgslandschaften und jahrhundertealte Geschichte.",
      image: "https://picsum.photos/seed/mne-coast/800/600",
      imageAlt: "Montenegro Küste und Berge",
      layout: "left",
      author: { name: "Ana Jovanović", role: "Traveler" },
    },
    {
      title: "Adriaküste & historische Städte",
      text: "Die Küste vereint unberührte Strände mit dem UNESCO-Welterbe Kotor, Budva und Porto Montenegro.",
      image: "https://picsum.photos/seed/mne-town/800/600",
      imageAlt: "Historische Küstenstadt in Montenegro",
      layout: "right",
      author: { name: "Marco Rossi", role: "Traveler" },
    },
    {
      title: "Wein & Gastronomie",
      text: "Montenegros Weinregionen und traditionelle Küche gewinnen immer mehr Anerkennung.",
      image: "https://picsum.photos/seed/mne-wine/800/600",
      imageAlt: "Weinregion in Montenegro",
      layout: "left",
      author: { name: "Elena Petrović", role: "Influencer" },
    },
    {
      title: "Natur & Nationalparks",
      text: "Durmitor, Biogradska Gora und der Skadar-See bieten Wandern, Rafting und Naturerlebnisse.",
      image: "https://picsum.photos/seed/mne-nature/800/600",
      imageAlt: "Nationalparklandschaft in Montenegro",
      layout: "right",
      author: { name: "Thomas Weber", role: "Traveler" },
    },
    {
      title: "Authentische Erlebnisse",
      text: "Jenseits der Hauptattraktionen verbinden wir Ihre Kunden mit dem lokalen Leben.",
      image: "https://picsum.photos/seed/mne-local/800/600",
      imageAlt: "Authentisches lokales Erlebnis in Montenegro",
      layout: "left",
      author: { name: "Sofia Milić", role: "Traveler" },
    },
    {
      title: "Ihr lokaler Partner in Montenegro",
      text: "Wir sind in Montenegro ansässig und arbeiten ausschließlich mit dem Reisehandel.",
      image: "https://picsum.photos/seed/mne-partner/800/600",
      imageAlt: "Petrus Travel – Ihr lokaler DMC-Partner in Montenegro",
      layout: "right",
      author: { name: "Petrus Travel", role: "DMC" },
    },
  ],
};
