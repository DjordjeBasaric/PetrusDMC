import type { PageContent } from "@/types/content";

export const aboutContent: PageContent = {
  pageTitle: "About Us | Petrus Travel Montenegro DMC",
  pageDescription:
    "Meet Petrus Travel: a Montenegro-based boutique DMC for travel agencies and tour operators—tailor-made itineraries, on-the-ground support, and a local team obsessed with detail.",
  hero: {
    title: "About Us",
    subtitle:
      "We are a boutique Destination Management Company rooted in Montenegro—where the Adriatic meets dramatic peaks and every program is shaped by people who live here year-round, not just seasonally.",
    backgroundImage: "/home/petrus/durmitor.webp",
  },
  aboutPage: {
    story: {
      kicker: "Why we exist",
      title: "Travel that fits your brand—and respects the place",
      paragraphs: [
        "Petrus Travel was built for B2B partners who need more than a supplier list: you need a calm, competent team that answers before small issues become big ones. We combine itinerary design with honest advice—when a route is too tight, or a hotel is wrong for your client segment, we say so.",
        "Montenegro rewards slow pacing and smart sequencing. We help your travelers feel the contrast between Kotor’s stone alleys and the quiet trails above the bay, between wine country and alpine lakes—without turning the trip into a checklist.",
      ],
    },
    quote: {
      text: "We don’t sell generic tours—we co-create programs that match your commercial goals, your travelers’ expectations, and the rhythms of the destination.",
    },
    pillarsSectionTitle: "What guides our work",
    pillars: [
      {
        title: "Precision",
        text: "Clear timelines, vetted suppliers, and contingency thinking—so your groups move smoothly from arrival to departure.",
      },
      {
        title: "Authenticity",
        text: "We favour experiences with real hosts and real stories—local guides, family-run estates, and places where Montenegro still feels like itself.",
      },
      {
        title: "Partnership",
        text: "We work as an extension of your team: shared briefs, transparent communication, and the same urgency you feel when a departure date is fixed.",
      },
    ],
  },
  sections: [
    {
      title: "Curated itineraries—coast, peaks, and everything between",
      text: "From the Bay of Kotor and sunlit riviera towns to Durmitor’s glacial lakes and wine routes inland, we stitch routes that balance scenery, comfort, and pacing. Seasonality matters: we adjust suggestions for shoulder months, festivals, and when the crowds thin out.",
      layout: "left",
    },
    {
      title: "On-the-ground support for travel partners",
      text: "As your local DMC, we stay involved from first sketch to last transfer. A typical scope includes:",
      bullets: [
        "Itinerary design and realistic day-by-day timing",
        "Accommodation shortlists aligned with your budget and brand",
        "Transport, meet-and-greet, and operational backup",
        "Guided tours and curated experiences with trusted guides",
        "Coordination with vetted local suppliers",
      ],
      layout: "right",
    },
    {
      title: "Our goal",
      text: "Reliable execution on the ground, seamless handovers between suppliers, and experiences that feel considered—not rushed. We want your clients to leave with a clear sense of Montenegro’s character, not just a photo roll.",
      layout: "left",
    },
    {
      title: "How we work with partners",
      text: "Strong programs come from listening: to your positioning, your typical guest profile, and what success looks like on this file. We combine that with local judgment—so the final itinerary is both sellable and operable.",
      layout: "right",
    },
  ],
};
