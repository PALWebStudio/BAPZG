import type { Metadata } from "next";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import EventsCarousel from "@/components/shared/EventsCarousel";
import EventsCalendar from "@/components/sabitiya/EventsCalendar";
import Gallery from "@/components/shared/Gallery";
import VideoSection from "@/components/shared/VideoSection";
import CTASection from "@/components/shared/CTASection";
import Timeline from "@/components/shared/Timeline";
import Reveal from "@/components/shared/Reveal";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Събития — БАПЗГ",
  description: "Предстоящи и минали събития, конгреси и регионални срещи на БАПЗГ.",
};

const upcoming = events.filter((e) => e.status === "upcoming");
const past = events.filter((e) => e.status === "past");
const pastTimeline = past.map((e) => ({
  year: e.year,
  title: e.title,
  description: `${e.month} ${e.date} · ${e.online ? "Онлайн" : e.location} — ${e.excerpt}`,
}));

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop", alt: "Конгрес на БАПЗГ" },
  { src: "https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=900&auto=format&fit=crop", alt: "Практически курс" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop", alt: "Работна среща" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop", alt: "Оперативни грижи" },
  { src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=900&auto=format&fit=crop", alt: "Дискусионен панел" },
  { src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop", alt: "Регионална среща" },
];

export default function SabitiyaPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Календар"
        title="Събития на БАПЗГ"
        subtitle="Конгреси, регионални срещи и инициативи, обединяващи професионалистите по здравни грижи."
        breadcrumbs={[{ label: "Начало", href: "/" }, { label: "Събития" }]}
        image="https://images.unsplash.com/photo-1587556930799-8dca6fad6d41?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="shell py-16">
        <SectionHeader eyebrow="Календар" title="Всички събития на един поглед" description="Кликнете върху отбелязан ден, за да видите детайли за събитието." />
        <div className="mt-8">
          <EventsCalendar events={events} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell">
          <SectionHeader eyebrow="Предстоящо" title="Предстоящи събития" />
          <div className="mt-8">
            <EventsCarousel events={upcoming} />
          </div>
        </div>
      </section>

      <section className="shell py-16">
        <div className="grid gap-8 lg:grid-cols-[0.3fr_0.7fr] lg:gap-12">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Архив</span>
            <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Минали събития</h2>
          </Reveal>
          <Timeline items={pastTimeline} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell">
          <SectionHeader eyebrow="Спомени" title="Галерия от събития" />
          <div className="mt-8">
            <Gallery images={galleryImages} layout="masonry" />
          </div>
        </div>
      </section>

      <section className="shell py-16 grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center lg:gap-14">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-burgundy">Видео</span>
          <h2 className="font-display mt-3 text-2xl font-semibold text-ink sm:text-3xl">Кадри от последния конгрес</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-muted/65">
            Прегледайте акценти от последния Национален конгрес по здравни грижи — лекции, дискусии и мрежа от
            специалисти от цялата страна.
          </p>
        </Reveal>
        <VideoSection
          poster="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
          title="Национален конгрес по здравни грижи"
        />
      </section>

      <CTASection
        title="Не пропускайте следващото събитие"
        subtitle="Следете календара на БАПЗГ и се регистрирайте своевременно за предстоящите инициативи."
        primaryCta={{ label: "Свържи се с нас", href: "/kontakti" }}
        secondaryCta={{ label: "Виж обученията", href: "/obucheniya" }}
      />
    </>
  );
}
