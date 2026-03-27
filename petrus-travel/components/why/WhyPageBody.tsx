import Image from "next/image";
import type { PageContent, PageSection } from "@/types/content";
import { Section } from "@/components/content/Section";

interface WhyPageBodyProps {
  content: PageContent;
}

function TimelineSection({
  section,
  index,
  total,
}: {
  section: PageSection;
  index: number;
  total: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  const altText = section.imageAlt ?? `${section.title} – Montenegro`;
  const isLast = index === total - 1;

  return (
    <li className="relative flex gap-5 pb-12 last:pb-0 sm:gap-8 md:gap-10 md:pb-16">
      <div className="flex w-14 shrink-0 flex-col items-center sm:w-16">
        <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-burgundy/80 bg-white font-playfair text-lg font-semibold text-burgundy sm:h-16 sm:w-16 sm:text-xl">
          {num}
        </span>
        {!isLast ? (
          <div
            className="mt-3 h-14 w-px shrink-0 bg-gradient-to-b from-burgundy/40 to-burgundy/5 sm:mt-4 sm:h-16"
            aria-hidden
          />
        ) : null}
      </div>
      <div className="min-w-0 flex-1 rounded-lg border border-burgundy/15 bg-white p-5 pb-6 sm:p-7 md:p-8">
        <h2 className="font-playfair text-2xl font-semibold leading-tight text-black sm:text-3xl lg:text-4xl">
          {section.title}
        </h2>
        <p className="mt-4 font-montserrat text-base leading-relaxed text-black/90 sm:text-lg sm:leading-7">
          {section.text}
        </p>
        {section.bullets && section.bullets.length > 0 ? (
          <ul className="mt-5 list-disc space-y-2 pl-5 font-montserrat text-base text-black marker:text-burgundy sm:text-lg">
            {section.bullets.map((item, idx) => (
              <li key={`${idx}-${item}`}>{item}</li>
            ))}
          </ul>
        ) : null}
        {section.image ? (
          <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-sm bg-beige-dark sm:aspect-[2/1] lg:max-w-4xl">
            <Image
              src={section.image}
              alt={altText}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        ) : null}
      </div>
    </li>
  );
}

export function WhyPageBody({ content }: WhyPageBodyProps) {
  const extra = content.whyPage;

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

  const { timelineIntro, trustStrip, trustStripAriaLabel, manifesto, spotlight } =
    extra;
  const sections = content.sections;

  return (
    <>
      {/* Intro */}
      <section
        className="border-b border-burgundy/15 bg-[linear-gradient(180deg,rgb(252,250,246)_0%,rgb(245,240,232)_100%)] px-4 py-14 sm:px-8 lg:px-12 lg:py-20"
        aria-labelledby="why-section-heading"
      >
        <div className="relative mx-auto max-w-3xl text-center lg:max-w-4xl">
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-burgundy/50" aria-hidden />
            <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">
              {timelineIntro.kicker}
            </span>
            <span className="h-px w-12 bg-burgundy/50" aria-hidden />
          </div>
          <h2
            id="why-section-heading"
            className="mt-5 font-playfair text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-[2.75rem]"
          >
            {timelineIntro.title}
          </h2>
          {timelineIntro.lead ? (
            <p className="mt-6 font-montserrat text-base leading-relaxed text-black/85 sm:text-lg">
              {timelineIntro.lead}
            </p>
          ) : null}
        </div>
      </section>

      {/* Trust strip */}
      {trustStrip && trustStrip.length > 0 ? (
        <section
          className="border-b border-burgundy/10 bg-petrus-bg px-4 py-10 sm:px-8 lg:px-12"
          aria-label={trustStripAriaLabel ?? "Key points"}
        >
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3 sm:gap-6">
            {trustStrip.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-lg border border-burgundy/15 bg-white px-5 py-4 sm:flex-col sm:items-start sm:py-5"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-burgundy sm:mt-0.5"
                  aria-hidden
                />
                <p className="text-left font-montserrat text-sm font-medium leading-snug text-black sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Spotlight image */}
      {spotlight ? (
        <section
          className="border-b border-burgundy/10 bg-petrus-bg"
          aria-label={spotlight.caption ?? ""}
        >
          <div className="relative aspect-[21/9] min-h-[200px] w-full sm:aspect-[2.4/1] sm:min-h-[240px] lg:min-h-[320px]">
            <Image
              src={spotlight.src}
              alt={spotlight.alt}
              fill
              className="object-cover object-[50%_45%]"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
              aria-hidden
            />
            {spotlight.caption ? (
              <>
                <p className="absolute bottom-0 left-0 right-0 hidden px-4 pb-6 font-montserrat text-sm font-medium text-white/95 sm:block sm:px-10 sm:pb-8 sm:text-base lg:px-16">
                  {spotlight.caption}
                </p>
                <p className="absolute bottom-0 left-0 right-0 max-w-[min(100%,15rem)] px-3 pb-3 font-montserrat text-[10px] font-medium leading-tight text-white/90 sm:hidden">
                  {spotlight.captionMobile ?? spotlight.caption}
                </p>
              </>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Manifesto band */}
      {manifesto ? (
        <section
          className="bg-burgundy py-12 sm:py-14 lg:py-16"
          aria-labelledby="why-manifesto"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-8">
            <p
              id="why-manifesto"
              className="font-playfair text-xl font-medium leading-snug text-beige sm:text-2xl lg:text-3xl"
            >
              {manifesto.text}
            </p>
          </div>
        </section>
      ) : null}

      {/* Timeline */}
      <section
        className="border-t border-burgundy/10 bg-petrus-bg px-4 py-14 sm:px-8 lg:px-12 lg:py-20"
        aria-label={timelineIntro.title}
      >
        <div className="mx-auto max-w-7xl">
          {timelineIntro.listHeading ? (
            <p className="mb-10 font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-burgundy sm:mb-12">
              {timelineIntro.listHeading}
            </p>
          ) : null}
          <ol className="mt-0 space-y-0">
            {sections.map((section, i) => (
              <TimelineSection
                key={`${section.title}-${i}`}
                section={section}
                index={i}
                total={sections.length}
              />
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
