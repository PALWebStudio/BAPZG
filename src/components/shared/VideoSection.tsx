"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

type Props = {
  poster: string;
  title: string;
  /** YouTube/Vimeo embed URL, e.g. https://www.youtube.com/embed/XXXX */
  embedUrl?: string;
  /** Self-hosted mp4 source, used when embedUrl is not supplied. */
  videoSrc?: string;
};

export default function VideoSection({ poster, title, embedUrl, videoSrc }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        aria-label={`Пусни видеото: ${title}`}
        className="group relative block aspect-video w-full overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
      >
        <Image
          src={poster}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 1000px"
        />
        <div className="absolute inset-0 bg-wine/40 transition-colors group-hover:bg-wine/25" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
            <span className="absolute inset-0 rounded-full bg-gold/40 animate-pulse-ring" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold text-wine shadow-lg transition-transform group-hover:scale-105">
              <Play size={20} className="ml-1 fill-wine" />
            </span>
          </span>
        </span>
      </motion.button>

      <VideoModal open={open} onClose={() => setOpen(false)} title={title}>
        {embedUrl ? (
          <iframe
            src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
            title={title}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : videoSrc ? (
          <video src={videoSrc} controls autoPlay className="h-full w-full" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center text-white/70">
            <Play size={28} className="opacity-50" />
            <p className="text-sm">Видеото предстои да бъде добавено.</p>
          </div>
        )}
      </VideoModal>
    </>
  );
}
