"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  name: string;
  role: string;
  image: string;
};

export default function LeadershipCard({ name, role, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[var(--radius-md)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold text-ink">{name}</h3>
        <p className="mt-1 text-[13px] text-muted/60">{role}</p>
      </div>
    </motion.div>
  );
}
