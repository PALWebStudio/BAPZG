"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, User } from "lucide-react";

type Props = {
  city: string;
  chair: string;
  address: string;
  phone: string;
  email: string;
  photo?: string;
};

export default function RegionCard({ city, chair, phone, email, photo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-[var(--radius-md)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-wine-deep">
        {photo ? (
          <Image src={photo} alt="" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <User size={30} className="text-white/40" strokeWidth={1.3} aria-hidden="true" />
            <span className="text-[9.5px] font-semibold uppercase tracking-wider text-white/40">Снимка предстои</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-base font-semibold text-ink">{city}</h3>
        <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-wider text-muted/45">Председател</p>
        <p className="mt-0.5 text-[14px] font-semibold text-burgundy">{chair}</p>
        <ul className="mt-3 space-y-2 text-[13px] text-muted/65">
          <li className="flex items-center gap-2">
            <Phone size={14} className="shrink-0 text-gold" />
            {phone}
          </li>
          <li className="flex items-center gap-2">
            <Mail size={14} className="shrink-0 text-gold" />
            {email}
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
