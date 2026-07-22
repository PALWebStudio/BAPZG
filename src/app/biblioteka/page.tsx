import type { Metadata } from "next";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import DocumentCard from "@/components/shared/DocumentCard";
import VideoSection from "@/components/shared/VideoSection";
import ImageBanner from "@/components/shared/ImageBanner";
import CTASection from "@/components/shared/CTASection";
import LibraryBrowser from "@/components/biblioteka/LibraryBrowser";
import Reveal from "@/components/shared/Reveal";
import { documents } from "@/data/documents";

export const metadata: Metadata = {
  title: "Библиотека — БАПЗГ",
  description: "Наредби, стандарти, добри практики и формуляри за специалисти по здравни грижи.",
};

const mostDownloaded = documents.filter((d) => d.downloadable).slice(0, 3);
const guidelines = documents.filter((d) => d.category === "Стандарти" || d.category === "Добри практики");

export default function BibliotekaPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Ресурси"
        title="Библиотека с документи"
        subtitle="Наредби, стандарти, добри практики и формуляри на едно място."
        breadcrumbs={[{ label: "Начало", href: "/" }, { label: "Библиотека" }]}
        image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="bg-white py-16">
        <div className="shell grid gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:gap-12">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Най-търсени</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Най-изтегляни документи</h2>
          </Reveal>
          <div className="space-y-4">
            {mostDownloaded.map((doc) => <DocumentCard key={doc.id} doc={doc} />)}
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <SectionHeader
          eyebrow="Всички документи"
          title="Търсене в библиотеката"
          description="Търсете по заглавие или филтрирайте по категория."
        />
        <div className="mt-8">
          <LibraryBrowser documents={documents} />
        </div>
      </section>

      <section className="shell py-16">
        <ImageBanner
          image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop"
          eyebrow="Знанието е сила"
          title="Всички официални документи на едно място, винаги под ръка"
          subtitle="Наредби, стандарти и формуляри — обновявани редовно от екипа на БАПЗГ."
          align="center"
        />
      </section>

      <section className="bg-white py-16">
        <div className="shell grid gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:gap-12">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Насоки</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Стандарти и добри практики</h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-muted/65">Ключови документи за качествена и безопасна практика.</p>
          </Reveal>
          <div className="space-y-4">
            {guidelines.map((doc) => <DocumentCard key={doc.id} doc={doc} />)}
          </div>
        </div>
      </section>

      <section className="shell py-16 grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center lg:gap-14">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Мултимедия</span>
          <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Видео ресурси</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-muted/65">
            Кратко видео ръководство за навигация в библиотеката и намиране на нужния документ за секунди.
          </p>
        </Reveal>
        <VideoSection
          poster="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop"
          title="Как да ползвате библиотеката на БАПЗГ"
        />
      </section>

      <CTASection
        title="Не намирате нужния документ?"
        subtitle="Свържете се с екипа на БАПЗГ за съдействие с конкретен документ или формуляр."
        primaryCta={{ label: "Свържи се с нас", href: "/kontakti" }}
      />
    </>
  );
}
