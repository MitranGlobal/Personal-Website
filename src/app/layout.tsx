import type { Metadata, Viewport } from 'next';
import { Fraunces, Karla } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Lightbox from '@/components/ui/Lightbox';

// Fraunces carries the warmth: a soft, slightly wonky serif rather than a
// high-contrast didone. Karla keeps the UI plain and humane.
// No `weight` here on purpose: requesting named weights makes this a static
// font, and Next rejects `axes` on static fonts ("Axes can only be defined for
// variable fonts"). Omitting weight loads the variable face, which is what the
// SOFT / WONK / opsz axes need anyway.
const display = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Karla({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vidyashankarguru.com'),
  title: {
    default: 'Vidyashankar Guru — I work with teenagers who have stopped trying',
    template: '%s · Vidyashankar Guru',
  },
  description:
    'Vidyashankar Guru coaches teenagers and their parents. Twenty years, five books, TEDx, and a 90-day programme that starts underneath the marks.',
  openGraph: {
    type: 'website',
    title: 'Vidyashankar Guru',
    description: 'I work with teenagers who have stopped trying.',
    siteName: 'Vidyashankar Guru',
    images: ['/images/og.jpg'],
  },
  twitter: { card: 'summary_large_image', title: 'Vidyashankar Guru' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#F4F0F5',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999]
                     focus:bg-plum focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Lightbox />
      </body>
    </html>
  );
}
