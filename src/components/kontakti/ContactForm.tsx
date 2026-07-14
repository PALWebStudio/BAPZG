"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

const topics = ["Общ въпрос", "Членство", "Обучения", "Кариери", "Сигнал/жалба", "Медии"];

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", topic: topics[0], message: "" });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Моля, въведете име.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Моля, въведете валиден имейл.";
    if (!values.message.trim()) next.message = "Моля, въведете съобщение.";
    if (!consent) next.consent = "Моля, потвърдете съгласието си.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // Demo-only: no backend is connected. In production this would POST to an API route.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-10 text-center shadow-[var(--shadow-card)]">
        <CheckCircle2 size={32} className="text-burgundy" />
        <h3 className="font-display text-lg font-semibold text-ink">Съобщението е готово за изпращане</h3>
        <p className="max-w-sm text-[14px] leading-relaxed text-muted/65">
          Това е демонстрационна форма — все още не е свързана с реален сървър за получаване на съобщения.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-7 shadow-[var(--shadow-card)]">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-[13px] font-semibold text-ink">Име</label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-black/[0.1] bg-white px-4 py-2.5 text-[14px] outline-none transition-colors focus:border-burgundy"
          />
          {errors.name && <p id="name-error" className="mt-1 text-[12.5px] text-burgundy">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-[13px] font-semibold text-ink">Имейл</label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-1.5 w-full rounded-xl border border-black/[0.1] bg-white px-4 py-2.5 text-[14px] outline-none transition-colors focus:border-burgundy"
          />
          {errors.email && <p id="email-error" className="mt-1 text-[12.5px] text-burgundy">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-[13px] font-semibold text-ink">Телефон (по избор)</label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className="mt-1.5 w-full rounded-xl border border-black/[0.1] bg-white px-4 py-2.5 text-[14px] outline-none transition-colors focus:border-burgundy"
          />
        </div>
        <div>
          <label htmlFor="topic" className="text-[13px] font-semibold text-ink">Тема</label>
          <select
            id="topic"
            value={values.topic}
            onChange={(e) => setValues((v) => ({ ...v, topic: e.target.value }))}
            className="mt-1.5 w-full rounded-xl border border-black/[0.1] bg-white px-4 py-2.5 text-[14px] outline-none transition-colors focus:border-burgundy"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-[13px] font-semibold text-ink">Съобщение</label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1.5 w-full rounded-xl border border-black/[0.1] bg-white px-4 py-2.5 text-[14px] outline-none transition-colors focus:border-burgundy"
        />
        {errors.message && <p id="message-error" className="mt-1 text-[12.5px] text-burgundy">{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-2.5 text-[13px] text-muted/70">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={!!errors.consent}
            className="mt-0.5 size-4 shrink-0 accent-burgundy"
          />
          Съгласен съм личните ми данни да бъдат обработени с цел отговор на запитването.
        </label>
        {errors.consent && <p className="mt-1 text-[12.5px] text-burgundy">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-burgundy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-burgundy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy sm:w-auto"
      >
        Изпрати съобщение
      </button>
    </form>
  );
}
