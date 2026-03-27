import { getContent } from "@/lib/content";
import { getPetrusHero, getPetrusNavLinks } from "@/lib/petrus-content";
import { isValidLanguage } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { ContactPageBody } from "@/components/contact";
import {
  PetrusHeader,
  PetrusHero,
  PetrusSocialSidebar,
  PetrusFooter,
} from "@/components/home/petrus";

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const lang = isValidLanguage(params.lang) ? params.lang : "en";
  const { pageTitle, pageDescription } = getContent(lang, "contact");
  return buildPageMetadata({
    lang,
    title: pageTitle,
    description: pageDescription,
    path: `/${lang}/contact`,
  });
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  const lang = isValidLanguage(params.lang) ? params.lang : "en";
  const content = getContent(lang, "contact");
  const navLinks = getPetrusNavLinks(lang);
  const homeHero = getPetrusHero(lang);

  const heroContent = {
    eyebrow: homeHero.eyebrow,
    title: content.hero?.title ?? "Contact",
    lead: content.hero?.subtitle ?? "",
    backgroundImage: content.hero?.backgroundImage,
  };

  return (
    <div className="relative min-h-screen bg-petrus-bg">
      <PetrusHeader lang={lang} navLinks={navLinks} />
      <PetrusSocialSidebar />

      <main>
        <PetrusHero content={heroContent} />

        <div className="relative bg-petrus-bg">
          <div
            className="absolute left-0 right-0 top-0 h-48 -translate-y-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgb(245, 240, 232))",
            }}
            aria-hidden
          />

          <ContactPageBody content={content} lang={lang} />

          <PetrusFooter lang={lang} />
        </div>
      </main>
    </div>
  );
}
