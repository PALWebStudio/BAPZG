"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { BookOpen, Download, BookOpenText } from "lucide-react";
import PublicationFilters from "./PublicationFilters";
import EmptyState from "@/components/shared/EmptyState";
import type { PublicationIssue } from "@/data/publications";

type Props = {
  archiveByYear: { year: number; issues: PublicationIssue[] }[];
  onRead: (issue: PublicationIssue) => void;
};

export default function PublicationArchive({ archiveByYear, onRead }: Props) {
  const years = useMemo(() => archiveByYear.map((g) => g.year), [archiveByYear]);
  const [activeYear, setActiveYear] = useState<number | "all">("all");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const allIssues = useMemo(() => archiveByYear.flatMap((g) => g.issues), [archiveByYear]);

  const filtered = useMemo(() => {
    let list = allIssues;
    if (activeYear !== "all") list = list.filter((i) => i.year === activeYear);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          (i.authors ?? []).some((a) => a.toLowerCase().includes(q)) ||
          (i.keywords ?? []).some((k) => k.toLowerCase().includes(q))
      );
    }
    return [...list].sort((a, b) => {
      const av = a.year * 100 + a.issueNumber;
      const bv = b.year * 100 + b.issueNumber;
      return sortOrder === "newest" ? bv - av : av - bv;
    });
  }, [allIssues, activeYear, search, sortOrder]);

  const groupedFiltered = useMemo(() => {
    const filteredYears = Array.from(new Set(filtered.map((i) => i.year))).sort((a, b) =>
      sortOrder === "newest" ? b - a : a - b
    );
    return filteredYears.map((year) => ({ year, issues: filtered.filter((i) => i.year === year) }));
  }, [filtered, sortOrder]);

  return (
    <div>
      <PublicationFilters
        years={years}
        activeYear={activeYear}
        onYearChange={setActiveYear}
        search={search}
        onSearchChange={setSearch}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      {groupedFiltered.length === 0 ? (
        <div className="mt-8">
          <EmptyState message="Няма броеве по зададените филтри." />
        </div>
      ) : (
        <div className="mt-8 space-y-10">
          {groupedFiltered.map(({ year, issues }) => (
            <div key={year}>
              <h3 className="font-display text-lg font-semibold text-ink">{year}</h3>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {issues.map((issue) => (
                  <div
                    key={issue.id}
                    className="group flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-black/[0.05] bg-cream shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-wine-deep">
                      {issue.coverImage ? (
                        <Image
                          src={issue.coverImage}
                          alt={issue.title}
                          fill
                          sizes="240px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
                          <BookOpen size={26} className="text-gold-light/70" strokeWidth={1.4} aria-hidden="true" />
                          <span className="text-[9.5px] font-semibold uppercase tracking-wider text-white/45">Няма корица</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-burgundy">
                        Брой {issue.issueNumber} · {issue.year}
                      </span>
                      {issue.publicationDate && <p className="mt-1 text-[11.5px] text-muted/50">{issue.publicationDate}</p>}
                      <div className="mt-auto flex gap-2 pt-4">
                        <button
                          type="button"
                          onClick={() => onRead(issue)}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-burgundy px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-burgundy-light"
                        >
                          <BookOpenText size={13} /> Прочети
                        </button>
                        {issue.downloadable && issue.pdfUrl && (
                          <a
                            href={issue.pdfUrl}
                            download
                            aria-label="Свали PDF"
                            className="flex items-center justify-center rounded-full border border-black/[0.08] px-3 py-2 text-muted/60 transition hover:border-burgundy hover:text-burgundy"
                          >
                            <Download size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
