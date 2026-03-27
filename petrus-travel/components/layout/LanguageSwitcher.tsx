"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Language } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLang: Language;
  variant?: "default" | "light" | "dark";
}

function getPathForLang(
  pathname: string,
  currentLang: Language,
  targetLang: Language
): string {
  if (pathname.startsWith(`/${currentLang}`)) {
    return pathname.replace(`/${currentLang}`, `/${targetLang}`);
  }
  return `/${targetLang}`;
}

export function LanguageSwitcher({
  currentLang,
  variant = "default",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const pathEn = getPathForLang(pathname, currentLang, "en");
  const pathDe = getPathForLang(pathname, currentLang, "de");

  const isLight = variant === "light";
  const isDark = variant === "dark";
  const activeClass = isLight
    ? "text-sm font-semibold text-white"
    : isDark
      ? "text-sm font-semibold text-black"
      : "text-sm font-semibold text-burgundy";
  const inactiveClass = isLight
    ? "text-sm text-white/70 hover:text-white"
    : isDark
      ? "text-sm text-black/70 hover:text-black"
      : "text-sm text-[var(--color-text-muted)] hover:text-burgundy";
  const separatorClass = isLight
    ? "text-white/50"
    : isDark
      ? "text-black/50"
      : "text-[var(--color-text-muted)]/50";

  return (
    <div className="flex items-center gap-2" aria-label="Language switcher">
      <Link
        href={pathEn}
        className={currentLang === "en" ? activeClass : inactiveClass}
        aria-current={currentLang === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <span className={separatorClass} aria-hidden>
        |
      </span>
      <Link
        href={pathDe}
        className={currentLang === "de" ? activeClass : inactiveClass}
        aria-current={currentLang === "de" ? "true" : undefined}
      >
        DE
      </Link>
    </div>
  );
}
