import type { Metadata } from 'next';
import PageHead from '@/components/ui/PageHead';
import About from '@/components/sections/About';
import Awards from '@/components/sections/Awards';
import Letters from '@/components/sections/Letters';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About me',
  description: site.about.headline,
};

export default function AboutPage() {
  return (
    <>
      <PageHead shoulder="About me" title={site.about.headline} />
      <About />
      <Awards />
      <Letters />
    </>
  );
}
