import type { Metadata } from "next";
import { ShieldCheck, GraduationCap, HeartHandshake, Users2, FileText, ClipboardCheck, Send, BadgeCheck } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionIntro from "@/components/shared/SectionIntro";
import ImageBanner from "@/components/shared/ImageBanner";
import InfoCard from "@/components/shared/InfoCard";
import MembershipPlanCard from "@/components/shared/MembershipPlanCard";
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
  description: "Ползи от членството, видове членство, процес на кандидатстване и такси в БАПЗГ.",
};

const steps = [
  { icon: FileText, title: "Подайте формуляр", description: "Попълнете формуляра за членство онлайн или на място в регионална колегия." },
  { icon: ClipboardCheck, title: "Заявете членски внос", description: "Изберете вид членство и заплатете съответния членски внос." },
  { icon: Send, title: "Изпратете документи", description: "Приложете необходимите документи за професионална квалификация." },
  { icon: BadgeCheck, title: "Получете потвърждение", description: "След обработка получавате членска карта и достъп до услугите на БАПЗГ." },
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

      <section className="bg-white py-16">
        <div className="shell">
          <SectionIntro
            eyebrow="Изисквания"
            title="Кой може да стане член"
            image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
            reverse
          >
            <InfoCard
              title="Право на членство"
              items={[
                "Медицински сестри и акушерки с призната квалификация",
                "Лекарски асистенти и фелдшери",
                "Рехабилитатори и други специалисти по здравни грижи",
                "Студенти в акредитирани програми по здравни грижи (студентско членство)",
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
          <SectionHeader eyebrow="Варианти" title="Видове членство" align="center" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <MembershipPlanCard
              name="Редовно членство"
              priceNote="Примерна информация — годишен членски внос"
              description="За практикуващи специалисти по здравни грижи с призната квалификация."
              features={["Пълен достъп до обучения", "Правна и професионална защита", "Право на глас в регионалната колегия"]}
              ctaHref="/kontakti"
            />
            <MembershipPlanCard
              name="Студентско членство"
              priceNote="Примерна информация — намален членски внос"
              description="За студенти в специалности по здравни грижи."
              features={["Достъп до събития и обучения", "Менторска подкрепа", "Преференциални такси при завършване"]}
              featured
              ctaHref="/kontakti"
            />
            <MembershipPlanCard
              name="Почетно членство"
              priceNote="По решение на Управителния съвет"
              description="За специалисти с изключителен принос към професията."
              features={["Признание за заслуги", "Покана за ключови събития на БАПЗГ"]}
              ctaHref="/kontakti"
            />
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <ImageBanner
          image="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1400&auto=format&fit=crop"
          eyebrow="Присъединете се днес"
          title="Всеки специалист заслужава силна професионална общност зад гърба си"
          subtitle="Кандидатствайте за членство онлайн — процесът отнема само няколко минути."
          cta={{ label: "Кандидатствай сега", href: "/kontakti" }}
        />
      </section>

      <section className="bg-wine-deep py-16 text-white">
        <div className="shell">
          <SectionHeader
            eyebrow="Процес"
            title="Кандидатстване в 4 стъпки"
            align="center"
            tone="dark"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]">
                  <span className="font-display text-3xl font-semibold text-gold-light">{String(i + 1).padStart(2, "0")}</span>
                  <step.icon size={22} className="mt-4 text-gold" strokeWidth={1.75} />
                  <h3 className="mt-3 font-display text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <InfoCard
            title="Необходими документи"
            items={[
              "Диплома за завършено образование",
              "Документ за самоличност",
              "Попълнен формуляр за членство",
              "Снимка (за членска карта)",
            ]}
          />
          <InfoCard
            title="Такси за членство"
            description="Примерна информация до предоставяне на официални данни от асоциацията. Актуалните такси се обявяват от съответната регионална колегия при кандидатстване."
          />
        </div>
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
        title="Готови ли сте да се присъедините?"
        subtitle="Свържете се с най-близката регионална колегия или подайте документи онлайн."
        primaryCta={{ label: "Свържи се с нас", href: "/kontakti" }}
        secondaryCta={{ label: "Виж библиотеката с формуляри", href: "/biblioteka" }}
      />
    </>
  );
}
