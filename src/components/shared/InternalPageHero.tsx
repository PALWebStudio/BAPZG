"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
  image?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function InternalPageHero({ eyebrow, title, subtitle, breadcrumbs, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-wine text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(43,6,11,1) 0%, rgba(67,6,16,0.97) 45%, rgba(107,16,32,0.55) 100%)",
        }}
      />
      {image && (
        <div className="absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden lg:block">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: EASE }}
            className="absolute inset-0"
          >
            <Image src={image} alt="" fill className="object-cover opacity-70" sizes="42vw" />
          </motion.div>
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(43,6,11,1), transparent)" }}
          />
        </div>
      )}
      <div className="pointer-events-none absolute -left-40 top-10 size-[420px] rounded-full bg-burgundy/25 blur-[140px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
        className="relative z-10 shell pb-16 pt-32 lg:pt-36"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: EASE }}>
          <Breadcrumbs items={breadcrumbs} />
        </motion.div>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-gold-light"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display mt-4 max-w-2xl text-[clamp(2.1rem,4vw,3.2rem)] font-semibold leading-[1.1]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-5 max-w-xl text-[15.5px] leading-[1.7] text-white/72"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
