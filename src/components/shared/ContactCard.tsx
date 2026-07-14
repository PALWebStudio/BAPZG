"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";

type Props = {
  department: string;
  phone: string;
  email: string;
  hours?: string;
};

export default function ContactCard({ department, phone, email, hours }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
    >
      <h3 className="font-display text-base font-semibold text-ink">{department}</h3>
      <ul className="mt-3 space-y-2 text-[13px] text-muted/65">
        <li className="flex items-center gap-2">
          <Phone size={14} className="shrink-0 text-gold" />
          {phone}
        </li>
        <li className="flex items-center gap-2">
          <Mail size={14} className="shrink-0 text-gold" />
          {email}
        </li>
        {hours && (
          <li className="flex items-center gap-2">
            <Clock size={14} className="shrink-0 text-gold" />
            {hours}
          </li>
        )}
      </ul>
    </motion.div>
  );
}
