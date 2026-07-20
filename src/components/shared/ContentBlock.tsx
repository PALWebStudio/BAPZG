"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  align?: "left" | "center";
  maxWidth?: string;
  tone?: "ivory" | "cream" | "wine-deep";
};

const toneClasses: Record<NonNullable<Props["tone"]>, string> = {
  ivory: "bg-ivory text-ink",
  cream: "bg-cream text-ink",
  "wine-deep": "bg-wine-deep text-white",
};

export default function ContentBlock({
  eyebrow,
  title,
  children,
  align = "left",
  maxWidth = "max-w-3xl",
  tone,
}: Props) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`${maxWidth} ${isCenter ? "mx-auto text-center" : ""} ${tone ? `rounded-[var(--radius-lg)] p-8 sm:p-12 ${toneClasses[tone]}` : ""}`}
    >
      {eyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${tone === "wine-deep" ? "text-gold-light" : "text-burgundy"}`}>
          {eyebrow}
        </span>
      )}
      {title && <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{title}</h2>}
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed opacity-80">{children}</div>
    </motion.div>
  );
}
