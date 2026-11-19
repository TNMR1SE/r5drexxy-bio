"use client";

import { useState } from "react";
import type { Profile } from "@/data/profile";

export default function Faq({ faq }: { faq: Profile["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <div className="section-heading">
        <h2>{faq.heading}</h2>
        <p>{faq.subheading}</p>
      </div>

      <div className="faq">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              className={isOpen ? "faq-item active" : "faq-item"}
              key={item.question}
            >
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <span aria-hidden="true">+</span>
              </button>
              <div className="faq-answer">{item.answer}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
