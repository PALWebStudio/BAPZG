import type { Metadata } from "next";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import DocumentCard from "@/components/shared/DocumentCard";
import VideoSection from "@/components/shared/VideoSection";
import CTASection from "@/components/shared/CTASection";
import LibraryBrowser from "@/components/biblioteka/LibraryBrowser";
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
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Най-търсени" title="Най-изтегляни документи" />
          <div className="mt-8 space-y-4">
            {mostDownloaded.map((doc) => <DocumentCard key={doc.id} doc={doc} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader
          eyebrow="Всички документи"
          title="Търсене в библиотеката"
          description="Търсете по заглавие или филтрирайте по категория."
        />
        <div className="mt-8">
          <LibraryBrowser documents={documents} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Насоки" title="Стандарти и добри практики" description="Ключови документи за качествена и безопасна практика." />
          <div className="mt-8 space-y-4">
            {guidelines.map((doc) => <DocumentCard key={doc.id} doc={doc} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Мултимедия" title="Видео ресурси" align="center" />
        <div className="mx-auto mt-10 max-w-3xl">
          <VideoSection
            poster="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop"
            title="Как да ползвате библиотеката на БАПЗГ"
          />
        </div>
      </section>

      <CTASection
        title="Не намирате нужния документ?"
        subtitle="Свържете се с екипа на БАПЗГ за съдействие с конкретен документ или формуляр."
        primaryCta={{ label: "Свържи се с нас", href: "/kontakti" }}
      />
    </>
  );
}
