"use client";

import { Copy, ExternalLink, Printer, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const resumeText = `Francis Cejas
Full-Stack & Backend Systems Engineer
Iligan, Philippines | francisn.cejas@gmail.com

SKILLS
Python, TypeScript, JavaScript, SQL
Node.js, Express.js, Flask, REST APIs, PostgreSQL, Supabase
AWS, DynamoDB, Docker, Git, GitHub, Vercel, Render
React, Next.js, React Native, Expo, Tailwind CSS
RAG, LLM APIs, embeddings, vector search, structured outputs

EXPERIENCE
Full-Stack Developer — Lob Side Booking System | Sep 2026–Present
Built a serverless booking and payments platform with 9 ARM64 Lambda functions, atomic DynamoDB slot transactions, signed PayMongo webhooks, and 177 automated tests.

Software Engineering Intern — Mata Technologies | Jun–Jul 2026
Built recoverable WordPress-to-Webflow migration tooling; grouped 433 gallery records into 238 verified sets; prepared 498 images; delivered React Native product features.

PROJECT
UrbanCanopy AI | Jul 2026
Ranked 2,081 NYC census tracts through a geospatial scoring pipeline and generated grounded recommendations with Supabase vector search and Gemini.

EDUCATION
BS Computer Science — Mindanao State University–Iligan Institute of Technology | 2023–2027`;

export function ResumeDialog({ triggerClassName = "button-primary", triggerLabel = "Open résumé" }: { triggerClassName?: string; triggerLabel?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [open]);
  async function copyResume() {
    await navigator.clipboard.writeText(resumeText);
    toast.success("Résumé copied as plain text.");
  }
  return <>
    <button type="button" className={triggerClassName} onClick={() => setOpen(true)}>{triggerLabel} {triggerClassName === "button-primary" && <ExternalLink size={16} />}</button>
    {open && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
      <section className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-dialog-title">
        <header className="modal-header"><div><span>Document viewer</span><h2 id="resume-dialog-title">Francis Cejas · Résumé</h2></div><div className="modal-actions"><button type="button" onClick={copyResume}><Copy size={16} /> Copy text</button><button type="button" onClick={() => window.print()}><Printer size={16} /> Print</button><a href="/Francis-Cejas-Resume.pdf" target="_blank" rel="noreferrer" aria-label="Open PDF"><ExternalLink size={16} /></a><button type="button" className="icon-button" aria-label="Close résumé" onClick={() => setOpen(false)}><X size={18} /></button></div></header>
        <article className="resume-document">
          <header><div><h3>Francis Cejas</h3><p>Full-Stack & Backend Systems Engineer</p></div><p>Iligan, Philippines<br />francisn.cejas@gmail.com<br />github.com/fransheeshco</p></header>
          <section><h4>Profile</h4><p>Computer Science undergraduate building dependable APIs, data workflows, serverless systems, and full-stack products.</p></section>
          <section><h4>Experience</h4><div className="resume-entry"><div><strong>Full-Stack Developer · Lob Side Booking System</strong><span>Sep 2026 — Present</span></div><ul><li>Built a responsive court-booking platform with real-time availability, dynamic pricing, online payment, and booking verification.</li><li>Engineered 9 ARM64 Lambda functions with atomic DynamoDB transactions, signed PayMongo webhooks, and idempotent event processing.</li><li>Validated booking, payment, authentication, and infrastructure behavior with 177 automated tests.</li></ul></div><div className="resume-entry"><div><strong>Software Engineering Intern · Mata Technologies</strong><span>Jun 2026 — Jul 2026</span></div><ul><li>Built recoverable WordPress-to-Webflow migration tooling with schema-aware validation, retries, and duplicate detection.</li><li>Grouped 433 records into 238 verified photo sets and prepared 498 images with source metadata.</li><li>Delivered React Native profile, media, localization, and provider-mode product flows.</li></ul></div></section>
          <section><h4>Selected project</h4><div className="resume-entry"><div><strong>UrbanCanopy AI</strong><span>Jul 2026</span></div><p>Ranked 2,081 NYC census tracts through a Python geospatial scoring pipeline and generated planning recommendations grounded by Supabase vector search and Gemini.</p></div></section>
          <section className="resume-columns"><div><h4>Technical stack</h4><p>Python · TypeScript · JavaScript · SQL<br />Node.js · Express · Flask · REST APIs<br />PostgreSQL · Supabase · DynamoDB<br />React · Next.js · React Native · Expo<br />AWS · Docker · Git · Vercel · Render<br />RAG · embeddings · vector search</p></div><div><h4>Education</h4><p><strong>BS Computer Science</strong><br />Mindanao State University–Iligan Institute of Technology<br />2023 — 2027</p></div></section>
        </article>
      </section>
    </div>}
  </>;
}
