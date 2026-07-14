"use client";

import { useMemo, useState } from "react";
import DocumentSearch from "@/components/shared/DocumentSearch";
import FilterBar from "@/components/shared/FilterBar";
import DocumentCard from "@/components/shared/DocumentCard";
import Pagination from "@/components/shared/Pagination";
import EmptyState from "@/components/shared/EmptyState";
import type { LibraryDocument } from "@/data/documents";

const ALL = "Всички";
const PAGE_SIZE = 5;

export default function LibraryBrowser({ documents }: { documents: LibraryDocument[] }) {
  const categories = useMemo(() => [ALL, ...Array.from(new Set(documents.map((d) => d.category)))], [documents]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return documents.filter((doc) => {
      if (category !== ALL && doc.category !== category) return false;
      if (q && !doc.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [documents, query, category]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div>
      <DocumentSearch
        value={query}
        onChange={(v) => {
          setQuery(v);
          setPage(1);
        }}
      />
      <div className="mt-6">
        <FilterBar
          label="Категория документи"
          options={categories}
          active={category}
          onChange={(v) => {
            setCategory(v);
            setPage(1);
          }}
        />
      </div>
      <div className="mt-6 space-y-4">
        {visible.length > 0 ? (
          visible.map((doc) => <DocumentCard key={doc.id} doc={doc} />)
        ) : (
          <EmptyState message="Няма документи, отговарящи на търсенето." />
        )}
      </div>
      <Pagination page={currentPage} pageCount={pageCount} onChange={setPage} />
    </div>
  );
}
