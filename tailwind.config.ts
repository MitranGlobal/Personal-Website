import type { Config } from 'tailwindcss';

// Tailwind's default opacity scale jumps in 5s and 10s, which is too coarse for
// layering parchment on ink. Generate every integer step instead.
const opacity = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)]),
);

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      opacity,
      colors: {
        // Base — deep ink-plum, not a tinted near-black
        ink: {
          DEFAULT: '#0F0616',
          soft: '#160A21',
          panel: '#1E0B33',
          raised: '#2A1147',
        },
        // Imperial violet
        violet: {
          deep: '#3B0F70',
          DEFAULT: '#5B21B6',
          lift: '#7C3AED',
          mist: '#B79BE8',
        },
        // Antique gold — the single accent
        gold: {
          deep: '#8A6B12',
          DEFAULT: '#C9A227',
          light: '#F0D97D',
          wash: '#FBF0C9',
        },
        parchment: '#F7F3EC',
        muted: '#9C8FB0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale — classical, 1.25 ratio with a jump at display sizes
        'display-xl': ['clamp(3.6rem, 11vw, 10.5rem)', { lineHeight: '0.86', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.7rem, 6.4vw, 5.4rem)', { lineHeight: '0.96', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4.2vw, 3.4rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 2.6vw, 2.1rem)', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        shell: '1280px',
        prose: '68ch',
      },
      spacing: {
        section: 'clamp(5rem, 11vw, 9.5rem)',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        shimmer: 'shimmer 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
