import { bookshelf } from '../lib/content.ts';

export default function Bookshelf() {
  return (
    <section aria-labelledby="bookshelf-title" className="space-y-4">
      <h1 id="bookshelf-title" className="display-title animate-fadeUp">Bookshelf</h1>
      <p className="text-[15px] text-slateInk animate-fadeUp stagger" style={{ ['--stagger']: '80ms' }}>
        A few books I revisit often.
      </p>
      <ul className="grid gap-2 mt-2">
        {bookshelf.map((b, idx) => (
          <li key={b} className="animate-fadeUp stagger" style={{ ['--stagger']: `${80 + (idx + 1) * 80}ms` }}>
            <span className="inline-block px-3 py-2 rounded-md hover:bg-white focus:bg-white">{b}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
