import type { Config } from 'tailwindcss';

// Full integer opacity scale — the default steps are too coarse for layering
// ink on a tinted paper ground.
const opacity = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)]),
);

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      opacity,
      colors: {
        // Paper — the brand purple bleached down into a page ground,
        // rather than a default warm cream.
        paper: {
          DEFAULT: '#F4F0F5',
          warm: '#EDE6EE',
          deep: '#E3D9E6',
        },
        // Text — a warm aubergine-black, never a tinted grey
        ink: {
          DEFAULT: '#241428',
          soft: '#4A3B50',
          faint: '#6F6275',
        },
        plum: {
          DEFAULT: '#4A1E5C',
          lift: '#6E3193',
        },
        // Gold, warmed toward marigold so it reads as pigment, not metal
        brass: {
          DEFAULT: '#A97514',
          light: '#E3B341',
          wash: '#F6E7C2',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'd-xl': ['clamp(2.6rem, 6.2vw, 5.2rem)', { lineHeight: '1.02', letterSpacing: '-0.022em' }],
        'd-lg': ['clamp(2.1rem, 4.4vw, 3.6rem)', { lineHeight: '1.08', letterSpacing: '-0.018em' }],
        'd-md': ['clamp(1.6rem, 2.9vw, 2.4rem)', { lineHeight: '1.16', letterSpacing: '-0.012em' }],
        'd-sm': ['clamp(1.25rem, 1.9vw, 1.55rem)', { lineHeight: '1.28', letterSpacing: '-0.008em' }],
      },
      maxWidth: {
        shell: '1180px',
        prose: '62ch',
        note: '30ch',
      },
      spacing: {
        section: 'clamp(4.5rem, 9vw, 8rem)',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.2, 0.7, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
