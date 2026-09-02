import { ArrowUpRight, Award } from "lucide-react";
import Image from "next/image";
import type { Certification } from "./CertificationData";

export function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <article className="credential-card">
        <div className="credential-image">
          {certification.image ? (
            <Image
              src={certification.image}
              alt={certification.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="credential-placeholder">
              <Award className="size-10" aria-hidden="true" />
              <span>Verified learning</span>
            </div>
          )}
        </div>
      <div className="credential-copy">
        <div>
          <p>{certification.issuer}</p>
          <h3>{certification.title}</h3>
        </div>
        {certification.date && (
          <p>{certification.date}</p>
        )}
        {certification.certificateUrl && (
          <a
            href={certification.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="credential-link"
            aria-label={`View ${certification.title} certificate (opens in a new tab)`}
          >
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
