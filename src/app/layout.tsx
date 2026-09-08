import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Inter_Tight } from 'next/font/google';
import './globals.css';

import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Lightbox from '@/components/ui/Lightbox';
import { site } from '@/lib/site';

const display = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vidyashankarguru.com'),
  title: {
    default: 'Vidyashankar Guru — TEDx Speaker, Author, Teen Performance Coach',
    template: '%s · Vidyashankar Guru',
  },
  description:
    'Vidyashankar Guru is a TEDx speaker, author of five books, and Co-Founder & Chief Vision Officer of MiTran Global. Twenty years training the minds of teenagers.',
  keywords: [
    'Vidyashankar Guru',
    'MiTran Global',
    'teen performance coach',
    'TEDx speaker India',
    'teen mindset coaching',
    'parenting teenagers',
  ],
  openGraph: {
    type: 'website',
    title: 'Vidyashankar Guru',
    description: site.hero.kicker,
    siteName: 'Vidyashankar Guru',
    images: ['/images/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidyashankar Guru',
    description: site.hero.kicker,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0F0616',
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
                     focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>

        <TopBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Lightbox />
      </body>
    </html>
  );
}
