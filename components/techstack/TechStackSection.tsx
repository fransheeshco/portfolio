import { Braces, Database, Layers3, Wrench } from "lucide-react";

const knowledgeAreas = [
  {
    title: "Languages",
    description: "Python, JavaScript, TypeScript, HTML, and CSS",
    icon: Braces,
  },
  {
    title: "Web development",
    description: "React, Next.js, Node.js, Express, and Flask",
    icon: Layers3,
  },
  {
    title: "Data",
    description: "PostgreSQL, MySQL, MongoDB, and Supabase",
    icon: Database,
  },
  {
    title: "Tools & concepts",
    description: "GitHub, Figma, Azure, REST APIs, and database design",
    icon: Wrench,
  },
];

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-orange">
            What I work with
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Tech stack <span className="text-orange">& knowledge</span>
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            The languages, frameworks, tools, and technical foundations I use
            to turn ideas into working software.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {knowledgeAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-3xl border border-orange/10 bg-card/75 p-5 shadow-[0_10px_32px_rgba(41,27,14,0.05)] transition hover:-translate-y-1 hover:border-orange/30 hover:shadow-[0_16px_38px_rgba(234,88,12,0.09)]"
            >
              <area.icon className="mb-4 size-6 text-orange" strokeWidth={1.8} />
              <h3 className="text-sm font-bold">{area.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
