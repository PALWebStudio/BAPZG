import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import NewsHeadlineList from "@/components/shared/NewsHeadlineList";
import StickySidebar from "@/components/shared/StickySidebar";
import ShareButtons from "@/components/novini/ShareButtons";
import { newsArticles } from "@/data/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Новина — БАПЗГ" };
  return { title: `${article.title} — БАПЗГ Новини`, description: article.excerpt };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = newsArticles.filter((a) => a.slug !== article.slug);
  const recent = others.slice(0, 4);
  const today = others.filter((a) => a.date === article.date).slice(0, 4);
  const related = others.filter((a) => a.rubric === article.rubric).slice(0, 4);

  return (
    <>
      <section className="bg-wine pb-10 pt-32 text-white lg:pt-36">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Новини", href: "/novini" },
              { label: article.title },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex w-fit rounded-full bg-burgundy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              {article.rubric}
            </span>
            <span className="inline-flex w-fit rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-light">
              {article.region}
            </span>
          </div>
          <h1 className="font-display mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">{article.title}</h1>
          <p className="mt-3 text-sm uppercase tracking-wider text-white/50">{article.date}</p>
        </div>
      </section>

      <section className="shell py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="mx-auto w-full max-w-3xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)]">
              <Image src={article.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" priority />
            </div>

            <div className="mt-10 space-y-5 text-[15.5px] leading-[1.8] text-ink/85">
              {article.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {article.quote && (
              <blockquote className="my-10 border-l-4 border-gold pl-6 font-display text-xl italic leading-relaxed text-ink">
                „{article.quote}“
              </blockquote>
            )}

            <div className="mt-8 flex items-center justify-between border-t border-black/[0.08] pt-6">
              <Link href="/novini" className="text-sm font-semibold text-burgundy hover:text-burgundy-light">
                ← Всички новини
              </Link>
              <ShareButtons title={article.title} />
            </div>
          </div>

          <StickySidebar>
            <div className="space-y-8">
              {today.length > 0 && (
                <div className="rounded-[var(--radius-md)] border border-black/[0.06] bg-cream p-5">
                  <NewsHeadlineList articles={today} title="Новини от днес" />
                </div>
              )}
              <div className="rounded-[var(--radius-md)] border border-black/[0.06] bg-cream p-5">
                <NewsHeadlineList articles={recent} title="Последни новини" />
              </div>
              {related.length > 0 && (
                <div className="rounded-[var(--radius-md)] border border-black/[0.06] bg-cream p-5">
                  <NewsHeadlineList articles={related} title="Свързани статии" />
                </div>
              )}
            </div>
          </StickySidebar>
        </div>
      </section>
    </>
  );
}
