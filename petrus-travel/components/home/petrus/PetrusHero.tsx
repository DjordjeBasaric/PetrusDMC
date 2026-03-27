import Image from "next/image";
import type { PetrusHeroContent } from "@/lib/petrus-content";

interface PetrusHeroProps {
  content: PetrusHeroContent;
}

function HeroTitle({ title }: { title: string }) {
  const parts = title.split(" – ");
  if (parts.length === 2) {
    return (
      <>
        <span className="whitespace-nowrap">{parts[0]}</span>
        {" – "}
        {parts[1]}
      </>
    );
  }
  return <>{title}</>;
}

export function PetrusHero({ content }: PetrusHeroProps) {
  const { eyebrow, title, lead, backgroundImage, imageObjectPosition } = content;
  const src = backgroundImage ?? "/home/petrus/boka2.webp";
  const objectPosition =
    imageObjectPosition ??
    (backgroundImage ? "object-[50%_45%]" : "object-[50%_20%]");
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-petrus-bg"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-petrus-bg">
        {/* Full-bleed image — no mask (avoids a visible seam vs overlay) */}
        <div className="absolute inset-0">
          <Image
            src={src}
            alt=""
            fill
            className={`object-cover ${objectPosition}`}
            sizes="100vw"
            priority
          />
        </div>
        {/* Single beige overlay: transition zone centered ~mid viewport, smooth stops — no hard line */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245, 240, 232, 0) 0%, rgba(245, 240, 232, 0) 32%, rgba(245, 240, 232, 0.04) 38%, rgba(245, 240, 232, 0.12) 44%, rgba(245, 240, 232, 0.26) 50%, rgba(245, 240, 232, 0.44) 56%, rgba(245, 240, 232, 0.6) 62%, rgba(245, 240, 232, 0.74) 70%, rgba(245, 240, 232, 0.86) 80%, rgba(245, 240, 232, 0.94) 90%, rgb(245, 240, 232) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 pt-32 pb-24 sm:px-8 lg:px-20 lg:pt-40">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <div
              className="h-[3px] w-[72px] shrink-0 bg-burgundy"
              aria-hidden
            />
            <p className="font-montserrat text-lg font-semibold leading-snug text-black sm:text-xl">
              <HeroTitle title={eyebrow} />
            </p>
          </div>
          <h1
            id="hero-heading"
            className="font-playfair text-5xl font-semibold leading-[1.1] text-black sm:text-6xl lg:text-7xl xl:text-8xl xl:leading-[100px]"
          >
            <HeroTitle title={title} />
          </h1>
          <p className="mt-8 max-w-3xl font-montserrat text-lg leading-relaxed text-black italic sm:text-xl">
            {lead}
          </p>
        </div>
      </div>
    </section>
  );
}
