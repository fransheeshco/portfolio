import portfolioPicture from "@/assets/Picture-Portfolio.jpeg";
import { Code2, Mail } from "lucide-react";
import Image from "next/image";

const facts = [
  { label: "Location", value: "Philippines" },
  { label: "Focus", value: "Full-stack · AI · Systems" },
  { label: "Philosophy", value: "Build clearly. Keep learning." },
];

export default function AboutMe() {
  return (
      <section id="about" className="portfolio-section scroll-mt-20 pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:pb-20">
          <div>
            <p className="section-kicker">
              <span className="size-2 rounded-full bg-orange" />
              CS student · developer · debater
            </p>
            <h1 className="mt-5 max-w-3xl text-[clamp(3.25rem,7vw,6.8rem)] font-black leading-[0.86] tracking-[-0.075em]">
              Francis
              <br />
              Cejas
            </h1>
            <p className="mt-6 text-xl font-medium tracking-tight sm:text-2xl">
              Full-Stack <span className="text-orange">Developer</span> / AI
              Explorer
            </p>
            <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              I build practical software and intelligent systems that turn
              ideas into real-world impact. Curious by nature, driven by code,
              and always ready to debate a good idea.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="primary-action">
                <Code2 className="size-4" />
                View projects
              </a>
              <a href="#contact" className="secondary-action">
                <Mail className="size-4" />
                Contact me
              </a>
            </div>

            <dl className="mt-10 grid max-w-2xl gap-5 border-t pt-6 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-xs font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -inset-5 technical-grid opacity-60" />
            <div className="relative aspect-[4/5] overflow-hidden border border-orange/25 bg-muted shadow-[18px_18px_0_color-mix(in_oklab,var(--orange)_10%,transparent)]">
              <Image
                src={portfolioPicture}
                alt="Portrait of Francis Cejas"
                fill
                priority
                sizes="(min-width: 1024px) 440px, 90vw"
                className="object-cover object-[50%_42%]"
              />
            </div>
            <span className="absolute -left-3 -top-3 size-6 border-l-2 border-t-2 border-orange" />
            <span className="absolute -bottom-3 -right-3 size-6 border-b-2 border-r-2 border-orange" />
          </div>
        </div>
      </section>
  );
}
