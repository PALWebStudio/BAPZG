"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import type { LibraryDocument } from "@/data/documents";

export default function DocumentCard({ doc }: { doc: LibraryDocument }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)] sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex min-w-0 items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-burgundy/10 text-burgundy">
          <FileText size={18} />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-[14.5px] font-semibold text-ink" title={doc.title}>
            {doc.title}
          </h3>
          <p className="mt-1 text-[12.5px] text-muted/55">
            {doc.category} · {doc.fileType} · {doc.size} · {doc.date}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-label="Преглед на документа"
          className="flex size-9 items-center justify-center rounded-full border border-black/[0.08] text-muted/60 transition hover:scale-110 hover:border-burgundy hover:text-burgundy active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        >
          <Eye size={16} />
        </button>
        {doc.downloadable ? (
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-burgundy px-4 py-2 text-[13px] font-semibold text-white transition hover:scale-[1.03] hover:bg-burgundy-light active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          >
            <Download size={14} /> Изтегли
          </button>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Файлът предстои да бъде добавен"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] px-4 py-2 text-[13px] font-semibold text-muted/40"
          >
            <Download size={14} /> Очаквайте
          </button>
        )}
      </div>
    </motion.div>
  );
}
