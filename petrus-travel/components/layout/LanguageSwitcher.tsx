"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Language } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLang: Language;
  variant?: "default" | "light" | "dark";
  /** Tighter EN · DE for narrow header (e.g. next to hamburger). */
  compact?: boolean;
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
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const pathEn = getPathForLang(pathname, currentLang, "en");
  const pathDe = getPathForLang(pathname, currentLang, "de");

  const isLight = variant === "light";
  const isDark = variant === "dark";
  const activeClass = isLight
    ? compact
      ? "text-base font-semibold tracking-[0.12em] text-white"
      : "text-sm font-semibold text-white"
    : isDark
      ? compact
        ? "text-base font-semibold tracking-[0.12em] text-black"
        : "text-sm font-semibold text-black"
      : compact
        ? "text-base font-semibold tracking-[0.12em] text-burgundy"
        : "text-sm font-semibold text-burgundy";
  const inactiveClass = isLight
    ? compact
      ? "text-base tracking-[0.12em] text-white/75 hover:text-white"
      : "text-sm text-white/70 hover:text-white"
    : isDark
      ? compact
        ? "text-base tracking-[0.12em] text-black/50 hover:text-black"
        : "text-sm text-black/70 hover:text-black"
      : compact
        ? "text-base tracking-[0.12em] text-black/50 hover:text-burgundy"
        : "text-sm text-[var(--color-text-muted)] hover:text-burgundy";
  const separatorClass = isLight
    ? compact
      ? "text-base text-white/50"
      : "text-white/45"
    : isDark
      ? compact
        ? "text-base text-black/35"
        : "text-black/50"
      : compact
        ? "text-base text-black/30"
        : "text-[var(--color-text-muted)]/50";

  return (
    <div
      className={compact ? "flex items-center gap-1.5" : "flex items-center gap-2"}
      aria-label="Language switcher"
    >
      <Link
        href={pathEn}
        className={currentLang === "en" ? activeClass : inactiveClass}
        aria-current={currentLang === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <span className={separatorClass} aria-hidden>
        {compact ? "·" : "|"}
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
