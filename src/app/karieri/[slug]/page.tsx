import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import JobCard from "@/components/shared/JobCard";
import { jobs } from "@/data/jobs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: "Обява — БАПЗГ" };
  return {
    title: `${job.title} — ${job.employer} — БАПЗГ Кариери`,
    description: job.description,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  const related = jobs.filter((j) => j.slug !== job.slug && j.profession === job.profession).slice(0, 2);

  return (
    <>
      <section className="bg-wine px-6 pb-14 pt-32 text-white lg:pt-36">
        <div className="mx-auto max-w-[var(--container-width)]">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Кариери", href: "/karieri" },
              { label: job.title },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-semibold sm:text-4xl">{job.title}</h1>
            {job.featured && (
              <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-wine">
                Препоръчана
              </span>
            )}
          </div>
          <p className="mt-2 text-lg text-white/75">{job.employer}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-white/65">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-gold" /> {job.city}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} className="text-gold" /> {job.employmentType}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-gold" /> Публикувана на {job.publishedAt}
            </span>
            {job.salary && <span className="font-semibold text-gold-light">{job.salary}</span>}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-2xl space-y-8">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Описание на позицията</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted/70">{job.description}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Отговорности</h2>
              <ul className="mt-3 space-y-2">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted/70">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Изисквания</h2>
              <ul className="mt-3 space-y-2">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted/70">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Предимства</h2>
              <ul className="mt-3 space-y-2">
                {job.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted/70">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-[var(--radius-md)] border border-black/[0.04] bg-cream p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-lg font-semibold text-ink">{job.employer}</h3>
            <p className="mt-2 text-[13.5px] text-muted/60">{job.city} · {job.specialty}</p>
            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-burgundy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              Кандидатствай сега
              <ArrowRight size={16} />
            </button>
            <p className="mt-3 text-center text-[12px] text-muted/45">
              Демо бутон — интеграция с реална система за кандидатстване предстои.
            </p>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-xl font-semibold text-ink">Свързани позиции</h2>
            <div className="mt-6 space-y-4">
              {related.map((r) => (
                <JobCard key={r.slug} job={r} />
              ))}
            </div>
          </div>
        )}

        <Link
          href="/karieri"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:text-burgundy-light"
        >
          ← Обратно към всички позиции
        </Link>
      </section>
    </>
  );
}
