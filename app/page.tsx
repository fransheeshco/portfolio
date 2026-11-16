import Image from "next/image";
import { EmailCopyButton } from "@/components/portfolio/EmailCopyButton";
import { ResumeDialog } from "@/components/portfolio/ResumeDialog";
import { ProjectBento, type SystemProject } from "@/components/portfolio/ProjectBento";
import { PortfolioDock } from "@/components/portfolio/PortfolioDock";
import { MagicBlurFade } from "@/components/portfolio/MagicBlurFade";
import { WorkExperience } from "@/components/portfolio/WorkExperience";
import { AwardsSection, type Recognition } from "@/components/portfolio/AwardsSection";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiDocker,
  SiExpress,
  SiFlask,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import portrait from "@/assets/Picture-Portfolio.jpeg";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tech matrix", href: "#stack" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const projects: SystemProject[] = [
  {
    id: "lob-side",
    title: "Lob Side Booking",
    tagline: "A transaction-safe court booking and payment platform.",
    category: "Full-stack platform",
    metric: "21 APIs",
    metricLabel: "booking and payment operations",
    stack: ["Next.js", "TypeScript", "AWS", "DynamoDB", "GCash"],
    summary: "A serverless booking system that protects court inventory while customers choose one-hour slots and complete a manual GCash payment workflow.",
    bottleneck: "Concurrent requests could claim the same court slot while delayed or duplicated payment events created inconsistent booking, payment, and slot state.",
    solution: "Conditional DynamoDB transactions, idempotency keys, optimistic concurrency control, 10-minute checkout holds, and SHA-256 proof deduplication keep the workflow consistent.",
    tradeoffs: "DynamoDB provides low-latency conditional writes and atomic reservations, but access patterns must be designed up front. Ten focused Lambda functions keep deployment boundaries small at the cost of more distributed tracing.",
    flow: ["Customer", "API Gateway", "10 Lambdas", "DynamoDB", "GCash"],
    featured: true,
    group: "fullstack",
    timeframe: "Oct — Nov 2026",
    stats: [{ label: "API operations", value: "21" }, { label: "Functions", value: "10" }, { label: "Payment hold", value: "10 min" }],
    image: "/lobside.png",
  },
  {
    id: "rhythm-chart-system",
    title: "Rhythm-aware Chart System",
    tagline: "Transformer-ready audio analysis for rhythm-game chart generation.",
    category: "AI & audio systems",
    metric: "4× data",
    metricLabel: "training-set expansion",
    stack: ["Python", "PyTorch", "Torchaudio", "Gradio", "FFmpeg"],
    summary: "An audio-analysis and chart-rendering system that prepares rhythm-game data for model training and makes progressive predictions inspectable.",
    bottleneck: "Audio from different sources needed a consistent, model-ready representation while generated charts required a practical way to preview difficulty and timing quality.",
    solution: "A PyTorch and Torchaudio pipeline decodes audio, converts it to mono, resamples at 44.1 kHz, and extracts multi-resolution log-Mel features at 100 frames per second; a Gradio interface handles uploads, difficulty controls, and progressive previews.",
    tradeoffs: "Multi-resolution features preserve more rhythmic context but increase preprocessing and training cost. Data augmentation improves diversity while requiring careful checks that musical timing remains plausible.",
    flow: ["Audio upload", "FFmpeg", "Torchaudio", "Log-Mel features", "Gradio preview"],
    featured: true,
    group: "data",
    timeframe: "Selected project",
    stats: [
      { label: "Validation onset F1", value: "74.88%" },
      { label: "Validation action F1", value: "85.57%" },
      { label: "Exact accuracy", value: "38.91%" },
      { label: "Parameters", value: "4.95M" },
      { label: "Songs", value: "399" },
      { label: "Original charts", value: "1,126" },
    ],
    image: "/tracers.png",
  },
  {
    id: "class-records",
    title: "Class Record System",
    tagline: "Secure grading workflows with clear performance reporting.",
    category: "Backend & systems",
    metric: "OAuth",
    metricLabel: "role-protected professor access",
    stack: ["Python", "Flask", "React", "PostgreSQL", "Resend"],
    summary: "A class-record workspace for sections, assessments, student results, and automated grade delivery.",
    bottleneck: "Relational assessment data had to stay consistent across professor-only CRUD workflows and student-facing grade delivery.",
    solution: "A normalized PostgreSQL model, authenticated Flask endpoints, and event-triggered email delivery keep access and data ownership explicit.",
    tradeoffs: "A relational model adds migration discipline, but makes section, assessment, and grade constraints enforceable and reporting straightforward.",
    flow: ["Professor", "React", "Flask API", "PostgreSQL", "Resend"],
    group: "backend",
    timeframe: "Nov — Dec 2025",
    stats: [{ label: "Access", value: "OAuth" }, { label: "Data", value: "PostgreSQL" }, { label: "Delivery", value: "Resend" }],
    href: "https://github.com/fransheeshco/class-records-system",
    image: "/sssissss.png",
  },
  {
    id: "quanta",
    title: "Quanta Finance",
    tagline: "A legible ledger for everyday income and spending.",
    category: "Full-stack application",
    metric: "CRUD",
    metricLabel: "complete transaction lifecycle",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    summary: "A personal finance tracker that turns transaction data into useful visual patterns.",
    bottleneck: "Financial totals and visualizations can drift when mutations and aggregation logic are split across the interface.",
    solution: "Express APIs own transaction validation and persistence; PostgreSQL provides the source of truth; React derives charts from returned ledger data.",
    tradeoffs: "Server-owned validation adds a request boundary, but prevents the UI from becoming a second, inconsistent source of financial rules.",
    flow: ["User", "React", "Express API", "PostgreSQL", "Charts"],
    group: "fullstack",
    timeframe: "Jan — Apr 2025",
    stats: [{ label: "API", value: "REST" }, { label: "Storage", value: "PostgreSQL" }, { label: "Reporting", value: "Charts" }],
    href: "https://github.com/fransheeshco/quanta-finance-tracker",
    image: "/Quanta-Landing-Page.png",
  },
];

const experience = [
  {
    role: "Full-Stack Software Engineer",
    company: "Lobside Pickleball Court Booking System",
    period: "Oct 2026 — Nov 2026",
    location: "Remote",
    bullets: [
      "Engineered a transaction-safe serverless booking platform spanning 21 API operations and 10 AWS Lambda functions, with idempotency keys and optimistic concurrency control.",
      "Designed an atomic manual-GCash verification workflow that keeps booking, payment, slot ownership, revenue totals, audit history, and notifications in one DynamoDB transaction.",
      "Prevented double bookings with conditional DynamoDB transactions, 10-minute checkout holds, automatic expiry, and SHA-256 proof deduplication.",
    ],
    stack: "Next.js / TypeScript / AWS Lambda / API Gateway / DynamoDB / CloudWatch",
    logo: "/company-logos/lob-side.jpg",
  },
  {
    role: "Software Engineering Intern",
    company: "Mata Technologies",
    period: "Jun 2026 — Aug 2026",
    location: "Cebu, Philippines",
    bullets: [
      "Built a schema-aware WordPress-to-Webflow migration pipeline with field mapping and Webflow API integration for relational CMS collections.",
      "Built a Python pipeline that grouped 433 gallery-photo records into 238 photo sets and generated verification reports for the resulting mappings.",
      "Integrated backend APIs with reusable forms and keyboard-responsive layouts, and replaced hard-coded geographic and language options with standardized data packages.",
    ],
    stack: "Python / TypeScript / React Native / Expo / Webflow API",
    logo: "/company-logos/mata-technologies.jpeg",
  },
];

type Skill = { name: string; context: string; icon: IconType };

const skills: Skill[] = [
  { name: "Python", context: "Data pipelines and backend services", icon: SiPython },
  { name: "Flask", context: "REST APIs and application backends", icon: SiFlask },
  { name: "Node.js", context: "Server-side JavaScript services", icon: SiNodedotjs },
  { name: "Express", context: "REST APIs and transaction workflows", icon: SiExpress },
  { name: "PostgreSQL", context: "Relational modeling and reporting", icon: SiPostgresql },
  { name: "DynamoDB", context: "Atomic serverless data access", icon: FaAws },
  { name: "Supabase", context: "Hosted data and vector search", icon: SiSupabase },
  { name: "React", context: "Responsive product interfaces", icon: SiReact },
  { name: "Next.js", context: "Full-stack React applications", icon: SiNextdotjs },
  { name: "TypeScript", context: "Typed application development", icon: SiTypescript },
  { name: "JavaScript", context: "Full-stack application development", icon: SiNodedotjs },
  { name: "AWS", context: "Lambda, API Gateway and CloudWatch", icon: FaAws },
  { name: "Docker", context: "Repeatable development environments", icon: SiDocker },
  { name: "Git", context: "Version control and collaborative delivery", icon: SiGit },
  { name: "Vercel", context: "Next.js deployment and operations", icon: SiVercel },
];

const recognitions: Recognition[] = [
  {
    title: "Best in Quantum Analogy",
    organizer: "XQubit Quantum Computing and Cybersecurity Lecture Series",
    date: "May 30, 2026",
    kind: "Award",
    description: "Recognized for turning quantum-computing concepts into an accessible and engaging analogy during the XQubit 2026 lecture series.",
  },
  {
    title: "School Programming Competition 2025 — Winner",
    organizer: "College of Computer Studies",
    date: "March 2025",
    kind: "Award",
    description: "Won the school programming competition through strong problem-solving and competitive-programming performance.",
  },
];

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <div className="page-column">
      <MagicBlurFade delay={.04}><section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Hi, I&apos;m Francis</h1>
          <p className="hero-deck">Full-stack software engineer building dependable serverless systems, data workflows, and useful web products in Iligan, Philippines.</p>
        </div>
        <div className="portrait-wrap">
          <Image src={portrait} alt="Francis Cejas" fill priority sizes="(max-width: 640px) 112px, 132px" />
        </div>
      </section></MagicBlurFade>

      <MagicBlurFade delay={.12}><section className="content-section about-section" aria-labelledby="about-title">
        <h2 id="about-title">About</h2>
        <p>Computer Science undergraduate with hands-on experience across serverless booking systems, data migration pipelines, and responsive web products. I care about transaction safety, clear system boundaries, and software that stays understandable under real use.</p>
        <div className="profile-actions"><a href="#projects">View projects</a><EmailCopyButton email="francisn.cejas@gmail.com" /><ResumeDialog triggerClassName="button-secondary" triggerLabel="Résumé" /></div>
      </section></MagicBlurFade>

      <MagicBlurFade delay={.18}><section className="content-section" id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Work experience</h2>
        <WorkExperience experience={experience} />
      </section></MagicBlurFade>

      <MagicBlurFade delay={.24}><section className="content-section education-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <article className="education-row"><div className="experience-mark company-logo"><Image src="/company-logos/msuiit.png" alt="" width={300} height={305} /></div><div><div className="experience-title-row"><div><h3>Mindanao State University–Iligan Institute of Technology</h3><p>Bachelor of Science in Computer Science · GPA 1.56 (1.00 highest)</p></div><span>Expected Jul 2027</span></div></div></article>
      </section></MagicBlurFade>

      <MagicBlurFade delay={.3}><section className="content-section" id="stack" aria-labelledby="stack-title">
        <h2 id="stack-title">Skills</h2>
        <div className="skill-pills">{skills.map((skill) => { const Icon = skill.icon; return <span className="skill-pill" title={skill.context} key={skill.name}><Icon className="skill-logo" aria-hidden="true" />{skill.name}</span>; })}</div>
      </section></MagicBlurFade>

      <MagicBlurFade delay={.36}><section className="content-section projects-section" id="projects" aria-labelledby="systems-title">
        <div className="section-rule-title"><i /><span>My projects</span><i /></div>
        <div className="centered-heading"><h2 id="systems-title">Check out my latest work</h2><p>Full-stack and AI systems built around reliable state, clear data models, and practical product needs. Open a project for its architecture, results, and engineering trade-offs.</p></div>
        <ProjectBento projects={projects} />
      </section></MagicBlurFade>

      <MagicBlurFade delay={.42}><section className="content-section awards-section" id="awards" aria-labelledby="awards-title">
        <div className="section-rule-title"><i /><span>Hackathons &amp; awards</span><i /></div>
        <div className="centered-heading"><h2 id="awards-title">Milestones worth keeping</h2><p>Recognition for competitive programming and for making complex technical ideas easier to understand.</p></div>
        <AwardsSection recognitions={recognitions} />
      </section></MagicBlurFade>

      <MagicBlurFade className="contact-reveal" delay={.48}><section className="content-section contact-hub" id="contact" aria-labelledby="contact-title">
        <div className="contact-grid" aria-hidden="true" />
        <span className="contact-label">Contact</span>
        <div className="centered-heading">
          <h2 id="contact-title">Get in touch</h2>
          <p>Want to chat or work together? Send me an email at <a href="mailto:francisn.cejas@gmail.com">francisn.cejas@gmail.com</a> and I&apos;ll respond whenever I can.</p>
        </div>
      </section></MagicBlurFade>

      </div>
      <PortfolioDock items={navigation} />
    </main>
  );
}
