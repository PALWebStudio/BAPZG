"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { events } from "@/lib/data";
import { IconArrowRight, IconMapPin } from "./icons";

export default function Events() {
  return (
    <motion.div
      id="events"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)]"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[18px] font-extrabold text-ink">Предстоящи събития</h2>
        <a
          href="#events"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full text-[12.5px] font-bold text-burgundy transition-colors hover:text-burgundy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Виж всички <IconArrowRight size={13} />
        </a>
      </div>

      <div className="mt-2">
        {events.map((event) => (
          <a
            key={event.id}
            href="#events"
            className="group flex items-center gap-4 border-t border-muted/[0.08] px-2 py-4 -mx-2 transition-colors first:border-t-0 hover:bg-burgundy/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <span className="relative h-[72px] w-[88px] shrink-0 overflow-hidden rounded-[var(--radius-sm)]">
              <Image src={event.image} alt="" fill sizes="88px" className="object-cover" />
              <span className="absolute inset-0 bg-wine/55" style={{ mixBlendMode: "multiply" }} />
              <span className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-white">
                <b className="font-display text-xl leading-none">{event.date}</b>
                <small className="mt-0.5 text-[9.5px] font-bold tracking-[0.14em]">{event.month}</small>
              </span>
            </span>
            <span>
              <h3 className="text-[14.5px] font-bold leading-[1.4] text-ink transition-colors group-hover:text-burgundy">
                {event.title}
              </h3>
              <span className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-muted/50">
                <IconMapPin size={12} className="text-gold" />
                {event.location}
              </span>
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
