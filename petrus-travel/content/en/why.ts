import type { PageContent } from "@/types/content";

export const whyContent: PageContent = {
  pageTitle: "Why Work With Us | Petrus Travel Montenegro DMC",
  pageDescription:
    "Local expertise in Montenegro, fluent German for DACH partners, tailor-made itineraries, authentic experiences, and dedicated B2B support—your DMC on the ground.",
  hero: {
    title: "Why Work With Us",
    subtitle:
      "We are rooted in Montenegro—with trusted relationships across hotels, guides, wineries and suppliers—while our German-speaking team keeps cooperation with partners in Germany, Austria and Switzerland clear, fast, and dependable.",
    backgroundImage: "/home/petrus/viewpoint.jpg",
  },
  whyPage: {
    timelineIntro: {
      kicker: "In practice",
      title: "What working with us looks like",
      lead: "Each point below covers one part of how we cooperate—from network and language to programme design, experiences, and B2B-only delivery.",
      listHeading: "Details",
    },
    trustStripAriaLabel: "How we work with partners at a glance",
    trustStrip: [
      { label: "Montenegro-based operations" },
      { label: "German & English desk" },
      { label: "Travel trade partners only" },
    ],
    manifesto: {
      text: "Partnership first: one accountable team from first brief to the last transfer.",
    },
    spotlight: {
      src: "/home/petrus/svetistefan.webp",
      alt: "Sveti Stefan islet on the Budva Riviera, red roofs above the Adriatic",
      caption:
        "Sveti Stefan is a fortified islet on Montenegro’s Budva Riviera, linked to the mainland by a narrow beach. Once a fishing village behind stone walls, it is now a landmark resort—its clustered houses and red-tiled roofs above clear turquoise water are among the Adriatic’s most recognisable coastal views.",
      captionMobile:
        "Fortified islet on the Budva Riviera—red roofs above turquoise water, one of the Adriatic’s iconic views.",
    },
  },
  sections: [
    {
      title: "Local Expertise",
      text: "Our network spans hotels, guides, wineries and service providers across the country. We use those relationships to secure realistic timing, backup options, and quality that still holds when the season, weather, or availability shifts.",
      layout: "left",
    },
    {
      title: "German-Speaking Communication",
      text: "We handle proposals, confirmations, and in-trip updates in fluent German and English—so partners in Germany, Austria and Switzerland get direct answers without extra relay steps.",
      layout: "right",
    },
    {
      title: "Tailor-Made Itineraries",
      text: "We build FIT, group, incentive, and MICE programmes around your brief, budget, and client profile—rather than recycling generic routes.",
      layout: "left",
    },
    {
      title: "Authentic Local Experiences",
      text: "Through our local network we layer in experiences that reflect Montenegro’s character—small wineries, family-run konobas, regional restaurants, and guides who know the stories behind the places.",
      layout: "right",
    },
    {
      title: "Dedicated B2B Partner",
      text: "We work only with travel agencies and tour operators: one accountable local partner for planning, coordination, and on-the-ground execution—so your programme has a clear chain of responsibility from start to finish.",
      layout: "left",
    },
  ],
};
