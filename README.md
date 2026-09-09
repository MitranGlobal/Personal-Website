# vidyashankarguru.com

Personal brand site for Vidyashankar Guru — Master Trainer in NLP, speaker, author,
founder of MiTran Global.

Next.js 14 (App Router) · TypeScript · Tailwind v3 · Three.js / React Three Fiber ·
Framer Motion · GSAP ScrollTrigger · Zustand · deploys to Vercel.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run lint
```

Node 18.17 or newer.

---

## Where things live

```
app/
  layout.tsx        fonts, metadata, JSON-LD, header/footer/lightbox
  page.tsx          home page composition
  speaking/page.tsx the hire-me page
  globals.css       base type, the spine, load sequence, reduced motion
  sitemap.ts, robots.ts, not-found.tsx
components/
  Silk.tsx          the shader hero background (React Bits, ported to TS)
  Hero.tsx          the one orchestrated page-load moment
  CredentialBand.tsx running band, speed reacts to scroll velocity
  Introduction.tsx  the About column + portrait + pull quote
  Numbers.tsx       counters (GSAP)
  Gateways.tsx      the four ways in
  Programmes.tsx    the four offers in detail
  BookBand.tsx      the single light band
  Voices.tsx        testimonials
  StageGallery.tsx  photo contact sheet
  Lightbox.tsx      Zustand + Framer Motion overlay
  Letter.tsx        newsletter
  Contact.tsx       enquiry form
  SiteHeader/Footer.tsx
  ui/Action.tsx     the two button treatments
  ui/Scroll.tsx     Reveal, DrawRule, Counter
lib/
  content.ts        ALL copy and data — edit words here, not in components
  store.ts          Zustand: lightbox + mobile menu
public/media/       placeholder images
```

**All copy lives in `lib/content.ts`.** You can rewrite the entire site's words
without opening a component.

---

## Design notes

The brief was "Grant Cardone's structure, none of the AI-template look." So the
architecture is his — big name, credential run, four gateways, programmes, book,
testimonials, newsletter, contact — and the design language is not.

- **Palette.** A plum-black room (`ink #150C1E`, `aubergine #241134`, `vellum #2F1A44`)
  with violet as the structural voice (`mauve`, `orchid`) and gold used as *ink*
  rather than glow (`gold #D4A62A`, `gilt #F0D588`). One pale lilac band
  (`chalk #F3EEF6`) for the book, because a book is a paper object.
- **Type.** Two faces only. **Fraunces** — variable, with the WONK axis on — carries
  everything that speaks; its italic does the work that a coloured accent word
  usually does. **Instrument Sans** labels. No monospace, no all-caps eyebrows.
- **The spine.** One hairline vertical rule runs the full page below the hero and
  everything hangs off it. It is the only global structural device, and it earns
  its place because the man writes books.
- **Motion.** One orchestrated moment on load (silk fades up, name lines mask in,
  rule draws, everything settles) and after that almost nothing that isn't
  answering you. The counters count because the count *is* the content; the
  credential band reacts to scroll velocity; everything else waits for a hover,
  a click or a keypress. `prefers-reduced-motion` kills all of it.
- **No card kit.** The four gateways are a row list, the programmes are editorial
  blocks with a fact rail, the gallery is an uneven contact sheet.

Section order and rhythm live in `app/page.tsx` — reorder freely, the sections
don't depend on each other.

---

## Before you go live

Search `lib/content.ts` for `TODO`. The specific ones:

| What | Where |
|---|---|
| Real book title, subtitle, cover, buy link | `book` |
| Real testimonials (named + photo converts far better than anonymised roles) | `voices` |
| Email address and phone | `site.email`, `site.phone` |
| LinkedIn and YouTube URLs | `site.socials` |
| Newsletter form → your list provider | `components/Letter.tsx` |
| Contact form → a route handler or Formspree | `components/Contact.tsx` |

Replace everything in `public/media/` — those are generated placeholders. Sizes
they're built for: `portrait.jpg` 4:5, `book-cover.jpg` 3:4, `og.jpg` 1200×630,
`stage-0*.jpg` 4:3.

Set `site.url` in `lib/content.ts` to the real domain so Open Graph and the
sitemap resolve properly.

---

## Tuning the hero

`components/Hero.tsx`:

```tsx
<Silk speed={3.4} scale={1.1} color="#D4A62A" noiseIntensity={1.15} rotation={0.32} />
```

`speed` is the fold movement, `scale` the weave size, `noiseIntensity` the grain,
`rotation` in radians. The `.silk-mask` class in `globals.css` is what keeps it a
light source rather than a gold wall — widen the radial gradient there if you want
more gold on screen.

---

## Push it to Git

From inside the project folder:

```bash
git init
git add .
git commit -m "Vidyashankar Guru — personal brand site"
git branch -M main
```

Create an empty repo on GitHub (no README, no .gitignore — this project has both),
then:

```bash
git remote add origin https://github.com/<your-username>/vidyashankarguru.git
git push -u origin main
```

If you use SSH instead:

```bash
git remote add origin git@github.com:<your-username>/vidyashankarguru.git
git push -u origin main
```

Day-to-day after that:

```bash
git add -A
git commit -m "Update programme copy"
git push
```

Working on something risky:

```bash
git checkout -b redesign-gallery
# ...changes...
git add -A && git commit -m "Rework the stage gallery"
git push -u origin redesign-gallery
```

If GitHub rejects the first push because the remote has commits you don't:

```bash
git pull --rebase origin main
git push -u origin main
```

`node_modules`, `.next` and `.env*` are already ignored — don't commit them.

---

## Deploy to Vercel

1. Go to vercel.com → **Add New → Project** → import the GitHub repo.
2. Framework preset is detected as Next.js. Leave build command and output
   directory alone.
3. Deploy. Every push to `main` ships to production; every branch push gets its
   own preview URL.

CLI alternative:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

Then add `vidyashankarguru.com` under Project → Settings → Domains and point the
records Vercel gives you at your registrar.

---

## Credits

Hero shader: **Silk** from [React Bits](https://reactbits.dev), ported to
TypeScript. The full component index is at `https://reactbits.dev/llms.txt`.
