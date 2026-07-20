import Image from "next/image";
import { MapPin } from "lucide-react";
import Carousel from "./Carousel";
import type { EventItem } from "@/data/events";

function EventSlide({ event }: { event: EventItem }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-black/[0.04] bg-cream shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-soft)]">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={event.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 85vw, 31vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-wine/15" style={{ mixBlendMode: "multiply" }} />
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-xl bg-white/95 px-3 py-2 text-center shadow-md backdrop-blur-sm">
          <span className="font-display text-lg font-bold leading-none text-burgundy">{event.date}</span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted/60">{event.month}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold leading-snug text-ink">{event.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-[13px] text-muted/60">
          <MapPin size={13} className="text-gold" />
          {event.online ? "Онлайн" : event.location}
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-muted/60">{event.excerpt}</p>
      </div>
    </div>
  );
}

export default function EventsCarousel({ events }: { events: EventItem[] }) {
  return (
    <Carousel
      ariaLabel="Събития — карусел"
      items={events.map((event) => (
        <EventSlide key={event.slug} event={event} />
      ))}
    />
  );
}
