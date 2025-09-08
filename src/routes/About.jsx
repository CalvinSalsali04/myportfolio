import { site } from '../lib/content.ts';

export default function About() {
  return (
    <section aria-labelledby="about-title" className="space-y-4">
      <h1 id="about-title" className="display-title animate-fadeUp">About</h1>
      <p className="body-text text-slateInk animate-fadeUp stagger" style={{ ['--stagger']: '80ms' }}>
        I'm {site.name}, a Software Engineering student at McMaster University. I enjoy building clean,
        efficient, and human-centered software, with an eye for detail and a focus on performance and accessibility.
      </p>
      <p className="body-text text-slateInk animate-fadeUp stagger" style={{ ['--stagger']: '160ms' }}>
        Recently, I've worked across the stack—from data pipelines and infrastructure to crisp, minimal web
        interfaces. I value thoughtful systems, small tools that scale, and interfaces that feel effortless.
      </p>
    </section>
  );
}
