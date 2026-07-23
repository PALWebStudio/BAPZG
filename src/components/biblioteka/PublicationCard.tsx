"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

type Props = {
  title: string;
  periodicity: string;
  description: string;
  ctaLabel: string;
  href: string;
  coverImage?: string;
};

export default function PublicationCard({ title, periodicity, description, ctaLabel, href, coverImage }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={href}
        className="group grid overflow-hidden rounded-[var(--radius-lg)] border border-black/[0.05] bg-cream shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)] sm:grid-cols-[1fr_1.2fr]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-wine-deep sm:aspect-auto sm:min-h-[280px]">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <BookOpen size={40} className="text-gold-light/70" strokeWidth={1.3} aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50">Корица предстои</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <span className="w-fit rounded-full bg-burgundy/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-burgundy">
            {periodicity}
          </span>
          <h3 className="font-display mt-4 text-2xl font-semibold text-ink">{title}</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-muted/65">{description}</p>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-burgundy px-6 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-burgundy-light">
            {ctaLabel}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
