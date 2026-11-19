"use client";

import { useEffect, useRef, useState } from "react";

/** Scroll progress bar at the top of the page + floating back-to-top button. */
export default function ScrollEffects() {
  const barRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollable =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (barRef.current) {
        barRef.current.style.width =
          (scrollable > 0 ? (scrollTop / scrollable) * 100 : 0) + "%";
      }

      setShowTop(scrollTop > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" ref={barRef} aria-hidden="true" />
      <button
        className={showTop ? "top-button visible" : "top-button"}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
