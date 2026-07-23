import type { Metadata } from "next";
import { Mail } from "lucide-react";
import InternalPageHero from "@/components/shared/InternalPageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import FeaturedArticle from "@/components/shared/FeaturedArticle";
import NewsHeadlineList from "@/components/shared/NewsHeadlineList";
import NewsCarousel from "@/components/shared/NewsCarousel";
import CTASection from "@/components/shared/CTASection";
import NewsFeed from "@/components/novini/NewsFeed";
import NewsletterForm from "@/components/shared/NewsletterForm";
import StickySidebar from "@/components/shared/StickySidebar";
import Reveal from "@/components/shared/Reveal";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "Новини — БАПЗГ",
  description: "Актуални новини, интервюта и събития от Българската асоциация на професионалистите по здравни грижи.",
};

const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
const rest = newsArticles.filter((a) => a.slug !== featured.slug);
const headlines = rest.slice(0, 5);
const trending = [...rest].reverse().slice(0, 5);
const eventsRubric = newsArticles.filter((a) => a.rubric === "Събития");

export default function NoviniPage() {
  return (
    <>
      <InternalPageHero
        eyebrow="Новинарска платформа на БАПЗГ"
        title="Новини и събития"
        subtitle="Актуално, млада смяна, здравеопазване у нас и по света — на едно място."
        breadcrumbs={[{ label: "Начало", href: "/" }, { label: "Новини" }]}
        image="/images/conference.jpg"
      />

      <section className="shell py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FeaturedArticle article={featured} />
          </div>
          <Reveal direction="left">
            <NewsHeadlineList articles={headlines} title="Още от деня" />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell">
          <SectionHeader eyebrow="Рубрики" title="Всички публикации" description="Филтрирайте по рубрика и по регион." />
          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            <div className="min-w-0 lg:col-span-2">
              <NewsFeed articles={rest} />
            </div>
            <StickySidebar>
              <div className="rounded-[var(--radius-md)] border border-black/[0.06] bg-cream p-5">
                <NewsHeadlineList articles={trending} title="Най-четени" />
              </div>
            </StickySidebar>
          </div>
        </div>
      </section>

      {eventsRubric.length > 0 && (
        <section className="shell py-16">
          <SectionHeader eyebrow="Рубрика" title="Събития" description="Конгреси, уебинари и срещи от календара на БАПЗГ." />
          <div className="mt-8">
            <NewsCarousel articles={eventsRubric} />
          </div>
        </section>
      )}

      <section className="bg-wine-deep py-16 text-white">
        <div className="shell">
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
