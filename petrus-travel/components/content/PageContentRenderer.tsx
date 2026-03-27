import type { PageContent } from "@/types/content";
import { Section } from "./Section";

interface PageContentRendererProps {
  content: PageContent;
  /** Hero and H1 are rendered elsewhere (e.g. Petrus layout on About). */
  sectionsOnly?: boolean;
}

export function PageContentRenderer({
  content,
  sectionsOnly = false,
}: PageContentRendererProps) {
  if (sectionsOnly) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 lg:px-12 xl:px-20">
        {content.sections.map((section, i) => (
          <Section
            key={i}
            {...section}
            isLast={i === content.sections.length - 1}
          />
        ))}
      </div>
    );
  }

  return (
    <main className="pb-16 pt-10 sm:pb-20 sm:pt-14">
      <h1 className="text-2xl font-semibold tracking-tight text-burgundy sm:text-3xl">
        {content.pageTitle}
      </h1>
      {content.hero && (
        <section
          className="mt-10 border-b border-beige-dark pb-12 sm:mt-14 sm:pb-16"
          aria-labelledby="hero-title"
        >
          <h2
            id="hero-title"
            className="text-xl font-semibold text-[var(--color-text)] sm:text-2xl"
          >
            {content.hero.title}
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--color-text-muted)] sm:mt-4 sm:text-lg">
            {content.hero.subtitle}
          </p>
        </section>
      )}
      <div className="mt-12 sm:mt-16">
        {content.sections.map((section, i) => (
          <Section
            key={i}
            {...section}
            isLast={i === content.sections.length - 1}
          />
        ))}
      </div>
    </main>
  );
}
