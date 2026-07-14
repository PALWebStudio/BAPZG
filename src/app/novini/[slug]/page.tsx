import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import NewsCard from "@/components/shared/NewsCard";
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

  const related = newsArticles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);

  return (
    <>
      <section className="bg-wine px-6 pb-10 pt-32 text-white lg:pt-36">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Начало", href: "/" },
              { label: "Новини", href: "/novini" },
              { label: article.title },
            ]}
          />
          <span className="mt-6 inline-flex w-fit rounded-full bg-burgundy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
            {article.category}
          </span>
          <h1 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{article.title}</h1>
          <p className="mt-3 text-sm uppercase tracking-wider text-white/50">{article.date}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
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
          <ShareButtons />
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[var(--container-width)] px-6">
            <h2 className="font-display text-xl font-semibold text-ink">Свързани новини</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => <NewsCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
