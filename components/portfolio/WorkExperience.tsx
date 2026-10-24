"use client";

import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string;
  logo: string;
};

export function WorkExperience({ experience }: { experience: Experience[] }) {
  const [openCompany, setOpenCompany] = useState<string | null>(null);

  return (
    <div className="experience-list">
      {experience.map((item) => {
        const isOpen = openCompany === item.company;
        return (
          <article className={`experience-item ${isOpen ? "open" : ""}`} key={item.company}>
            <button type="button" className="experience-trigger" aria-expanded={isOpen} onClick={() => setOpenCompany(isOpen ? null : item.company)}>
              <span className="experience-mark company-logo"><Image src={item.logo} alt={`${item.company} logo`} width={56} height={56} /></span>
              <span className="experience-meta">
                <span className="experience-title-row">
                  <span><strong>{item.company}</strong><small>{item.role}</small></span>
                  <time>{item.period}</time>
                </span>
                <span className="experience-chevron" aria-hidden="true">{isOpen ? <ChevronDown /> : <ChevronRight />}</span>
              </span>
            </button>
            <div className="experience-details" hidden={!isOpen}>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <p>{item.stack}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
