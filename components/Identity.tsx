import type { Profile } from "@/data/profile";

export default function Identity({ profile }: { profile: Profile }) {
  const { name, handle, bio, status, tags } = profile;

  return (
    <>
      <div className="identity">
        <div className="name">
          <h2>
            {name} <span>{handle}</span>
          </h2>
          <div className="username">{bio}</div>
        </div>

        {status.show && (
          <div className="status">
            <div className="status-dot" />
            {status.label}
          </div>
        )}
      </div>

      <div className="tags">
        {tags.map((tag) => (
          <div
            key={tag.label}
            className={tag.highlight ? "tag accent" : "tag"}
          >
            {tag.label}
          </div>
        ))}
      </div>

      <div className="divider" />
    </>
  );
}
