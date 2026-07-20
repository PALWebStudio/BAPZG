"use client";

import { Send } from "lucide-react";

export default function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="Вашият имейл адрес"
        className="w-full flex-1 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-wine-deep transition-colors hover:bg-gold-light"
      >
        Абонирай се <Send size={15} />
      </button>
    </form>
  );
}
