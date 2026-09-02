import portfolioPicture from "@/assets/francis-cejas-cutout-updated.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="hero-section scroll-mt-20">
      <div className="hero-canvas">
        <h1 className="hero-title">
          I&apos;m <span className="hero-name">Francis</span>,
          <br />
          Full-Stack Developer
        </h1>

        <div className="hero-sun" aria-hidden="true" />
        <div className="hero-portrait">
          <Image
            src={portfolioPicture}
            alt="Portrait of Francis Cejas"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-contain object-bottom"
          />
        </div>

        <div className="hero-actions" aria-label="Primary actions">
          <a href="#projects" className="hero-action-primary">
            Portfolio <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
          <a href="#contact" className="hero-action-secondary">Hire me</a>
        </div>
      </div>
    </section>
  );
}
