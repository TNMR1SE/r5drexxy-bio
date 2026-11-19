import type { Profile } from "@/data/profile";

export default function Hobbies({
  hobbies,
}: {
  hobbies: Profile["hobbies"];
}) {
  return (
    <section id="hobbies" className="section">
      <div className="section-heading">
        <h2>{hobbies.heading}</h2>
        <p>{hobbies.subheading}</p>
      </div>

      <div className="hobbies">
        {hobbies.items.map((hobby, index) => (
          <div className="hobby" key={hobby.title}>
            <div className="hobby-number">
              {String(index + 1).padStart(2, "0")} / {hobby.category}
            </div>
            <h3>{hobby.title}</h3>
            <p>{hobby.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
