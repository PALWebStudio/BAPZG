"use client";

import { Search } from "lucide-react";

type Props = {
  years: number[];
  activeYear: number | "all";
  onYearChange: (year: number | "all") => void;
  search: string;
  onSearchChange: (value: string) => void;
  sortOrder: "newest" | "oldest";
  onSortChange: (value: "newest" | "oldest") => void;
};

export default function PublicationFilters({
  years,
  activeYear,
  onYearChange,
  search,
  onSearchChange,
  sortOrder,
  onSortChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div role="group" aria-label="Филтър по година" className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onYearChange("all")}
          aria-pressed={activeYear === "all"}
          className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
            activeYear === "all"
              ? "border-burgundy bg-burgundy text-white"
              : "border-black/[0.08] bg-cream text-muted/70 hover:border-burgundy/40 hover:text-ink"
          }`}
        >
          Всички години
        </button>
        {years.map((year) => (
          <button
            key={year}
            type="button"
            onClick={() => onYearChange(year)}
            aria-pressed={activeYear === year}
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
              activeYear === year
                ? "border-burgundy bg-burgundy text-white"
                : "border-black/[0.08] bg-cream text-muted/70 hover:border-burgundy/40 hover:text-ink"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted/40" />
          <input
            type="search"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Търсене по заглавие, автор или ключова дума"
            className="w-56 rounded-full border border-black/[0.08] bg-cream py-2 pl-9 pr-4 text-[13px] text-ink placeholder:text-muted/40 focus:border-burgundy focus:outline-none"
          />
        </div>
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value as "newest" | "oldest")}
          aria-label="Подредба"
          className="rounded-full border border-black/[0.08] bg-cream px-3 py-2 text-[13px] text-ink focus:border-burgundy focus:outline-none"
        >
          <option value="newest">Най-нови</option>
          <option value="oldest">Най-стари</option>
        </select>
      </div>
    </div>
  );
}
