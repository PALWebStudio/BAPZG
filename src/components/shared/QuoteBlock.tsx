"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Props = {
  quote: string;
  author?: string;
  role?: string;
  variant?: "light" | "dark";
};

export default function QuoteBlock({ quote, author, role, variant = "light" }: Props) {
  const dark = variant === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`relative mx-auto max-w-3xl rounded-[var(--radius-lg)] px-8 py-12 text-center sm:px-14 ${
        dark ? "bg-wine-deep text-white" : "bg-cream text-ink shadow-[var(--shadow-card)]"
      }`}
    >
      <Quote size={36} className={`mx-auto ${dark ? "text-gold-light/70" : "text-gold/70"}`} aria-hidden="true" />
      <p className="font-display mt-6 text-xl font-medium leading-relaxed sm:text-2xl">
        „{quote}“
      </p>
      {(author || role) && (
        <div className="mt-6">
          {author && <p className={`text-sm font-semibold ${dark ? "text-gold-light" : "text-burgundy"}`}>{author}</p>}
          {role && <p className={`mt-0.5 text-xs ${dark ? "text-white/55" : "text-muted/55"}`}>{role}</p>}
        </div>
      )}
    </motion.div>
  );
}
