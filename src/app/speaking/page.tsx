import type { Metadata } from 'next';
import PageHead from '@/components/ui/PageHead';
import Speaking from '@/components/sections/Speaking';
import Awards from '@/components/sections/Awards';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Speaking',
  description: site.speaking.body,
};

export default function SpeakingPage() {
  return (
    <>
      <PageHead shoulder="Speaking" title={site.speaking.headline} lead={site.speaking.body} />
      <Speaking />
      <Awards />
    </>
  );
}
