import type { Metadata } from "next";
import type { Language } from "@/lib/i18n";

const SITE_NAME = "Petrus Travel";

const LOCALE_MAP: Record<Language, string> = {
  en: "en_US",
  de: "de_DE",
};

interface PageMetadataInput {
  lang: Language;
  title: string;
  description?: string;
  path: string;
}

/**
 * Builds canonical URL when base URL is configured.
 * Set NEXT_PUBLIC_SITE_URL in env to enable canonical URLs.
 */
function buildCanonicalUrl(path: string): string | undefined {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return undefined;
  const baseUrl = base.endsWith("/") ? base.slice(0, -1) : base;
  const pathClean = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${pathClean}`;
}

export function buildPageMetadata({
  lang,
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const locale = LOCALE_MAP[lang];
  const canonical = buildCanonicalUrl(path);

  return {
    title,
    description: description ?? undefined,
    openGraph: {
      title,
      description: description ?? undefined,
      siteName: SITE_NAME,
      locale,
      type: "website",
    },
    ...(canonical && {
      alternates: {
        canonical,
      },
    }),
  };
}
