"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { quickAccessCards, type QuickAccessCard } from "@/lib/data";
import { IconArrowRight } from "./icons";

const icons: Record<QuickAccessCard["icon"], React.ReactNode> = {
  briefcase: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  graduation: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 4 2 9l10 5 10-5-10-5zM6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    </svg>
  ),
  users: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5M17 9a2.5 2.5 0 1 0 0-.01M17 14.5c2.8 0 4.5 1.7 4.5 4" />
    </svg>
  ),
  book: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M4 19V5a2 2 0 0 1 2-2h13v16H6.5A2.5 2.5 0 0 0 4 21.5V19zM4 19a2.5 2.5 0 0 0 2.5 2.5H19" />
    </svg>
  ),
  newspaper: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M4 21h15a2 2 0 0 0 2-2V6h-4M4 21a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v15a2 2 0 0 0 2 2M7 7h7M7 11h7M7 15h4" />
    </svg>
  ),
};

export default function QuickAccess() {
  return (
    <section id="access" className="mx-auto max-w-[var(--container-width)] px-6">
      <h2 className="sr-only">Бърз достъп</h2>

      <div className="flex gap-5 overflow-x-auto pb-4 pt-14 max-[1000px]:snap-x max-[1000px]:snap-mandatory min-[1001px]:grid min-[1001px]:grid-cols-5 min-[1001px]:overflow-visible min-[1001px]:pb-6">
        {quickAccessCards.map((card, i) => (
          <motion.a
            key={card.id}
            href={card.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="group flex shrink-0 flex-col rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-2.5 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory max-[639px]:w-[66vw] min-[640px]:max-[1000px]:w-[42vw] max-[1000px]:snap-start"
          >
            <div className="relative h-32 overflow-hidden rounded-[var(--radius-sm)]">
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 1000px) 50vw, 20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-wine/15" style={{ mixBlendMode: "multiply" }} />
            </div>

            <div className="flex flex-1 flex-col p-2.5 pt-4">
              <h3 className="flex items-center gap-2 text-[15px] font-bold text-ink">
                <span className="text-burgundy">{icons[card.icon]}</span>
                {card.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.45] text-muted/55">{card.description}</p>
              <span className="mt-auto self-end pt-3 text-gold transition-transform duration-300 group-hover:translate-x-1">
                <IconArrowRight size={16} />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
