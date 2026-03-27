"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import {
  getPetrusMobileMenuLabels,
  type PetrusNavLink,
} from "@/lib/petrus-content";
import type { Language } from "@/lib/i18n";
import { PetrusLogo } from "./PetrusLogo";

interface PetrusHeaderClientProps {
  lang: Language;
  navLinks: readonly PetrusNavLink[];
}

function navHref(lang: Language, href: PetrusNavLink["href"]): string {
  return href === "" ? `/${lang}` : `/${lang}/${href}`;
}

function MenuLinesIcon() {
  return (
    <svg
      className="h-[18px] w-[26px]"
      viewBox="0 0 26 18"
      fill="none"
      aria-hidden
    >
      <line
        x1="2"
        y1="2.5"
        x2="24"
        y2="2.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="9"
        x2="24"
        y2="9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="2"
        y1="15.5"
        x2="24"
        y2="15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseXIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-7 w-7"}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PetrusHeaderClient({ lang, navLinks }: PetrusHeaderClientProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const titleId = `${menuId}-title`;
  const m = getPetrusMobileMenuLabels(lang);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      {/* Phone / tablet: EN·DE left — logo center — menu right */}
      <div className="grid h-24 w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-4 sm:px-6 lg:hidden">
        <div className="justify-self-start">
          <LanguageSwitcher currentLang={lang} variant="dark" compact />
        </div>
        <Link
          href={`/${lang}`}
          className="group inline-flex max-w-[min(100%,14rem)] shrink-0 items-center justify-center justify-self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
          aria-label="Petrus Travel — Home"
          onClick={() => setOpen(false)}
        >
          <PetrusLogo lang={lang} priority size="headerMobile" className="block" />
        </Link>
        <div className="justify-self-end">
          <button
            type="button"
            className="inline-flex h-14 min-h-[3.5rem] min-w-[3.5rem] items-center justify-center rounded-full text-black transition-colors hover:bg-black/[0.06] active:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? m.toggleCloseAria : m.toggleOpenAria}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseXIcon /> : <MenuLinesIcon />}
          </button>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden h-24 items-center justify-between px-4 sm:px-8 lg:flex lg:px-20">
        <Link
          href={`/${lang}`}
          className="group inline-flex min-w-0 shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
          aria-label="Petrus Travel — Home"
        >
          <PetrusLogo lang={lang} priority className="block" />
        </Link>
        <nav
          className="flex min-w-0 items-center gap-6 lg:gap-10 xl:gap-14"
          aria-label="Main navigation"
        >
          <ul className="flex flex-wrap items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href || "home"}>
                <Link
                  href={navHref(lang, href)}
                  className="font-montserrat text-base font-bold text-black hover:text-petrus-accent sm:text-lg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 items-center gap-4">
            <LanguageSwitcher currentLang={lang} variant="dark" />
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            aria-label={m.closeBackdropAria}
            onClick={() => setOpen(false)}
          />
          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100vw,20rem)] flex-col border-l border-black/10 bg-petrus-bg shadow-2xl lg:hidden"
          >
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-black/10 px-4">
              <p
                id={titleId}
                className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-burgundy"
              >
                {m.menuTitle}
              </p>
              <button
                type="button"
                className="inline-flex h-12 min-h-[3rem] min-w-[3rem] items-center justify-center rounded-full text-black transition-colors hover:bg-black/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
                aria-label={m.closeButton}
                onClick={() => setOpen(false)}
              >
                <CloseXIcon className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Main navigation">
              <ul className="flex flex-col">
                {navLinks.map(({ href, label }) => (
                  <li key={href || "home"} className="border-b border-black/10 last:border-b-0">
                    <Link
                      href={navHref(lang, href)}
                      className="block py-4 font-montserrat text-lg font-bold text-black hover:text-petrus-accent"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
