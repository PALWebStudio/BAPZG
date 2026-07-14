import type { Metadata } from "next";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeaturedArticle from "@/components/shared/FeaturedArticle";
import NewsCard from "@/components/shared/NewsCard";
import CTASection from "@/components/shared/CTASection";
import NewsGrid from "@/components/novini/NewsGrid";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "Новини — БАПЗГ",
  description: "Актуални новини, интервюта и събития от Българската асоциация на професионалистите по здравни грижи.",
};

const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
const rest = newsArticles.filter((a) => a.slug !== featured.slug);
const interviews = newsArticles.filter((a) => a.isInterview);

export default function NoviniPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Актуално"
        title="Новини и събития"
        subtitle="Следете последните новини, позиции и инициативи на БАПЗГ."
        breadcrumbs={[{ label: "Начало", href: "/" }, { label: "Новини" }]}
        image="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Водеща новина" title="Препоръчано" />
        <div className="mt-8">
          <FeaturedArticle article={featured} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <SectionHeader eyebrow="Всички новини" title="Последни публикации" />
          <div className="mt-8">
            <NewsGrid articles={rest} />
          </div>
        </div>
      </section>

      {interviews.length > 0 && (
        <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
          <SectionHeader eyebrow="Разговори" title="Интервюта" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {interviews.map((article) => <NewsCard key={article.slug} article={article} />)}
          </div>
        </section>
      )}

      <CTASection
        title="Не пропускайте нищо важно"
        subtitle="Следете страницата за новини за най-актуална информация от асоциацията."
        primaryCta={{ label: "Свържи се с нас", href: "/kontakti" }}
      />
    </>
  );
}
