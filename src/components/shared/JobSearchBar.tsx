"use client";

import { Search } from "lucide-react";

export type JobFilters = {
  query: string;
  profession: string;
  city: string;
  employmentType: string;
};

type Props = {
  filters: JobFilters;
  onChange: (filters: JobFilters) => void;
  professions: string[];
  cities: string[];
  employmentTypes: string[];
};

const ALL = "Всички";

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-1.5">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-black/[0.08] bg-cream px-4 py-3 text-[13.5px] text-ink outline-none transition-colors focus:border-burgundy"
      >
        <option value={ALL}>{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function JobSearchBar({ filters, onChange, professions, cities, employmentTypes }: Props) {
  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-4 shadow-[var(--shadow-card)] lg:flex-row lg:items-center">
      <div className="relative flex-[1.4]">
        <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted/40" />
        <input
          type="search"
          value={filters.query}
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
          placeholder="Търсене по длъжност или работодател…"
          aria-label="Търсене на позиции"
          className="w-full rounded-full border border-black/[0.08] bg-white py-3 pl-11 pr-4 text-[13.5px] text-ink outline-none transition-colors placeholder:text-muted/45 focus:border-burgundy"
        />
      </div>
      <Select
        label="Специалност"
        value={filters.profession}
        options={professions}
        onChange={(v) => onChange({ ...filters, profession: v })}
      />
      <Select label="Град" value={filters.city} options={cities} onChange={(v) => onChange({ ...filters, city: v })} />
      <Select
        label="Тип заетост"
        value={filters.employmentType}
        options={employmentTypes}
        onChange={(v) => onChange({ ...filters, employmentType: v })}
      />
    </div>
  );
}

export const ALL_OPTION = ALL;
