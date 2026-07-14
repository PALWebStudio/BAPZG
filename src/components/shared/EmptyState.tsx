import { SearchX } from "lucide-react";

export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-dashed border-black/[0.12] py-16 text-center">
      <SearchX size={28} className="text-muted/40" aria-hidden="true" />
      <p className="text-[14px] text-muted/60">{message}</p>
    </div>
  );
}
