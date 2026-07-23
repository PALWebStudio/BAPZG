import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, GraduationCap, TrendingUp, Globe2 } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import QuoteBlock from "@/components/shared/QuoteBlock";
import Gallery from "@/components/shared/Gallery";
import VideoSection from "@/components/shared/VideoSection";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import CTASection from "@/components/shared/CTASection";
import { professions } from "@/data/professions";

const opportunityIcons = [Building2, GraduationCap, TrendingUp, Globe2];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return professions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profession = professions.find((p) => p.slug === slug);
  if (!profession) return { title: "Професия — БАПЗГ" };
  return {
    title: `${profession.title} — Професии в здравните грижи — БАПЗГ`,
    description: profession.description,
  };
}

export default async function ProfessionDetailPage({ params }: Props) {
  const { slug } = await params;
  const profession = professions.find((p) => p.slug === slug);
  if (!profession) notFound();

  const related = professions.filter((p) => p.slug !== profession.slug).slice(0, 3);

  return (
    <>
      <InternalPageHero
        eyebrow="Професии в здравните грижи"
        title={profession.title}
        subtitle={profession.description}
        breadcrumbs={[
          { label: "Начало", href: "/" },
          { label: "Професии", href: "/#access" },
          { label: profession.title },
        ]}
        image={profession.image}
      />

      <section className="shell py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]">
            <Image
              src={profession.image}
              alt={profession.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Мото на професията</span>
            <p className="font-display mt-4 text-2xl font-medium italic leading-snug text-ink sm:text-3xl">
              „{profession.quote}“
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Основни отговорности</h2>
              <ul className="mt-4 space-y-2.5">
                {profession.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted/70">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <QuoteBlock quote={profession.quote} author={profession.title} role="Мото на професията" />
          </div>

          <aside className="h-fit rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-lg font-semibold text-ink">Искаш да развиеш тази професия?</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted/60">
              БАПЗГ подкрепя специалистите с обучения, професионална защита и общност от над 50 000 колеги.
            </p>
            <Link
              href="/chlenstvo"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-burgundy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              Стани член на БАПЗГ
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/karieri"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-burgundy/30 px-6 py-3.5 text-sm font-semibold text-burgundy transition hover:bg-burgundy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              Виж отворени позиции
            </Link>
          </aside>
        </div>
      </section>

      <section className="shell py-14">
        <SectionHeader
          eyebrow="Кариера"
          title="Възможности за професионална реализация"
          description="Къде и как може да се развива тази професия."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profession.opportunities.map((opportunity, i) => {
            const Icon = opportunityIcons[i % opportunityIcons.length];
            return (
              <FeatureCard
                key={opportunity.title}
                icon={<Icon size={22} strokeWidth={1.75} />}
                title={opportunity.title}
                description={opportunity.description}
              />
            );
          })}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="shell">
          <SectionHeader eyebrow="Отблизо" title="Галерия" description="Моменти от ежедневната работа на професията." />
          <div className="mt-8">
            <Gallery images={profession.gallery} layout="masonry" />
          </div>
        </div>
      </section>

      <section className="shell py-14 grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center lg:gap-14">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Видео</span>
          <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">{profession.title} в действие</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-muted/65">
            Кратък поглед към ежедневието на професията — предизвикателствата, екипната работа и удовлетворението
            от грижата за пациента.
          </p>
        </div>
        <VideoSection poster={profession.image} title={`${profession.title} в действие`} />
      </section>

      {related.length > 0 && (
        <section className="bg-white py-14">
          <div className="shell">
            <h2 className="font-display text-xl font-semibold text-ink">Други професии в здравните грижи</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/profesii/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-[15px] font-semibold text-ink">{r.title}</h3>
                    <p className="mt-1 text-[12.5px] italic text-muted/55">„{r.quote}“</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Стани част от общността на БАПЗГ"
        subtitle="Развивай професията си с подкрепата на над 50 000 колеги в цялата страна."
        primaryCta={{ label: "Стани член", href: "/chlenstvo" }}
        secondaryCta={{ label: "Виж обученията", href: "/obucheniya" }}
      />
    </>
  );
}
