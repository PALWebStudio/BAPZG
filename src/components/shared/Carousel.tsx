"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  items: ReactNode[];
  ariaLabel: string;
  /** Tailwind width class for each slide, e.g. "w-[85%] sm:w-[46%] lg:w-[31%]". */
  itemClassName?: string;
  gapClassName?: string;
  autoplayMs?: number;
};

export default function Carousel({
  items,
  ariaLabel,
  itemClassName = "w-[85%] sm:w-[46%] lg:w-[31%]",
  gapClassName = "gap-5",
  autoplayMs,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  }

  function goNext() {
    setActive((i) => {
      const next = Math.min(i + 1, items.length - 1);
      scrollToIndex(next);
      return next;
    });
  }

  function goPrev() {
    setActive((i) => {
      const prev = Math.max(i - 1, 0);
      scrollToIndex(prev);
      return prev;
    });
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const t = trackRef.current;
        if (!t) return;
        let closest = 0;
        let closestDist = Infinity;
        Array.from(t.children).forEach((child, i) => {
          const el = child as HTMLElement;
          const dist = Math.abs(el.offsetLeft - t.offsetLeft - t.scrollLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive(closest);
      });
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!autoplayMs || paused) return;
    const id = window.setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % items.length;
        scrollToIndex(next);
        return next;
      });
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [autoplayMs, paused, items.length]);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="relative"
    >
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") goNext();
          if (e.key === "ArrowLeft") goPrev();
        }}
        className={`flex snap-x snap-mandatory overflow-x-auto pb-2 ${gapClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy`}
      >
        {items.map((item, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {item}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={active === 0}
          aria-label="Предишен"
          className="flex size-10 items-center justify-center rounded-full border border-black/[0.08] text-ink transition hover:scale-110 hover:border-burgundy hover:text-burgundy disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-black/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActive(i);
                scrollToIndex(i);
              }}
              aria-label={`Към елемент ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              className="p-1"
            >
              <motion.span
                animate={{ width: i === active ? 20 : 6 }}
                className={`block h-1.5 rounded-full ${i === active ? "bg-burgundy" : "bg-black/15"}`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={goNext}
          disabled={active === items.length - 1}
          aria-label="Следващ"
          className="flex size-10 items-center justify-center rounded-full border border-black/[0.08] text-ink transition hover:scale-110 hover:border-burgundy hover:text-burgundy disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-black/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
