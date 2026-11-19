export default function Hero({
  label,
  name,
  tagline,
}: {
  label: string;
  name: string;
  tagline: string;
}) {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-label">{label}</div>
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>
    </header>
  );
}
