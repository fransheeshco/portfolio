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
  SiExpo,
  SiExpress,
  SiFlask,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRender,
  SiSupabase,
  SiTailwindcss,
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
    tagline: "A concurrency-safe court booking and payment platform.",
    category: "Full-stack platform",
    metric: "177 tests",
    metricLabel: "booking, payment & infrastructure checks",
    stack: ["Next.js", "TypeScript", "AWS", "DynamoDB", "PayMongo"],
    summary: "A serverless booking system that protects inventory while customers select dynamic one-hour slots and complete online payment.",
    bottleneck: "Concurrent requests could claim the same court slot while delayed or duplicated payment events created inconsistent booking state.",
    solution: "Atomic DynamoDB slot transactions, 10-minute payment holds, signed webhook verification, idempotent event handling, and server-side payment confirmation.",
    tradeoffs: "DynamoDB favors predictable, low-latency access and atomic conditional writes, but requires access patterns to be designed up front. Nine focused Lambda functions keep deployment boundaries small at the cost of more distributed tracing.",
    flow: ["Customer", "API Gateway", "9 Lambdas", "DynamoDB", "PayMongo"],
    capacity: 9,
    featured: true,
    group: "fullstack",
    timeframe: "Sep 2026 — Present",
    stats: [{ label: "Functions", value: "9" }, { label: "Tests", value: "177" }, { label: "Payment hold", value: "10 min" }],
    image: "/generated-systems-workbench.png",
  },
  {
    id: "urban-canopy",
    title: "UrbanCanopy AI",
    tagline: "Geospatial evidence turned into neighborhood-level action.",
    category: "AI & data systems",
    metric: "2,081",
    metricLabel: "NYC census tracts ranked",
    stack: ["Python", "React", "Earth Engine", "Gemini", "Supabase", "RAG"],
    summary: "A decision-support platform that combines heat, vegetation, population, and socioeconomic signals with grounded planning guidance.",
    bottleneck: "Environmental indicators live at different scales and formats, while generated recommendations need to remain grounded in official policy sources.",
    solution: "A Python scoring pipeline normalizes geospatial indicators; REST endpoints serve tract results; Supabase vector search retrieves planning context before Gemini generates recommendations.",
    tradeoffs: "A weighted score is explainable and fast to query, but exposes assumptions that must be calibrated. Retrieval adds latency, but gives each recommendation an auditable source trail.",
    flow: ["React map", "REST API", "Scoring pipeline", "Vector search", "Gemini"],
    capacity: 12,
    featured: true,
    group: "data",
    timeframe: "Jul 2026",
    stats: [{ label: "Census tracts", value: "2,081" }, { label: "Coverage", value: "5 boroughs" }, { label: "Guidance", value: "RAG" }],
    image: "/MCS-Final.png",
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
    capacity: 7,
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
    capacity: 6,
    group: "fullstack",
    timeframe: "Jan — Apr 2025",
    stats: [{ label: "API", value: "REST" }, { label: "Storage", value: "PostgreSQL" }, { label: "Reporting", value: "Charts" }],
    href: "https://github.com/fransheeshco/quanta-finance-tracker",
    image: "/Quanta-Landing-Page.png",
  },
];

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Lob Side Booking System",
    period: "Sep 2026 — Present",
    location: "Philippines",
    bullets: [
      "Built real-time court availability, dynamic one-hour pricing, online checkout, and booking verification.",
      "Engineered 9 ARM64 Lambda functions with atomic slot transactions to prevent concurrent double bookings.",
      "Validated booking, payments, authentication, and infrastructure behavior with 177 automated tests.",
    ],
    stack: "Next.js / TypeScript / AWS / DynamoDB / PayMongo",
    logo: "/company-logos/lob-side.jpg",
  },
  {
    role: "Software Engineering Intern",
    company: "Mata Technologies",
    period: "Jun 2026 — Jul 2026",
    location: "Cebu, Philippines",
    bullets: [
      "Built a schema-aware WordPress-to-Webflow migration pipeline with duplicate detection, retries, and checkpoint recovery.",
      "Grouped 433 gallery records into 238 verified photo sets and prepared 498 images with source metadata.",
      "Delivered React Native profile, media-picker, localization, and provider-mode flows for Expedify.",
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
  { name: "OpenAPI", context: "API contracts and documentation", icon: SiOpenapiinitiative },
  { name: "PostgreSQL", context: "Relational modeling and reporting", icon: SiPostgresql },
  { name: "DynamoDB", context: "Atomic serverless data access", icon: FaAws },
  { name: "Supabase", context: "Hosted data and vector search", icon: SiSupabase },
  { name: "React", context: "Responsive product interfaces", icon: SiReact },
  { name: "Next.js", context: "Full-stack React applications", icon: SiNextdotjs },
  { name: "React Native", context: "Cross-platform mobile interfaces", icon: SiReact },
  { name: "Expo", context: "React Native application delivery", icon: SiExpo },
  { name: "TypeScript", context: "Typed application development", icon: SiTypescript },
  { name: "Tailwind CSS", context: "Maintainable interface styling", icon: SiTailwindcss },
  { name: "AWS", context: "Lambda, API Gateway, S3 and CloudFront", icon: FaAws },
  { name: "Docker", context: "Repeatable development environments", icon: SiDocker },
  { name: "Git", context: "Version control and collaborative delivery", icon: SiGit },
  { name: "Vercel", context: "Next.js deployment and operations", icon: SiVercel },
  { name: "Render", context: "Web service deployment", icon: SiRender },
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
    title: "Programming Competition 2025 — Top Position",
    organizer: "College of Computer Studies",
    date: "2025",
    kind: "Recognition",
    description: "Achieved one of the top positions through strong competitive-programming, problem-solving, and coding performance.",
  },
  {
    title: "We.eekHack 2024",
    organizer: "College of Computer Studies, Mindanao State University",
    date: "November 23, 2024",
    kind: "Hackathon",
    description: "Participated in a competitive programming event organized by the College of Computer Studies.",
  },
  {
    title: "Web Development for Web Developers",
    organizer: "DICT ICT Literacy and Competency Development Bureau",
    date: "November 6–10, 2023",
    kind: "Training",
    description: "Completed 40 hours of hands-on web development training at the DICT DTC Iligan Office.",
  },
];

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <div className="page-column">
      <MagicBlurFade delay={.04}><section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Hi, I&apos;m Francis</h1>
          <p className="hero-deck">Full-stack and backend systems engineer building dependable APIs, data workflows, and useful web products in Iligan, Philippines.</p>
        </div>
        <div className="portrait-wrap">
          <Image src={portrait} alt="Francis Cejas" fill priority sizes="(max-width: 640px) 112px, 132px" />
        </div>
      </section></MagicBlurFade>

      <MagicBlurFade delay={.12}><section className="content-section about-section" aria-labelledby="about-title">
        <h2 id="about-title">About</h2>
        <p>Computer Science undergraduate building production-minded software across backend, cloud, data, and interface layers. I care about clear system boundaries, recovery paths, and products that stay understandable under real use.</p>
        <div className="profile-actions"><a href="#projects">View projects</a><EmailCopyButton email="francisn.cejas@gmail.com" /><ResumeDialog triggerClassName="button-secondary" triggerLabel="Résumé" /></div>
      </section></MagicBlurFade>

      <MagicBlurFade delay={.18}><section className="content-section" id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Work experience</h2>
        <WorkExperience experience={experience} />
      </section></MagicBlurFade>

      <MagicBlurFade delay={.24}><section className="content-section education-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <article className="education-row"><div className="experience-mark" aria-hidden="true">M</div><div><div className="experience-title-row"><div><h3>Mindanao State University–Iligan Institute of Technology</h3><p>Bachelor of Science in Computer Science</p></div><span>2023 — 2027</span></div></div></article>
      </section></MagicBlurFade>

      <MagicBlurFade delay={.3}><section className="content-section" id="stack" aria-labelledby="stack-title">
        <h2 id="stack-title">Skills</h2>
        <div className="skill-pills">{skills.map((skill) => { const Icon = skill.icon; return <span className="skill-pill" title={skill.context} key={skill.name}><Icon className="skill-logo" aria-hidden="true" />{skill.name}</span>; })}</div>
      </section></MagicBlurFade>

      <MagicBlurFade delay={.36}><section className="content-section projects-section" id="projects" aria-labelledby="systems-title">
        <div className="section-rule-title"><i /><span>My projects</span><i /></div>
        <div className="centered-heading"><h2 id="systems-title">Check out my latest work</h2><p>Full-stack systems built around reliable state, clear data models, and practical product needs. Open a project for its architecture, trade-offs, and live capacity model.</p></div>
        <ProjectBento projects={projects} />
      </section></MagicBlurFade>

      <MagicBlurFade delay={.42}><section className="content-section awards-section" id="awards" aria-labelledby="awards-title">
        <div className="section-rule-title"><i /><span>Hackathons &amp; awards</span><i /></div>
        <div className="centered-heading"><h2 id="awards-title">Milestones worth keeping</h2><p>Competitive programming, technical training, and recognition for making complex ideas easier to understand.</p></div>
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
