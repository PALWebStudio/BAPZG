"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { news } from "@/lib/data";
import { IconArrowRight } from "./icons";

export default function News() {
  return (
    <section id="news" className="shell py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between gap-4"
      >
        <h2 className="text-[22px] font-extrabold text-ink">Последни новини</h2>
        <a
          href="#news"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full text-[12.5px] font-bold text-burgundy transition-colors hover:text-burgundy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
        >
          Виж всички <IconArrowRight size={13} />
        </a>
      </motion.div>

      <div className="mt-[22px] flex gap-5 overflow-x-auto pb-4 max-[760px]:snap-x max-[760px]:snap-mandatory min-[761px]:grid min-[761px]:grid-cols-3 min-[761px]:overflow-visible min-[761px]:pb-0">
        {news.map((item, i) => (
          <motion.a
            key={item.id}
            href="#news"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="group flex shrink-0 flex-col rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-2.5 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory max-[760px]:w-[74vw] max-[760px]:snap-start"
          >
            <div className="relative h-44 overflow-hidden rounded-[var(--radius-sm)]">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 760px) 74vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-wine/15" style={{ mixBlendMode: "multiply" }} />
            </div>
            <div className="p-2.5 pt-4">
              <h3 className="text-[15px] font-bold leading-[1.45] text-ink">{item.title}</h3>
              <p className="mt-2 text-xs text-muted/45">{item.date}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
