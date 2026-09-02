import { projects } from "@/components/projects/ProjectData";
import { ArrowUpRight, Bot, Database, PanelsTopLeft } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Web development",
    description: "Responsive products built with React, Next.js, TypeScript, and modern CSS.",
    icon: PanelsTopLeft,
    project: projects[2],
  },
  {
    title: "Backend & systems",
    description: "Reliable APIs and data flows using Python, Flask, Node.js, and PostgreSQL.",
    icon: Database,
    project: projects[0],
  },
  {
    title: "AI & data",
    description: "Practical AI exploration, database design, and clear data visualization.",
    icon: Bot,
    project: projects[1],
  },
];

export default function TechStackSection() {
  return (
    <section className="portfolio-section px-3 py-8 sm:px-5 lg:px-8">
      <div className="services-stage mx-auto max-w-[96rem]">
        <div className="services-heading">
          <h2 className="section-heading">My <span>Services</span></h2>
          <p>Full-stack thinking for products that need a clear interface and a dependable foundation.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card-copy">
                <service.icon className="size-6" strokeWidth={1.7} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-preview">
                <Image
                  src={service.project.photo}
                  alt={`${service.project.title} interface`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover object-top"
                />
              </div>
              <a href="#projects" className="service-arrow" aria-label={`See ${service.title} projects`}>
                <ArrowUpRight className="size-6" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
