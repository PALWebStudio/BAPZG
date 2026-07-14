"use client";

import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function DocumentSearch({ value, onChange, placeholder }: Props) {
  return (
    <div className="relative">
      <Search size={18} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted/40" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Търсене на документи…"}
        aria-label="Търсене в библиотеката"
        className="w-full rounded-full border border-black/[0.08] bg-cream py-4 pl-12 pr-5 text-[15px] text-ink shadow-[var(--shadow-card)] outline-none transition-colors placeholder:text-muted/45 focus:border-burgundy"
      />
    </div>
  );
}
