import Image from "next/image";

interface PetrusContentSectionProps {
  number: string;
  tagline: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  layout: "left" | "right";
}

export function PetrusContentSection({
  number,
  tagline,
  title,
  text,
  image,
  imageAlt,
  layout,
}: PetrusContentSectionProps) {
  const textFirst = layout === "left";

  return (
    <section
      id={`section-${number}`}
      className="relative grid min-h-[720px] grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0"
    >
      <span
        className={`absolute font-montserrat text-[180px] font-bold leading-none text-black opacity-5 sm:text-[240px] ${
          textFirst ? "left-0" : "right-0"
        } top-1/2 -translate-y-1/2`}
      >
        {number}
      </span>

      <div
        className={`relative z-10 flex flex-col justify-center px-4 py-12 sm:px-8 lg:px-12 xl:px-20 ${
          !textFirst ? "lg:order-2" : ""
        }`}
      >
        <div className="mb-6 flex items-center gap-4">
          <div
            className="h-0.5 w-[72px] shrink-0 translate-y-0.4 bg-petrus-accent"
            aria-hidden
          />
          <p className="font-montserrat text-lg font-extrabold uppercase tracking-[6px] text-petrus-accent">
            {tagline}
          </p>
        </div>
        <h2 className="font-playfair text-4xl font-semibold text-black sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mt-6 whitespace-pre-line font-montserrat text-lg leading-8 text-black">
          {text}
        </p>
      </div>

      <div
        className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[720px] ${
          !textFirst ? "lg:order-1" : ""
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
