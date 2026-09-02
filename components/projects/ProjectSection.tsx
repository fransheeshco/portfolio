import { projects } from "@/components/projects/ProjectData";
import { ProjectCard } from "./ProjectCard";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="portfolio-section showcase-section px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="showcase-heading">
          <h2 className="section-heading">Let&apos;s have a look at my <span>Portfolio</span></h2>
          <a href="https://github.com/fransheeshco" target="_blank" rel="noreferrer" className="accent-action">
            See all <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} featured={index < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
