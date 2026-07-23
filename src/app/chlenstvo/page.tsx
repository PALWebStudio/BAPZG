import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
  Users2,
  HeartPulse,
  Bone,
  Stethoscope,
  Scale,
  ArrowRight,
  FileDown,
  MapPin,
  Landmark,
  BadgeCheck,
} from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionIntro from "@/components/shared/SectionIntro";
import ImageBanner from "@/components/shared/ImageBanner";
import InfoCard from "@/components/shared/InfoCard";
import ImportantNotice from "@/components/shared/ImportantNotice";
import FAQAccordion from "@/components/shared/FAQAccordion";
import QuoteBlock from "@/components/shared/QuoteBlock";
import RelatedArticles from "@/components/shared/RelatedArticles";
import CTASection from "@/components/shared/CTASection";
import Reveal from "@/components/shared/Reveal";
import { membershipFaqs } from "@/data/faqs";
import { newsArticles } from "@/data/news";

const benefits = [
  { icon: ShieldCheck, title: "Правна защита", description: "Професионална и правна подкрепа при трудови и етични въпроси." },
  { icon: GraduationCap, title: "Продължаващо обучение", description: "Достъп до курсове, уебинари и конференции за професионално развитие." },
  { icon: Users2, title: "Общност", description: "Свързаност с над 50 000 колеги от цялата страна." },
  { icon: HeartHandshake, title: "Представителство", description: "Застъпничество пред институции по въпроси на професията." },
];

export const metadata: Metadata = {
  title: "Членство — БАПЗГ",
  description: "Ползи от членството, застраховки и регистрация на новопостъпващи членове в БАПЗГ.",
};

const insuranceHighlights = [
  {
    icon: HeartPulse,
    title: "Дневни пари при болничен престой",
    description: "Финансова подкрепа при стационарно лечение от минимум 4 дни поради заболяване, злополука или раждане.",
  },
  {
    icon: Bone,
    title: "Обезщетение при фрактура",
    description: "Фиксирана сума при леки, средни и тежки счупвания на кост.",
  },
  {
    icon: Stethoscope,
    title: "Критично заболяване",
    description: "Обезщетение при диагностициране на злокачествено новообразувание, инсулт или инфаркт на миокарда.",
  },
  {
    icon: Scale,
    title: "Професионална отговорност",
    description: "Застрахователна защита при претенции от пациенти, свързани с професионалната Ви дейност.",
  },
];

const requiredDocuments = [
  "Заявление по образец",
  "Диплома — копие и оригинал за завършено базово образование в направление „Здравни грижи“",
  "Диплома — копие и оригинал за специалност или за научна степен – при наличие на такава",
  "Трудова книжка — копие и оригинал или препис-извлечение, или друг документ, удостоверяващ трудов стаж по специалността — съгласно чл. 35, ал. 3 от ЗСОМСААМСЗПФ",
  "Платежен документ за внесен членски внос: встъпителен и месечен",
];

const membershipFees2026 = [
  { code: "ВЧВ", label: "Встъпителен членски внос", amount: "31,00 €" },
  { code: "ЧВ", label: "Членски внос — месечен", amount: "6,20 €" },
];

const submissionOptions = [
  "В Регионалната колегия на територията, на която лицето упражнява професията си.",
  "В БАПЗГ – Централа — само за лица, упражняващи регулирана медицинска професия извън Република България.",
];

const paymentOptions = [
  "По банкова сметка на съответната регионална колегия, в която лицето подава документите си за членство (информация за банковата сметка се получава от председателя на регионалната колегия).",
  "По банкова сметка на БАПЗГ – Централа — само за лица, упражняващи регулирана медицинска професия извън Република България.",
];

export default function ChlenstvoPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Присъединете се"
        title="Членство в БАПЗГ"
        subtitle="Станете част от най-голямата професионална общност на здравни специалисти в България."
        breadcrumbs={[{ label: "Начало", href: "/" }, { label: "Членство" }]}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="shell py-16">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Защо да се присъедините</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Ползи от членството</h2>
          </Reveal>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} className="border-l-2 border-gold/50 pl-5">
                <b.icon size={22} className="text-burgundy" strokeWidth={1.75} />
                <h3 className="font-display mt-3 text-base font-semibold text-ink">{b.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted/65">{b.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <div className="rounded-[var(--radius-lg)] border-2 border-gold/60 bg-gradient-to-br from-gold/[0.12] via-cream to-gold/[0.08] p-8 shadow-[0_0_0_1px_rgba(201,150,63,0.15),0_24px_60px_rgba(201,150,63,0.18)] sm:p-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-burgundy">Застраховки</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">
              Всеки редовен член на БАПЗГ е реално застрахован
            </h2>
            <p className="mt-4 text-[14.5px] leading-relaxed text-muted/70">
              БАПЗГ осигурява финансова подкрепа при заболяване или злополука, както и застраховка „Професионална
              отговорност“ — с решение на Управителния съвет, за всички редовни членове.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {insuranceHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-[var(--radius-md)] border border-gold/25 bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]">
                  <item.icon size={22} className="text-burgundy" strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted/65">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-10 flex justify-center">
            <Link
              href="/chlenstvo/zastrahovki"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-burgundy px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-burgundy-light active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                <rect
                  x="1.5"
                  y="1.5"
                  width="calc(100% - 3px)"
                  height="calc(100% - 3px)"
                  rx="999"
                  ry="999"
                  pathLength="100"
                  fill="none"
                  stroke="var(--color-gold-light)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="16 84"
                  className="btn-trace"
                />
              </svg>
              <span className="relative z-10 inline-flex items-center gap-2">
                Научи повече за застраховките
                <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell">
          <SectionIntro
            eyebrow="Вашата професионална общност"
            title="Част от признатата общност на здравните специалисти"
            image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
            reverse
          >
            <p>
              Здравните грижи в България са регулирана професия, а БАПЗГ е нейната професионална организация.
              Вписването в регистъра на асоциацията върви ръка за ръка с практикуването на професията и ви отваря
              достъп до общност от над 50 000 колеги, застраховки, продължаващо обучение и професионална защита.
            </p>
            <InfoCard
              title="Кой се присъединява към БАПЗГ"
              items={[
                "Медицински сестри и акушерки с призната квалификация",
                "Лекарски асистенти и фелдшери",
                "Рехабилитатори и други специалисти по здравни грижи",
              ]}
            />
          </SectionIntro>
        </div>
      </section>

      <section className="shell py-16">
        <QuoteBlock
          quote="Членството в БАПЗГ ми даде достъп до обучения и общност от колеги, каквато не бих намерила другаде."
          author="Медицинска сестра, член на БАПЗГ"
          role="Регионална колегия София"
        />
      </section>

      <section className="bg-white py-16">
        <div className="shell">
          <SectionHeader eyebrow="Новопостъпващи" title="Регистрация на новопостъпващи членове" />

          <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
            <Reveal delay={0}>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border-2 border-gold/30 bg-cream p-8 shadow-[var(--shadow-card)]">
                <span className="font-display text-4xl font-semibold text-gold">01</span>
                <h3 className="font-display mt-4 text-lg font-semibold text-ink">Необходими документи</h3>
                <ol className="mt-4 space-y-3">
                  {requiredDocuments.map((doc, i) => (
                    <li key={doc} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-muted/70">
                      <span className="font-display mt-0.5 shrink-0 text-[12.5px] font-semibold text-gold">{i + 1}.</span>
                      {doc}
                    </li>
                  ))}
                </ol>
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  title="Формулярът предстои да бъде качен"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-black/[0.08] px-5 py-2.5 text-[13px] font-semibold text-muted/40"
                >
                  <FileDown size={15} /> Изтегли заявление (очаквайте)
                </button>

                <div className="mt-6">
                  <ImportantNotice>
                    <p className="font-semibold text-ink">
                      Специална разпоредба — чл. 12, ал. 4 от устава на БАПЗГ
                    </p>
                    <p className="mt-1">
                      Лицата, които не са изпълнили задължението си по § 6 от Преходните и заключителни разпоредби на
                      ЗСОМСААМСЗПФ, вече имат правна възможност да го изпълнят.
                    </p>
                  </ImportantNotice>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border-2 border-burgundy/25 bg-burgundy/[0.04] p-8 shadow-[var(--shadow-card)]">
                <span className="font-display text-4xl font-semibold text-burgundy">02</span>
                <h3 className="mt-4 flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <MapPin size={17} className="text-burgundy" /> Къде се подават документите?
                </h3>
                <ol className="mt-3 space-y-2.5">
                  {submissionOptions.map((item, i) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted/65">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-burgundy/60" />
                      <span>
                        <span className="font-semibold text-ink">{i + 1}.</span> {item}
                      </span>
                    </li>
                  ))}
                </ol>

                <h3 className="mt-6 flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <Landmark size={17} className="text-burgundy" /> Плащане на членски внос
                </h3>
                <div className="mt-3 space-y-3">
                  {membershipFees2026.map((fee) => (
                    <div key={fee.code} className="rounded-[var(--radius-md)] border border-burgundy/20 bg-white p-5 shadow-[var(--shadow-card)]">
                      <p className="text-[10.5px] font-semibold uppercase tracking-wider text-muted/50">{fee.code} · Членски внос за 2026 г.</p>
                      <p className="mt-1 text-[13px] text-ink">{fee.label}</p>
                      <p className="font-display mt-2 text-xl font-semibold text-burgundy">{fee.amount}</p>
                    </div>
                  ))}
                </div>
                <ol className="mt-4 space-y-2.5">
                  {paymentOptions.map((item, i) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted/65">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-burgundy/60" />
                      <span>
                        <span className="font-semibold text-ink">{i + 1}.</span> {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex h-full flex-col rounded-[var(--radius-lg)] border-2 border-gold/30 bg-cream p-8 shadow-[var(--shadow-card)]">
                <span className="font-display text-4xl font-semibold text-gold">03</span>
                <h3 className="mt-4 flex items-center gap-2 font-display text-lg font-semibold text-ink">
                  <BadgeCheck size={17} className="text-gold" /> Вписване и издаване на членска карта
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted/70">
                  Регионалната колегия проверява документите и вписва лицето в 14-дневен срок от подаването им.
                  Управителният съвет на БАПЗГ издава членска карта в срок до един месец от вписването в националния
                  регистър.
                </p>
                <details className="group mt-5 rounded-[var(--radius-md)] border border-black/[0.05] bg-white">
                  <summary className="cursor-pointer list-none px-5 py-3.5 text-[12.5px] font-semibold text-burgundy [&::-webkit-details-marker]:hidden">
                    Пълен текст на правното основание (чл. 36 от ЗСОМСААМСЗПФ)
                  </summary>
                  <div className="space-y-3 px-5 pb-5 text-[12.5px] leading-relaxed text-muted/70">
                    <p>
                      Чл. 36. (1) Управителният съвет на регионалната колегия на Българската асоциация на
                      професионалистите по здравни грижи проверява дали са налице изискванията по този закон и по
                      глава седма от Закона за здравето за вписване на лицата, упражняващи професиите по чл. 1 в
                      регистъра на колегията.
                    </p>
                    <p>
                      (2) Ако лицата отговарят на изискванията по ал. 1, вписването се извършва в 14-дневен срок от
                      подаването на документите по чл. 35, ал. 2 и 3.
                    </p>
                    <p>
                      (3) Управителният съвет на регионалната колегия на БАПЗГ изпраща заявленията до управителния
                      съвет на БАПЗГ за вписване в националния регистър. В срок до един месец управителният съвет на
                      БАПЗГ издава членска карта на лицето по образец, утвърден от Националния съвет.
                    </p>
                    <p>(4) Отказ за вписване в регистъра на регионалната колегия на БАПЗГ се прави при:</p>
                    <p>
                      1. непредставяне на документите по чл. 35, ал. 2 и 3;
                      <br />
                      2. при заличаване на лицето от регистъра на друга регионална колегия — за срока на наказанието.
                    </p>
                    <p>
                      (5) Отказът за вписване в регистъра може да се обжалва в 7-дневен срок от получаване на
                      съобщението пред управителния съвет на БАПЗГ, който се произнася с решение в едномесечен срок.
                    </p>
                    <p>
                      (6) Решенията на управителния съвет на БАПЗГ подлежат на обжалване по реда на
                      Административнопроцесуалния кодекс.
                    </p>
                  </div>
                </details>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <ImageBanner
          image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1400&auto=format&fit=crop"
          eyebrow="Новопостъпващи"
          title="Всеки специалист заслужава силна професионална общност зад гърба си"
          subtitle="Подайте документите си в Регионалната колегия по месторабота и станете част от общността."
          cta={{ label: "Свържи се с нас", href: "/kontakti" }}
        />
      </section>

      <section className="bg-white py-16">
        <div className="shell">
          <SectionHeader eyebrow="Въпроси" title="Често задавани въпроси" />
          <div className="mt-8 max-w-3xl">
            <FAQAccordion items={membershipFaqs} />
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <RelatedArticles articles={newsArticles.slice(0, 3)} title="Свързано за членовете" />
      </section>

      <CTASection
        title="Готови ли сте да подадете документи?"
        subtitle="Свържете се с най-близката регионална колегия за съдействие по вписването."
        primaryCta={{ label: "Свържи се с нас", href: "/kontakti" }}
        secondaryCta={{ label: "Виж библиотеката с формуляри", href: "/biblioteka" }}
      />
    </>
  );
}
