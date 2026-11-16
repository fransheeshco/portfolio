"use client";

import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Image from "next/image";

export type SystemProject = { id: string; title: string; tagline: string; category: string; metric: string; metricLabel: string; stack: string[]; summary: string; bottleneck: string; solution: string; tradeoffs: string; flow: string[]; group: "backend" | "fullstack" | "data"; timeframe: string; stats: { label: string; value: string }[]; featured?: boolean; href?: string; image?: string };

export function ProjectBento({ projects }: { projects: SystemProject[] }) {
  const [active, setActive] = useState<SystemProject | null>(null);
  const [filter, setFilter] = useState<"all" | SystemProject["group"]>("all");
  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [active]);
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.group === filter);
  return <>
    <div className="project-filters" aria-label="Filter projects">
      {([['all', 'All systems'], ['fullstack', 'Full-stack'], ['backend', 'Backend'], ['data', 'AI & data']] as const).map(([value, label]) => <button type="button" key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>{label}</button>)}
    </div>
    <div className="project-grid">
      {visibleProjects.map((project) => <article className={`project-card ${project.featured ? "featured" : "compact"}`} key={project.id}>
        <button type="button" className="project-open" onClick={() => setActive(project)} aria-label={`Open ${project.title} architecture details`} />
        {project.image && <div className={`project-media ${project.id === "lob-side" ? "lobside-media" : ""}`}><Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 640px) 100vw, 360px" /></div>}
        <div className="project-copy"><div className="project-title-row"><h3>{project.title}</h3><span>{project.timeframe}</span></div><p>{project.tagline}</p><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
        <div className="project-foot"><span>Deep dive</span><ArrowUpRight size={14} /></div>
      </article>)}
    </div>
    {active && createPortal(<div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
        <header className="modal-header project-modal-head"><div><span>{active.category}</span><h2 id="project-dialog-title">{active.title}</h2></div><button type="button" className="icon-button" aria-label="Close project details" onClick={() => setActive(null)}><X size={18} /></button></header>
        <div className="project-modal-body"><div className="modal-narrative">
          <p className="modal-summary">{active.summary}</p>
          <dl className="project-metrics">{active.stats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>
          <div className="compare-grid"><div><span>Bottleneck</span><p>{active.bottleneck}</p></div><div><span>Engineered response</span><p>{active.solution}</p></div></div>
          <div className="architecture-flow"><span>System data flow</span><div>{active.flow.map((node, index) => <span key={node}><b>{node}</b>{index < active.flow.length - 1 && <i>→</i>}</span>)}</div></div>
          <div className="tradeoffs"><span>Engineering trade-offs</span><p>{active.tradeoffs}</p></div>
          <div className="modal-stack">{active.stack.join(" / ")}</div>
          {active.href && <a className="repo-link" href={active.href} target="_blank" rel="noreferrer"><FaGithub size={17} /> Open repository <ArrowUpRight size={15} /></a>}
        </div></div>
      </section>
    </div>, document.body)}
  </>;
}
