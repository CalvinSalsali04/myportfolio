import { essays } from '../lib/content.ts';

export default function Essays() {
  return (
    <section aria-labelledby="essays-title" className="space-y-4">
      <h1 id="essays-title" className="display-title animate-fadeUp">Essays</h1>
      <p className="text-[15px] text-slateInk animate-fadeUp stagger" style={{ ['--stagger']: '80ms' }}>
        A few notes and longer-form thoughts.
      </p>
      <ul className="grid gap-2 mt-2">
        {essays.map((e, idx) => (
          <li key={e.title} className="animate-fadeUp stagger" style={{ ['--stagger']: `${80 + (idx + 1) * 80}ms` }}>
            <a href={e.href} className="inline-block px-3 py-2 rounded-md hover:bg-white focus:bg-white">
              <span className="heading-2">{e.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
