"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

type Props = {
  city: string;
  address: string;
  phone: string;
  email: string;
};

export default function RegionCard({ city, address, phone, email }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
    >
      <h3 className="font-display text-base font-semibold text-ink">{city}</h3>
      <ul className="mt-3 space-y-2 text-[13px] text-muted/65">
        <li className="flex items-start gap-2">
          <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
          {address}
        </li>
        <li className="flex items-center gap-2">
          <Phone size={14} className="shrink-0 text-gold" />
          {phone}
        </li>
        <li className="flex items-center gap-2">
          <Mail size={14} className="shrink-0 text-gold" />
          {email}
        </li>
      </ul>
    </motion.div>
  );
}
