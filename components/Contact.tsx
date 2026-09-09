'use client';

import { FormEvent, useState } from 'react';
import { contact, site } from '@/lib/content';
import { DrawRule } from './ui/Scroll';

const field =
  'w-full border-b border-mauve/45 bg-transparent px-1 py-3.5 text-body text-chalk placeholder:text-mauve/80 focus:border-gold focus:outline-none transition-colors duration-300';

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to your handler — a Next.js route handler, Formspree, or
    // whatever your team already runs. Nothing is transmitted right now.
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-band">
      <div className="shelf">
        <div className="grid gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-h2 text-chalk">{contact.heading}</h2>
            <DrawRule className="mt-7 w-24" />
            <p className="mt-7 max-w-measure text-body text-orchid/85">{contact.body}</p>

            <dl className="mt-10 space-y-5 text-small">
              <div>
                <dt className="text-mauve">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="link-quiet">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-mauve">Office</dt>
                <dd className="mt-1 text-chalk/90">{site.city}</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="border-l-2 border-gold pl-6">
                <p className="font-display text-h3 text-gilt">Got it.</p>
                <p className="mt-3 max-w-measure text-body text-orchid/85">
                  Thank you for writing. You will hear back within two working days.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-small text-mauve">
                    Your name
                  </label>
                  <input id="name" name="name" required className={`${field} mt-2`} />
                </div>
                <div>
                  <label htmlFor="email" className="text-small text-mauve">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`${field} mt-2`}
                  />
                </div>
                <div>
                  <label htmlFor="org" className="text-small text-mauve">
                    Organisation
                  </label>
                  <input id="org" name="org" className={`${field} mt-2`} />
                </div>
                <div>
                  <label htmlFor="subject" className="text-small text-mauve">
                    What is this about
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className={`${field} mt-2 appearance-none [&>option]:bg-aubergine [&>option]:text-chalk`}
                    defaultValue={contact.subjects[0]}
                  >
                    {contact.subjects.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-small text-mauve">
                    Tell me a little about it
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={`${field} mt-2 resize-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="bg-gold px-8 py-4 text-small font-medium text-ink transition-colors duration-300 ease-settle hover:bg-gilt"
                  >
                    Send it
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
