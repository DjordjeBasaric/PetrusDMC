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
  const {
    eyebrow,
    eyebrowMobile,
    title,
    lead,
    backgroundImage,
    imageObjectPosition,
    titleVariant = "default",
  } = content;
  const eyebrowShort = eyebrowMobile ?? eyebrow;
  const titleClass =
    titleVariant === "compact"
      ? "font-playfair text-4xl font-semibold leading-[1.12] text-black sm:text-6xl lg:text-7xl xl:text-8xl xl:leading-[100px]"
      : "font-playfair text-5xl font-semibold leading-[1.1] text-black sm:text-6xl lg:text-7xl xl:text-8xl xl:leading-[100px]";
  const src = backgroundImage ?? "/home/petrus/boka_v2.jpg";
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
        {/* Localized beige scrim behind the title block — lifts black text off busy photo areas
            without darkening the rest of the image. Centered roughly where the H1 sits. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 48% at 50% 46%, rgba(245, 240, 232, 0.55) 0%, rgba(245, 240, 232, 0.34) 32%, rgba(245, 240, 232, 0.16) 55%, rgba(245, 240, 232, 0.04) 72%, rgba(245, 240, 232, 0) 85%)",
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
            <p
              className="font-montserrat text-lg font-semibold leading-snug text-black sm:text-xl"
              style={{
                textShadow:
                  "0 1px 1px rgba(245, 240, 232, 0.55), 0 0 10px rgba(245, 240, 232, 0.35)",
              }}
            >
              <span className="sm:hidden">
                <HeroTitle title={eyebrowShort} />
              </span>
              <span className="hidden sm:inline">
                <HeroTitle title={eyebrow} />
              </span>
            </p>
          </div>
          <h1
            id="hero-heading"
            className={titleClass}
            style={{
              textShadow:
                "0 1px 2px rgba(245, 240, 232, 0.6), 0 2px 16px rgba(245, 240, 232, 0.4)",
            }}
          >
            <HeroTitle title={title} />
          </h1>
          <p
            className="mt-8 max-w-3xl font-montserrat text-lg leading-relaxed text-black italic sm:text-xl"
            style={{
              textShadow:
                "0 1px 1px rgba(245, 240, 232, 0.5), 0 0 12px rgba(245, 240, 232, 0.3)",
            }}
          >
            {lead}
          </p>
        </div>
      </div>
    </section>
  );
}
