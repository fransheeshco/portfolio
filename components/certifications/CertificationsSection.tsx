import { certifications } from "./CertificationData";
import { CertificationCard } from "./CertificationCard";

export default function CertificationsSection() {
  return (
    <section className="portfolio-section credentials-section px-3 py-8 sm:px-5 lg:px-8">
      <div className="credentials-stage mx-auto max-w-[96rem]">
        <div className="credentials-heading">
          <h2 className="section-heading">Credentials that support <span>the work</span></h2>
          <p>Continued learning in practical AI systems, frameworks, and responsible collaboration.</p>
        </div>
        <div className="credentials-grid">
          {certifications.map((certification, index) => (
            <CertificationCard key={`${certification.title}-${index}`} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
}
