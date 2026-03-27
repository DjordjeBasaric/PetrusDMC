import Image from "next/image";
import type { PageSection } from "@/types/content";

type SectionProps = PageSection & { isLast?: boolean };

export function Section({
  title,
  text,
  bullets,
  image,
  imageAlt,
  layout = "left",
  isLast = false,
}: SectionProps) {
  const textFirst = layout === "left";
  const altText = imageAlt ?? `${title} – Montenegro`;

  const content = (
    <>
      <div className="min-w-0 flex-1">
        <h2 className="font-playfair text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mt-7 font-montserrat text-xl leading-9 text-black sm:mt-8 sm:text-2xl sm:leading-10">
          {text}
        </p>
        {bullets && bullets.length > 0 ? (
          <ul className="mt-5 list-disc space-y-3 pl-6 font-montserrat text-xl leading-9 text-black marker:text-burgundy sm:text-2xl sm:leading-10">
            {bullets.map((item, idx) => (
              <li key={`${idx}-${item}`} className="leading-9 sm:leading-10">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {image && (
        <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-sm bg-beige-dark sm:min-h-[220px]">
          <Image
            src={image}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
    </>
  );

  return (
    <section className="py-8 sm:py-10">
      <div
        className={`flex flex-col gap-8 sm:gap-12 md:flex-row md:items-start md:gap-16 ${
          !textFirst ? "md:flex-row-reverse" : ""
        }`}
      >
        {content}
      </div>
      {!isLast ? (
        <div
          className="mx-auto mt-8 h-[3px] w-full max-w-md shrink-0 bg-burgundy sm:mt-10 sm:max-w-xl lg:max-w-3xl"
          aria-hidden
        />
      ) : null}
    </section>
  );
}
