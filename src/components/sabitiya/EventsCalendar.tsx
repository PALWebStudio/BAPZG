"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, CalendarDays } from "lucide-react";
import type { EventItem } from "@/data/events";

const MONTHS_BG = [
  "Януари", "Февруари", "Март", "Април", "Май", "Юни",
  "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември",
];

const MONTH_ABBR: Record<string, number> = {
  "ЯНУ": 0, "ФЕВ": 1, "МАР": 2, "АПР": 3, "МАЙ": 4, "ЮНИ": 5,
  "ЮЛИ": 6, "АВГ": 7, "СЕП": 8, "ОКТ": 9, "НОЕ": 10, "ДЕК": 11,
};

const WEEKDAYS = ["Пон", "Вт", "Ср", "Чет", "Пет", "Съб", "Нед"];

type DatedEvent = { event: EventItem; date: Date };

function toDate(e: EventItem) {
  const month = MONTH_ABBR[e.month.toUpperCase()] ?? 0;
  return new Date(Number(e.year), month, Number(e.date));
}

function MonthGrid({
  year,
  month,
  monthEvents,
  selectedSlug,
  onSelect,
}: {
  year: number;
  month: number;
  monthEvents: DatedEvent[];
  selectedSlug?: string;
  onSelect: (event: EventItem) => void;
}) {
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(firstWeekday).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <div className="rounded-[var(--radius-lg)] border border-black/[0.06] bg-cream p-5 shadow-[var(--shadow-card)] sm:p-6">
      <h3 className="font-display text-base font-semibold text-ink">
        {MONTHS_BG[month]} {year}
      </h3>

      <div className="mt-5 grid grid-cols-7 gap-1.5 text-center text-[10.5px] font-semibold uppercase tracking-wide text-muted/50">
        {WEEKDAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1.5">
        {cells.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;
          const match = monthEvents.find((d) => d.date.getDate() === day);
          if (!match) {
            return (
              <div key={day} className="flex aspect-square items-center justify-center rounded-lg text-[12px] text-muted/35">
                {day}
              </div>
            );
          }
          const isSelected = selectedSlug === match.event.slug;
          return (
            <button
              key={day}
              type="button"
              onClick={() => onSelect(match.event)}
              title={match.event.title}
              aria-label={`${day} ${MONTHS_BG[month]} — ${match.event.title}`}
              className={`group relative aspect-square overflow-hidden rounded-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
                isSelected ? "ring-2 ring-burgundy ring-offset-1 ring-offset-cream" : ""
              }`}
            >
              <Image
                src={match.event.image}
                alt=""
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="70px"
              />
              <span className={`absolute inset-0 transition-colors ${isSelected ? "bg-wine/20" : "bg-wine/45 group-hover:bg-wine/25"}`} />
              <span className="absolute left-1 top-1 flex size-4 items-center justify-center rounded-full bg-white/90 text-[9px] font-bold text-burgundy">
                {day}
              </span>
            </button>
          );
        })}
      </div>

      {monthEvents.length === 0 && <p className="mt-6 text-center text-[12.5px] text-muted/50">Няма събития за този месец.</p>}
    </div>
  );
}

export default function EventsCalendar({ events }: { events: EventItem[] }) {
  const sorted = useMemo(
    () => events.map((event) => ({ event, date: toDate(event) })).sort((a, b) => a.date.getTime() - b.date.getTime()),
    [events]
  );

  const initial = useMemo(() => {
    const now = new Date();
    return sorted.find((d) => d.date.getTime() >= now.setHours(0, 0, 0, 0)) ?? sorted[sorted.length - 1] ?? sorted[0];
  }, [sorted]);

  const [viewYear, setViewYear] = useState(() => initial?.date.getFullYear() ?? new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(() => initial?.date.getMonth() ?? new Date().getMonth());
  const [selected, setSelected] = useState<EventItem | null>(() => initial?.event ?? null);
  const detailRef = useRef<HTMLDivElement>(null);

  function handleSelect(event: EventItem) {
    setSelected(event);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  const secondMonth = viewMonth === 11 ? 0 : viewMonth + 1;
  const secondYear = viewMonth === 11 ? viewYear + 1 : viewYear;

  function eventsFor(year: number, month: number) {
    return sorted.filter((d) => d.date.getFullYear() === year && d.date.getMonth() === month);
  }

  function goToMonth(delta: number) {
    let month = viewMonth + delta;
    let year = viewYear;
    if (month < 0) {
      month = 11;
      year -= 1;
    } else if (month > 11) {
      month = 0;
      year += 1;
    }
    setViewMonth(month);
    setViewYear(year);
  }

  return (
    <div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => goToMonth(-1)}
          aria-label="Предишен месец"
          className="flex size-9 items-center justify-center rounded-full border border-black/[0.08] text-ink transition-colors hover:border-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => goToMonth(1)}
          aria-label="Следващ месец"
          className="flex size-9 items-center justify-center rounded-full border border-black/[0.08] text-ink transition-colors hover:border-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        <MonthGrid
          year={viewYear}
          month={viewMonth}
          monthEvents={eventsFor(viewYear, viewMonth)}
          selectedSlug={selected?.slug}
          onSelect={handleSelect}
        />
        <MonthGrid
          year={secondYear}
          month={secondMonth}
          monthEvents={eventsFor(secondYear, secondMonth)}
          selectedSlug={selected?.slug}
          onSelect={handleSelect}
        />
      </div>

      <div ref={detailRef} className="scroll-mt-28">
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-6 overflow-hidden rounded-[var(--radius-lg)] border border-black/[0.06] bg-cream shadow-[var(--shadow-card)] sm:flex sm:items-stretch"
            >
              <div className="relative h-40 shrink-0 sm:h-auto sm:w-64">
                <Image src={selected.image} alt="" fill className="object-cover" sizes="256px" />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-burgundy">
                  <CalendarDays size={12} /> {selected.date} {selected.month} {selected.year}
                </span>
                <h4 className="font-display mt-2 text-lg font-semibold leading-snug text-ink">{selected.title}</h4>
                <p className="mt-2 flex items-center gap-1.5 text-[12.5px] text-muted/60">
                  <MapPin size={12} className="text-gold" /> {selected.online ? "Онлайн" : selected.location}
                </p>
                <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-muted/65">{selected.excerpt}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
