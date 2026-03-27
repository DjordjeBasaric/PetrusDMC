import { getContent } from "@/lib/content";
import { getPetrusHero, getPetrusNavLinks } from "@/lib/petrus-content";
import { isValidLanguage } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { WhyPageBody } from "@/components/why";
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
  const { pageTitle, pageDescription } = getContent(lang, "why");
  return buildPageMetadata({
    lang,
    title: pageTitle,
    description: pageDescription,
    path: `/${lang}/why`,
  });
}

export default function WhyPage({ params }: { params: { lang: string } }) {
  const lang = isValidLanguage(params.lang) ? params.lang : "en";
  const content = getContent(lang, "why");
  const navLinks = getPetrusNavLinks(lang);
  const homeHero = getPetrusHero(lang);

  const heroContent = {
    eyebrow: homeHero.eyebrow,
    eyebrowMobile: homeHero.eyebrowMobile,
    title: content.hero?.title ?? "Why Work With Us",
    lead: content.hero?.subtitle ?? "",
    backgroundImage: content.hero?.backgroundImage,
    titleVariant: "compact" as const,
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

          <WhyPageBody content={content} />

          <PetrusFooter lang={lang} />
        </div>
      </main>
    </div>
  );
}
