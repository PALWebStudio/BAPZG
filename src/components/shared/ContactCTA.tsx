"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  phone?: string;
  email?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function ContactCTA({
  title,
  subtitle,
  phone,
  email,
  ctaHref = "/kontakti",
  ctaLabel = "Свържи се с нас",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6 rounded-[var(--radius-lg)] border border-black/[0.04] bg-cream p-8 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between sm:p-10"
    >
      <div>
        <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
        {subtitle && <p className="mt-2 max-w-md text-[14.5px] leading-relaxed text-muted/65">{subtitle}</p>}
        {(phone || email) && (
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-muted/65">
            {phone && (
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="text-gold" /> {phone}
              </span>
            )}
            {email && (
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-gold" /> {email}
              </span>
            )}
          </div>
        )}
      </div>
      <Link
        href={ctaHref}
        className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-burgundy px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-burgundy-light active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
      >
        {ctaLabel}
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
