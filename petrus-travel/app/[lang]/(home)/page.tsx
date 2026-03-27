import { getContent } from "@/lib/content";
import {
  getPetrusHero,
  getPetrusNavLinks,
  getPetrusSections,
} from "@/lib/petrus-content";
import { isValidLanguage } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import {
  PetrusHeader,
  PetrusHero,
  PetrusSocialSidebar,
  PetrusSliderSidebar,
  PetrusContentSection,
  PetrusFooter,
} from "@/components/home/petrus";

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const lang = isValidLanguage(params.lang) ? params.lang : "en";
  const { pageTitle, pageDescription } = getContent(lang, "home");
  return buildPageMetadata({
    lang,
    title: pageTitle,
    description: pageDescription,
    path: `/${lang}`,
  });
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = isValidLanguage(params.lang) ? params.lang : "en";
  const sections = getPetrusSections(lang);
  const navLinks = getPetrusNavLinks(lang);
  const heroContent = getPetrusHero(lang);

  return (
    <div className="relative min-h-screen bg-petrus-bg">
      <PetrusHeader lang={lang} navLinks={navLinks} />
      <PetrusSocialSidebar />
      <PetrusSliderSidebar />

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

          <div className="mx-auto max-w-7xl space-y-0 px-4 py-24 sm:px-8 lg:px-12 xl:px-20">
            {sections.map((section) => (
              <PetrusContentSection key={section.number} {...section} />
            ))}
          </div>

          <PetrusFooter lang={lang} />
        </div>
      </main>
    </div>
  );
}
