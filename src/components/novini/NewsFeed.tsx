"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, Flame, Award, GraduationCap, Tv, HeartPulse, Globe2, CalendarDays } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FilterBar from "@/components/shared/FilterBar";
import NewsCard from "@/components/shared/NewsCard";
import Pagination from "@/components/shared/Pagination";
import EmptyState from "@/components/shared/EmptyState";
import { rubrics, type NewsArticle, type Rubric } from "@/data/news";

const ALL_RUBRIC = "Всички";
const ALL_REGION = "Последни";
const PAGE_SIZE = 6;

const rubricIcons: Record<Rubric, LucideIcon> = {
  "Актуално": Flame,
  "Герои": Award,
  "Млада смяна": GraduationCap,
  "Медиите за нас": Tv,
  "Новини от здравеопазването": HeartPulse,
  "Международни новини": Globe2,
  "Събития": CalendarDays,
};

export default function NewsFeed({ articles }: { articles: NewsArticle[] }) {
  const [activeRubric, setActiveRubric] = useState<string>(ALL_RUBRIC);
  const [activeRegion, setActiveRegion] = useState<string>(ALL_REGION);
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      articles.filter((a) => {
        const rubricMatch = activeRubric === ALL_RUBRIC || a.rubric === activeRubric;
        const regionMatch = activeRegion === ALL_REGION || a.region === activeRegion;
        return rubricMatch && regionMatch;
      }),
    [articles, activeRubric, activeRegion]
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div>
      <div role="tablist" aria-label="Рубрики" className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          onClick={() => {
            setActiveRubric(ALL_RUBRIC);
            setPage(1);
          }}
          aria-pressed={activeRubric === ALL_RUBRIC}
          className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
            activeRubric === ALL_RUBRIC
              ? "border-burgundy bg-burgundy text-white"
              : "border-black/[0.08] bg-cream text-muted/70 hover:border-burgundy/40 hover:text-ink"
          }`}
        >
          <LayoutGrid size={14} /> {ALL_RUBRIC}
        </button>
        {rubrics.map((r) => {
          const Icon = rubricIcons[r];
          return (
            <button
              key={r}
              type="button"
              onClick={() => {
                setActiveRubric(r);
                setPage(1);
              }}
              aria-pressed={activeRubric === r}
              className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
                activeRubric === r
                  ? "border-burgundy bg-burgundy text-white"
                  : "border-black/[0.08] bg-cream text-muted/70 hover:border-burgundy/40 hover:text-ink"
              }`}
            >
              <Icon size={14} /> {r}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        <FilterBar
          label="Регион"
          options={[ALL_REGION, "България", "Светът"]}
          active={activeRegion}
          onChange={(v) => {
            setActiveRegion(v);
            setPage(1);
          }}
        />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.length > 0 ? (
          visible.map((article) => <NewsCard key={article.slug} article={article} />)
        ) : (
          <div className="sm:col-span-2 lg:col-span-3">
            <EmptyState message="Няма новини по зададените филтри." />
          </div>
        )}
      </div>
      <Pagination page={currentPage} pageCount={pageCount} onChange={setPage} />
    </div>
  );
}
