import type { ItinerariesPageExtra } from "@/types/content";
import { ItineraryDayDisclosure } from "./ItineraryDayDisclosure";

interface ItinerariesPageBodyProps {
  data: ItinerariesPageExtra;
}

export function ItinerariesPageBody({ data }: ItinerariesPageBodyProps) {
  const { pageKicker, mastheadHeadline, dayByDayLabel, programsIntro, programs, included } =
    data;

  return (
    <div className="border-b border-burgundy/10 bg-beige">
      {/* Editorial masthead */}
      <div className="relative overflow-hidden bg-burgundy-dark text-beige">
        <div
          className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-burgundy/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-white/5 blur-2xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-end lg:gap-16">
            <div>
              <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.4em] text-beige/55">
                {pageKicker}
              </p>
              <p className="mt-6 font-playfair text-3xl font-semibold leading-[1.15] tracking-tight text-beige sm:text-4xl lg:text-[2.75rem]">
                {mastheadHeadline}
              </p>
            </div>
            {programsIntro ? (
              <p className="max-w-xl font-montserrat text-base leading-relaxed text-beige/85 sm:text-lg lg:pb-1">
                {programsIntro}
              </p>
            ) : null}
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy-dark" aria-hidden />
      </div>

      {/* Programmes */}
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,30,43,0.07),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
          <div className="space-y-20 sm:space-y-28">
            {programs.map((program, idx) => (
              <article
                key={program.title}
                className="relative scroll-mt-24"
                aria-labelledby={`itinerary-${idx}-title`}
              >
                <div className="lg:grid lg:grid-cols-[7.5rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[8.5rem_minmax(0,1fr)] xl:gap-14">
                  <div className="mb-6 flex items-baseline gap-4 lg:mb-0 lg:flex-col lg:items-start lg:gap-3">
                    <span
                      className="font-playfair text-5xl font-semibold leading-none text-burgundy/20 sm:text-6xl lg:text-7xl"
                      aria-hidden
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="mt-2 hidden w-12 shrink-0 border-t border-burgundy/35 lg:mt-3 lg:block"
                      aria-hidden
                    />
                  </div>

                  <div className="min-w-0">
                    <header className="border-l-4 border-burgundy pl-5 sm:pl-6">
                      <h2
                        id={`itinerary-${idx}-title`}
                        className="font-playfair text-2xl font-semibold leading-snug text-burgundy-dark sm:text-3xl lg:text-[2.125rem] lg:leading-tight"
                      >
                        {program.title}
                      </h2>
                      <p className="mt-4 max-w-3xl font-montserrat text-base leading-relaxed text-black/70 sm:text-lg">
                        {program.summary}
                      </p>
                    </header>

                    <div className="mt-10 rounded-md bg-white/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] ring-1 ring-black/[0.05] sm:mt-12 sm:p-8 lg:p-10 sm:ring-black/[0.06]">
                      <p className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.28em] text-burgundy/80 sm:text-xs sm:tracking-[0.32em]">
                        {dayByDayLabel}
                      </p>
                      <div className="mt-6 sm:mt-7">
                        {program.days.map((day, dayIdx) => (
                          <ItineraryDayDisclosure
                            key={`${program.title}-day-${dayIdx}`}
                            day={day}
                            instanceId={`${idx}-${dayIdx}`}
                            isLast={dayIdx === program.days.length - 1}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Included */}
      <section
        className="relative border-t border-burgundy-dark/40 bg-burgundy-dark py-14 text-beige sm:py-16 lg:py-20"
        aria-labelledby="itineraries-included-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-12deg, transparent, transparent 2px, rgba(255,255,255,0.04) 2px, rgba(255,255,255,0.04) 3px)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16 lg:px-12">
          <div>
            <h2
              id="itineraries-included-heading"
              className="font-playfair text-2xl font-semibold leading-tight sm:text-3xl"
            >
              {included.title}
            </h2>
            <p className="mt-6 font-montserrat text-base leading-relaxed text-beige/75 sm:text-lg">
              {included.closing}
            </p>
          </div>
          <ul className="space-y-0 font-montserrat text-base leading-relaxed sm:text-lg">
            {included.bullets.map((item) => (
              <li
                key={item}
                className="flex gap-4 border-b border-beige/35 py-4 first:pt-0 last:border-b-0 last:pb-0"
              >
                <span
                  className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-beige/75"
                  aria-hidden
                />
                <span className="text-beige/92">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
