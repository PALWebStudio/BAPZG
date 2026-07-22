"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { professions } from "@/data/professions";
import { IconArrowRight } from "./icons";

export default function Professions() {
  return (
    <section id="access" className="shell py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">
          Професии в здравните грижи
        </span>
        <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
          Открий професията, с която можеш да променяш животи
        </h2>
        <p className="mt-4 text-[14.5px] leading-relaxed text-muted/65">
          Научи повече за ролята, обучението и възможностите за развитие в основните професии в здравните грижи.
        </p>
      </motion.div>

      <div className="mt-10 flex gap-5 overflow-x-auto pb-4 max-[639px]:snap-x max-[639px]:snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 xl:grid-cols-5">
        {professions.map((profession, i) => (
          <motion.div
            key={profession.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="shrink-0 max-[639px]:w-[78vw] sm:shrink"
          >
            <Link
              href={`/profesii/${profession.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={profession.image}
                  alt={profession.title}
                  fill
                  sizes="(max-width: 639px) 78vw, (max-width: 1279px) 33vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-wine/15" style={{ mixBlendMode: "multiply" }} />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-semibold text-ink">{profession.title}</h3>
                <p className="mt-2 text-[13px] italic leading-relaxed text-muted/60">„{profession.quote}“</p>
                <span className="mt-auto self-end pt-4 text-gold transition-transform duration-300 group-hover:translate-x-1">
                  <IconArrowRight size={16} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
