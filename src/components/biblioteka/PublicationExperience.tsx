"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import LatestIssue from "./LatestIssue";
import PublicationArchive from "./PublicationArchive";
import SectionHeader from "@/components/shared/SectionHeader";
import type { PublicationIssue } from "@/data/publications";

const PdfReader = dynamic(() => import("./PdfReader"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[300px] items-center justify-center rounded-[var(--radius-lg)] bg-wine">
      <div className="size-8 animate-spin rounded-full border-2 border-white/20 border-t-gold" />
    </div>
  ),
});

type Props = {
  latestIssue: PublicationIssue;
  archiveByYear: { year: number; issues: PublicationIssue[] }[];
};

export default function PublicationExperience({ latestIssue, archiveByYear }: Props) {
  const [readerIssue, setReaderIssue] = useState<PublicationIssue | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!readerIssue) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setReaderIssue(null);
    }
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [readerIssue]);

  return (
    <>
      <section id="nov-broi" className="shell scroll-mt-28 py-16">
        <SectionHeader eyebrow="Актуално" title="Нов брой" />
        <div className="mt-8">
          <LatestIssue issue={latestIssue} onRead={() => setReaderIssue(latestIssue)} />
        </div>
      </section>

      <section id="arhiv" className="bg-white scroll-mt-28 py-16">
        <div className="shell">
          <SectionHeader eyebrow="Всички броеве" title="Архив" />
          <div className="mt-8">
            <PublicationArchive archiveByYear={archiveByYear} onRead={setReaderIssue} />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {readerIssue && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={readerIssue.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
            onClick={() => setReaderIssue(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setReaderIssue(null)}
                aria-label="Затвори четеца"
                className="absolute -top-11 right-0 flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
              >
                <X size={18} />
              </button>
              <PdfReader pdfUrl={readerIssue.pdfUrl} title={readerIssue.title} onClose={() => setReaderIssue(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
