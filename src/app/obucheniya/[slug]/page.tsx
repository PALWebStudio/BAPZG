import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, Award, User } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CourseCard from "@/components/shared/CourseCard";
import { courses } from "@/data/courses";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: "Обучение — БАПЗГ" };
  return { title: `${course.title} — БАПЗГ Обучения`, description: course.description };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const related = courses.filter((c) => c.slug !== course.slug && c.category === course.category).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-wine px-6 pb-14 pt-32 text-white lg:pt-36">
        <div className="absolute inset-0 -z-10">
          <Image src={course.image} alt="" fill className="object-cover opacity-25" sizes="100vw" />
        </div>
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Обучения", href: "/obucheniya" },
              { label: course.title },
            ]}
          />
          <span className="mt-6 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-wine">
            {course.type}
          </span>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">{course.title}</h1>
        </div>
      </section>

      <section className="shell py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-2xl space-y-8">
            <p className="text-[15px] leading-relaxed text-muted/70">{course.description}</p>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Очаквани резултати</h2>
              <ul className="mt-3 space-y-2">
                {course.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted/70">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Програма</h2>
              <ol className="mt-3 space-y-3">
                {course.agenda.map((slot) => (
                  <li key={slot.time} className="flex gap-4 border-l-2 border-gold/40 pl-4 text-[14.5px] text-muted/70">
                    <span className="shrink-0 font-semibold text-burgundy">{slot.time}</span>
                    {slot.item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="h-fit space-y-4 rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-lg font-semibold text-ink">Детайли</h3>
            <ul className="space-y-3 text-[13.5px] text-muted/65">
              <li className="flex items-center gap-2.5"><Calendar size={15} className="text-gold" /> {course.date}</li>
              {course.time && <li className="flex items-center gap-2.5"><Clock size={15} className="text-gold" /> {course.time}</li>}
              <li className="flex items-center gap-2.5"><MapPin size={15} className="text-gold" /> {course.online ? "Онлайн" : course.location}</li>
              <li className="flex items-center gap-2.5"><Award size={15} className="text-gold" /> {course.credits} кредитни точки</li>
              <li className="flex items-center gap-2.5"><User size={15} className="text-gold" /> {course.speaker}</li>
            </ul>
            <button
              type="button"
              className="w-full rounded-full bg-burgundy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-burgundy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              Регистрирай се
            </button>
            <p className="text-center text-[12px] text-muted/45">
              Демо бутон — интеграция с реална система за регистрация предстои.
            </p>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-xl font-semibold text-ink">Свързани обучения</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => <CourseCard key={c.slug} course={c} />)}
            </div>
          </div>
        )}

        <Link href="/obucheniya" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:text-burgundy-light">
          ← Обратно към всички обучения
        </Link>
      </section>
    </>
  );
}
