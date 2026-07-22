"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
  tone?: "light" | "dark";
};

export default function SectionHeader({ eyebrow, title, description, align = "left", action, tone = "light" }: Props) {
  const isCenter = align === "center";
  const isDark = tone === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${
        isCenter ? "text-center sm:flex-col sm:items-center" : ""
      }`}
    >
      <div className={isCenter ? "mx-auto max-w-2xl" : ""}>
        <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${isDark ? "text-gold-light" : "text-burgundy"}`}>
          {eyebrow}
        </span>
        <h2 className={`mt-3 font-display text-3xl font-semibold sm:text-4xl ${isDark ? "text-white" : "text-ink"}`}>{title}</h2>
        {description && (
          <p className={`mt-3 text-[15px] leading-relaxed ${isDark ? "text-white/70" : "text-muted/65"}`}>{description}</p>
        )}
      </div>
      {action && !isCenter && <div className="shrink-0">{action}</div>}
    </motion.div>
  );
}
