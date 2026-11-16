"use client";

import { Copy, ExternalLink, Printer, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const resumeText = `Francis Cejas
Full-Stack Software Engineer
Iligan City, Lanao Del Norte | 0966-043-5766 | francisn.cejas@gmail.com

SKILLS
Languages: Python, TypeScript, JavaScript
Frameworks/Libraries: React, Node.js, Express, Flask, Next.js
Cloud/Data: AWS Lambda, API Gateway, DynamoDB, CloudWatch, PostgreSQL, Supabase
Tools: Git/GitHub, Docker, Vercel

EXPERIENCE
Full-Stack Software Engineer — Lobside Pickleball Court Booking System | Oct–Nov 2026
Engineered a transaction-safe serverless booking platform spanning 21 API operations and 10 AWS Lambda functions, with conditional DynamoDB transactions, idempotency keys, and optimistic concurrency control.

Software Engineering Intern — Mata Technologies | Jun–Aug 2026
Built a Python-based WordPress-to-Webflow migration pipeline, grouped 433 gallery-photo records into 238 verified photo sets, and integrated backend APIs with reusable forms and responsive layouts.

PROJECT
Transformer-based Rhythm-aware Chart Encoding and Rendering System
Built a PyTorch/Torchaudio audio-analysis pipeline and Gradio interface, then expanded the AutoOsu-derived training dataset nearly 4× from approximately 1,126 to 4,504 samples.

EDUCATION
BS Computer Science — Mindanao State University–Iligan Institute of Technology
GPA: 1.56 (1.00 highest) | Expected July 2027`;

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
    {open && createPortal(<div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
      <section className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-dialog-title">
        <header className="modal-header"><div><span>Document viewer</span><h2 id="resume-dialog-title">Francis Cejas · Résumé</h2></div><div className="modal-actions"><button type="button" onClick={copyResume}><Copy size={16} /> Copy text</button><button type="button" onClick={() => window.print()}><Printer size={16} /> Print</button><a href="/Francis-Cejas-Resume.pdf" target="_blank" rel="noreferrer" aria-label="Open PDF"><ExternalLink size={16} /></a><button type="button" className="icon-button" aria-label="Close résumé" onClick={() => setOpen(false)}><X size={18} /></button></div></header>
        <article className="resume-document">
          <header><div><h3>Francis Cejas</h3><p>Full-Stack Software Engineer</p></div><p>Iligan City, Lanao Del Norte<br />0966-043-5766 · francisn.cejas@gmail.com<br />linkedin.com/in/francis-nelson-cejas<br />github.com/fransheeshco</p></header>
          <section><h4>Education</h4><div className="resume-entry"><div><strong>Mindanao State University – Iligan Institute of Technology</strong><span>Expected July 2027</span></div><p>Bachelor of Science in Computer Science · GPA: 1.56 (1.00 highest)</p></div></section>
          <section><h4>Experience</h4><div className="resume-entry"><div><strong>Full-Stack Software Engineer · Lobside Pickleball Court Booking System</strong><span>Oct 2026 — Nov 2026</span></div><ul><li>Engineered a transaction-safe serverless booking platform spanning 21 API operations and 10 AWS Lambda functions.</li><li>Designed an atomic manual-GCash verification workflow covering booking, payment, slot ownership, revenue totals, audit history, and notifications.</li><li>Prevented double bookings with conditional DynamoDB transactions, 10-minute checkout holds, automatic expiry, and SHA-256 proof deduplication.</li></ul></div><div className="resume-entry"><div><strong>Software Engineering Intern · Mata Technologies</strong><span>Jun 2026 — Aug 2026</span></div><ul><li>Built a schema-aware WordPress-to-Webflow migration pipeline with field mapping and Webflow API integration.</li><li>Grouped 433 gallery-photo records into 238 photo sets and generated verification reports for the resulting mappings.</li><li>Integrated backend APIs with reusable forms and responsive layouts, replacing hard-coded geographic and language options with standardized data packages.</li></ul></div></section>
          <section><h4>Selected project</h4><div className="resume-entry"><div><strong>Transformer-based Rhythm-aware Chart Encoding and Rendering System</strong></div><p>Built a PyTorch/Torchaudio audio-analysis pipeline and Gradio interface with progressive chart previews, then expanded the AutoOsu-derived training dataset nearly 4× to approximately 4,504 samples.</p></div></section>
          <section className="resume-columns"><div><h4>Technical stack</h4><p>Python · TypeScript · JavaScript<br />React · Node.js · Express · Flask · Next.js<br />AWS Lambda · API Gateway · DynamoDB · CloudWatch<br />PostgreSQL · Supabase<br />Git/GitHub · Docker · Vercel</p></div><div><h4>Awards</h4><p><strong>Best in Quantum Analogy</strong><br />May 30, 2026<br /><br /><strong>School Programming Competition 2025 — Winner</strong><br />March 2025</p></div></section>
        </article>
      </section>
    </div>, document.body)}
  </>;
}
