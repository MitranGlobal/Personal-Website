import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Ground tones — a plum-black room, not a tinted near-black.
        ink: '#150C1E',
        aubergine: '#241134',
        vellum: '#2F1A44',
        // Structure and secondary voice.
        mauve: '#6B4A86',
        orchid: '#C4A6E0',
        // The brand's ink.
        gold: '#D4A62A',
        gilt: '#F0D588',
        ember: '#B4841A',
        // The single inverted band.
        chalk: '#F3EEF6',
        slate: '#3B2A4A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // A scale built on 1.333 (perfect fourth), clamped for fluidity.
        micro: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        small: ['0.875rem', { lineHeight: '1.55' }],
        body: ['1.0625rem', { lineHeight: '1.65' }],
        lead: ['clamp(1.15rem, 1.6vw, 1.375rem)', { lineHeight: '1.55' }],
        h3: ['clamp(1.4rem, 2.2vw, 1.85rem)', { lineHeight: '1.25' }],
        h2: ['clamp(2rem, 4.4vw, 3.4rem)', { lineHeight: '1.06' }],
        h1: ['clamp(3.1rem, 11vw, 8.5rem)', { lineHeight: '0.86' }],
      },
      maxWidth: {
        measure: '62ch',
        shelf: '84rem',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 5vw, 5.5rem)',
        band: 'clamp(4.5rem, 11vw, 10rem)',
      },
      transitionTimingFunction: {
        settle: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translate3d(0, 0.6em, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        drift: 'drift 46s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
