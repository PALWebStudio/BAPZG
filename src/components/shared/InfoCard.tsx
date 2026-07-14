"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  items?: string[];
  footer?: ReactNode;
};

export default function InfoCard({ title, description, items, footer }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-7 shadow-[var(--shadow-card)]"
    >
      <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
      {description && <p className="mt-2 text-[14px] leading-relaxed text-muted/65">{description}</p>}
      {items && items.length > 0 && (
        <ul className="mt-4 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted/70">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {footer && <div className="mt-5 border-t border-black/[0.06] pt-4">{footer}</div>}
    </motion.div>
  );
}
