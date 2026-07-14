import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Award, Calendar, MapPin, ArrowRight } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import CourseCard from "@/components/shared/CourseCard";
import InfoCard from "@/components/shared/InfoCard";
import CTASection from "@/components/shared/CTASection";
import CourseGrid from "@/components/obucheniya/CourseGrid";
import Reveal from "@/components/shared/Reveal";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Обучения — БАПЗГ",
  description: "Курсове, уебинари и конференции за продължаващо професионално обучение на здравни специалисти.",
};

const featured = courses.find((c) => c.featured && c.type === "Конференция") ?? courses[0];
const upcomingCourses = courses.filter((c) => c.type === "Курс");
const webinars = courses.filter((c) => c.type === "Уебинар");
const conferences = courses.filter((c) => c.type === "Конференция");
const speakers = Array.from(new Set(courses.map((c) => c.speaker))).filter((s) => s !== "Множество лектори");

export default function ObucheniyaPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Продължаващо обучение"
        title="Обучения и професионално развитие"
        subtitle="Курсове, уебинари и конференции с кредитни точки за специалисти по здравни грижи."
        breadcrumbs={[{ label: "Начало", href: "/" }, { label: "Обучения" }]}
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Препоръчано" title="Водещо събитие" />
        <Reveal className="mt-8" delay={0.1}>
          <Link
            href={`/obucheniya/${featured.slug}`}
            className="group grid overflow-hidden rounded-[var(--radius-lg)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)] lg:grid-cols-2"
          >
            <div className="relative h-64 lg:h-full">
              <Image src={featured.image} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="w-fit rounded-full bg-burgundy/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-burgundy">
                {featured.type}
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold text-ink">{featured.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-muted/65">{featured.description}</p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-muted/55">
                <span className="flex items-center gap-1.5"><Calendar size={13} className="text-gold" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><MapPin size={13} className="text-gold" /> {featured.location}</span>
                <span className="flex items-center gap-1.5"><Award size={13} className="text-gold" /> {featured.credits} кредитни точки</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-burgundy group-hover:text-burgundy-light">
                Виж детайли <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Каталог" title="Предстоящи курсове" description="Филтрирайте по категория." />
          <div className="mt-8">
            <CourseGrid courses={upcomingCourses} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Онлайн" title="Уебинари" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {webinars.map((c) => <CourseCard key={c.slug} course={c} />)}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Мащабни събития" title="Конференции" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conferences.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <InfoCard
            title="Кредитни точки и сертификати"
            description="Всяко обучение носи определен брой кредитни точки съгласно системата за продължаващо професионално развитие на БАПЗГ. При завършване се издава сертификат за участие."
          />
          <InfoCard
            title="Лектори"
            description="Обученията се водят от утвърдени преподаватели и практици в съответните области."
            items={speakers}
          />
        </div>
      </section>

      <CTASection
        title="Развивайте се заедно с нас"
        subtitle="Абонирайте се за известия при публикуване на нови обучения и събития."
        primaryCta={{ label: "Стани член", href: "/chlenstvo" }}
        secondaryCta={{ label: "Виж новини", href: "/novini" }}
      />
    </>
  );
}
