"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Props = {
  name: string;
  priceNote: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaHref: string;
};

export default function MembershipPlanCard({
  name,
  priceNote,
  description,
  features,
  featured,
  ctaHref,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.015 }}
      className={`flex flex-col rounded-[var(--radius-md)] p-7 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)] ${
        featured ? "border-2 border-gold bg-wine-deep text-white" : "border border-black/[0.04] bg-cream text-ink"
      }`}
    >
      {featured && (
        <span className="mb-3 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-wine">
          Препоръчано
        </span>
      )}
      <h3 className="font-display text-xl font-semibold">{name}</h3>
      <p className={`mt-2 text-[13px] leading-relaxed ${featured ? "text-white/70" : "text-muted/65"}`}>
        {description}
      </p>
      <p className={`mt-4 text-sm font-semibold ${featured ? "text-gold-light" : "text-burgundy"}`}>
        {priceNote}
      </p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed">
            <Check size={16} className={`mt-0.5 shrink-0 ${featured ? "text-gold-light" : "text-burgundy"}`} />
            <span className={featured ? "text-white/85" : "text-muted/75"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 ${
          featured
            ? "bg-gold text-wine hover:bg-gold-light focus-visible:ring-white"
            : "bg-burgundy text-white hover:bg-burgundy-light focus-visible:ring-burgundy"
        }`}
      >
        Кандидатствай
      </Link>
    </motion.div>
  );
}
