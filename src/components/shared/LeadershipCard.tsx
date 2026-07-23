"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, User } from "lucide-react";
import type { LeadershipMember } from "@/data/leadership";

export default function LeadershipCard({ name, role, phones, emails, image }: LeadershipMember) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[var(--radius-md)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-wine-deep">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <User size={36} className="text-white/40" strokeWidth={1.3} aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Снимка предстои</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold text-ink">{name}</h3>
        <p className="mt-1 text-[13px] text-muted/60">{role}</p>
        {(phones.length > 0 || emails.length > 0) && (
          <div className="mt-3 space-y-1 border-t border-black/[0.06] pt-3">
            {phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="flex items-center gap-1.5 text-[12px] text-muted/60 transition-colors hover:text-burgundy"
              >
                <Phone size={11} className="shrink-0 text-gold" /> {phone}
              </a>
            ))}
            {emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex items-center gap-1.5 text-[12px] text-muted/60 transition-colors hover:text-burgundy"
              >
                <Mail size={11} className="shrink-0 text-gold" /> {email}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
