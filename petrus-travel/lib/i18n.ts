export const supportedLanguages = ["en", "de"] as const;
export type Language = (typeof supportedLanguages)[number];

export function isValidLanguage(lang: string): lang is Language {
  return supportedLanguages.includes(lang as Language);
}
