# Vidyashankar Guru — Personal Brand Site

Next.js 14 (App Router) · TypeScript · Tailwind v3 · Three.js / R3F / Drei · Framer Motion · GSAP ScrollTrigger · Zustand · Vercel

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Node 18.17+ required.

> The build fetches Bodoni Moda and Inter Tight from Google Fonts at compile time.
> A machine with no network access to `fonts.googleapis.com` will fail at that step
> and nowhere else.

---

## Where to edit content

**`src/lib/site.ts` is the single source of truth.** Every headline, book, award,
testimonial, nav item, stat and link on the site reads from it. No component holds
hard-coded copy, so re-wording the site never means touching JSX.

Things to fill in there before launch:

| Key | What to replace |
|---|---|
| `contact.phone` | Currently a placeholder |
| `urls.calendly` | Real booking link |
| `urls.freeTraining` / `positivityScore` | Real funnel URLs |
| `social[*].href` | Real profile URLs |
| `books` | A fifth title — only four are listed |
| `testimonials` | Real, attributed quotes |

---

## Images to drop in

Placeholder art ships in `public/`. Replace with real files at the same paths:

```
public/images/vidyashankar-portrait.jpg   800×1000  (4:5, About section)
public/images/og.jpg                     1200×630   (social share card)
public/books/one-untold-secret-of-success.jpg
public/books/sweep-through-your-interviews.jpg
public/books/be-a-champ.jpg
public/books/101-secrets-of-effective-parenting.jpg   600×900 (2:3 covers)
```

Also add `public/media-kit.pdf` — the About section links to it.

---

## Structure

```
src/
├── app/
│   ├── layout.tsx          fonts, metadata, shared chrome
│   ├── page.tsx            home — composes 14 sections in order
│   ├── globals.css         tokens, base type, focus, reduced-motion
│   ├── about | programs | books | speaking | contact
│   └── not-found.tsx
├── components/
│   ├── three/Silk.tsx      the gold shader (TypeScript port)
│   ├── layout/             TopBar · Navbar · Footer
│   ├── sections/           the 14 homepage sections
│   └── ui/                 Reveal · SectionHeading · Lightbox · Rule
├── hooks/useScrollReveal.ts   GSAP ScrollTrigger wrapper
├── store/lightbox.ts          Zustand
└── lib/site.ts                all content
```

---

## The hero

`components/three/Silk.tsx` is the React Bits component ported to TypeScript with
typed uniforms and a properly typed `ShaderMaterial` in the frame loop.

It is held at **gold `#C9A227`** in `Hero.tsx`. A plum gradient veil sits over it so
headline type stays legible against the moving pattern — if you change the silk
colour, re-check the veil in `Hero.tsx`.

The canvas is `dynamic(..., { ssr: false })`, so WebGL stays out of the server
bundle and a gold gradient shows while it loads.

---

## Design tokens

| Token | Hex | Role |
|---|---|---|
| `ink` | `#0F0616` | Page base |
| `ink-soft` / `ink-panel` | `#160A21` / `#1E0B33` | Alternating section bands |
| `violet-deep` / `violet` | `#3B0F70` / `#5B21B6` | Brand purple, hover states |
| `gold` | `#C9A227` | The single accent |
| `gold-light` | `#F0D97D` | Hover, focus rings |
| `parchment` | `#F7F3EC` | Body text |

Type: **Bodoni Moda** (display) + **Inter Tight** (body/UI).

---

## Motion policy

One orchestrated moment per page, not effects everywhere:

- **Hero** — a single staggered load sequence (Framer Motion)
- **Sections** — one GSAP ScrollTrigger reveal, fired once, on headings and the two grids where order carries meaning
- **Interaction** — lightbox, testimonial switching, nav dropdowns, mobile drawer

`prefers-reduced-motion: reduce` is honoured in three places: `globals.css` kills
transitions and animations, `useScrollReveal` bails before creating triggers, and
the hero uses `useReducedMotion()` to zero its offsets. The stat counters snap to
final values instead of counting.

---

## Accessibility

Skip link, gold `:focus-visible` rings, `aria-modal` + Escape/arrow keys + scroll
lock in the lightbox, `aria-live` on the newsletter status, labelled nav landmarks,
and `aria-current` on testimonial dots.

---

## Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and import the repo — Vercel detects Next.js with no
configuration. No environment variables are required as built.

The newsletter form in `components/sections/Newsletter.tsx` currently simulates
submission; wire the marked `TODO` line to ConvertKit, Mailchimp or Resend.
