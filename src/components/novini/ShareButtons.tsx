"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

export default function ShareButtons() {
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

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] px-4 py-2.5 text-[13px] font-semibold text-muted/70 transition-colors hover:border-burgundy hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
    >
      {copied ? <Check size={15} className="text-burgundy" /> : <Link2 size={15} />}
      {copied ? "Копирано!" : "Копирай връзка"}
    </button>
  );
}
