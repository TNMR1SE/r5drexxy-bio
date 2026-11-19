import type { Profile } from "@/data/profile";

export default function QuickInfo({
  quickInfo,
}: {
  quickInfo: Profile["quickInfo"];
}) {
  return (
    <section className="section">
      <div className="section-heading">
        <h2>{quickInfo.heading}</h2>
        <p>{quickInfo.subheading}</p>
      </div>

      <div className="quick-info">
        {quickInfo.items.map((fact) => (
          <div className="info" key={fact.label}>
            <div className="info-label">{fact.label}</div>
            <div className="info-value">{fact.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
