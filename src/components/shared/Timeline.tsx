"use client";

import { motion } from "framer-motion";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-8">
      <div className="absolute inset-y-0 left-0 w-px bg-black/[0.08]" aria-hidden="true">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top" }}
          className="h-full w-px bg-gold"
        />
      </div>

      <ol className="space-y-10">
        {items.map((item, i) => (
          <motion.li
            key={item.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1 size-2.5 rounded-full bg-gold ring-4 ring-ivory" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{item.year}</span>
            <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-1.5 max-w-2xl text-[14px] leading-relaxed text-muted/65">{item.description}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
