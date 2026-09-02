import portrait from "@/assets/francis-cejas-cutout-updated.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const facts = [
  { value: "3", label: "Featured projects" },
  { value: "2", label: "Engineering internships" },
  { value: "2", label: "AI certificates" },
];

export default function WhyHireSection() {
  return (
    <section className="portfolio-section px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <div className="why-panel mx-auto max-w-7xl">
        <div className="why-portrait" aria-hidden="true">
          <div className="why-portrait-disc" />
          <Image
            src={portrait}
            alt=""
            fill
            sizes="(min-width: 1024px) 420px, 70vw"
            className="object-contain object-bottom"
          />
        </div>

        <div className="why-copy">
          <h2 className="section-heading">
            Why <span>hire me?</span>
          </h2>
          <p>
            I bring a computer-science foundation, hands-on engineering
            experience, and a bias toward useful, understandable software.
            I&apos;m comfortable moving between interfaces, APIs, databases, and
            AI-enabled systems.
          </p>

          <dl className="why-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.value}</dt>
                <dd>{fact.label}</dd>
              </div>
            ))}
          </dl>

          <div className="why-actions">
            <a href="#contact" className="outline-action">
              Start a conversation <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href="/Resume_Cejas.pdf" target="_blank" rel="noreferrer" className="why-resume">
              View resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
