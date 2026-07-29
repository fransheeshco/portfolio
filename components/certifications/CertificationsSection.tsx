import { certifications } from "./CertificationData";
import { CertificationCard } from "./CertificationCard";

export default function CertificationsSection() {
  return (
    <section className="portfolio-section px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
      <p className="section-kicker">{"// Certificates"}</p>
      <div className="mt-7 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`${certification.title}-${index}`}
            certification={certification}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
