"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data";

export default function Partners() {
  return (
    <section className="mx-auto max-w-[var(--container-width)] px-6 pb-[70px] pt-5 text-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted/40">
        Член на международни организации
      </p>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.6 }}
        className="mt-[26px] flex flex-wrap justify-center gap-x-14 gap-y-6"
      >
        {partners.map((partner) => (
          <li key={partner.id} title={partner.fullName} className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-muted/15 text-[9px] font-extrabold text-muted/40">
              {partner.dot}
            </span>
            <span className="inline-block text-lg font-extrabold tracking-[0.03em] text-muted/45 transition-[color,transform] group-hover:scale-110 group-hover:text-burgundy">
              {partner.abbr}
            </span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
