"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Partner } from "@/lib/data";

export default function PartnersGrid({ partners, tone = "light" }: { partners: Partner[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6"
    >
      {partners.map((partner) =>
        partner.logo ? (
          <li
            key={partner.id}
            title={partner.fullName}
            className={`relative h-9 w-[120px] transition-all duration-300 ${dark ? "brightness-0 invert" : "grayscale hover:grayscale-0"}`}
          >
            <Image src={partner.logo} alt={partner.fullName} fill className="object-contain object-center" sizes="120px" />
          </li>
        ) : (
          <li key={partner.id} title={partner.fullName} className="group flex items-center gap-2.5">
            <span
              className={`flex size-8 items-center justify-center rounded-full border text-[9px] font-extrabold ${
                dark ? "border-white/20 text-white/60" : "border-muted/15 text-muted/40"
              }`}
            >
              {partner.dot}
            </span>
            <span
              className={`inline-block text-lg font-extrabold tracking-[0.03em] transition-[color,transform] group-hover:scale-110 ${
                dark ? "text-white/70 group-hover:text-gold-light" : "text-muted/45 group-hover:text-burgundy"
              }`}
            >
              {partner.abbr}
            </span>
          </li>
        )
      )}
    </motion.ul>
  );
}
