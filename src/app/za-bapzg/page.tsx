import type { Metadata } from "next";
import { Users2, ShieldCheck, HeartHandshake } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionIntro from "@/components/shared/SectionIntro";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import QuoteBlock from "@/components/shared/QuoteBlock";
import Timeline from "@/components/shared/Timeline";
import LeadershipCards from "@/components/shared/LeadershipCards";
import RegionalCards from "@/components/shared/RegionalCards";
import PartnersGrid from "@/components/shared/PartnersGrid";
import Gallery from "@/components/shared/Gallery";
import VideoSection from "@/components/shared/VideoSection";
import CTASection from "@/components/shared/CTASection";
import Reveal from "@/components/shared/Reveal";
import { leadership } from "@/data/leadership";
import { regions } from "@/data/regions";
import { partners } from "@/lib/data";

export const metadata: Metadata = {
  title: "За БАПЗГ — Българска асоциация на професионалистите по здравни грижи",
  description:
    "Мисия, история, ръководство и регионална структура на Българската асоциация на професионалистите по здравни грижи.",
};

const timelineItems = [
  {
    year: "1996",
    title: "Основаване на асоциацията",
    description: "БАПЗГ е учредена с цел обединяване и представителство на специалистите по здравни грижи в България.",
  },
  {
    year: "2005",
    title: "Присъединяване към международни организации",
    description: "Асоциацията установява партньорства с водещи европейски и международни сестрински организации.",
  },
  {
    year: "2015",
    title: "Разширяване на регионалната мрежа",
    description: "Създадени са допълнителни регионални колегии за по-добро обслужване на членовете в цялата страна.",
  },
  {
    year: "2024",
    title: "Дигитална трансформация",
    description: "БАПЗГ инвестира в дигитални услуги и продължаващо обучение за своите членове.",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop", alt: "Екип на БАПЗГ" },
  { src: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=900&auto=format&fit=crop", alt: "Национален конгрес" },
  { src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop", alt: "Регионална колегия" },
  { src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=900&auto=format&fit=crop", alt: "Работна среща" },
  { src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=900&auto=format&fit=crop", alt: "Дискусионен панел" },
];

export default function ZaBapzgPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Кои сме ние"
        title="За БАПЗГ"
        subtitle="Обединяваме, защитаваме и развиваме над 50 000 професионалисти по здравни грижи в България."
        breadcrumbs={[{ label: "Начало", href: "/" }, { label: "За БАПЗГ" }]}
        image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionIntro
          eyebrow="Представяне"
          title="Национално представителна организация на здравните специалисти"
          image="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1000&auto=format&fit=crop"
        >
          <p>
            Българската асоциация на професионалистите по здравни грижи (БАПЗГ) е национално представителна
            организация, обединяваща медицински сестри, акушерки, лекарски асистенти, рехабилитатори и други
            специалисти по здравни грижи.
          </p>
          <p>
            Асоциацията работи за защита на професионалните права на своите членове, за развитие на
            професиите и за издигане на качеството на здравните грижи в България.
          </p>
        </SectionIntro>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-4">
        <SectionHeader eyebrow="Основа" title="Мисия, визия и ценности" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<HeartHandshake size={22} strokeWidth={1.75} />}
            title="Мисия"
            description="Да обединяваме, защитаваме и развиваме професионалистите по здравни грижи в България."
          />
          <FeatureCard
            icon={<ShieldCheck size={22} strokeWidth={1.75} />}
            title="Визия"
            description="Здравни грижи с високо качество, признание и достойни условия на труд за всеки специалист."
          />
          <FeatureCard
            icon={<Users2 size={22} strokeWidth={1.75} />}
            title="Ценности"
            description="Професионализъм, солидарност, почтеност и грижа за общността от специалисти."
          />
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <QuoteBlock
          quote="Заедно можем повече. Заедно сме бъдещето на здравните грижи в България."
          author="БАПЗГ"
          role="Мото на асоциацията"
        />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="История" title="Основни етапи в развитието на асоциацията" />
          <div className="mt-10 max-w-3xl">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader
          eyebrow="Ръководство"
          title="Управителен съвет"
          description="Примерни данни — имената ще бъдат заменени с официалния състав на ръководството."
        />
        <div className="mt-10">
          <LeadershipCards members={leadership} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader
            eyebrow="Структура"
            title="Регионална структура"
            description="БАПЗГ работи чрез мрежа от регионални колегии в цялата страна."
          />
          <div className="mt-10">
            <RegionalCards regions={regions.slice(0, 8)} />
          </div>
        </div>
      </section>

      <section className="bg-wine-deep py-16 text-white">
        <div className="mx-auto max-w-[var(--container-width)] px-6 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              Международно сътрудничество
            </span>
            <h2 className="font-display mt-3 text-2xl font-semibold sm:text-3xl">
              Член на международни организации
            </h2>
          </Reveal>
          <div className="mt-10">
            <PartnersGrid partners={partners} tone="dark" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Отблизо" title="Моменти от дейността на БАПЗГ" />
        <div className="mt-10">
          <Gallery images={galleryImages} layout="masonry" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Видео" title="Опознайте БАПЗГ" align="center" />
          <div className="mx-auto mt-10 max-w-3xl">
            <VideoSection
              poster="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
              title="Опознайте БАПЗГ"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Присъединете се към нашата общност"
        subtitle="Станете част от над 50 000 специалисти по здравни грижи в България."
        primaryCta={{ label: "Стани член", href: "/chlenstvo" }}
        secondaryCta={{ label: "Свържи се с нас", href: "/kontakti" }}
      />
    </>
  );
}
