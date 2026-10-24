"use client";

import { Activity, ArrowUpRight, Minus, Plus, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

export type SystemProject = { id: string; title: string; tagline: string; category: string; metric: string; metricLabel: string; stack: string[]; summary: string; bottleneck: string; solution: string; tradeoffs: string; flow: string[]; capacity: number; group: "backend" | "fullstack" | "data"; timeframe: string; stats: { label: string; value: string }[]; featured?: boolean; href?: string; image?: string };

function CapacityModel({ project }: { project: SystemProject }) {
  const [load, setLoad] = useState(project.capacity + 3);
  const [run, setRun] = useState(0);
  const processed = Math.min(load, project.capacity);
  const queued = Math.max(0, load - project.capacity);
  return <div className="simulator">
    <div className="simulator-head"><div><Activity size={17} /><span>Live capacity model</span></div><strong>{project.capacity} ops / tick</strong></div>
    <div className="load-control"><span>Incoming operations</span><div><button type="button" aria-label="Decrease load" onClick={() => setLoad((value) => Math.max(1, value - 1))}><Minus size={14} /></button><strong>{load}</strong><button type="button" aria-label="Increase load" onClick={() => setLoad((value) => Math.min(24, value + 1))}><Plus size={14} /></button></div></div>
    <div className="request-line" key={run}>{Array.from({ length: load }, (_, index) => <i key={index} className={index < processed ? "processed" : "queued"} style={{ animationDelay: `${index * 35}ms` }} />)}</div>
    <div className="simulator-result"><span><i className="processed" /> Processed <strong>{processed}</strong></span><span><i className="queued" /> Backpressure <strong>{queued}</strong></span></div>
    <button type="button" className="run-button" onClick={() => setRun((value) => value + 1)}>Run tick</button>
  </div>;
}

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
        {project.image && <div className="project-media"><Image src={project.image} alt="" fill sizes="(max-width: 640px) 100vw, 360px" /></div>}
        <div className="project-copy"><div className="project-title-row"><h3>{project.title}</h3><span>{project.timeframe}</span></div><p>{project.tagline}</p><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
        <div className="project-foot"><span>Deep dive</span><ArrowUpRight size={14} /></div>
      </article>)}
    </div>
    {active && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
        <header className="modal-header project-modal-head"><div><span>{active.category}</span><h2 id="project-dialog-title">{active.title}</h2></div><button type="button" className="icon-button" aria-label="Close project details" onClick={() => setActive(null)}><X size={18} /></button></header>
        <div className="project-modal-body"><div className="modal-narrative">
          <p className="modal-summary">{active.summary}</p>
          <div className="compare-grid"><div><span>Bottleneck</span><p>{active.bottleneck}</p></div><div><span>Engineered response</span><p>{active.solution}</p></div></div>
          <div className="architecture-flow"><span>System data flow</span><div>{active.flow.map((node, index) => <span key={node}><b>{node}</b>{index < active.flow.length - 1 && <i>→</i>}</span>)}</div></div>
          <div className="tradeoffs"><span>Engineering trade-offs</span><p>{active.tradeoffs}</p></div>
          <div className="modal-stack">{active.stack.join(" / ")}</div>
          {active.href && <a className="repo-link" href={active.href} target="_blank" rel="noreferrer"><FaGithub size={17} /> Open repository <ArrowUpRight size={15} /></a>}
        </div><CapacityModel project={active} /></div>
      </section>
    </div>}
  </>;
}
