import type { Metadata } from 'next';
import Link from 'next/link';
import PageHead from '@/components/ui/PageHead';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get in touch',
  description: 'Book a call, ask about a school workshop, or enquire about a speaking date.',
};

const routes = [
  {
    heading: 'You are a parent',
    body: 'Start with the free training, then book a call. We look at your child\u2019s situation specifically and tell you honestly whether this is the right thing for them.',
    label: 'Book a call',
    href: site.urls.calendly,
  },
  {
    heading: 'You are a school',
    body: 'Workshops, parent evenings, and the Positivity Score run across a whole year group. A term\u2019s notice is usually plenty.',
    label: 'Email about schools',
    href: `mailto:${site.contact.email}?subject=School%20enquiry`,
  },
  {
    heading: 'You are organising an event',
    body: 'Keynotes and half-day workshops. Tell me who is in the room and what you want them walking out with.',
    label: 'Email about speaking',
    href: `mailto:${site.contact.email}?subject=Speaking%20enquiry`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHead
        shoulder="Get in touch"
        title="Tell me what is going on"
        lead="Three ways in, depending on who you are. They all reach the same small team, and I read most of it myself."
      />

      <section className="border-b border-ink/12">
        <ul className="shell divide-y divide-ink/12 py-section">
          {routes.map((r) => (
            <li key={r.heading} className="grid gap-4 py-9 first:pt-0 md:grid-cols-[15rem_1fr] md:gap-10">
              <h2 className="text-d-sm text-ink">{r.heading}</h2>
              <div>
                <p className="max-w-prose text-[1rem] leading-[1.66] text-ink-soft">{r.body}</p>
                <Link href={r.href} className="btn-line mt-5">
                  {r.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper-warm">
        <div className="shell grid gap-8 py-14 sm:grid-cols-3">
          <div>
            <p className="font-sans text-[0.8rem] text-ink-faint">Email</p>
            <a href={`mailto:${site.contact.email}`} className="quiet-link mt-1.5 block font-sans text-[0.95rem]">
              {site.contact.email}
            </a>
          </div>
          <div>
            <p className="font-sans text-[0.8rem] text-ink-faint">Where</p>
            <p className="mt-1.5 font-sans text-[0.95rem] text-ink-soft">{site.contact.office}</p>
          </div>
          <div>
            <p className="font-sans text-[0.8rem] text-ink-faint">Organisation</p>
            <a href={site.urls.mitran} target="_blank" rel="noreferrer" className="quiet-link mt-1.5 block font-sans text-[0.95rem]">
              mitranglobal.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
