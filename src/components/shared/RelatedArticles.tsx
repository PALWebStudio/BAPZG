import NewsCard from "./NewsCard";
import type { NewsArticle } from "@/data/news";

export default function RelatedArticles({ articles, title = "Свързани новини" }: { articles: NewsArticle[]; title?: string }) {
  if (articles.length === 0) return null;
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
