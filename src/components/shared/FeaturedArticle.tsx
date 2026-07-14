"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@/data/news";

export default function FeaturedArticle({ article }: { article: NewsArticle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/novini/${article.slug}`}
        className="group grid overflow-hidden rounded-[var(--radius-lg)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy lg:grid-cols-2"
      >
        <div className="relative h-64 lg:h-full">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <span className="w-fit rounded-full bg-burgundy/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-burgundy">
            {article.category}
          </span>
          <h3 className="font-display mt-4 text-2xl font-semibold leading-snug text-ink">{article.title}</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-muted/65">{article.excerpt}</p>
          <p className="mt-4 text-xs uppercase tracking-wider text-muted/45">{article.date}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-burgundy transition-colors group-hover:text-burgundy-light">
            Прочети повече
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
