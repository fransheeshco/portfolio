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
    <section className="portfolio-section relative overflow-hidden px-5 py-14 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-7xl">
        <p className="section-kicker">{"// Tech stack"}</p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {knowledgeAreas.map((area) => (
            <article
              key={area.title}
              className="border bg-card/75 p-5 transition hover:-translate-y-1 hover:border-orange"
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
