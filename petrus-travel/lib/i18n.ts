export const supportedLanguages = ["en", "de"] as const;
export type Language = (typeof supportedLanguages)[number];

export function isValidLanguage(lang: string): lang is Language {
  return supportedLanguages.includes(lang as Language);
}

/**
 * HTML `lang` for the root layout without Edge middleware (avoids __dirname on Vercel Edge).
 * Uses path hints from request headers when available.
 */
export function getHtmlLangFromHeaders(headersList: Headers): Language {
  for (const key of [
    "x-matched-path",
    "x-invoke-path",
    "next-url",
    "Next-Url",
    "x-url",
    "x-forwarded-uri",
  ] as const) {
    const raw = headersList.get(key);
    if (!raw) continue;
    try {
      const pathname = raw.startsWith("http") ? new URL(raw).pathname : raw;
      if (pathname.startsWith("/de")) return "de";
      if (pathname.startsWith("/en") || pathname === "/") return "en";
    } catch {
      continue;
    }
  }
  return "en";
}
