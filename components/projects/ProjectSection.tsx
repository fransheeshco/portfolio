import { projects } from "@/components/projects/ProjectData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="portfolio-section px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
      <p className="section-kicker">{"// Selected projects"}</p>

      {/* Grid */}
      <div className="mt-7 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
