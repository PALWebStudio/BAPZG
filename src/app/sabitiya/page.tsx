import type { Metadata } from "next";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import EventsCarousel from "@/components/shared/EventsCarousel";
import Gallery from "@/components/shared/Gallery";
import VideoSection from "@/components/shared/VideoSection";
import CTASection from "@/components/shared/CTASection";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Събития — БАПЗГ",
  description: "Предстоящи и минали събития, конгреси и регионални срещи на БАПЗГ.",
};

const upcoming = events.filter((e) => e.status === "upcoming");
const past = events.filter((e) => e.status === "past");

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

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Предстоящо" title="Предстоящи събития" />
        <div className="mt-8">
          <EventsCarousel events={upcoming} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Архив" title="Минали събития" />
          <div className="mt-8">
            <EventsCarousel events={past} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Спомени" title="Галерия от събития" />
        <div className="mt-8">
          <Gallery images={galleryImages} layout="masonry" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Видео" title="Кадри от последния конгрес" />
          <div className="mt-8 mx-auto max-w-3xl">
            <VideoSection
              poster="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
              title="Национален конгрес по здравни грижи"
            />
          </div>
        </div>
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
