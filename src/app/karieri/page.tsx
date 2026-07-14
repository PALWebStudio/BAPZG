import type { Metadata } from "next";
import { Compass, FileEdit, MessagesSquare } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import CTASection from "@/components/shared/CTASection";
import KarieriBrowser from "@/components/karieri/KarieriBrowser";
import Reveal from "@/components/shared/Reveal";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Кариери — БАПЗГ",
  description: "Актуални позиции за медицински сестри, акушерки и други специалисти по здравни грижи в България.",
};

const employers = Array.from(new Set(jobs.map((j) => j.employer)));

export default function KarieriPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Развитие в професията"
        title="Кариери в здравните грижи"
        subtitle="Открийте актуални позиции от водещи лечебни заведения в цялата страна."
        breadcrumbs={[{ label: "Начало", href: "/" }, { label: "Кариери" }]}
        image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Обяви" title="Актуални позиции" description="Филтрирайте по специалност, град и тип заетост." />
        <div className="mt-8">
          <KarieriBrowser />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Работодатели" title="Лечебни заведения, публикували позиции" />
          <Reveal className="mt-8 flex flex-wrap gap-3">
            {employers.map((employer) => (
              <span
                key={employer}
                className="rounded-full border border-black/[0.08] bg-cream px-4 py-2 text-[13px] font-medium text-muted/70"
              >
                {employer}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Съвети" title="Насоки за кариерно развитие" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <FeatureCard icon={<FileEdit size={22} strokeWidth={1.75} />} title="Изгответе силно CV" description="Подчертайте квалификация, сертификати и практически опит." />
          <FeatureCard icon={<MessagesSquare size={22} strokeWidth={1.75} />} title="Подгответе се за интервю" description="Прегледайте типични въпроси за здравни специалисти." />
          <FeatureCard icon={<Compass size={22} strokeWidth={1.75} />} title="Планирайте развитието си" description="Използвайте обученията на БАПЗГ за нови компетенции." />
        </div>
      </section>

      <CTASection
        title="Търсите служители в здравния сектор?"
        subtitle="Свържете се с БАПЗГ, за да публикувате обява до над 50 000 специалисти."
        primaryCta={{ label: "Свържи се с нас", href: "/kontakti" }}
      />
    </>
  );
}
