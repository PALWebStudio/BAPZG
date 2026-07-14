"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { IconSearch, IconUser, IconBurger, IconX } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Close the mobile menu automatically whenever the route changes.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing UI state with browser navigation, not derived render state
    setMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-[400ms] ${
        scrolled || menuOpen
          ? "border-white/10 bg-wine/92 shadow-[0_8px_32px_rgba(43,6,11,0.4)] backdrop-blur-[14px]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-[17px]">
        <Link href="/" className="flex items-start gap-3.5" aria-label="БАПЗГ — начало">
          <Image src="/БАПЗГ_logo.png" alt="" width={645} height={743} priority className="h-[58px] w-auto shrink-0" />
          <span className="leading-none">
            <span className="font-display block text-lg font-bold leading-none tracking-[0.04em] text-white">
              БАПЗГ
            </span>
            <span className="mt-1 hidden max-w-[122px] text-[9.5px] leading-tight text-white/60 min-[1101px]:block">
              Българска асоциация на професионалистите по здравни грижи
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 min-[1101px]:flex" aria-label="Основна навигация">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3 py-2 text-[13px] font-medium tracking-[0.02em] transition-[color,text-shadow] duration-300 hover:[text-shadow:0_0_14px_rgba(224,189,117,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine ${
                  active ? "text-gold-light" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 bottom-0.5 h-px bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 min-[1101px]:flex">
          <button
            aria-label="Търсене"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition hover:scale-[1.03] hover:bg-white/10 hover:text-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine"
          >
            <IconSearch size={16} />
          </button>
          <button
            aria-label="Избор на език"
            className="rounded-full px-2.5 py-2 text-[12.5px] font-semibold text-white/75 transition hover:scale-[1.03] hover:bg-white/10 hover:text-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine"
          >
            BG ▾
          </button>
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-4 py-2.5 text-[12.5px] font-semibold text-gold-light transition hover:scale-[1.03] hover:bg-gold hover:text-wine hover:shadow-[0_0_18px_rgba(201,150,63,0.45)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine"
          >
            Вход за членове <IconUser size={13} />
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-white/75 transition hover:scale-[1.05] hover:bg-white/10 hover:text-white active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine min-[1101px]:hidden"
          aria-label={menuOpen ? "Затвори менюто" : "Отвори менюто"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <IconX size={22} /> : <IconBurger size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: -12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut", staggerChildren: 0.05 } },
            }}
            aria-label="Мобилна навигация"
            className="border-t border-white/10 bg-wine/96 px-6 pb-6 pt-3 backdrop-blur-[14px] min-[1101px]:hidden"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <motion.div
                  key={link.label}
                  variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-xl px-3 py-3 text-[15px] font-medium transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine ${
                      active ? "text-gold-light" : "text-white/90"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.a
              variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}
              href="#login"
              className="mt-3 flex items-center justify-center gap-2 rounded-full border border-gold/60 px-4 py-2.5 text-sm font-semibold text-gold-light transition hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine"
            >
              Вход за членове
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
