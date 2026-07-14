"use client";

import { useMemo, useState } from "react";
import FilterBar from "@/components/shared/FilterBar";
import NewsCard from "@/components/shared/NewsCard";
import Pagination from "@/components/shared/Pagination";
import EmptyState from "@/components/shared/EmptyState";
import type { NewsArticle } from "@/data/news";

const ALL = "Всички";
const PAGE_SIZE = 6;

export default function NewsGrid({ articles }: { articles: NewsArticle[] }) {
  const categories = useMemo(() => [ALL, ...Array.from(new Set(articles.map((a) => a.category)))], [articles]);
  const [active, setActive] = useState(ALL);
  const [page, setPage] = useState(1);

  const filtered = active === ALL ? articles : articles.filter((a) => a.category === active);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div>
      <FilterBar
        label="Категория новини"
        options={categories}
        active={active}
        onChange={(v) => {
          setActive(v);
          setPage(1);
        }}
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.length > 0 ? (
          visible.map((article) => <NewsCard key={article.slug} article={article} />)
        ) : (
          <div className="sm:col-span-2 lg:col-span-3">
            <EmptyState message="Няма новини в тази категория." />
          </div>
        )}
      </div>
      <Pagination page={currentPage} pageCount={pageCount} onChange={setPage} />
    </div>
  );
}
