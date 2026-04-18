import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiFlask,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const techStack = [
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },

  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Express", icon: SiExpress },
  { name: "Flask", icon: SiFlask },
  { name: "Node.js", icon: SiNodedotjs },

  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Supabase", icon: SiSupabase },

  { name: "Azure", icon: VscAzure },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },

  { name: "REST API", icon: TbApi },
  { name: "Database Design", icon: FaDatabase },
];

const TechItem = ({ name, icon: Icon }: { name: string; icon: any }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 mx-3",
        "whitespace-nowrap transition-opacity duration-300 hover:opacity-70",
      )}
    >
      <Icon className="size-4 sm:size-5" />
      <span className="text-xs sm:text-sm text-muted-foreground">{name}</span>
    </div>
  );
};

export default function TechStackMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-0">
      
      <Marquee
        pauseOnHover
        className="
          [--duration:25s]
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
      >
        {techStack.map((tech) => (
          <TechItem key={tech.name} {...tech} />
        ))}
      </Marquee>

    </div>
  );
}