"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  align?: "left" | "center";
};

export default function ImageBanner({ image, eyebrow, title, subtitle, cta, align = "left" }: Props) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[var(--radius-lg)]"
    >
      <div className="relative h-[360px] sm:h-[420px]">
        <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1200px" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(43,6,11,.92), rgba(43,6,11,.55) 55%, rgba(43,6,11,.25))" }}
        />
        <div
          className={`relative z-10 flex h-full flex-col justify-center px-8 text-white sm:px-14 ${
            isCenter ? "items-center text-center" : "items-start"
          }`}
        >
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-light">{eyebrow}</span>
          )}
          <h2 className="font-display mt-4 max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/75">{subtitle}</p>}
          {cta && (
            <Link
              href={cta.href}
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-gold px-6 py-3 text-sm font-bold text-wine transition hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {cta.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
