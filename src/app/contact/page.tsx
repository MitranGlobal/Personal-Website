import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a consultation, enquire about a speaking date, or reach the MiTran Global team.',
};

const routes = [
  {
    heading: 'For parents',
    body: 'Start with the free training, then book a call. The team will look at your child\u2019s situation and map out what the ninety days would involve.',
    cta: { label: 'Book a consultation', href: site.urls.calendly },
  },
  {
    heading: 'For schools',
    body: 'Workshops, parent sessions and the Positivity Score assessment, run across a cohort or a whole year group.',
    cta: { label: 'Email the schools team', href: `mailto:${site.contact.email}?subject=School%20enquiry` },
  },
  {
    heading: 'For event organisers',
    body: 'Keynotes and half-day workshops for conferences, corporate leadership teams and parent bodies.',
    cta: { label: 'Enquire about a date', href: `mailto:${site.contact.email}?subject=Speaking%20enquiry` },
  },
];

export default function ContactPage() {
  return (
    <>
      <header className="border-b border-gold/18 bg-ink-panel pb-16 pt-24">
        <div className="shell">
          <h1 className="on-dark-display max-w-4xl text-display-lg text-balance text-parchment">
            Tell us what is going on
          </h1>
          <p className="lead mt-6">
            Three ways in, depending on who you are. Every one of them reaches the same team.
          </p>
        </div>
      </header>

      <section className="bg-ink py-section">
        <ul className="shell grid gap-px border border-gold/18 bg-gold/18 lg:grid-cols-3">
          {routes.map((r) => (
            <li key={r.heading} className="flex flex-col justify-between gap-8 bg-ink-soft p-9">
              <div>
                <h2 className="font-display text-display-sm text-parchment">{r.heading}</h2>
                <p className="mt-4 font-sans text-[0.95rem] leading-relaxed text-parchment/60">{r.body}</p>
              </div>
              <Link href={r.cta.href} className="btn-ghost self-start">
                {r.cta.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="shell mt-16 grid gap-8 border-t border-gold/18 pt-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-base text-gold/85">Email</h3>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-2 block font-sans text-[0.92rem] text-parchment/62 transition-colors hover:text-gold-light"
            >
              {site.contact.email}
            </a>
          </div>
          <div>
            <h3 className="font-display text-base text-gold/85">Office</h3>
            <p className="mt-2 font-sans text-[0.92rem] text-parchment/62">{site.contact.office}</p>
          </div>
          <div>
            <h3 className="font-display text-base text-gold/85">Organisation</h3>
            <a
              href={site.urls.mitran}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block font-sans text-[0.92rem] text-parchment/62 transition-colors hover:text-gold-light"
            >
              mitranglobal.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
