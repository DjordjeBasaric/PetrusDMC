export interface PageSection {
  title: string;
  text: string;
  /** Optional list items (e.g. services); rendered as a semantic list below `text`. */
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  layout?: "left" | "right";
  author?: { name: string; role: string; avatar?: string };
}

export interface ServiceItem {
  title: string;
  text: string;
}

/** Optional rich blocks for the About page (editorial layout). */
export interface AboutPageExtra {
  story: {
    kicker: string;
    title: string;
    paragraphs: string[];
  };
  quote: {
    text: string;
  };
  /** Screen-reader heading for the pillars grid. */
  pillarsSectionTitle: string;
  pillars: { title: string; text: string }[];
}

/** Why page: intro + optional bands + timeline (structured; avoids repeating long copy blocks). */
export interface WhyPageExtra {
  timelineIntro: {
    kicker: string;
    title: string;
    /** Short bridge line—details stay in numbered sections below. */
    lead?: string;
    /** Small label above the numbered list (e.g. “Details”). */
    listHeading?: string;
  };
  /** Three compact labels (e.g. location, languages, B2B focus). */
  trustStrip?: { label: string }[];
  /** Accessible name for the trust strip region. */
  trustStripAriaLabel?: string;
  /** One line on burgundy—supporting message only. */
  manifesto?: { text: string };
  /** Full-bleed scene between intro and the numbered list. */
  spotlight?: { src: string; alt: string; caption?: string };
}

/** Inquiry form on the contact page (labels + status copy). */
export interface ContactFormContent {
  title: string;
  nameLabel: string;
  emailLabel: string;
  companyLabel: string;
  companyOptionalHint: string;
  messageLabel: string;
  submitLabel: string;
  sendingLabel: string;
  successMessage: string;
  errorMessage: string;
  /** When email sending is not configured (missing API key). */
  errorNotConfigured: string;
  /** Screen-reader-only label for the anti-spam honeypot field. */
  honeypotAriaLabel: string;
  privacyHint: string;
}

/** Contact page: structured email + phone note (Petrus layout). */
export interface ContactPageExtra {
  /** Heading above the contact card (e.g. “Contact details”). */
  sectionTitle: string;
  /** Small label above the title (e.g. “B2B”). */
  sectionKicker?: string;
  /** One line under the section title. */
  sectionLead?: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  /** Shown when the number is not published yet. */
  phoneNote: string;
  responseNote?: string;
  /** Send-inquiry form (server-side email via Resend). */
  form: ContactFormContent;
}

export interface PageContent {
  pageTitle: string;
  pageDescription?: string;
  /** When set (About page), renders story band, quote, and pillars before sections. */
  aboutPage?: AboutPageExtra;
  /** Intro + numbered sections only—no duplicate pillars/quote blocks. */
  whyPage?: WhyPageExtra;
  /** Email + phone block for the Contact page. */
  contactPage?: ContactPageExtra;
  /** Itineraries (destinations) page — “soon” block copy. */
  itinerariesSoon?: {
    badge: string;
    body: string;
  };
  hero?: {
    title: string;
    subtitle: string;
    /** Full-bleed background for PetrusHero (e.g. `/home/petrus/durmitor.webp`). */
    backgroundImage?: string;
    /** Tailwind `object-position` classes for the hero image (e.g. `object-[50%_22%]` to show more of the top). */
    heroObjectPosition?: string;
    leftColumn?: { title: string; text: string };
    rightColumn?: { title: string; text: string };
  };
  services?: ServiceItem[];
  sections: PageSection[];
  partnerLogos?: { src: string; alt: string }[];
  featuredSection?: {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    author?: { name: string; role: string };
  };
}
