export const site = {
  name: 'Calvin Salsali',
  tagline: 'Software Engineering Student at McMaster University.',
  oneLiner: 'I build clean, efficient, and human-centered software.',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    devpost: 'https://devpost.com/',
    email: 'mailto:calvin@example.com',
  },
};

export const availability =
  'Open to co-op/internship opportunities during 2026 — feel free to reach out via email.';

export const experience: string[] = ['PointClickCare', 'GBL.io', 'Intuit'];

export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: 'LLM Sentiment Pipeline',
    blurb:
      'Built a sentiment analysis pipeline leveraging modern LLMs to process and classify customer feedback at scale.',
    tech: ['Python', 'PyTorch', 'Cohere'],
  },
  {
    title: 'Geolocation Modals @ GBL',
    blurb:
      'Implemented location-aware modals to improve user conversions with region-specific messaging and rules.',
    tech: ['Vue', 'PostgreSQL', 'Docker'],
  },
];

export const essays: { title: string; href: string }[] = [
  { title: 'On Systems Thinking', href: '#' },
  { title: 'Small Tools, Big Leverage', href: '#' },
  { title: 'Interfaces that Disappear', href: '#' },
  { title: 'Notes on Learning Quickly', href: '#' },
];

export const bookshelf: string[] = [
  'Designing Data-Intensive Applications — Martin Kleppmann',
  'Clean Code — Robert C. Martin',
  'The Pragmatic Programmer — Andrew Hunt, David Thomas',
  'Deep Work — Cal Newport',
];

export const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Work', to: '/work' },
  { name: 'Essays', to: '/essays' },
  { name: 'Bookshelf', to: '/bookshelf' },
  { name: 'About', to: '/about' },
];
