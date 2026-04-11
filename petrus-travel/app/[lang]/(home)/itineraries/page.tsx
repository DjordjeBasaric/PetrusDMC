import { getContent } from "@/lib/content";
import { getPetrusHero, getPetrusNavLinks } from "@/lib/petrus-content";
import { isValidLanguage } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { ItinerariesPageBody } from "@/components/itineraries";
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
  const { pageTitle, pageDescription } = getContent(lang, "itineraries");
  return buildPageMetadata({
    lang,
    title: pageTitle,
    description: pageDescription,
    path: `/${lang}/itineraries`,
  });
}

export default function ItinerariesPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = isValidLanguage(params.lang) ? params.lang : "en";
  const content = getContent(lang, "itineraries");
  const navLinks = getPetrusNavLinks(lang);
  const homeHero = getPetrusHero(lang);

  const heroContent = {
    eyebrow: homeHero.eyebrow,
    eyebrowMobile: homeHero.eyebrowMobile,
    title: content.hero?.title ?? "Itineraries",
    lead: content.hero?.subtitle ?? "",
    backgroundImage: content.hero?.backgroundImage,
    imageObjectPosition: content.hero?.heroObjectPosition,
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

          {content.itinerariesPage ? (
            <ItinerariesPageBody data={content.itinerariesPage} />
          ) : null}

          <PetrusFooter lang={lang} />
        </div>
      </main>
    </div>
  );
}
