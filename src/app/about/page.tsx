import type { Metadata } from 'next';
import About from '@/components/sections/About';
import Stats from '@/components/sections/Stats';
import Awards from '@/components/sections/Awards';
import Testimonials from '@/components/sections/Testimonials';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: site.about.heading,
};

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-gold/18 bg-ink-panel pb-16 pt-24">
        <div className="shell">
          <h1 className="on-dark-display max-w-4xl text-display-lg text-balance text-parchment">
            {site.about.heading}
          </h1>
        </div>
      </header>
      <About />
      <Stats />
      <Awards />
      <Testimonials />
    </>
  );
}
