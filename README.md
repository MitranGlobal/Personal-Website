# Vidyashankar Guru

Personal site. Next.js 14 (App Router) · TypeScript · Tailwind v3 · Three.js / R3F · Framer Motion · GSAP ScrollTrigger · Zustand · Vercel

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Node 18.17+. The build pulls Fraunces and Karla from Google Fonts at compile time,
so a machine with no access to `fonts.googleapis.com` will fail at that step and
nowhere else.

---

## Design language

Warm paper rather than dark luxury. The audience is a worried parent, not an
investor, so the page is built to feel legible and human instead of impressive.

| Token | Hex | Role |
|---|---|---|
| `paper` | `#F4F0F5` | Page ground — the brand purple bleached down, not a default cream |
| `paper-warm` / `paper-deep` | `#EDE6EE` / `#E3D9E6` | Alternating bands, photo mounts |
| `ink` | `#241428` | Body text, a warm aubergine-black |
| `ink-soft` / `ink-faint` | `#4A3B50` / `#6F6275` | Secondary and caption text |
| `plum` / `plum-lift` | `#4A1E5C` / `#6E3193` | Buttons, links, the one inverted band |
| `brass` / `brass-light` | `#A97514` / `#E3B341` | Rules, week markers, the silk |

**Type.** Fraunces for display (a soft, slightly wonky serif — `SOFT 18, WONK 1`
is set in `globals.css`), Karla for body and UI. No didone, no all-caps labels.

**Layout.** Editorial spread: a narrow `.shoulder` column for margin notes, then
the text column. Ragged right, varied measure, photographs tipped a degree off
square with `.tipped-a` / `.tipped-b` as if placed by hand.

---

## Motion policy

Almost none, on purpose. Scattered fade-ups on every section are the clearest
tell of a generated page, so they are gone.

- **GSAP ScrollTrigger** does exactly one thing: scrubs a brass rule down the
  ninety-day sequence in `System.tsx`, showing how far through the programme you
  have read. It reports information rather than decorating.
- **Framer Motion** drives only the lightbox open/close.
- **Three.js** runs the silk panel in the hero.

`prefers-reduced-motion: reduce` is honoured in `globals.css` (transitions and
animations off, photo tilts straightened) and inside `useTimelineRule` (the rule
renders full rather than scrubbing).

---

## The silk hero

`components/three/Silk.tsx` is the React Bits component ported to TypeScript with
typed uniforms and a properly typed `ShaderMaterial` in the frame loop.

It is held at gold `#C9A227` with `lightMode` on, which adds fold and specular
passes so it reads as lit cloth on a light page. It is framed as a plate in the
layout rather than used as a full-bleed background. Loaded via
`dynamic(..., { ssr: false })`, with a gold gradient showing while it initialises.

---

## Editing content

**`src/lib/site.ts` holds every word on the site.** Nothing is hard-coded in JSX.

The copy is deliberately first person and plain. When you edit, keep it that way:
short sentences, concrete details, no aphorisms. Third-person brand voice is what
made the earlier draft feel machine-written.

Before launch:

| Key | What to do |
|---|---|
| `urls.calendly` | Real booking link |
| `urls.freeTraining`, `urls.positivityScore` | Real funnel URLs |
| `social[*].href` | Real profile URLs |
| `books.items` | Add the fifth title |
| `letters.items` | **Replace with real, permissioned quotes** |
| `voices` | Confirm these are things you actually hear |

---

## Images

Placeholders ship in `public/`. Replace at the same paths:

```
public/images/vidyashankar-portrait.jpg   800×1000  (4:5)
public/images/og.jpg                     1200×630
public/books/one-untold-secret-of-success.jpg
public/books/sweep-through-your-interviews.jpg
public/books/be-a-champ.jpg
public/books/101-secrets-of-effective-parenting.jpg   600×900 (2:3)
```

Add `public/media-kit.pdf` — the About section links to it.

Photographs matter more here than in the previous draft. The layout is built to
carry real, warm, human pictures of you working; stock photography will undo it.

---

## Structure

```
src/
├── app/
│   ├── layout.tsx      fonts, metadata, chrome
│   ├── page.tsx        home — 11 sections in order
│   ├── globals.css     tokens, paper texture, .spread, .shoulder
│   ├── about | programs | books | speaking | contact
│   └── not-found.tsx
├── components/
│   ├── three/Silk.tsx
│   ├── layout/         Navbar · Footer
│   ├── sections/       Hero · Voices · About · System · PositivityScore
│   │                   Training · Books · Letters · Speaking · Awards · Newsletter
│   └── ui/             PageHead · Lightbox
├── hooks/useTimelineRule.ts
├── store/lightbox.ts
└── lib/site.ts
```

---

## Deploy

Push to GitHub, import at [vercel.com/new](https://vercel.com/new). Vercel detects
Next.js with no configuration and no environment variables are needed as built.

The newsletter form in `Newsletter.tsx` simulates submission — wire the marked
line to ConvertKit, Mailchimp or Resend.
