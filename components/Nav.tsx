export default function Nav({
  name,
  links,
}: {
  name: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav className="nav">
      <div className="nav-logo">{name}</div>
      <div className="nav-links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
