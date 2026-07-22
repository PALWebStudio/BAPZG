import type { Metadata } from "next";
import { Compass, FileEdit, MessagesSquare } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureBanner from "@/components/shared/FeatureBanner";
import QuoteSlider from "@/components/shared/QuoteSlider";
import VideoSection from "@/components/shared/VideoSection";
import Gallery from "@/components/shared/Gallery";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import KarieriBrowser from "@/components/karieri/KarieriBrowser";
import Reveal from "@/components/shared/Reveal";
import { jobs } from "@/data/jobs";
import { careerFaqs } from "@/data/faqs";

const employerStories = [
  {
    quote: "БАПЗГ ни помогна да намерим отдадени специалисти за спешното ни отделение само за седмици.",
    author: "УМБАЛ „Св. Иван Рилски“",
    role: "Отдел човешки ресурси",
  },
  {
    quote: "Платформата за кариери е лесна за ползване и достига точната аудитория от здравни специалисти.",
    author: "МБАЛ „Пловдив“ АД",
    role: "Управител",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop", alt: "Работна среда" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop", alt: "Обучение на работното място" },
  { src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop", alt: "Екипна работа" },
  { src: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=900&auto=format&fit=crop", alt: "Практическо обучение" },
];

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

      <section className="shell py-16">
        <SectionHeader eyebrow="Обяви" title="Актуални позиции" description="Филтрирайте по специалност, град и тип заетост." />
        <div className="mt-8">
          <KarieriBrowser />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell">
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

      <FeatureBanner
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
        eyebrow="Съвети"
        statement="Три стъпки, които доближават всеки специалист до следващата роля в кариерата му."
        items={[
          { icon: <FileEdit size={22} strokeWidth={1.75} />, title: "Изгответе силно CV", description: "Подчертайте квалификация, сертификати и практически опит." },
          { icon: <MessagesSquare size={22} strokeWidth={1.75} />, title: "Подгответе се за интервю", description: "Прегледайте типични въпроси за здравни специалисти." },
          { icon: <Compass size={22} strokeWidth={1.75} />, title: "Планирайте развитието си", description: "Използвайте обученията на БАПЗГ за нови компетенции." },
        ]}
      />

      <section className="bg-wine-deep py-16">
        <div className="shell">
          <SectionHeader eyebrow="Отзиви" title="Истории на работодатели" align="center" tone="dark" />
          <div className="mt-10 rounded-[var(--radius-lg)] bg-white/[0.04] py-10">
            <QuoteSlider quotes={employerStories} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center lg:gap-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Видео</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Кариера в здравните грижи</h2>
            <div className="mt-6">
              <VideoSection
                poster="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
                title="Кариера в здравните грижи"
              />
            </div>
          </div>
          <Reveal direction="left">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Галерия</span>
            <h3 className="font-display mt-3 text-xl font-semibold text-ink">Работна среда</h3>
            <div className="mt-6">
              <Gallery images={galleryImages} layout="grid" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-16">
        <SectionHeader eyebrow="Въпроси" title="Често задавани въпроси" />
        <div className="mt-8 max-w-3xl">
          <FAQAccordion items={careerFaqs} />
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
