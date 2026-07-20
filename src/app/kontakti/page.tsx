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
      />

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div className="rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]">
              <MapPin size={20} className="text-burgundy" />
              <p className="mt-3 text-[14px] text-muted/70">ул. „Цар Калоян“ 1, 1000 София, България</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]">
              <Phone size={20} className="text-burgundy" />
              <p className="mt-3 text-[14px] text-muted/70">02 987 60 65</p>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]">
              <Mail size={20} className="text-burgundy" />
              <p className="mt-3 text-[14px] text-muted/70">office@bapzg.bg</p>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]">
              <Clock size={20} className="text-burgundy" />
              <p className="mt-3 text-[14px] text-muted/70">Пон–Пет, 9:00–17:30</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Отдели" title="Свържете се с конкретен отдел" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => <ContactCard key={dept.department} {...dept} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
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
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Регионална мрежа" title="Регионални колегии" />
          <div className="mt-8">
            <RegionalCards regions={regions} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Въпроси" title="Често задавани въпроси" />
        <div className="mt-8 max-w-3xl">
          <FAQAccordion items={contactFaqs} />
        </div>
      </section>
    </>
  );
}
