"use client";

import { useState } from "react";
import { Link2, Check, Send } from "lucide-react";

type Props = { title?: string };

export default function ShareButtons({ title = "" }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op.
    }
  }

  function openShare(url: string) {
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=600");
  }

  const shareButtonClass =
    "flex size-9 items-center justify-center rounded-full border border-black/[0.1] text-muted/70 transition-colors hover:border-burgundy hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label="Сподели във Facebook"
        title="Сподели във Facebook"
        onClick={() =>
          openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`)
        }
        className={shareButtonClass}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.93 1.42-3.93 4.03V9.9H8v3.1h2.41v8h3.09Z" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Сподели в X (Twitter)"
        title="Сподели в X (Twitter)"
        onClick={() =>
          openShare(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`
          )
        }
        className={shareButtonClass}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L7.4 4H5.6l12.1 16Z" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Сподели в LinkedIn"
        title="Сподели в LinkedIn"
        onClick={() =>
          openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`)
        }
        className={shareButtonClass}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.5 21h-3.38v-6.34c0-1.51-.03-3.46-2.11-3.46-2.11 0-2.44 1.65-2.44 3.35V21H9.19V8.5h3.24v1.71h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.2V21Z" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Сподели във Viber"
        title="Сподели във Viber"
        onClick={() => openShare(`viber://forward?text=${encodeURIComponent(`${title} ${window.location.href}`)}`)}
        className={shareButtonClass}
      >
        <Send size={16} />
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] px-4 py-2.5 text-[13px] font-semibold text-muted/70 transition-colors hover:border-burgundy hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
      >
        {copied ? <Check size={15} className="text-burgundy" /> : <Link2 size={15} />}
        {copied ? "Копирано!" : "Копирай връзка"}
      </button>
    </div>
  );
}
