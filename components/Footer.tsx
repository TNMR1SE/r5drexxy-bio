"use client";

import { useEffect, useState } from "react";

export default function Footer({
  line,
  timezone,
}: {
  line: string;
  timezone: { label: string; iana: string; abbreviation: string };
}) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: timezone.iana,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const interval = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(interval);
  }, [timezone.iana]);

  return (
    <div className="footer">
      {line}
      <br />
      {timezone.label}:{" "}
      <span className="timezone">
        {time ? `${time} ${timezone.abbreviation}` : "Loading…"}
      </span>
    </div>
  );
}
