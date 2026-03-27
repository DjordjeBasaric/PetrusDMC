import { getContent } from "@/lib/content";
import { getPetrusHero, getPetrusNavLinks } from "@/lib/petrus-content";
import { isValidLanguage } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { AboutPageBody } from "@/components/about";
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
  const { pageTitle, pageDescription } = getContent(lang, "about");
  return buildPageMetadata({
    lang,
    title: pageTitle,
    description: pageDescription,
    path: `/${lang}/about`,
  });
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang = isValidLanguage(params.lang) ? params.lang : "en";
  const content = getContent(lang, "about");
  const navLinks = getPetrusNavLinks(lang);
  const homeHero = getPetrusHero(lang);

  const heroContent = {
    eyebrow: homeHero.eyebrow,
    title: content.hero?.title ?? "About Us",
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
            className="pointer-events-none absolute left-0 right-0 top-0 h-56 -translate-y-full sm:h-64"
            style={{
              background:
                "linear-gradient(to bottom, rgba(245, 240, 232, 0) 0%, rgba(245, 240, 232, 0.18) 32%, rgba(245, 240, 232, 0.52) 58%, rgba(245, 240, 232, 0.88) 82%, rgb(245, 240, 232) 100%)",
            }}
            aria-hidden
          />

          <AboutPageBody content={content} />

          <PetrusFooter lang={lang} />
        </div>
      </main>
    </div>
  );
}
