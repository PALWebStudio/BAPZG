import type { Metadata } from "next";
import { Video } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import DocumentCard from "@/components/shared/DocumentCard";
import CTASection from "@/components/shared/CTASection";
import LibraryBrowser from "@/components/biblioteka/LibraryBrowser";
import Reveal from "@/components/shared/Reveal";
import { documents } from "@/data/documents";

export const metadata: Metadata = {
  title: "Библиотека — БАПЗГ",
  description: "Наредби, стандарти, добри практики и формуляри за специалисти по здравни грижи.",
};

const mostDownloaded = documents.filter((d) => d.downloadable).slice(0, 3);

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
          <SectionHeader eyebrow="Мултимедия" title="Видео ресурси" />
          <Reveal className="mt-8 flex flex-col items-center gap-3 rounded-[var(--radius-md)] border border-dashed border-black/[0.12] py-16 text-center">
            <Video size={28} className="text-muted/40" aria-hidden="true" />
            <p className="text-[14px] text-muted/60">Видео ресурсите предстои да бъдат добавени.</p>
          </Reveal>
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
