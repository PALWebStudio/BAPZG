"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  GraduationCap,
  HeartHandshake,
  Play,
  ShieldCheck,
  UserRound,
} from "lucide-react";

type NewsItem = {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "30 май 2026",
    title: "Национална конференция по здравни грижи",
    excerpt:
      "Водещи специалисти и организации обсъждат бъдещето на професиите по здравни грижи.",
    image: "/images/news/conference.webp",
    href: "#news",
  },
  {
    id: 2,
    date: "28 май 2026",
    title: "БАПЗГ и МЗ обсъдиха ключови въпроси за професията",
    excerpt:
      "Фокус върху условията на труд, продължаващото обучение и професионалното развитие.",
    image: "/images/news/meeting.webp",
    href: "#news",
  },
  {
    id: 3,
    date: "26 май 2026",
    title: "Нови възможности за продължаващо обучение",
    excerpt:
      "Предстоящи курсове, събития и квалификационни програми за специалистите.",
    image: "/images/news/training.webp",
    href: "#events",
  },
];

const stats = [
  { target: 50000, suffix: "+", label: "професионалисти членове", icon: UserRound },
  { target: 28, suffix: "", label: "регионални колегии", icon: Building2 },
  { target: 4, suffix: "", label: "международни членства", icon: ShieldCheck },
  { target: 300, suffix: "+", label: "обучения годишно", icon: GraduationCap },
  { target: 100, suffix: "+", label: "партньори и инициативи", icon: HeartHandshake },
];

// Fixed positions (not random) so server/client markup matches on hydration.
const PARTICLES = [
  { left: "6%", top: "22%", size: 3, duration: 7, delay: 0 },
  { left: "12%", top: "68%", size: 2, duration: 9, delay: 0.6 },
  { left: "18%", top: "40%", size: 2.5, duration: 8, delay: 1.4 },
  { left: "24%", top: "80%", size: 2, duration: 10, delay: 0.2 },
  { left: "9%", top: "52%", size: 1.5, duration: 6.5, delay: 2 },
  { left: "30%", top: "18%", size: 2, duration: 8.5, delay: 1 },
  { left: "4%", top: "85%", size: 2.5, duration: 7.5, delay: 2.4 },
  { left: "15%", top: "10%", size: 1.5, duration: 9.5, delay: 0.8 },
];

const ROTATE_MS = 7000;

function AnimatedStatValue({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 26, stiffness: 60 });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    if (reduceMotion) {
      if (ref.current) ref.current.textContent = `${target.toLocaleString("bg-BG")}${suffix}`;
      return;
    }
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest).toLocaleString("bg-BG")}${suffix}`;
      }
    });
  }, [springValue, suffix, reduceMotion, target]);

  return (
    <span aria-label={`${target.toLocaleString("bg-BG")}${suffix}`}>
      <span ref={ref} aria-hidden="true">
        0{suffix}
      </span>
    </span>
  );
}

export default function HeroWithNews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeNews = newsItems[activeIndex];

  // `useReducedMotion()` is null during SSR and only resolves on the client,
  // so gating what gets RENDERED (not just how it animates) on its value
  // directly would make the server and client markup diverge. Delaying the
  // check until after mount keeps the very first client render identical to
  // the server's, avoiding a hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time post-hydration flag, not derived render state
    setMounted(true);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % newsItems.length);
    }, ROTATE_MS);
    return () => window.clearInterval(interval);
    // Restarting on activeIndex change means the countdown resets after any
    // manual navigation (arrows/dots), so auto-advance always waits a full
    // interval from the user's last interaction instead of firing at an
    // arbitrary point left over from the original mount-time schedule.
  }, [paused, reduceMotion, activeIndex]);

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? newsItems.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % newsItems.length);
  }

  return (
    <>
    <section
      id="home"
      className="relative isolate overflow-hidden bg-wine text-white lg:min-h-[840px]"
    >
      {/* Cinematic background video with slow Ken Burns zoom */}
      <div className="absolute inset-0 -z-30">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={reduceMotion ? { scale: 1 } : { scale: [1, 1.09, 1] }}
          transition={
            reduceMotion
              ? { duration: 1 }
              : { duration: 26, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <video
            src="/hero-video2.mp4"
            poster="/images/hero/hero-nurse.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
          />
        </motion.div>
      </div>

      {/* Burgundy and dark overlays — a lighter top-to-bottom wash on mobile keeps the
          video visible behind the stacked single-column content; the stronger left-heavy
          horizontal gradient (built for the two-column split) only applies from lg up. */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(43,6,11,0.66)_0%,rgba(43,6,11,0.4)_45%,rgba(43,6,11,0.72)_100%)] lg:bg-[linear-gradient(90deg,rgba(43,6,11,0.98)_0%,rgba(67,6,16,0.92)_32%,rgba(107,16,32,0.42)_66%,rgba(43,6,11,0.38)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(43,6,11,0.52)_0%,transparent_32%,rgba(43,6,11,0.78)_100%)]" />

      {/* Subtle decorative light */}
      <div className="absolute -left-52 top-64 -z-10 size-[520px] rounded-full bg-burgundy/20 blur-[150px]" />
      <div className="absolute bottom-14 left-0 -z-10 h-80 w-[42%] bg-[radial-gradient(circle_at_left_bottom,rgba(201,150,63,0.18),transparent_68%)]" />

      {/* Floating light particles */}
      {mounted && !reduceMotion && (
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-gold-light/70"
              style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
              animate={{ y: [0, -16, 0], opacity: [0.15, 0.65, 0.15] }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="flex shell items-center pb-20 pt-24 lg:min-h-[680px] lg:pt-28">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.55fr)] xl:gap-20">
          {/* Left hero content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
            }}
            className="max-w-3xl"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold-light sm:text-[0.8rem]"
            >
              Професионалисти. Грижа. Бъдеще.
            </motion.p>

            <h1 className="font-display text-[clamp(2.15rem,4.1vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.04em]">
              <motion.span
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Заедно за бъдещето
              </motion.span>
              <motion.span
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="mt-2 block text-gold-light"
              >
                на здравните грижи
              </motion.span>
            </h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-xl text-[0.9rem] leading-7 text-white/76 sm:text-base"
            >
              БАПЗГ обединява, защитава и развива над 50 000 професионалисти по
              здравни грижи в България.
            </motion.p>

            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
              }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }}>
                <Link
                  href="#access"
                  className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-gold px-8 text-sm font-semibold text-wine shadow-[0_14px_38px_rgba(201,150,63,0.26)] transition hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-gold-light hover:shadow-[0_16px_44px_rgba(201,150,63,0.42)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
                >
                  Стани член
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </motion.div>

              <motion.button
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
                type="button"
                className="inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-white/30 bg-white/[0.04] px-8 text-sm font-medium text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:scale-[1.02] hover:border-white/55 hover:bg-white/[0.09] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
              >
                Гледай видеото
                <span className="grid size-8 place-items-center rounded-full border border-white/30">
                  <Play className="ml-0.5 size-3.5 fill-current" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Rotating news widget */}
          <motion.aside
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] },
              x: { duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] },
              y: reduceMotion
                ? { duration: 0 }
                : { duration: 6, delay: 1.2, repeat: Infinity, ease: "easeInOut" },
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="relative rounded-[var(--radius-md)] border border-white/15 bg-wine-deep/72 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-shadow hover:shadow-[0_32px_90px_rgba(0,0,0,0.38)] sm:p-5"
            aria-label="Последни новини"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="mb-2.5 block h-1 w-8 rounded-full bg-gold" />
                <h2 className="font-display text-lg font-semibold">Последни новини</h2>
              </div>

              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Предишна новина"
                  className="grid size-8 place-items-center rounded-full border border-white/15 text-white/80 transition hover:scale-110 hover:border-gold/60 hover:text-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
                >
                  <ArrowLeft className="size-3.5" />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Следваща новина"
                  className="grid size-8 place-items-center rounded-full border border-white/15 text-white/80 transition hover:scale-110 hover:border-gold/60 hover:text-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
                >
                  <ArrowRight className="size-3.5" />
                </button>
              </div>
            </div>

            <div className="relative min-h-[260px]">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeNews.id}
                  initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.42 }}
                >
                  <div className="group relative aspect-[16/9] overflow-hidden rounded-[var(--radius-sm)]">
                    <Image
                      src={activeNews.image}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />
                  </div>

                  <p className="mt-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-light">
                    {activeNews.date}
                  </p>

                  <h3 className="font-display mt-1.5 line-clamp-2 text-[17px] leading-snug">
                    {activeNews.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/62">
                    {activeNews.excerpt}
                  </p>

                  <Link
                    href={activeNews.href}
                    className="mt-3.5 inline-flex items-center gap-2 text-xs font-semibold text-gold-light transition hover:gap-3 hover:text-gold"
                  >
                    Прочети повече
                    <ArrowRight className="size-3.5" />
                  </Link>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/10" aria-hidden="true">
              {mounted && !reduceMotion && !paused && (
                <motion.div
                  key={activeIndex}
                  className="h-full rounded-full bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                />
              )}
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              {newsItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Покажи новина ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light ${
                    index === activeIndex ? "w-5 bg-gold" : "w-1.5 bg-white/28 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>

    {/* Overlapping statistics — rendered outside the hero's overflow-hidden box so the
        overlap isn't clipped, using the same negative-margin technique as before */}
    <div className="relative z-10 shell -mt-[56px]">
      <div className="grid overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-wine-deep/95 shadow-[0_30px_70px_rgba(43,6,11,0.34)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5">
        {stats.map(({ target, suffix, label, icon: Icon }, index) => (
          <div
            key={label}
            className={`group flex min-h-32 items-center gap-4 px-6 py-5 transition-colors hover:bg-white/[0.03] ${
              index !== stats.length - 1 ? "border-b border-white/10 lg:border-b-0 lg:border-r" : ""
            }`}
          >
            <Icon
              className="size-8 shrink-0 stroke-[1.6] text-gold transition-transform group-hover:scale-110"
              aria-hidden="true"
            />
            <div>
              <strong className="font-display block text-2xl font-semibold text-white">
                <AnimatedStatValue target={target} suffix={suffix} />
              </strong>
              <span className="mt-1.5 block text-xs leading-5 text-white/58">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
