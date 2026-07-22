import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/data/news";

export default function NewsHeadlineList({ articles, title }: { articles: NewsArticle[]; title?: string }) {
  return (
    <div>
      {title && <h3 className="text-[11px] font-semibold uppercase tracking-wider text-muted/55">{title}</h3>}
      <ul className={title ? "mt-4 space-y-1" : "space-y-1"}>
        {articles.map((article, i) => (
          <li key={article.slug}>
            <Link
              href={`/novini/${article.slug}`}
              className="group -mx-2 flex items-start gap-3 rounded-[var(--radius-md)] p-2 transition-colors hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
            >
              <span className="font-display w-6 shrink-0 text-lg font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-[var(--radius-sm)]">
                <Image src={article.image} alt="" fill className="object-cover" sizes="80px" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-burgundy">{article.rubric}</span>
                <h4 className="mt-0.5 line-clamp-2 text-[13.5px] font-semibold leading-snug text-ink transition-colors group-hover:text-burgundy">
                  {article.title}
                </h4>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
