type TimelineItem = {
  organization: string;
  title: string;
  period: string;
  type: "Experience" | "Education";
  detail?: string;
};

const timeline: TimelineItem[] = [
  {
    organization: "FlyRank AI",
    title: "Backend AI Engineer Intern",
    period: "July 2026 – Present",
    type: "Experience",
  },
  {
    organization: "Mata Technologies",
    title: "Software Engineering Intern",
    period: "June 2026 – July 2026",
    type: "Experience",
  },
  {
    organization: "Mindanao State University – Iligan Institute of Technology",
    title: "BS in Computer Science",
    period: "2023 – Present",
    type: "Education",
    detail: "GPA: 1.51",
  },
];

export default function ExperienceSection() {
  return (
    <section className="portfolio-section px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="section-heading experience-heading">My <span>Work Experience</span></h2>

        <div className="experience-list">
          {timeline.map((item) => (
            <article className="experience-row" key={`${item.organization}-${item.period}`}>
              <div className="experience-place">
                <h3>{item.organization}</h3>
                <p>{item.period}</p>
              </div>
              <div className="experience-marker" aria-hidden="true"><span /></div>
              <div className="experience-role">
                <h3>{item.title}</h3>
                <p>{item.type === "Education" ? `Computer science education in progress${item.detail ? ` · ${item.detail}` : ""}.` : `${item.type} focused on practical software engineering.`}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
