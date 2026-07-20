import Carousel from "./Carousel";
import NewsCard from "./NewsCard";
import type { NewsArticle } from "@/data/news";

export default function NewsCarousel({ articles }: { articles: NewsArticle[] }) {
  return (
    <Carousel
      ariaLabel="Новини — карусел"
      items={articles.map((article) => (
        <NewsCard key={article.slug} article={article} />
      ))}
    />
  );
}
