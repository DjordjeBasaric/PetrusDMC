import Link from "next/link";
import type { Language } from "@/lib/i18n";

interface PetrusFooterProps {
  lang: Language;
}

const blogLinks = [
  { href: "about", label: "About PETRUS" },
  { href: "destinations", label: "Contributors & Writers" },
  { href: "why", label: "Write For Us" },
  { href: "contact", label: "Contact Us" },
  { href: "contact", label: "Privacy Policy" },
];

const petrusLinks = [
  { href: "about", label: "The Team" },
  { href: "why", label: "Jobs" },
  { href: "contact", label: "Press" },
];

export function PetrusFooter({ lang }: PetrusFooterProps) {
  return (
    <footer className="border-t border-black/10 bg-petrus-bg px-4 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link
            href={`/${lang}`}
            className="font-playfair text-3xl font-bold capitalize tracking-wide text-black"
          >
            PETRUS
          </Link>
          <p className="mt-8 font-montserrat text-lg leading-8 text-black">
            Get out there & discover your next slope, mountain & destination!
          </p>
        </div>

        <div className="lg:col-span-4">
          <h3 className="font-montserrat text-2xl font-bold text-black">
            More on The Blog
          </h3>
          <ul className="mt-6 space-y-4">
            {blogLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={`/${lang}/${href}`}
                  className="font-montserrat text-lg font-medium text-black transition-colors hover:text-petrus-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="font-montserrat text-2xl font-bold text-black">
            More on PETRUS
          </h3>
          <ul className="mt-6 space-y-4">
            {petrusLinks.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={`/${lang}/${href}`}
                  className="font-montserrat text-lg font-medium text-black transition-colors hover:text-petrus-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-16 font-montserrat text-lg font-medium text-black/50">
        Copyright © Petrus Travel. Terms & Privacy
      </p>
    </footer>
  );
}
