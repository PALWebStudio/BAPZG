import type { Metadata } from "next";
import Link from "next/link";
import { FileDown, Phone, BookOpen, ClipboardList, Mail as MailIcon, Archive as ArchiveIcon } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Reveal from "@/components/shared/Reveal";
import PublicationExperience from "@/components/biblioteka/PublicationExperience";
import SubscriptionSteps from "@/components/biblioteka/SubscriptionSteps";
import ImportantNotice from "@/components/shared/ImportantNotice";
import { getLatestIssue, getArchiveByYear, publicationMeta } from "@/data/publications";

export const metadata: Metadata = {
  title: "Списание „Здравни грижи“ — БАПЗГ",
  description: publicationMeta.magazine.description,
};

const latestIssue = getLatestIssue("magazine");
const archiveByYear = getArchiveByYear("magazine");

const quickLinks = [
  { icon: ClipboardList, label: "Изисквания за структуриране на научна публикация", href: "#iziskvania" },
  { icon: MailIcon, label: "Мотивационно писмо", href: "#motivatsionno-pismo" },
  { icon: BookOpen, label: "Как да се абонирате", href: "#abonament" },
  { icon: ArchiveIcon, label: "Архив", href: "#arhiv" },
];

const structureItems = [
  "Заглавие",
  "Автори и институции",
  "Резюме",
  "Ключови думи",
  "Увод",
  "Цел",
  "Материал и методи",
  "Резултати",
  "Обсъждане",
  "Заключение",
  "Библиография",
  "Технически изисквания",
  "Начин за изпращане",
];

export default function MagazinePage() {
  return (
    <>
      <section className="bg-wine px-6 pb-10 pt-32 text-white lg:pt-36">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Библиотека", href: "/biblioteka" },
              { label: "Списание „Здравни грижи“" },
            ]}
          />
          <span className="mt-6 inline-flex w-fit rounded-full bg-burgundy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            Официално издание на БАПЗГ
          </span>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            Списание „Здравни грижи“
          </h1>
          <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-white/70">{publicationMeta.magazine.description}</p>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-3 rounded-[var(--radius-md)] border border-black/[0.06] bg-cream p-4 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-burgundy/10 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-white">
                  <item.icon size={16} />
                </span>
                <span className="text-[13px] font-semibold leading-snug text-ink">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PublicationExperience latestIssue={latestIssue} archiveByYear={archiveByYear} />

      <section id="iziskvania" className="shell scroll-mt-28 py-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">За авторите</span>
          <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
            Изисквания за структуриране на научна публикация
          </h2>
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-muted/65">
            Съдържанието на този раздел предстои да бъде предоставено от редакционния екип. По-долу е структурата,
            която ще следват официалните изисквания.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {structureItems.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-black/[0.05] bg-cream px-4 py-3"
            >
              <span className="font-display text-sm font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[13.5px] font-medium text-ink">{item}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Документът предстои да бъде качен"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/[0.08] px-6 py-3 text-sm font-semibold text-muted/40"
        >
          <FileDown size={16} /> Свали официалните изисквания (очаквайте)
        </button>
      </section>

      <section id="motivatsionno-pismo" className="bg-white scroll-mt-28 py-16">
        <div className="shell">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">За кандидатстващите автори</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Мотивационно писмо</h2>
          </Reveal>
          <div className="mt-8 max-w-2xl rounded-[var(--radius-md)] border border-black/[0.05] bg-cream p-6 shadow-[var(--shadow-card)]">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted/50">Предназначено за</p>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink/85">
              Автори, желаещи да кандидатстват с научна публикация в списание „Здравни грижи“.
            </p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-muted/60">
              Пълното съдържание и примерен образец предстои да бъдат публикувани от редакционния екип на БАПЗГ.
            </p>
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Документът предстои да бъде качен"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] px-6 py-3 text-sm font-semibold text-muted/40"
            >
              <FileDown size={16} /> Свали примерен документ (очаквайте)
            </button>
          </div>
        </div>
      </section>

      <section id="abonament" className="shell scroll-mt-28 py-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Абонамент</span>
          <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
            Как да се абонирате за списание „Здравни грижи“
          </h2>
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-muted/65">
            Уважаеми професионалисти по здравни грижи, абонаментът за 2026 г. ще се осъществява само за електронния
            вариант на списанието.
          </p>
        </Reveal>
        <div className="mt-10">
          <SubscriptionSteps />
        </div>
      </section>

      <section className="bg-wine-deep py-16 text-white">
        <div className="shell text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">Годишен абонамент</span>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
              <div>
                <p className="font-display text-3xl font-semibold sm:text-4xl">15,00 лв.</p>
                <p className="mt-1 text-[13px] text-white/60">при плащане до края на 2025 г.</p>
              </div>
              <div className="hidden h-12 w-px bg-white/15 sm:block" />
              <div>
                <p className="font-display text-3xl font-semibold sm:text-4xl">8,00 €</p>
                <p className="mt-1 text-[13px] text-white/60">през 2026 г.</p>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-[14.5px] leading-relaxed text-white/75">
              Абонатите с редовно членство в БАПЗГ получават <span className="font-semibold text-gold-light">15 кредитни точки</span> за
              продължаващо обучение.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell max-w-2xl">
          <ImportantNotice>
            <p className="font-semibold text-ink">Внимание:</p>
            <p className="mt-1">
              Членове на БАПЗГ, които са заплатили за електронен абонамент, но нямат активна регистрация в
              платформата за дистанционно обучение, няма да получат кредитни точки.
            </p>
          </ImportantNotice>
        </div>
      </section>

      <section className="shell py-12 text-center">
        <p className="text-[14.5px] text-muted/65">
          Повече информация можете да получите на телефон:{" "}
          <a href="tel:0888615600" className="font-semibold text-burgundy hover:text-burgundy-light">
            <Phone size={14} className="mb-0.5 mr-1 inline" /> 0888 615 600
          </a>
        </p>
      </section>
    </>
  );
}
