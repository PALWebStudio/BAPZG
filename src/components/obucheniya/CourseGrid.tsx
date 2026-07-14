"use client";

import { useMemo, useState } from "react";
import FilterBar from "@/components/shared/FilterBar";
import CourseCard from "@/components/shared/CourseCard";
import EmptyState from "@/components/shared/EmptyState";
import type { Course } from "@/data/courses";

const ALL = "Всички";

export default function CourseGrid({ courses }: { courses: Course[] }) {
  const categories = useMemo(() => [ALL, ...Array.from(new Set(courses.map((c) => c.category)))], [courses]);
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? courses : courses.filter((c) => c.category === active);

  return (
    <div>
      <FilterBar label="Категория обучения" options={categories} active={active} onChange={setActive} />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((course) => <CourseCard key={course.slug} course={course} />)
        ) : (
          <div className="sm:col-span-2 lg:col-span-3">
            <EmptyState message="Няма обучения в тази категория." />
          </div>
        )}
      </div>
    </div>
  );
}
