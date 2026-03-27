import { getContent } from "@/lib/content";
import { getPetrusHero, getPetrusNavLinks } from "@/lib/petrus-content";
import { isValidLanguage } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { DestinationsSoonBody } from "@/components/destinations";
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
  const { pageTitle, pageDescription } = getContent(lang, "destinations");
  return buildPageMetadata({
    lang,
    title: pageTitle,
    description: pageDescription,
    path: `/${lang}/destinations`,
  });
}

export default function DestinationsPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = isValidLanguage(params.lang) ? params.lang : "en";
  const content = getContent(lang, "destinations");
  const navLinks = getPetrusNavLinks(lang);
  const homeHero = getPetrusHero(lang);

  const heroContent = {
    eyebrow: homeHero.eyebrow,
    title: content.hero?.title ?? "Itineraries",
    lead: content.hero?.subtitle ?? "",
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

          <DestinationsSoonBody
            badge={content.itinerariesSoon?.badge ?? "Coming soon"}
            body={
              content.itinerariesSoon?.body ??
              content.hero?.subtitle ??
              ""
            }
          />

          <PetrusFooter lang={lang} />
        </div>
      </main>
    </div>
  );
}
