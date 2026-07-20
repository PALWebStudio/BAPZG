"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt?: string;
  caption?: string;
};

type Props = {
  images: GalleryImage[];
  layout?: "grid" | "masonry";
};

export default function Gallery({ images, layout = "grid" }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);
  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showNext, showPrev]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) showPrev();
    else if (delta < -50) showNext();
    touchStartX.current = null;
  }

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div
        className={
          layout === "masonry"
            ? "columns-2 gap-4 sm:columns-3"
            : "grid grid-cols-2 gap-4 sm:grid-cols-3"
        }
      >
        {images.map((image, i) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            aria-label={`Отвори изображение: ${image.alt ?? `снимка ${i + 1}`}`}
            className={`group relative mb-4 block w-full overflow-hidden rounded-[var(--radius-md)] shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
              layout === "masonry" ? "break-inside-avoid" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt ?? ""}
              width={layout === "masonry" ? 600 : undefined}
              height={layout === "masonry" ? 450 : undefined}
              fill={layout !== "masonry"}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end justify-end bg-wine/0 p-3 opacity-0 transition-all duration-300 group-hover:bg-wine/20 group-hover:opacity-100">
              <span className="flex size-8 items-center justify-center rounded-full bg-white/90 text-wine">
                <Expand size={14} />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Преглед на изображение"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Затвори"
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Предишно изображение"
              className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.div
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-full max-w-4xl flex-col items-center"
            >
              <div className="relative max-h-[80vh] w-full" style={{ aspectRatio: "4 / 3" }}>
                <Image src={active.src} alt={active.alt ?? ""} fill className="rounded-[var(--radius-md)] object-contain" sizes="90vw" />
              </div>
              {active.caption && <p className="mt-4 text-center text-sm text-white/70">{active.caption}</p>}
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Следващо изображение"
              className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:scale-110 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light sm:right-6"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
