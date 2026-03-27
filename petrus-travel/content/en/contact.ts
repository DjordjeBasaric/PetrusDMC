import type { PageContent } from "@/types/content";

export const contactContent: PageContent = {
  pageTitle: "Contact | Petrus Travel Montenegro DMC",
  pageDescription:
    "Contact Petrus Travel for partnership inquiries, proposals, and travel programs in Montenegro. Email info@petrustravel.com—we respond on business days.",
  hero: {
    title: "Contact",
    subtitle:
      "Partnership inquiries, proposals, and questions about Montenegro programmes. Use the email below; a direct phone line for partners will be added to this page soon.",
    backgroundImage: "/home/petrus/durmitor_black_lake.webp",
  },
  contactPage: {
    sectionTitle: "Business contact",
    sectionKicker: "B2B",
    sectionLead:
      "Partnerships, proposals & questions about programmes in Montenegro.",
    emailLabel: "Email",
    email: "info@petrustravel.com",
    phoneLabel: "Phone",
    phoneNote:
      "A direct phone number for partner enquiries will be published here shortly. Until then, please reach us by email.",
    responseNote:
      "We aim to respond within one business day. For urgent operational matters on an active programme, state the reference in the subject line.",
    form: {
      title: "Send an inquiry",
      nameLabel: "Name",
      emailLabel: "Work email",
      companyLabel: "Agency / company",
      companyOptionalHint: "optional",
      messageLabel: "Message",
      submitLabel: "Send inquiry",
      sendingLabel: "Sending…",
      successMessage: "Thank you — we received your message and will reply on business days.",
      errorMessage: "Something went wrong. Please try again or email us directly.",
      errorNotConfigured:
        "The contact form is not active yet. Please use the email address above.",
      honeypotAriaLabel: "Do not fill this field",
      privacyHint:
        "We use these details only to respond to your inquiry (B2B partners).",
    },
  },
  sections: [],
};
