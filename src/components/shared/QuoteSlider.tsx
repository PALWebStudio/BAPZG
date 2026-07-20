import Carousel from "./Carousel";
import { Quote } from "lucide-react";

export type QuoteSlide = {
  quote: string;
  author: string;
  role: string;
};

export default function QuoteSlider({ quotes }: { quotes: QuoteSlide[] }) {
  return (
    <Carousel
      ariaLabel="Отзиви — карусел"
      itemClassName="w-full"
      gapClassName="gap-0"
      autoplayMs={7000}
      items={quotes.map((q) => (
        <div key={q.author} className="mx-auto max-w-2xl px-4 text-center">
          <Quote size={32} className="mx-auto text-gold/70" aria-hidden="true" />
          <p className="font-display mt-5 text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            „{q.quote}“
          </p>
          <p className="mt-5 text-sm font-semibold text-burgundy">{q.author}</p>
          <p className="mt-0.5 text-xs text-muted/55">{q.role}</p>
        </div>
      ))}
    />
  );
}
