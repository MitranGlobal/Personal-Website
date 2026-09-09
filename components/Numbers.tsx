import { numbers } from '@/lib/content';
import { Counter } from './ui/Scroll';

/* Borders are drawn by the grid gap rather than by per-item conditionals, so
   nothing has to fight over specificity at breakpoints. */
export default function Numbers() {
  return (
    <section className="border-y border-mauve/20">
      <div className="shelf">
        <dl className="grid grid-cols-2 gap-px bg-mauve/25 lg:grid-cols-4">
          {numbers.map((n) => (
            <div key={n.label} className="bg-ink px-5 py-10 sm:px-7 lg:px-8 lg:py-16">
              <dt className="sr-only">{n.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(2.2rem,5.2vw,3.9rem)] leading-none text-gilt">
                  <Counter to={n.value} suffix={n.suffix} />
                </span>
                <span className="mt-4 block text-body text-chalk/90">{n.label}</span>
                <span className="mt-1 block text-small text-mauve">{n.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
