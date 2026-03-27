import { getPetrusFooterContent } from "@/lib/petrus-content";
import type { Language } from "@/lib/i18n";

const LOGO_SVG = "/home/petrus/petrus_logo.svg";
const LOGO_PNG = "/home/petrus/petrus_logo.png";

/** SVG viewBox from asset (intrinsic dimensions for CLS). */
const LOGO_WIDTH = 912;
const LOGO_HEIGHT = 360;

interface PetrusLogoProps {
  lang: Language;
  /** Header / above-the-fold: eager load. */
  priority?: boolean;
  className?: string;
}

/**
 * Brand mark: SVG in `<picture>` (sharp at any DPR), PNG fallback.
 * Alt text comes from locale content for SEO parity.
 */
export function PetrusLogo({ lang, priority = false, className }: PetrusLogoProps) {
  const { logoAlt } = getPetrusFooterContent(lang);

  return (
    <picture className={className}>
      <source srcSet={LOGO_SVG} type="image/svg+xml" />
      <img
        src={LOGO_PNG}
        alt={logoAlt}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        className="h-12 w-auto transition-[filter] duration-200 ease-out sm:h-14 lg:h-16 xl:h-20 group-hover:[filter:brightness(0)_saturate(100%)_invert(22%)_sepia(54%)_saturate(1200%)_hue-rotate(320deg)_brightness(0.72)_contrast(1.05)]"
      />
    </picture>
  );
}
