"use client";

import { useState } from "react";
import type { ItineraryDay } from "@/types/content";

interface ItineraryDayDisclosureProps {
  day: ItineraryDay;
  instanceId: string;
  /** Hide the timeline stem below the last day in a programme. */
  isLast?: boolean;
}

/** Split "Day 1 – …" / "Tag 1 – …" into badge + headline when possible. */
function splitDayTitle(title: string): { badge: string | null; headline: string } {
  const seps = [" – ", " — ", " - "] as const;
  for (const sep of seps) {
    const i = title.indexOf(sep);
    if (i <= 0) continue;
    const left = title.slice(0, i).trim();
    const right = title.slice(i + sep.length).trim();
    if (/^(Day|Tag)\s+\d+/i.test(left)) {
      return { badge: left, headline: right };
    }
  }
  return { badge: null, headline: title };
}

function dayOrdinalLabel(title: string, badge: string | null): string | null {
  const src = badge ?? title;
  const m = src.match(/^(?:Day|Tag)\s+(\d+)/i);
  return m ? String(m[1]).padStart(2, "0") : null;
}

export function ItineraryDayDisclosure({
  day,
  instanceId,
  isLast = false,
}: ItineraryDayDisclosureProps) {
  const [open, setOpen] = useState(false);
  const triggerId = `itinerary-day-${instanceId}-trigger`;
  const panelId = `itinerary-day-${instanceId}-panel`;
  const { badge, headline } = splitDayTitle(day.title);
  const ordinal = dayOrdinalLabel(day.title, badge);
  const displayTitle = badge ? headline : day.title;

  return (
    <div className="relative flex gap-1 sm:gap-2">
      {/* Timeline rail */}
      <div
        className="relative flex w-12 shrink-0 flex-col items-center self-stretch sm:w-[3.75rem]"
        aria-hidden
      >
        <span
          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-montserrat text-xs font-bold tabular-nums transition-colors duration-300 sm:h-12 sm:w-12 sm:text-sm ${
            open
              ? "border-burgundy bg-burgundy text-beige"
              : "border-burgundy/35 bg-petrus-bg text-burgundy"
          }`}
        >
          {ordinal ?? "•"}
        </span>
        {!isLast ? (
          <span
            className="mt-0 min-h-[1.5rem] w-px flex-1 bg-burgundy/20"
            aria-hidden
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1 border-b border-black/[0.08] pb-1.5">
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full cursor-pointer items-start gap-3 py-5 pr-1 text-left sm:gap-5 sm:py-6 sm:pr-2"
        >
          <div className="min-w-0 flex-1">
            {badge ? (
              <p className="font-montserrat text-[11px] font-medium uppercase tracking-[0.18em] text-burgundy/65 sm:text-xs">
                {badge}
              </p>
            ) : null}
            <p
              className={`font-montserrat text-base font-medium leading-snug text-black/88 sm:text-lg ${badge ? "mt-1.5" : ""}`}
            >
              {displayTitle}
            </p>
          </div>
          <span
            className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 bg-white/60 text-burgundy transition-colors duration-300 sm:mt-1 sm:h-11 sm:w-11 ${
              open
                ? "border-burgundy/30 bg-burgundy/[0.06]"
                : "group-hover:border-burgundy/25 group-hover:bg-burgundy/[0.04]"
            }`}
            aria-hidden
          >
            <svg
              className={`h-5 w-5 transition-transform duration-300 ease-out motion-reduce:duration-150 sm:h-6 sm:w-6 ${open ? "rotate-180" : "rotate-0"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:duration-150 ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="mt-2 max-w-prose rounded-lg border border-black/[0.06] border-l-[3px] border-l-burgundy/35 bg-gradient-to-b from-white to-beige/50 py-5 pl-5 pr-4 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] sm:mt-2.5 sm:py-6 sm:pl-6 sm:pr-6"
            >
              <div className="min-w-0 space-y-3.5 sm:space-y-4">
                {day.body.split("\n\n").map((chunk, i) => (
                  <p
                    key={i}
                    className="font-montserrat text-[15px] leading-[1.68] text-black/75 sm:text-base sm:leading-[1.72]"
                  >
                    {chunk}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
