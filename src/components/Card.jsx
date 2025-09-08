export default function Card({ as: Tag = 'div', className = '', children, href }) {
  const base =
    'card transition-transform duration-200 will-change-transform hover:-translate-y-0.5 hover:shadow-lg focus-within:shadow-lg';
  const classes = [base, className].join(' ').trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        <div className="p-4">{children}</div>
      </a>
    );
  }

  return (
    <Tag className={classes}>
      <div className="p-4">{children}</div>
    </Tag>
  );
}
