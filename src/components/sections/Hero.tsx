'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/lib/site';

// WebGL is client-only and heavy — keep it out of the server bundle.
const Silk = dynamic(() => import('@/components/three/Silk'), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gradient-to-br from-gold-deep via-gold to-gold-deep opacity-60" />,
});

export default function Hero() {
  const reduced = useReducedMotion();

  // The single orchestrated moment on the page: the name arrives, then everything else.
  const seq = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: reduced ? 0 : 0.18 + i * 0.13, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section className="relative isolate min-h-[calc(100svh-74px)] overflow-hidden">
      {/* ── Gold silk, full bleed ── */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Silk speed={4} scale={1.1} color="#C9A227" noiseIntensity={1.35} rotation={0.32} />
      </div>

      {/* Plum veil — lets gold read as light on the right, ink on the left, so type stays legible */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'linear-gradient(100deg, rgba(15,6,22,0.96) 0%, rgba(15,6,22,0.88) 34%, rgba(30,11,51,0.62) 58%, rgba(59,15,112,0.28) 78%, rgba(15,6,22,0.55) 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40"
        aria-hidden
        style={{ background: 'linear-gradient(to bottom, transparent, #0F0616)' }}
      />

      <div className="shell relative flex min-h-[calc(100svh-74px)] flex-col justify-center py-24">
        <motion.p
          custom={0}
          variants={seq}
          initial="hidden"
          animate="show"
          className="font-sans text-[0.8rem] tracking-[0.3em] text-gold/80"
        >
          {site.hero.eyebrow}
        </motion.p>

        <motion.h1
          custom={1}
          variants={seq}
          initial="hidden"
          animate="show"
          className="on-dark-display mt-6 font-display text-display-xl font-medium text-parchment"
        >
          <span className="block">{site.hero.line1}</span>
          <span className="goldleaf block italic">{site.hero.line2}</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={seq}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-2xl font-display text-display-sm italic text-gold-light/90"
        >
          {site.hero.kicker}
        </motion.p>

        <motion.p custom={3} variants={seq} initial="hidden" animate="show" className="lead mt-6 text-pretty">
          {site.hero.blurb}
        </motion.p>

        <motion.div
          custom={4}
          variants={seq}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href={site.hero.primaryCta.href} className="btn-gold">
            {site.hero.primaryCta.label}
          </Link>
          <Link href={site.hero.secondaryCta.href} className="btn-ghost">
            {site.hero.secondaryCta.label}
          </Link>
        </motion.div>

        {/* Credential strip — reads as a masthead, doubles as the reference site's badge row */}
        <motion.ul
          custom={5}
          variants={seq}
          initial="hidden"
          animate="show"
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gold/20 pt-6"
        >
          {site.credentials.map((c) => (
            <li key={c} className="font-sans text-[0.82rem] text-parchment/62">
              {c}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
