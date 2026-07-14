# БАПЗГ — Homepage

Production-ready Next.js (App Router) homepage for БАПЗГ, built with TypeScript, Tailwind CSS v4, Framer Motion, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- **Fonts**: uses `next/font/google` (Playfair Display + Manrope). These download at build time, so an internet connection is required the first time you run `npm run dev` / `npm run build`.
- **Images**: quick-access cards, events, news, hero and video sections use royalty-free Unsplash photography as stand-ins (`images.unsplash.com` is whitelisted in `next.config.ts`). Swap in the association's own licensed photography before going live — just replace the `image` URLs in `src/lib/data.ts` (and the two direct `<Image>` sources in `Hero.tsx` / `VideoStory.tsx`).
- **Play button / video**: the "Гледай нашето видео" button and the video-story thumbnail are wired up visually but don't attach an actual video file yet — hook up your player/modal of choice to the `onClick` of those elements.
- **Mock data**: all stats, cards, events, news and partners live in `src/lib/data.ts` for easy editing.

## Structure

```
src/
  app/
    layout.tsx       fonts, metadata
    page.tsx         assembles the homepage
    globals.css      color tokens, theme, keyframes
  components/
    Navbar.tsx        floating -> glass nav on scroll, mobile menu
    Hero.tsx          cinematic hero + vital-line motif
    StatsCard.tsx      floating glass stats card w/ animated counters
    AnimatedCounter.tsx
    QuickAccess.tsx   5 quick-access cards
    VideoStory.tsx    dark story section with quote
    Events.tsx        upcoming events cards
    News.tsx          featured + secondary news
    Partners.tsx      international partners strip
    Footer.tsx        nav, documents, contacts, newsletter, socials
  lib/
    data.ts           all mock content, typed
```

## Design tokens

| Token | Hex |
|---|---|
| Ivory | `#F7F3EC` |
| Navy | `#0E1A26` |
| Burgundy | `#6B1020` |
| Gold | `#C99A42` |
| White | `#FFFFFF` |

Burgundy is reserved for primary CTAs, active nav state, and small labels; it is intentionally kept off large section backgrounds.
