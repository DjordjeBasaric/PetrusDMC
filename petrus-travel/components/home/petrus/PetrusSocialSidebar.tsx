import Link from "next/link";
import type { CSSProperties } from "react";

const maskIconStyle = (src: string): CSSProperties => ({
  WebkitMaskImage: `url(${src})`,
  maskImage: `url(${src})`,
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
});

function SocialIconLink({
  href,
  ariaLabel,
  iconSrc,
}: {
  href: string;
  ariaLabel: string;
  iconSrc: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
    >
      <span
        className="block h-6 w-6 bg-black transition-colors group-hover:bg-burgundy"
        style={maskIconStyle(iconSrc)}
        aria-hidden
      />
    </Link>
  );
}

export function PetrusSocialSidebar() {
  return (
    <aside
      className="fixed left-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-8 lg:flex xl:left-8"
      aria-label="Follow us"
    >
      <p
        className="font-montserrat text-lg font-bold text-black"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Follow us
      </p>
      <div className="flex flex-col gap-6">
        <SocialIconLink
          href="https://instagram.com"
          ariaLabel="Instagram"
          iconSrc="/home/petrus/instagram.svg"
        />
        <SocialIconLink
          href="https://www.linkedin.com"
          ariaLabel="LinkedIn"
          iconSrc="/home/petrus/linkedin.svg"
        />
      </div>
    </aside>
  );
}
