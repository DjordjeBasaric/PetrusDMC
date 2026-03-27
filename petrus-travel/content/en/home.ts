import type { PageContent } from "@/types/content";

export const homeContent: PageContent = {
  pageTitle: "Petrus Travel | Montenegro DMC for Travel Agencies",
  pageDescription:
    "Petrus Travel is a Montenegro Destination Management Company (DMC) for travel agencies and tour operators. Discover Montenegro: Adriatic coast, national parks, wine and gastronomy, and authentic experiences—with reliable on-the-ground support.",
  hero: {
    title: "Montenegro DMC for Travel Agencies and Tour Operators",
    subtitle:
      "Authentic travel programs and reliable local support. We handle the details so you can deliver exceptional experiences to your clients.",
    leftColumn: {
      title: "Coast & Culture",
      text: "Montenegro blends Adriatic coastline with UNESCO-listed towns. From Kotor to Budva, we design programs that showcase heritage and hospitality.",
    },
    rightColumn: {
      title: "Nature & Adventure",
      text: "Durmitor, Biogradska Gora, and Skadar Lake offer hiking, rafting, and wildlife. We create nature-focused itineraries for your clients.",
    },
  },
  services: [
    {
      title: "Itinerary Design & Planning",
      text: "We create tailor-made itineraries based on your clients' interests, group size, and budget. From FIT to group tours and MICE.",
    },
    {
      title: "Local Expertise",
      text: "We are based in Montenegro and know the destination inside out. From hidden gems to logistics, we ensure smooth operations.",
    },
    {
      title: "Dedicated B2B Partner",
      text: "We work exclusively with travel agencies and tour operators. One point of contact, transparent pricing, and reliable support.",
    },
  ],
  featuredSection: {
    title: "Bay of",
    subtitle: "Kotor",
    description:
      "The Bay of Kotor is a UNESCO World Heritage site. Historic towns, mountain backdrops, and scenic drives make it a core element of many travel programs in Montenegro.",
    image: "/home/petrus/svetistefan.webp",
    author: { name: "Petrus Travel", role: "DMC" },
  },
  sections: [
    {
      title: "Discover Montenegro",
      text: "Montenegro offers a rare blend of Adriatic coastline, mountain landscapes, and centuries of history.",
      image: "https://picsum.photos/seed/mne-coast/800/600",
      imageAlt: "Montenegro coastline and mountains",
      layout: "left",
      author: { name: "Ana Jovanović", role: "Traveler" },
    },
    {
      title: "Adriatic Coast & Historic Towns",
      text: "The coast combines pristine beaches with UNESCO-listed Kotor, medieval Budva, and the glamour of Porto Montenegro.",
      image: "https://picsum.photos/seed/mne-town/800/600",
      imageAlt: "Historic coastal town in Montenegro",
      layout: "right",
      author: { name: "Marco Rossi", role: "Traveler" },
    },
    {
      title: "Wine & Gastronomy",
      text: "Montenegro's wine regions and traditional cuisine are gaining recognition. We arrange vineyard visits and culinary tours.",
      image: "https://picsum.photos/seed/mne-wine/800/600",
      imageAlt: "Wine region in Montenegro",
      layout: "left",
      author: { name: "Elena Petrović", role: "Influencer" },
    },
    {
      title: "Nature & National Parks",
      text: "Durmitor, Biogradska Gora, and Skadar Lake offer hiking, rafting, and wildlife experiences.",
      image: "https://picsum.photos/seed/mne-nature/800/600",
      imageAlt: "National park landscape in Montenegro",
      layout: "right",
      author: { name: "Thomas Weber", role: "Traveler" },
    },
    {
      title: "Authentic Experiences",
      text: "Beyond the main sights, we connect your clients with local life—family-run guesthouses and guides who share genuine stories.",
      image: "https://picsum.photos/seed/mne-local/800/600",
      imageAlt: "Authentic local experience in Montenegro",
      layout: "left",
      author: { name: "Sofia Milić", role: "Traveler" },
    },
    {
      title: "Your Local Partner in Montenegro",
      text: "We are based in Montenegro and work exclusively with the travel trade. One point of contact, transparent pricing.",
      image: "https://picsum.photos/seed/mne-partner/800/600",
      imageAlt: "Petrus Travel – your local DMC partner in Montenegro",
      layout: "right",
      author: { name: "Petrus Travel", role: "DMC" },
    },
  ],
};
