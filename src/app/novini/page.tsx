import type { Metadata } from "next";
import { Mail } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeaturedArticle from "@/components/shared/FeaturedArticle";
import NewsCard from "@/components/shared/NewsCard";
import NewsCarousel from "@/components/shared/NewsCarousel";
import CTASection from "@/components/shared/CTASection";
import NewsGrid from "@/components/novini/NewsGrid";
import NewsletterForm from "@/components/shared/NewsletterForm";
import Reveal from "@/components/shared/Reveal";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "Новини — БАПЗГ",
  description: "Актуални новини, интервюта и събития от Българската асоциация на професионалистите по здравни грижи.",
};

const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
const rest = newsArticles.filter((a) => a.slug !== featured.slug);
const interviews = newsArticles.filter((a) => a.isInterview);
const popular = newsArticles.slice(0, 3);

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
          <SectionHeader eyebrow="Най-ново" title="Последни новини" />
          <div className="mt-8">
            <NewsCarousel articles={rest.slice(0, 6)} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Категории" title="Всички публикации" description="Филтрирайте новините по категория." />
        <div className="mt-8">
          <NewsGrid articles={rest} />
        </div>
      </section>

      {interviews.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[var(--container-width)] px-6">
            <SectionHeader eyebrow="Разговори" title="Интервюта" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {interviews.map((article) => <NewsCard key={article.slug} article={article} />)}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[var(--container-width)] px-6 py-16">
        <SectionHeader eyebrow="Препоръчано четиво" title="Популярни статии" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((article) => <NewsCard key={article.slug} article={article} />)}
        </div>
      </section>

      <section className="bg-wine-deep py-16 text-white">
        <div className="mx-auto max-w-[var(--container-width)] px-6">
          <Reveal className="mx-auto max-w-xl text-center">
            <Mail size={26} className="mx-auto text-gold" strokeWidth={1.6} />
            <h2 className="font-display mt-4 text-2xl font-semibold sm:text-3xl">Абонирайте се за новини</h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
              Получавайте най-важните новини и обяви на БАПЗГ директно на имейл.
            </p>
            <NewsletterForm />
            <p className="mt-3 text-[12px] text-white/40">Демо форма — все още не е свързана с реална система за разпращане.</p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Не пропускайте нищо важно"
        subtitle="Следете страницата за новини за най-актуална информация от асоциацията."
        primaryCta={{ label: "Свържи се с нас", href: "/kontakti" }}
      />
    </>
  );
}
