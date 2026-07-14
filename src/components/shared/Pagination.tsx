"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
};

export default function Pagination({ page, pageCount, onChange }: Props) {
  if (pageCount <= 1) return null;

  return (
    <nav aria-label="Странициране" className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Предишна страница"
        className="flex size-9 items-center justify-center rounded-full border border-black/[0.08] text-ink transition-colors hover:border-burgundy disabled:opacity-30 disabled:hover:border-black/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
      >
        <ChevronLeft size={16} />
      </button>
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-current={n === page ? "page" : undefined}
          className={`flex size-9 items-center justify-center rounded-full text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
            n === page ? "bg-burgundy text-white" : "text-muted/70 hover:bg-black/[0.04]"
          }`}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(Math.min(pageCount, page + 1))}
        disabled={page === pageCount}
        aria-label="Следваща страница"
        className="flex size-9 items-center justify-center rounded-full border border-black/[0.08] text-ink transition-colors hover:border-burgundy disabled:opacity-30 disabled:hover:border-black/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
