"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
};

export default function SectionIntro({ eyebrow, title, children, image, imageAlt = "", reverse }: Props) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 28 : -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={reverse ? "lg:order-2" : ""}
      >
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted/70">{children}</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -28 : 28, scale: 1.03 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] shadow-[var(--shadow-card)] ${reverse ? "lg:order-1" : ""}`}
      >
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </motion.div>
    </div>
  );
}
