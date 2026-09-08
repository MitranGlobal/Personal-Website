import type { Metadata } from 'next';
import System from '@/components/sections/System';
import PositivityScore from '@/components/sections/PositivityScore';
import FreeTraining from '@/components/sections/FreeTraining';
import Testimonials from '@/components/sections/Testimonials';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Programs',
  description: site.system.lead,
};

export default function ProgramsPage() {
  return (
    <>
      <header className="border-b border-gold/18 bg-ink-panel pb-16 pt-24">
        <div className="shell">
          <h1 className="on-dark-display max-w-4xl text-display-lg text-balance text-parchment">
            Ninety days on the root, not the leaves
          </h1>
          <p className="lead mt-6">{site.system.lead}</p>
        </div>
      </header>
      <System />
      <PositivityScore />
      <FreeTraining />
      <Testimonials />
    </>
  );
}
