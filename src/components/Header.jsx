import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, site } from '../lib/content.ts';
import Container from './Container.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'sticky top-0 z-40 bg-beige/90 backdrop-blur supports-[backdrop-filter]:bg-beige/70',
        scrolled ? 'shadow-sm' : '',
      ].join(' ')}
    >
      <Container className="flex items-center justify-between py-3">
        <Link to="/" className="text-[17px] font-semibold tracking-[-0.01em] hover:opacity-90 focus:opacity-100">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-4 text-[14px] text-slateInk">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'px-2 py-1 rounded-md transition-colors',
                      'hover:bg-white focus:bg-white focus:outline-none',
                      isActive ? 'text-ink underline underline-offset-4' : 'text-slateInk',
                    ].join(' ')
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
