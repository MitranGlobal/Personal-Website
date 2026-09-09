import type { Metadata } from 'next';
import PageHead from '@/components/ui/PageHead';
import System from '@/components/sections/System';
import PositivityScore from '@/components/sections/PositivityScore';
import Training from '@/components/sections/Training';
import Letters from '@/components/sections/Letters';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'The 90 days',
  description: site.work.standfirst,
};

export default function ProgramsPage() {
  return (
    <>
      <PageHead shoulder="The programme" title={site.work.headline} lead={site.work.standfirst} />
      <System />
      <PositivityScore />
      <Training />
      <Letters />
    </>
  );
}
