import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Project {
  title: string;
  description: string;
  tech: TechItem[];
  github: string;
  photo?: string;
  live?: string;
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "is-featured" : ""}`}>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="project-card-link"
        aria-label={`View ${project.title} code`}
      >
        {project.photo && (
          <div className="project-image">
            <Image
              src={project.photo}
              alt={`${project.title} application interface preview`}
              fill
              sizes={featured ? "(min-width: 1024px) 45vw, 100vw" : "100vw"}
              className="object-cover object-top"
            />
            <div className="project-overlay">
              <div className="project-overlay-heading">
                <h3>{project.title}</h3>
                <span className="project-cta" aria-hidden="true">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <span key={tech.name}>
                      <Icon className="size-3" aria-hidden="true" />
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </a>
    </article>
  );
}
