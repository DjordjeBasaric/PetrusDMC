export const petrusHero = {
  eyebrow: "Destination Management Company – Montenegro",
  eyebrowMobile: "DMC - Montenegro",
  title: "Petrus Travel",
  lead:
    "Authentische Montenegro-Erlebnisse, durchdachte Programme und professionelle lokale Unterstützung für internationale Reisepartner.",
} as const;

export const petrusNavLinks = [
  { href: "" as const, label: "Startseite" },
  { href: "about" as const, label: "Über uns" },
  { href: "destinations" as const, label: "Reiseverläufe" },
  { href: "why" as const, label: "Warum mit uns arbeiten" },
  { href: "contact" as const, label: "Kontakt" },
] as const;

/** Site-wide footer (all Petrus pages). */
export const petrusFooter = {
  brandTagline:
    "Montenegro-DMC für Reisebüros und Veranstalter — Programme, Logistik und lokale Betreuung.",
  exploreTitle: "Navigation",
  contactTitle: "Kontakt",
  contactLead:
    "Für B2B-Partner: Reiseverläufe, Angebote und Koordination vor Ort.",
  emailLabel: "E-Mail",
  contactEmail: "info@petrustravel.com",
  copyrightSuffix: "Petrus Travel. Alle Rechte vorbehalten.",
  legalLabel: "Datenschutz & AGB",
  /** Descriptive alt for logo `<img>` (SEO + accessibility). */
  logoAlt:
    "Petrus Travel — Logo der Destination Management Company Montenegro für Reisepartner",
} as const;

export const petrusSections = [
  {
    number: "01",
    tagline: "Montenegro entdecken",
    title: "Montenegro",
    text:
      "Montenegro ist ein kompaktes Adrialand: Küste, Bergland und Seen im Landesinneren liegen in kurzer Fahrzeit voneinander. Diese Geografie hält Transferzeiten überschaubar und erlaubt es, Küstenkultur, geschützte Natur und ländliche Traditionen in einer Route zu verbinden.\n\nDas Reiseziel verbindet mediterranes Erbe mit alpinen Landschaften und einer wachsenden Food- und Weinszene – hilfreich, wenn Kundinnen und Kunden Vielfalt in einem Land suchen, ohne mehrere Länder zu wechseln.\n\nFür Reiseveranstalter und Reisebüros erleichtert dieser Maßstab maßgeschneiderte FIT- und Gruppenangebote, nachvollziehbare Logistik und eine Positionierung über Erlebnisqualität statt Massentourismus.",
    image: "/home/petrus/ostrog.webp",
    imageAlt: "Kloster Ostrog, orthodoxes Wallfahrtskloster in der Felswand, Montenegro",
    layout: "left" as const,
  },
  {
    number: "02",
    tagline: "Adriaküste",
    title: "Adriaküste & historische Städte",
    text:
      "Montenegros Adriaküste verbindet schöne Strände, kristallklares Wasser und charmante Küstenstädte. Von der Bucht von Kotor und historischen Städten wie Kotor und Perast bis zur ikonischen Insel Sveti Stefan bietet die Küste eine beeindruckende Kulisse und eine entspannte mediterrane Atmosphäre.",
    image: "/home/petrus/budva_oldtown.jpg",
    imageAlt: "Altstadt von Budva und Adriaküste",
    layout: "right" as const,
  },
  {
    number: "03",
    tagline: "Kulinarisches Montenegro",
    title: "Wein & Gastronomie",
    text:
      "Die kulinarische Tradition Montenegros spiegelt die Vielfalt seiner Landschaften wider. Besucherinnen und Besucher genießen authentische regionale Küche, frische Adria-Spezialitäten und lokal produzierte Weine – bei Familienbetrieben und traditionellen Restaurants.",
    image: "/home/petrus/wine.jpg",
    imageAlt: "Weinberge, Wein und regionale Gastronomie in Montenegro",
    layout: "left" as const,
  },
  {
    number: "04",
    tagline: "Nationalparks",
    title: "Natur & Nationalparks",
    text:
      "Hinter der Küste erwarten Sie in Montenegro beeindruckende Berglandschaften, Seen und Wälder in den Nationalparks. Diese Naturgebiete bieten atemberaubende Ausblicke und einzigartige Möglichkeiten, die bemerkenswerte Biodiversität des Landes zu erleben.",
    image: "/home/petrus/durmitor_home_nature.webp",
    imageAlt: "Nationalpark Durmitor: Berge, Seen und Wälder",
    layout: "right" as const,
  },
  {
    number: "05",
    tagline: "Lokale Traditionen",
    title: "Authentische Erlebnisse",
    text:
      "Montenegro bietet Erlebnisse, die Besucher mit lokalen Traditionen und dem Alltag verbinden – von kleinen Weingütern und traditionellen Restaurants bis zu Bootstouren, ortskundigen Guides und authentischen Begegnungen im ganzen Land.",
    image: "/home/petrus/tradition.webp",
    imageAlt: "Lokale Traditionen, Gastfreundschaft und authentische Erlebnisse in Montenegro",
    layout: "left" as const,
  },
  {
    number: "06",
    tagline: "Montenegro DMC",
    title: "Ihr lokaler Partner in Montenegro",
    text:
      "Petrus Travel ist eine Destination Management Company und bietet zuverlässige Unterstützung vor Ort für internationale Reisebüros und Reiseveranstalter.\n\nWir gestalten maßgeschneiderte Programme, koordinieren vertrauenswürdige lokale Partner und sorgen dafür, dass jede Reise in Montenegro professionell organisiert und durchdacht geplant ist.",
    textMobile:
      "Petrus Travel ist ein DMC in Montenegro und bietet zuverlässige Unterstützung vor Ort für internationale Reisebüros und Reiseveranstalter.\n\nWir gestalten maßgeschneiderte Programme, koordinieren vertrauenswürdige lokale Partner und sorgen dafür, dass jede Reise in Montenegro professionell organisiert und durchdacht geplant ist.",
    image: "/home/petrus/cetinje.webp",
    imageAlt: "Cetinje, historische Hauptstadt Montenegros",
    layout: "right" as const,
  },
];
