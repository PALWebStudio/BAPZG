import type { Metadata } from "next";
import { ShieldCheck, GraduationCap, HeartHandshake, Users2, FileText, ClipboardCheck, Send, BadgeCheck } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import InfoCard from "@/components/shared/InfoCard";
import MembershipPlanCard from "@/components/shared/MembershipPlanCard";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import Reveal from "@/components/shared/Reveal";
import { membershipFaqs } from "@/data/faqs";

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

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Защо да се присъедините" title="Ползи от членството" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={<ShieldCheck size={22} strokeWidth={1.75} />} title="Правна защита" description="Професионална и правна подкрепа при трудови и етични въпроси." />
          <FeatureCard icon={<GraduationCap size={22} strokeWidth={1.75} />} title="Продължаващо обучение" description="Достъп до курсове, уебинари и конференции за професионално развитие." />
          <FeatureCard icon={<Users2 size={22} strokeWidth={1.75} />} title="Общност" description="Свързаност с над 50 000 колеги от цялата страна." />
          <FeatureCard icon={<HeartHandshake size={22} strokeWidth={1.75} />} title="Представителство" description="Застъпничество пред институции по въпроси на професията." />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader
            eyebrow="Изисквания"
            title="Кой може да стане член"
          />
          <div className="mt-8 max-w-3xl">
            <InfoCard
              title="Право на членство"
              items={[
                "Медицински сестри и акушерки с призната квалификация",
                "Лекарски асистенти и фелдшери",
                "Рехабилитатори и други специалисти по здравни грижи",
                "Студенти в акредитирани програми по здравни грижи (студентско членство)",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
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
      </section>

      <section className="bg-wine-deep py-16 text-white">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader
            eyebrow="Процес"
            title="Кандидатстване в 4 стъпки"
            align="center"
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

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
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
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Въпроси" title="Често задавани въпроси" />
          <div className="mt-8 max-w-3xl">
            <FAQAccordion items={membershipFaqs} />
          </div>
        </div>
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
