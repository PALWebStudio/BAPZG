"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const DETAILS = {
  recipient: "БАПЗГ",
  iban: "BG69BPBI81701714026754",
  bic: "BPBIBGSF",
  bank: "„Юробанк България“ АД",
  reason: "Абонамент за сп. „Здравни грижи“",
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op.
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 border-b border-black/[0.06] py-3 last:border-b-0">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted/50">{label}</p>
        <p className="mt-0.5 font-mono text-[14px] text-ink">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Копирай ${label}`}
        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-black/[0.08] text-muted/60 transition-colors hover:border-burgundy hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
      >
        {copied ? <Check size={14} className="text-burgundy" /> : <Copy size={14} />}
      </button>
    </div>
  );
}

export default function BankDetailsCard() {
  return (
    <div className="rounded-[var(--radius-md)] border border-black/[0.06] bg-cream p-6 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between border-b border-black/[0.06] py-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted/50">Получател</p>
        <p className="text-[14px] font-semibold text-ink">{DETAILS.recipient}</p>
      </div>
      <CopyField label="IBAN" value={DETAILS.iban} />
      <CopyField label="BIC" value={DETAILS.bic} />
      <div className="flex items-center justify-between border-b border-black/[0.06] py-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted/50">Банка</p>
        <p className="text-[14px] text-ink">{DETAILS.bank}</p>
      </div>
      <div className="flex items-center justify-between py-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted/50">Основание</p>
        <p className="text-right text-[13.5px] text-ink">{DETAILS.reason}</p>
      </div>
    </div>
  );
}
