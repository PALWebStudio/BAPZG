"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, CalendarDays, Download, BookOpenText } from "lucide-react";
import type { PublicationIssue } from "@/data/publications";

type Props = {
  issue: PublicationIssue;
  onRead: () => void;
};

export default function LatestIssue({ issue, onRead }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid gap-10 rounded-[var(--radius-lg)] border border-black/[0.05] bg-cream p-6 shadow-[var(--shadow-card)] sm:p-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center lg:gap-14"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-md)] bg-wine-deep shadow-[var(--shadow-card)]">
        {issue.coverImage ? (
          <Image src={issue.coverImage} alt={issue.title} fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
            <BookOpen size={40} className="text-gold-light/70" strokeWidth={1.3} aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Корица предстои</span>
          </div>
        )}
      </div>

      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Нов брой</span>
        <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
          Брой {issue.issueNumber} · {issue.year}
        </h2>
        {issue.publicationDate && (
          <p className="mt-2 flex items-center gap-1.5 text-[13px] text-muted/55">
            <CalendarDays size={14} className="text-gold" /> {issue.publicationDate}
          </p>
        )}
        <p className="mt-4 text-[14.5px] leading-relaxed text-muted/65">
          {issue.description ?? "Съдържанието на този брой предстои да бъде публикувано."}
        </p>

        {issue.contents && issue.contents.length > 0 && (
          <div className="mt-5">
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-muted/50">Съдържание на броя</h3>
            <ul className="mt-3 space-y-2">
              {issue.contents.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted/70">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onRead}
            className="inline-flex items-center gap-2 rounded-full bg-burgundy px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-burgundy-light active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
          >
            <BookOpenText size={16} /> Прочети броя
          </button>
          {issue.downloadable && issue.pdfUrl && (
            <a
              href={issue.pdfUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-burgundy/30 px-6 py-3 text-sm font-semibold text-burgundy transition hover:bg-burgundy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              <Download size={16} /> Свали PDF
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
