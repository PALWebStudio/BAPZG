"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Item = { icon: ReactNode; title: string; description: string };

type Props = {
  image: string;
  eyebrow?: string;
  statement: string;
  items: Item[];
};

/** Full-bleed immersive band: a large statement over an image, with floating glass cards. */
export default function FeatureBanner({ image, eyebrow, statement, items }: Props) {
  return (
    <div className="relative overflow-hidden bg-wine-deep">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover opacity-45" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-deep via-wine-deep/85 to-wine-deep/50" />
      </div>
      <div className="shell relative py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-light">{eyebrow}</span>
            )}
            <p className="font-display mt-5 text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-[2.6rem] lg:leading-[1.15]">
              {statement}
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="rounded-[var(--radius-md)] border border-white/15 bg-white/[0.08] p-6 backdrop-blur-xl"
              >
                <div className="text-gold">{item.icon}</div>
                <h3 className="font-display mt-3 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
