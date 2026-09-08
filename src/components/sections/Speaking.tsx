import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { site } from '@/lib/site';

export default function Speaking() {
  return (
    <section id="speaking" className="bg-ink py-section">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading title={site.speaking.heading} lead={site.speaking.lead} />
          <Link href={site.speaking.cta.href} className="btn-gold mt-10">
            {site.speaking.cta.label}
          </Link>
        </div>

        <Reveal as="ul" className="flex flex-col justify-center gap-0 divide-y divide-gold/18" stagger="li">
          {site.speaking.topics.map((topic) => (
            <li key={topic} className="py-6">
              <p className="font-display text-xl italic leading-snug text-parchment/85">{topic}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
