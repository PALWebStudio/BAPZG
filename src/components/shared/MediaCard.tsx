"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { ElementType } from "react";

type Props = {
  image: string;
  title: string;
  description?: string;
  isVideo?: boolean;
  onClick?: () => void;
};

export default function MediaCard({ image, title, description, isVideo, onClick }: Props) {
  const Tag: ElementType = onClick ? "button" : "div";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[var(--radius-md)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
    >
      <Tag
        type={onClick ? "button" : undefined}
        onClick={onClick}
        className={`block w-full text-left ${onClick ? "cursor-pointer" : ""}`}
      >
        <div className="relative h-48 overflow-hidden">
          <Image src={image} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 33vw" />
          {isVideo && (
            <span className="absolute inset-0 flex items-center justify-center bg-wine/25">
              <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-wine shadow-lg transition-transform group-hover:scale-110">
                <Play size={18} className="ml-0.5 fill-wine" />
              </span>
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
          {description && <p className="mt-1.5 text-[13px] leading-relaxed text-muted/60">{description}</p>}
        </div>
      </Tag>
    </motion.div>
  );
}
