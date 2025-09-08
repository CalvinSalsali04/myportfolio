import Typewriter from '../components/Typewriter.jsx';
import { site, experience, availability } from '../lib/content.ts';

export default function Home() {
  const companies = experience.map((e) => e.toLowerCase()).join(', ');

  return (
    <section aria-labelledby="intro-title" className="animate-fadeUp">
      <div className="flex items-start gap-5">
        <div
          role="img"
          aria-label={`portrait of ${site.name}`}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-card bg-white border border-black/5 grid place-items-center overflow-hidden shrink-0"
        >
          <span className="text-[18px] font-semibold text-ink select-none lowercase">cs</span>
        </div>

        <div className="max-w-prose">
          <h1 id="intro-title" className="display-title mb-2 lowercase font-bold">
            {`hi, i'm ${site.name.toLowerCase()}.`}
            <Typewriter text={` ${site.oneLiner.toLowerCase()}`} />
          </h1>

          <p className="body-text text-slateInk lowercase">
            {site.tagline.toLowerCase()} i've worked at {companies}.
          </p>

          <p className="mt-3 text-[15px] text-slateInk lowercase">{availability.toLowerCase()}</p>

          <div className="mt-4">
            <p className="text-sm font-semibold lowercase mb-2">links</p>
            <ul className="flex flex-wrap gap-4 text-[15px] lowercase">
              <li>
                <a href={site.links.linkedin} className="underline underline-offset-4">
                  linkedin
                </a>
              </li>
              <li>
                <a href={site.links.github} className="underline underline-offset-4">
                  github
                </a>
              </li>
              {site.links.devpost ? (
                <li>
                  <a href={site.links.devpost} className="underline underline-offset-4">
                    devpost
                  </a>
                </li>
              ) : null}
              <li>
                <a href={site.links.email} className="underline underline-offset-4">
                  email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
