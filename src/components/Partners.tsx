"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/lib/data";

const loop = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="bg-ivory py-14">
      <div className="shell">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-muted/50"
        >
          Партньори
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-white/60 bg-white/40 py-8 shadow-[var(--shadow-card)] backdrop-blur-xl [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        >
          <ul className="marquee-track flex w-max items-center gap-16 px-16">
            {loop.map((partner, i) =>
              partner.logo ? (
                <li
                  key={`${partner.id}-${i}`}
                  title={partner.fullName}
                  className="group relative h-10 w-[130px] shrink-0 grayscale transition-all duration-300 hover:grayscale-0"
                >
                  <Image src={partner.logo} alt={partner.fullName} fill className="object-contain object-center" sizes="130px" />
                </li>
              ) : (
                <li
                  key={`${partner.id}-${i}`}
                  title={partner.fullName}
                  className="group flex shrink-0 items-center gap-3"
                >
                  <span className="flex size-12 items-center justify-center rounded-full border-2 border-burgundy/15 bg-white/60 text-sm font-extrabold text-burgundy backdrop-blur-sm transition-colors group-hover:border-burgundy/40 group-hover:bg-white/80">
                    {partner.dot}
                  </span>
                  <span className="text-2xl font-extrabold tracking-[0.03em] text-ink/70 transition-colors group-hover:text-burgundy">
                    {partner.abbr}
                  </span>
                </li>
              )
            )}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
