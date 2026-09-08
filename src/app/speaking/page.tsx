import type { Metadata } from 'next';
import Speaking from '@/components/sections/Speaking';
import Awards from '@/components/sections/Awards';
import PressMarquee from '@/components/sections/PressMarquee';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Speaking',
  description: site.speaking.lead,
};

export default function SpeakingPage() {
  return (
    <>
      <header className="border-b border-gold/18 bg-ink-panel pb-16 pt-24">
        <div className="shell">
          <h1 className="on-dark-display max-w-4xl text-display-lg text-balance text-parchment">
            {site.speaking.heading}
          </h1>
          <p className="lead mt-6">{site.speaking.lead}</p>
        </div>
      </header>
      <PressMarquee />
      <Speaking />
      <Awards />
    </>
  );
}
