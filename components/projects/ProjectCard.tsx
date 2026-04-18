import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

interface TechItem {
  name: string;
  icon: any;
}

interface Project {
  title: string;
  description: string;
  tech: TechItem[];
  github: string;
  photo?: string;
  live?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      className="
        group flex flex-col h-full
        transition-all duration-300 border-border/50
        hover:scale-[1.02] hover:shadow-lg
      "
    >
      {/* Header */}
      <CardHeader>
        <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex flex-col flex-1 space-y-4">
        {/* Photo */}
        {project.photo && (
          <div className="w-full h-48 overflow-hidden rounded-md">
            <img
              src={project.photo}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {/* Description */}
        <p className="font-bold">Description:</p>
        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
          flex items-center gap-1.5
          text-xs px-2 py-1 rounded-md
          bg-muted text-muted-foreground
          transition-all duration-200
          hover:bg-muted/70
        "
              >
                <Icon className="size-3.5" />
                {tech.name}
              </div>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="mt-auto flex flex-col gap-3 pt-4">
          {/* Divider */}
          <div className="h-px w-full bg-border/60" />

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
    flex items-center gap-1.5 text-sm
    text-foreground font-semibold
    hover:underline underline-offset-4
    transition-all
  "
            >
              <FaGithub className="size-4" />
              View Code
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
          flex items-center gap-1.5 text-sm
          text-muted-foreground
          hover:text-foreground
          transition-colors
        "
              >
                <ExternalLink className="size-4" />
                Live
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
