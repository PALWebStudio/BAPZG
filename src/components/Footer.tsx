"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerColumns } from "@/lib/data";
import { IconMapPin, IconPhone, IconMail } from "./icons";

function FacebookGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.5 8.5H13.8c-.6 0-1 .5-1 1.1V12h2.6l-.4 2.7h-2.2V22h-2.9v-7.3H7.7V12h2.2v-2.7c0-2.1 1.5-3.9 3.5-3.9h2.1v3.1z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.9 8.6H3.4V21h3.5V8.6zM5.2 3c-1.2 0-2 .8-2 1.9 0 1 .8 1.9 2 1.9 1.2 0 2-.8 2-1.9C7.2 3.8 6.4 3 5.2 3zM21 13.6c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.6H10.4c.1 1 0 12.4 0 12.4h3.5v-6.9c0-.4 0-.7.1-1 .3-.7 1-1.5 2.1-1.5 1.5 0 2.1 1.1 2.1 2.8V21H21v-7.4z" />
    </svg>
  );
}

function YoutubeGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.9c-.2-1-1-1.8-2-2C17.9 5.5 12 5.5 12 5.5s-5.9 0-7.6.4c-1 .2-1.8 1-2 2C2 9.6 2 12 2 12s0 2.4.4 4.1c.2 1 1 1.8 2 2 1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4c1-.2 1.8-1 2-2 .4-1.7.4-4.1.4-4.1s0-2.4-.4-4.1zM10 15.2V8.8l5.5 3.2-5.5 3.2z" />
    </svg>
  );
}

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
} satisfies import("framer-motion").Variants;

const socialButtonClass =
  "flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-gold hover:text-gold";

export default function Footer() {
  return (
    <footer id="contact" className="bg-wine-deep pt-[60px] text-white/65">
      <div className="shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-11 pb-11 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 min-[901px]:grid-cols-[1.35fr_1fr_0.9fr_1.15fr]"
        >
          {/* Logo + description */}
          <motion.div variants={columnVariants}>
            <Link href="/" className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine-deep" aria-label="БАПЗГ — начало">
              <Image src="/БАПЗГ_logo.png" alt="" width={645} height={743} className="h-11 w-auto" />
              <span className="font-display text-lg font-bold tracking-[0.04em] text-white">БАПЗГ</span>
            </Link>
            <p className="mt-4 max-w-[250px] text-[13px] leading-[1.6]">
              Българска асоциация на професионалистите по здравни грижи
            </p>
            <div className="mt-[22px] flex gap-2.5">
              <motion.button
                whileHover={{ scale: 1.12, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                disabled
                aria-disabled="true"
                aria-label="Facebook (очаквайте скоро)"
                className={socialButtonClass}
              >
                <FacebookGlyph />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.12, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                disabled
                aria-disabled="true"
                aria-label="Instagram (очаквайте скоро)"
                className={socialButtonClass}
              >
                <InstagramGlyph />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.12, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                disabled
                aria-disabled="true"
                aria-label="LinkedIn (очаквайте скоро)"
                className={socialButtonClass}
              >
                <LinkedinGlyph />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.12, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                disabled
                aria-disabled="true"
                aria-label="YouTube (очаквайте скоро)"
                className={socialButtonClass}
              >
                <YoutubeGlyph />
              </motion.button>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.nav variants={columnVariants} aria-label="Бързи връзки">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-light">Бързи връзки</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[13px]">
              {footerColumns.navigation.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine-deep">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Useful */}
          <motion.nav variants={columnVariants} aria-label="Полезно">
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-light">Полезно</h3>
            <ul className="mt-5 grid gap-3 text-[13px]">
              {footerColumns.useful.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="rounded-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine-deep">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contacts */}
          <motion.div variants={columnVariants}>
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-gold-light">Контакти</h3>
            <ul className="mt-5 grid gap-3.5 text-[13px]">
              <li className="flex items-start gap-2.5">
                <IconMapPin size={15} className="mt-0.5 shrink-0 text-gold" />
                ул. „Цар Калоян“ 1, 1000 София, България
              </li>
              <li className="flex items-center gap-2.5">
                <IconPhone size={15} className="shrink-0 text-gold" />
                <a href="tel:029876065" className="hover:text-white">02 987 60 65</a>
              </li>
              <li className="flex items-center gap-2.5">
                <IconMail size={15} className="shrink-0 text-gold" />
                <a href="mailto:office@bapzg.bg" className="hover:text-white">office@bapzg.bg</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-[22px] text-xs text-white/40">
          <p>© 2024 БАПЗГ. Всички права запазени.</p>
          <div className="flex gap-6">
            <button type="button" disabled aria-disabled="true" title="Очаквайте скоро" className="text-white/40">Политика за поверителност</button>
            <button type="button" disabled aria-disabled="true" title="Очаквайте скоро" className="text-white/40">Общи условия</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
