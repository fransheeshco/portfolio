import { projects } from "@/components/projects/ProjectData";
import { ProjectCard } from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="flex flex-col items-center bg-[linear-gradient(180deg,transparent,rgba(249,115,22,0.045),transparent)] px-6 py-20">
      {/* Header */}
      <h2 className="text-4xl font-black tracking-tight">
        Selected <span className="text-orange">Projects</span>
      </h2>

      <div className="my-4 h-1 w-16 rounded-full bg-orange" />

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
