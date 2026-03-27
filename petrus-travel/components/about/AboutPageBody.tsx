import type { PageContent } from "@/types/content";
import { Section } from "@/components/content/Section";

interface AboutPageBodyProps {
  content: PageContent;
}

export function AboutPageBody({ content }: AboutPageBodyProps) {
  const extra = content.aboutPage;

  if (!extra) {
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

  const { story, quote, pillars, pillarsSectionTitle } = extra;

  return (
    <>
      <section
        className="relative overflow-hidden border-b border-burgundy/10 bg-petrus-bg"
        aria-labelledby="editorial-story-heading"
      >
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-[min(120vw,640px)] w-[min(120vw,640px)] -translate-y-1/2 rounded-full bg-burgundy/[0.04]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:px-12 xl:px-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16">
            <div className="min-w-0">
              <p className="flex items-center gap-3 font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-burgundy">
                <span
                  className="inline-block h-px w-10 bg-burgundy"
                  aria-hidden
                />
                {story.kicker}
              </p>
              <h2
                id="editorial-story-heading"
                className="mt-6 font-playfair text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl"
              >
                {story.title}
              </h2>
              <div className="mt-8 space-y-6 border-l-[3px] border-burgundy/80 pl-6 sm:pl-8">
                {story.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-montserrat text-lg leading-relaxed text-black sm:text-xl sm:leading-8"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="hidden shrink-0 font-playfair text-[10rem] font-semibold leading-none text-burgundy/[0.08] lg:block xl:text-[12rem]"
              aria-hidden
            >
              01
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-burgundy py-16 sm:py-20 lg:py-24"
        aria-labelledby="editorial-quote"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-8">
          <p
            id="editorial-quote"
            className="font-playfair text-2xl font-medium leading-snug text-beige sm:text-3xl sm:leading-tight lg:text-4xl"
          >
            <span
              className="mr-2 inline-block -translate-y-1 font-serif text-5xl text-beige/40 sm:text-6xl"
              aria-hidden
            >
              “
            </span>
            {quote.text}
            <span className="font-serif text-beige/40" aria-hidden>
              ”
            </span>
          </p>
        </div>
      </section>

      <section
        className="border-b border-beige-dark/50 bg-petrus-bg py-16 sm:py-20"
        aria-labelledby="editorial-pillars-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 xl:px-20">
          <h2 id="editorial-pillars-heading" className="sr-only">
            {pillarsSectionTitle}
          </h2>
          <ul className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <li
                key={pillar.title}
                className="group relative flex flex-col rounded-2xl border border-beige-dark/70 bg-white/60 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
              >
                <span
                  className="font-montserrat text-xs font-semibold uppercase tracking-widest text-burgundy/80"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-playfair text-2xl font-semibold text-black sm:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 flex-1 font-montserrat text-base leading-relaxed text-black/90 sm:text-lg">
                  {pillar.text}
                </p>
                <span
                  className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 rounded-full bg-burgundy/[0.06] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24 lg:px-12 xl:px-20">
        {content.sections.map((section, i) => (
          <Section
            key={i}
            {...section}
            isLast={i === content.sections.length - 1}
          />
        ))}
      </div>
    </>
  );
}
