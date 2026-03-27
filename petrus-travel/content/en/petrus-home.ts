export const petrusHero = {
  eyebrow: "Destination Management Company – Montenegro",
  title: "Petrus Travel",
  lead:
    "Authentic Montenegro experiences, thoughtfully designed programs and professional local support for international travel partners.",
} as const;

export const petrusNavLinks = [
  { href: "" as const, label: "Home" },
  { href: "about" as const, label: "About Us" },
  { href: "destinations" as const, label: "Itineraries" },
  { href: "why" as const, label: "Why Work With Us" },
  { href: "contact" as const, label: "Contact" },
] as const;

export const petrusSections = [
  {
    number: "01",
    tagline: "Discover Montenegro",
    title: "Montenegro",
    text:
      "Montenegro is a compact Adriatic country: the coast, mountain hinterland and interior lakes sit within short driving distance of one another. That geography keeps transfers efficient and makes it straightforward to combine coastal heritage, protected nature and rural culture in one itinerary.\n\nThe destination pairs Mediterranean history with alpine landscapes and a growing food-and-wine scene—useful when clients want variety without crossing multiple countries.\n\nFor travel trade partners, the scale supports tailored FIT and group programs, predictable logistics and positioning built on experience quality rather than mass volume.",
    image: "/home/petrus/ostrog.jpg",
    imageAlt: "Ostrog Monastery, cliffside Orthodox pilgrimage site in Montenegro",
    layout: "left" as const,
  },
  {
    number: "02",
    tagline: "Adriatic coast",
    title: "Adriatic Coast & Historic Towns",
    text:
      "Montenegro’s Adriatic coast combines beautiful beaches, crystal-clear waters and charming coastal towns. From the Bay of Kotor and historic towns like Kotor and Perast to the iconic island of Sveti Stefan, the coastline offers stunning scenery and a relaxed Mediterranean atmosphere.",
    image: "/home/petrus/budva_oldtown.jpg",
    imageAlt: "Budva Old Town streets and the Adriatic coast",
    layout: "right" as const,
  },
  {
    number: "03",
    tagline: "Culinary Montenegro",
    title: "Wine & Gastronomy",
    text:
      "Montenegro’s culinary tradition reflects the richness of its landscapes. Visitors can enjoy authentic regional cuisine, fresh Adriatic seafood and locally produced wines while discovering family-run wineries and traditional restaurants.",
    image: "/home/petrus/wine.jpg",
    imageAlt: "Montenegro vineyards, wine and regional dining",
    layout: "left" as const,
  },
  {
    number: "04",
    tagline: "National parks",
    title: "Nature & National Parks",
    text:
      "Beyond the coastline, Montenegro reveals impressive mountain landscapes, lakes and forests across its national parks. These natural areas offer breathtaking scenery and unique opportunities to experience the country’s remarkable biodiversity.",
    image: "/home/petrus/durmitor_home_nature.jpg",
    imageAlt: "Durmitor National Park mountains, lakes and forests",
    layout: "right" as const,
  },
  {
    number: "05",
    tagline: "Local traditions",
    title: "Authentic Experiences",
    text:
      "Montenegro offers experiences that connect visitors with local traditions and everyday life — from small wineries and traditional restaurants to scenic boat rides, local guides and authentic encounters across the country.",
    image: "/home/petrus/tradition.webp",
    imageAlt: "Local traditions, hospitality and authentic Montenegrin experiences",
    layout: "left" as const,
  },
  {
    number: "06",
    tagline: "Montenegro DMC",
    title: "Your Local Partner in Montenegro",
    text:
      "Petrus Travel is a Destination Management Company providing reliable on-the-ground support for international travel agencies and tour operators.\n\nWe design tailor-made programs, coordinate trusted local partners and ensure that every journey in Montenegro is professionally organized and thoughtfully planned.",
    image: "/home/petrus/cetinje.webp",
    imageAlt: "Cetinje, Montenegro’s historic royal capital",
    layout: "right" as const,
  },
];
