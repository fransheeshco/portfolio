import { projects } from "@/components/projects/ProjectData";
import { ArrowUpRight, Bot, Code2, PenTool } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "UI/UX Design",
    description: "Responsive interfaces, wireframes, prototypes, and design systems shaped around clear user journeys.",
    icon: PenTool,
    project: projects[2],
  },
  {
    title: "Full-Stack Software Development",
    description: "Web applications, dashboards, APIs, databases, authentication, and complete frontend-to-backend integration.",
    icon: Code2,
    project: projects[0],
  },
  {
    title: "AI Integration & Automation",
    description: "AI-powered product features, API integrations, intelligent workflows, and practical process automation.",
    icon: Bot,
    project: projects[1],
  },
];

export default function TechStackSection() {
  return (
    <section className="portfolio-section services-section px-3 py-8 sm:px-5 lg:px-8">
      <div className="services-stage mx-auto max-w-[96rem]">
        <div className="services-heading">
          <h2 className="section-heading">My <span>Services</span></h2>
          <p>From product design to production software and AI-enabled workflows, I help turn ideas into useful digital experiences.</p>
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
