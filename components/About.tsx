import type { Profile } from "@/data/profile";
import RichText from "./RichText";

export default function About({ about }: { about: Profile["about"] }) {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <h2>{about.heading}</h2>
        <p>{about.subheading}</p>
      </div>

      <div className="who-card">
        <div className="who-title">{about.cardTitle}</div>
        <div className="who-text">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
      </div>

      <div className="embed accent">
        <div className="embed-line" />
        <div className="embed-content">
          <div className="embed-title">
            {about.embed.title}
            <span className="embed-label">{about.embed.label}</span>
          </div>
          <div className="embed-text">
            {about.embed.paragraphs.map((paragraph, index) => (
              <p key={index}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
