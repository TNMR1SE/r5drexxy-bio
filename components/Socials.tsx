import type { Profile } from "@/data/profile";

export default function Socials({ socials }: { socials: Profile["socials"] }) {
  return (
    <section id="socials" className="section">
      <div className="section-heading">
        <h2>{socials.heading}</h2>
        <p>{socials.subheading}</p>
      </div>

      <div className="socials">
        {socials.items.map((social) => (
          <a
            className="social"
            key={social.title}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-label">{social.label}</div>
            <h3>{social.title}</h3>
            <p>{social.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
