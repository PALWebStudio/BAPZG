"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Briefcase, Clock } from "lucide-react";
import type { Job } from "@/data/jobs";

export default function JobCard({ job }: { job: Job }) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)] sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-lg font-semibold text-ink">{job.title}</h3>
          {job.featured && (
            <span className="rounded-full bg-burgundy/10 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-burgundy">
              Препоръчана
            </span>
          )}
        </div>
        <p className="mt-1 text-[14px] text-muted/70">{job.employer}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-muted/55">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-gold" /> {job.city}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase size={13} className="text-gold" /> {job.employmentType}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-gold" /> {job.publishedAt}
          </span>
          {job.salary && <span className="font-semibold text-burgundy">{job.salary}</span>}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          aria-pressed={saved}
          aria-label={saved ? "Премахни от любими" : "Добави в любими"}
          className="flex size-10 items-center justify-center rounded-full border border-black/[0.08] text-muted/50 transition hover:scale-110 hover:border-burgundy hover:text-burgundy active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        >
          <Heart size={17} className={saved ? "fill-burgundy text-burgundy" : ""} />
        </button>
        <Link
          href={`/karieri/${job.slug}`}
          className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-burgundy-light active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        >
          Детайли
        </Link>
      </div>
    </motion.div>
  );
}
