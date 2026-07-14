"use client";

import { useMemo, useState } from "react";
import JobSearchBar, { type JobFilters, ALL_OPTION } from "@/components/shared/JobSearchBar";
import JobCard from "@/components/shared/JobCard";
import Pagination from "@/components/shared/Pagination";
import EmptyState from "@/components/shared/EmptyState";
import { jobs } from "@/data/jobs";

const PAGE_SIZE = 4;

export default function KarieriBrowser() {
  const [filters, setFilters] = useState<JobFilters>({
    query: "",
    profession: ALL_OPTION,
    city: ALL_OPTION,
    employmentType: ALL_OPTION,
  });
  const [page, setPage] = useState(1);

  const professions = useMemo(() => Array.from(new Set(jobs.map((j) => j.profession))), []);
  const cities = useMemo(() => Array.from(new Set(jobs.map((j) => j.city))), []);
  const employmentTypes = useMemo(() => Array.from(new Set(jobs.map((j) => j.employmentType))), []);

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (filters.profession !== ALL_OPTION && job.profession !== filters.profession) return false;
      if (filters.city !== ALL_OPTION && job.city !== filters.city) return false;
      if (filters.employmentType !== ALL_OPTION && job.employmentType !== filters.employmentType) return false;
      if (q && !`${job.title} ${job.employer}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [filters]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div>
      <JobSearchBar
        filters={filters}
        onChange={(f) => {
          setFilters(f);
          setPage(1);
        }}
        professions={professions}
        cities={cities}
        employmentTypes={employmentTypes}
      />

      <div className="mt-8 space-y-4">
        {visible.length > 0 ? (
          visible.map((job) => <JobCard key={job.slug} job={job} />)
        ) : (
          <EmptyState message="Няма позиции, отговарящи на избраните филтри." />
        )}
      </div>

      <Pagination page={currentPage} pageCount={pageCount} onChange={setPage} />
    </div>
  );
}
