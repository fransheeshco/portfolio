import { MobileNavigation } from "@/components/portfolio/MobileNavigation";
import { EmailCopyButton } from "@/components/portfolio/EmailCopyButton";
import { ResumeDialog } from "@/components/portfolio/ResumeDialog";
import { ProjectBento, type SystemProject } from "@/components/portfolio/ProjectBento";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#experience" },
  { label: "Tech matrix", href: "#stack" },
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
  },
];

const skills = [
  { title: "Backend & APIs", description: "Service boundaries, validation, and reliable request handling.", items: [{ name: "Python & Flask", context: "REST services, migration tooling, data pipelines" }, { name: "Node.js & Express", context: "Typed APIs and transaction workflows" }, { name: "API design", context: "Idempotency, webhooks, validation, error contracts" }] },
  { title: "Data systems", description: "Models built around access patterns and consistency needs.", items: [{ name: "PostgreSQL & SQL", context: "Relational modeling, reporting, transactional data" }, { name: "DynamoDB", context: "Atomic slot claims and serverless access patterns" }, { name: "Supabase & vector search", context: "Hosted data, embeddings, grounded retrieval" }] },
  { title: "Product engineering", description: "Interfaces that make complex workflows understandable.", items: [{ name: "React & Next.js", context: "Responsive applications and server/client boundaries" }, { name: "React Native & Expo", context: "Profile, media, localization, and navigation flows" }, { name: "TypeScript & Tailwind", context: "Typed UI systems and maintainable styling" }] },
  { title: "Cloud & delivery", description: "Deployment paths with testing and recovery in mind.", items: [{ name: "AWS", context: "Lambda, API Gateway, DynamoDB, S3, CloudFront" }, { name: "Docker & Git", context: "Repeatable environments and reviewable delivery" }, { name: "Vercel & Render", context: "Web application deployment and operations" }] },
];

const principles = [
  { number: "01", title: "Make races explicit", description: "Identify shared state early, then enforce ownership with atomic operations, idempotency keys, and database constraints." },
  { number: "02", title: "Design the recovery path", description: "Retries, duplicate events, interrupted migrations, and expired holds are first-class states—not edge-case afterthoughts." },
  { number: "03", title: "Keep contracts legible", description: "APIs and data models should make invalid states difficult to represent and failure responses easy to act on." },
  { number: "04", title: "Measure before tuning", description: "Use tests, query evidence, and observable behavior to find the real bottleneck before adding infrastructure." },
];

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Francis Cejas, home"><span className="brand-mark">FC</span><span>Francis Cejas</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions"><ThemeToggle /><a className="header-cta" href="mailto:francisn.cejas@gmail.com">Start a conversation</a></div>
        <MobileNavigation items={navigation} />
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-kicker"><span /> Available for systems work</p>
          <h1 id="hero-title">Dependable backends.<br />Useful web systems.</h1>
          <p className="hero-deck">I design full-stack products around clear data models, reliable APIs, and the failure paths that appear under real use.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects">View engineered systems</a><EmailCopyButton email="francisn.cejas@gmail.com" /></div>
          <p className="hero-location"><strong>Core stack</strong> / Python · TypeScript · Node.js · PostgreSQL · AWS</p>
        </div>
        <div className="engineer-card" aria-label="Francis Cejas engineering profile">
          <div className="engineer-card-head"><span>Engineering profile</span><strong><i /> Available</strong></div>
          <div className="engineer-card-main">
            <div className="terminal-line"><span>$</span> whoami</div>
            <h2>Francis Cejas</h2>
            <p>Computer Science undergraduate building production-minded software across backend, cloud, data, and interface layers.</p>
          </div>
          <dl className="engineer-facts"><div><dt>Focus</dt><dd>Full-stack & backend systems</dd></div><div><dt>Based</dt><dd>Iligan, Philippines</dd></div><div><dt>Education</dt><dd>BS Computer Science · 2023–2027</dd></div><div><dt>Current work</dt><dd>Serverless booking & payments</dd></div></dl>
          <div className="engineer-stack"><span>Python</span><i /> <span>TypeScript</span><i /> <span>AWS</span><i /> <span>PostgreSQL</span></div>
        </div>
      </section>

      <section className="impact-strip" aria-label="Selected engineering metrics">
        <div><strong>9</strong><span>ARM64 Lambda functions</span></div><div><strong>177</strong><span>automated system tests</span></div><div><strong>2,081</strong><span>census tracts analyzed</span></div><div><strong>433</strong><span>records migrated cleanly</span></div>
      </section>

      <section className="systems section-shell" id="projects" aria-labelledby="systems-title">
        <div className="section-heading"><div><p>Engineered work</p><h2 id="systems-title">Production systems & full-stack projects.</h2></div><p>Filter the work, then open any project to inspect its bottleneck, data flow, trade-offs, and live capacity model.</p></div>
        <ProjectBento projects={projects} />
      </section>

      <section className="principles section-shell" id="architecture" aria-labelledby="architecture-title">
        <div className="section-heading"><div><p>Engineering philosophy</p><h2 id="architecture-title">Principles that survive the framework.</h2></div><p>Software engineering is the work of managing state, failure, and change. These rules guide the implementation.</p></div>
        <div className="principle-grid">{principles.map((principle) => <article key={principle.number}><span>Principle {principle.number}</span><h3>{principle.title}</h3><p>{principle.description}</p><footer><span>System invariant</span><strong>Applied in the work</strong></footer></article>)}</div>
      </section>

      <section className="experience section-shell" id="experience" aria-labelledby="experience-title">
        <div className="section-heading compact"><div><p>Track record</p><h2 id="experience-title">Engineering experience.</h2></div><p>Production contributions across serverless commerce, recoverable migration tooling, and mobile product delivery.</p></div>
        <div className="experience-list">
          {experience.map((item, index) => <article className="experience-item" key={item.company}>
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-meta"><h3>{item.role}</h3><p>{item.company}</p><span>{item.period}<br />{item.location}</span></div>
            <div className="experience-body"><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><p className="experience-stack">{item.stack}</p></div>
          </article>)}
        </div>
      </section>

      <section className="stack section-shell" id="stack" aria-labelledby="stack-title">
        <div className="section-heading"><div><p>Technical proficiency</p><h2 id="stack-title">Engineering matrix.</h2></div><p>Explicit capability context, with no vanity percentages or inflated proficiency labels.</p></div>
        <div className="education-banner"><div><span>Academic foundation</span><h3>Bachelor of Science in Computer Science</h3><p>Mindanao State University–Iligan Institute of Technology · 2023–2027</p></div><div><span>Core studies</span><p>Data structures & algorithms · Databases · Software engineering · Application development</p></div></div>
        <div className="skill-matrix">{skills.map((skill) => <article className="skill-card" key={skill.title}><h3>{skill.title}</h3><p>{skill.description}</p><div>{skill.items.map((item) => <div className="skill-item" key={item.name}><strong>{item.name}</strong><span>{item.context}</span></div>)}</div></article>)}</div>
      </section>

      <section className="contact-hub section-shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-aside"><p>Initiate contact</p><h2 id="contact-title">Build something dependable.</h2><p>Open to full-stack, backend, and software engineering opportunities where system quality matters.</p><div className="direct-email"><span>Direct inquiries</span><strong>francisn.cejas@gmail.com</strong><EmailCopyButton email="francisn.cejas@gmail.com" /></div><div className="contact-links"><a href="https://github.com/fransheeshco" target="_blank" rel="noreferrer">GitHub repositories</a><a href="https://www.linkedin.com/in/francis-nelson-cejas" target="_blank" rel="noreferrer">LinkedIn profile</a></div></div>
        <ContactForm />
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-brand"><span><i /> Francis Cejas</span><p>Full-Stack & Backend Systems Engineer</p></div>
        <div className="footer-nav"><a href="#projects">Projects</a><a href="#architecture">Architecture</a><a href="#experience">Experience</a><ResumeDialog triggerClassName="footer-resume" triggerLabel="Resume" /><a href="#top">Back to top</a></div>
        <p className="footer-note">© {new Date().getFullYear()} Francis Cejas · Built with Next.js and TypeScript.</p>
      </footer>
    </main>
  );
}
