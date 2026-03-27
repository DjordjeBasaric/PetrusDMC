import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-petrus-bg px-4 py-16 text-center">
      <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-burgundy">
        404
      </p>
      <h1 className="mt-4 font-playfair text-4xl font-semibold text-black sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-montserrat text-base leading-relaxed text-black/75">
        The page you are looking for does not exist or may have been moved.
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
  );
}
