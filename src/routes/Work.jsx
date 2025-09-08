import Card from '../components/Card.jsx';
import { projects } from '../lib/content.ts';

export default function Work() {
  return (
    <section aria-labelledby="work-title" className="space-y-4">
      <h1 id="work-title" className="display-title animate-fadeUp">Selected Work</h1>
      <p className="text-[15px] text-slateInk animate-fadeUp stagger" style={{ ['--stagger']: '80ms' }}>
        A few projects and contributions. Hover cards to see them lift slightly.
      </p>
      <div className="grid gap-4 mt-2">
        {projects.map((p, idx) => (
          <Card
            key={p.title}
            className="animate-fadeUp stagger"
            style={{ ['--stagger']: `${80 + (idx + 1) * 80}ms` }}
            href={p.href}
          >
            <div className="flex flex-col gap-2">
              <h2 className="heading-2">{p.title}</h2>
              <p className="text-[15px] text-slateInk">{p.blurb}</p>
              <ul className="flex flex-wrap gap-2 pt-1">
                {p.tech.map((t) => (
                  <li key={t} className="text-[12px] rounded-md bg-beige/70 px-2 py-1 border border-black/5">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
