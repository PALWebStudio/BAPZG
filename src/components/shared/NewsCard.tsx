"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { NewsArticle } from "@/data/news";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        href={`/novini/${article.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {article.isInterview && (
            <span className="absolute left-3 top-3 rounded-full bg-wine-deep/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-light backdrop-blur-sm">
              Интервю
            </span>
          )}
        </div>
        <div className="p-5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-burgundy">
            {article.rubric}
          </span>
          <h3 className="font-display mt-1.5 line-clamp-2 text-[15px] font-semibold leading-snug text-ink">
            {article.title}
          </h3>
          <p className="mt-2 text-xs text-muted/50">{article.date}</p>
        </div>
      </Link>
    </motion.div>
  );
}
