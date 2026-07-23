import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

export default function ImportantNotice({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-[var(--radius-md)] border border-gold/30 bg-gold/[0.07] p-6">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
        <AlertTriangle size={20} aria-hidden="true" />
      </span>
      <div className="text-[14px] leading-relaxed text-ink/85">{children}</div>
    </div>
  );
}
