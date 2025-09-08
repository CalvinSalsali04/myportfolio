import { useEffect, useMemo, useRef, useState } from 'react';

export default function Typewriter({
  text,
  speed = 40,
  startDelay = 300,
  className = '',
  ariaLabel,
}) {
  const reducedMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const [shown, setShown] = useState(reducedMotion ? text : '');
  const timer = useRef(null);

  useEffect(() => {
    if (reducedMotion) return; // show full text when reduced motion
    let i = 0;
    const begin = setTimeout(() => {
      timer.current = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(timer.current);
          timer.current = null;
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(begin);
      if (timer.current) clearInterval(timer.current);
    };
  }, [text, speed, startDelay, reducedMotion]);

  const done = shown.length >= text.length;

  return (
    <span
      className={className}
      aria-label={ariaLabel || text}
      aria-live="polite"
    >
      {shown}
      {!reducedMotion && (
        <span
          className={[
            'inline-block w-[1px] align-baseline bg-ink ml-1',
            done ? 'opacity-0' : 'animate-caret',
          ].join(' ')}
          aria-hidden="true"
          style={{ height: '1em' }}
        />
      )}
    </span>
  );
}
