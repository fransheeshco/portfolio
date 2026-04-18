import { projects } from "@/components/projects/ProjectData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 flex flex-col items-center">
      {/* Header */}
      <h2 className="text-4xl font-bold tracking-tight">
        Projects
      </h2>

      <div className="h-px w-24 bg-border/60 my-4" />

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}