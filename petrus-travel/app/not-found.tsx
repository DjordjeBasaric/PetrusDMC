import type { Metadata } from "next";
import Link from "next/link";
import { PetrusLogo } from "@/components/home/petrus/PetrusLogo";

export const metadata: Metadata = {
  title: "Page not found | Petrus Travel Montenegro DMC",
  description:
    "The page you requested could not be found. Return to the Petrus Travel home page.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-petrus-bg">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">
          404
        </p>
        <h1 className="mt-4 font-playfair text-4xl font-semibold text-black sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md font-montserrat text-base leading-relaxed text-black/75">
          The page you are looking for does not exist or may have been moved.
        </p>
        <p className="mt-3 max-w-md font-montserrat text-sm leading-relaxed text-black/60">
          Die gewünschte Seite existiert nicht oder wurde verschoben.
        </p>
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          aria-label="Home languages"
        >
          <Link
            href="/en"
            className="rounded-sm border border-burgundy bg-burgundy px-6 py-3 font-montserrat text-sm font-semibold text-beige transition-colors hover:bg-burgundy-dark"
          >
            English home
          </Link>
          <Link
            href="/de"
            className="rounded-sm border border-burgundy/40 bg-transparent px-6 py-3 font-montserrat text-sm font-semibold text-burgundy transition-colors hover:bg-burgundy/10"
          >
            Deutsche Startseite
          </Link>
        </nav>
      </div>

      <footer className="border-t border-black/10 px-4 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/en"
              className="group inline-flex max-w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
              aria-label="Petrus Travel — Home"
            >
              <PetrusLogo lang="en" className="block" />
            </Link>
            <p className="mt-2 max-w-md font-montserrat text-sm leading-relaxed text-black/70">
              Destination Management Company – Montenegro
            </p>
            <p className="mt-1 max-w-md font-montserrat text-sm leading-relaxed text-black/55">
              DMC‑Partner für Reisebüros und Veranstalter in Montenegro.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="mailto:info@petrustravel.com"
              className="font-montserrat text-sm font-medium text-black underline-offset-4 hover:text-petrus-accent hover:underline"
            >
              info@petrustravel.com
            </a>
            <div className="flex flex-wrap gap-4 font-montserrat text-sm text-black/60">
              <Link href="/en" className="hover:text-petrus-accent">
                English
              </Link>
              <span aria-hidden className="text-black/30">
                ·
              </span>
              <Link href="/de" className="hover:text-petrus-accent">
                Deutsch
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
