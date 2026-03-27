"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const sections = ["Start", "01", "02", "03", "04", "05", "06"] as const;

/** DOM ids: hero, section-01 … section-06 (suffix matches labels, not array index). */
function anchorIdForIndex(i: number): string {
  if (i === 0) return "hero";
  return `section-${sections[i]}`;
}

function scrollToAnchor(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const vh = window.innerHeight;
  const elTop = el.getBoundingClientRect().top + scrollY;
  const elCenter = elTop + el.clientHeight / 2;
  const targetTop = Math.max(0, elCenter - vh / 2);
  window.scrollTo({ top: targetTop, behavior: "smooth" });
}

const INDICATOR_HEIGHT_PX = 36;

function computeActiveScrollIndex(): number {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const vh = window.innerHeight;
  const viewportCenterY = scrollY + vh / 2;
  let active = 0;
  let smallestDistance = Number.POSITIVE_INFINITY;

  for (let i = 0; i < sections.length; i++) {
    const el = document.getElementById(anchorIdForIndex(i));
    if (!el) continue;
    const elTop = el.getBoundingClientRect().top + scrollY;
    const elCenterY = elTop + el.clientHeight / 2;
    const distance = Math.abs(elCenterY - viewportCenterY);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      active = i;
    }
  }

  return active;
}

export function PetrusSliderSidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [indicatorStepPx, setIndicatorStepPx] = useState(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const h = track.offsetHeight;
      const n = sections.length;
      if (h <= 0 || n <= 1) {
        setIndicatorStepPx(0);
        return;
      }
      setIndicatorStepPx(Math.max(0, (h - INDICATOR_HEIGHT_PX) / (n - 1)));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setActiveIndex(computeActiveScrollIndex());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <aside
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-10 lg:flex xl:right-8"
      aria-label="Section navigation"
    >
      <div className="flex items-stretch gap-4">
        <div className="flex flex-col gap-10 font-montserrat text-lg font-bold text-black">
          {sections.map((label, i) => {
            const anchorId = anchorIdForIndex(i);
            return (
              <a
                key={label}
                href={`#${anchorId}`}
                className={`transition-colors hover:text-petrus-accent ${
                  activeIndex === i ? "text-petrus-accent" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(i);
                  scrollToAnchor(anchorId);
                  window.history.replaceState(
                    null,
                    "",
                    `${window.location.pathname}${window.location.search}#${anchorId}`,
                  );
                }}
              >
                {label}
              </a>
            );
          })}
        </div>
        <div
          ref={trackRef}
          className="relative w-0.5 shrink-0 bg-black/20"
          aria-hidden
        >
          <div
            className="absolute left-0 top-0 w-full bg-black transition-transform duration-100 ease-out"
            style={{
              height: INDICATOR_HEIGHT_PX,
              transform: `translateY(${activeIndex * indicatorStepPx}px)`,
            }}
          />
        </div>
      </div>
    </aside>
  );
}
