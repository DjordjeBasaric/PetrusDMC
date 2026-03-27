interface DestinationsSoonBodyProps {
  badge: string;
  /** Supporting line under the Soon headline. */
  body: string;
}

export function DestinationsSoonBody({ badge, body }: DestinationsSoonBodyProps) {
  return (
    <section
      className="border-b border-burgundy/10 bg-petrus-bg px-4 py-20 sm:px-8 lg:px-12 lg:py-28"
      aria-labelledby="itineraries-soon-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.35em] text-burgundy">
          {badge}
        </p>
        <h2
          id="itineraries-soon-heading"
          className="mt-6 font-playfair text-5xl font-semibold tracking-tight text-black sm:text-6xl lg:text-7xl"
        >
          Soon
        </h2>
        <p className="mt-8 font-montserrat text-base leading-relaxed text-black/80 sm:text-lg">
          {body}
        </p>
      </div>
    </section>
  );
}
