"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Cta = { label: string; href: string };

type Props = {
  title: string;
  subtitle?: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
};

export default function CTASection({ title, subtitle, primaryCta, secondaryCta }: Props) {
  return (
    <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[var(--radius-lg)] bg-wine-deep px-8 py-14 text-center text-white sm:px-16"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(201,150,63,.14), transparent 70%)" }}
        />
        <div className="relative z-10">
          <h2 className="font-display mx-auto max-w-xl text-2xl font-semibold sm:text-3xl">{title}</h2>
          {subtitle && <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">{subtitle}</p>}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-wine transition hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-gold-light hover:shadow-[0_10px_30px_rgba(201,150,63,0.4)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {primaryCta.label}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
