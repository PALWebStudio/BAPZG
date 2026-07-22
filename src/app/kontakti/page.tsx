import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCard from "@/components/shared/ContactCard";
import RegionalCards from "@/components/shared/RegionalCards";
import FAQAccordion from "@/components/shared/FAQAccordion";
import ContactForm from "@/components/kontakti/ContactForm";
import Reveal from "@/components/shared/Reveal";
import { regions } from "@/data/regions";
import { contactFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Контакти — БАПЗГ",
  description: "Свържете се с БАПЗГ — централен офис, отдели и регионални колегии в цялата страна.",
};

const departments = [
  { department: "Общ отдел", phone: "02 987 60 65", email: "office@bapzg.bg" },
  { department: "Членство", phone: "02 987 60 66", email: "chlenstvo@bapzg.bg" },
  { department: "Обучения", phone: "02 987 60 67", email: "obuchenia@bapzg.bg" },
  { department: "Медии", phone: "02 987 60 68", email: "media@bapzg.bg" },
];

export default function KontaktiPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Свържете се с нас"
        title="Контакти"
        subtitle="Централен офис, отдели и регионални колегии на БАПЗГ в цялата страна."
        breadcrumbs={[{ label: "Начало", href: "/" }, { label: "Контакти" }]}
        image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop"
      />

      <div className="relative z-10 shell -mt-[56px]">
        <div className="grid overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-wine-deep/95 shadow-[0_30px_70px_rgba(43,6,11,0.34)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, text: "ул. „Цар Калоян“ 1, 1000 София" },
            { icon: Phone, text: "02 987 60 65" },
            { icon: Mail, text: "office@bapzg.bg" },
            { icon: Clock, text: "Пон–Пет, 9:00–17:30" },
          ].map((item, index, arr) => (
            <Reveal key={item.text} delay={index * 0.08}>
              <div
                className={`flex min-h-32 items-center gap-4 px-6 py-5 text-white transition-colors hover:bg-white/[0.03] ${
                  index !== arr.length - 1 ? "border-b border-white/10 lg:border-b-0 lg:border-r" : ""
                }`}
              >
                <item.icon size={20} className="shrink-0 text-gold" />
                <p className="text-[13.5px] leading-snug text-white/80">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <section className="bg-white pt-20 pb-16">
        <div className="shell grid gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:gap-12">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Отдели</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Свържете се с конкретен отдел</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {departments.map((dept) => <ContactCard key={dept.department} {...dept} />)}
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Форма за контакт" title="Изпратете съобщение" />
            <Reveal direction="left" className="mt-8">
              <ContactForm />
            </Reveal>
          </div>
          <div>
            <SectionHeader eyebrow="Локация" title="Централен офис" />
            <Reveal direction="right" className="mt-8 overflow-hidden rounded-[var(--radius-md)] border border-black/[0.06] shadow-[var(--shadow-card)]">
              <iframe
                title="Карта — централен офис на БАПЗГ"
                src="https://www.google.com/maps?q=ул.+Цар+Калоян+1,+София,+България&output=embed"
                className="h-64 w-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell grid gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:gap-12">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Регионална мрежа</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Регионални колегии</h2>
          </Reveal>
          <RegionalCards regions={regions} />
        </div>
      </section>

      <section className="shell py-16">
        <SectionHeader eyebrow="Въпроси" title="Често задавани въпроси" />
        <div className="mt-8 max-w-3xl">
          <FAQAccordion items={contactFaqs} />
        </div>
      </section>
    </>
  );
}
