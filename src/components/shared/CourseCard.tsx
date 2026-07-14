"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";
import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/obucheniya/${course.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
      >
        <div className="relative h-40 overflow-hidden">
          <Image
            src={course.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute left-3 top-3 rounded-full bg-burgundy px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">
            {course.type}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-burgundy">
            {course.category}
          </span>
          <h3 className="font-display mt-1.5 text-base font-semibold leading-snug text-ink">
            {course.title}
          </h3>
          <div className="mt-3 space-y-1.5 text-[13px] text-muted/60">
            <p className="flex items-center gap-1.5">
              <Calendar size={13} className="text-gold" /> {course.date}
            </p>
            <p className="flex items-center gap-1.5">
              <MapPin size={13} className="text-gold" /> {course.online ? "Онлайн" : course.location}
            </p>
            <p className="flex items-center gap-1.5">
              <Award size={13} className="text-gold" /> {course.credits} кредитни точки
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
