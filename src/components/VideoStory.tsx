"use client";

import { motion } from "framer-motion";
import { IconPlay } from "./icons";

export default function VideoStory() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7 }}
      className="relative flex min-h-[380px] overflow-hidden rounded-2xl shadow-[0_18px_44px_rgba(43,6,11,.25)]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(43,6,11,0), rgba(43,6,11,0)), url('/homepagephoto.png')",
        backgroundPosition: "65% center",
        backgroundSize: "cover",
        backgroundColor: "var(--color-wine)",
      }}
    >
      <div className="absolute inset-0 bg-wine/30" style={{ mixBlendMode: "multiply" }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(43,6,11,.75), rgba(43,6,11,.42) 55%, rgba(43,6,11,.1))",
        }}
      />

      <div className="relative z-[2] flex w-full items-center justify-between gap-6 p-10">
        <div className="max-w-[270px]">
          <h2 className="font-display text-[clamp(1.7rem,2.6vw,2.1rem)] font-bold leading-[1.3] text-white">
            Грижата е
            <br />
            нашата сила
          </h2>
          <p className="mt-5 text-sm leading-[1.7] text-white/75">
            Заедно можем повече.
            <br />
            Заедно сме бъдещето.
          </p>
          <svg
            width="128"
            height="36"
            viewBox="0 0 130 36"
            fill="none"
            aria-hidden="true"
            className="mt-6 text-white/85"
          >
            <path
              d="M4 26 C14 6, 22 4, 24 14 C26 24, 16 32, 30 24 C44 16, 40 6, 50 12 C60 18, 54 28, 68 20 C82 12, 88 10, 96 16 C104 22, 110 18, 126 12"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
            БАПЗГ
          </p>
        </div>

        <button
          className="relative mr-3 h-16 w-16 shrink-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-wine"
          aria-label="Пусни видеото: Грижата е нашата сила"
        >
          <span className="absolute inset-0 rounded-full bg-gold/35 animate-pulse-ring" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-wine shadow-[0_12px_30px_rgba(0,0,0,.35)] transition-transform hover:scale-[1.06]">
            <IconPlay size={20} />
          </span>
        </button>
      </div>
    </motion.div>
  );
}
