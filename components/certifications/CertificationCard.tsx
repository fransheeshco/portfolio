import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CalendarDays, ExternalLink, ImageIcon } from "lucide-react";
import Image from "next/image";
import type { Certification } from "./CertificationData";

export function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <Card className="group h-full rounded-lg border bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:border-orange">
      <CardContent className="pt-0">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-md bg-orange/5">
          {certification.image ? (
            <Image
              src={certification.image}
              alt={certification.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-orange/60">
              <ImageIcon className="size-9" aria-hidden="true" />
              <span className="text-xs font-semibold">Certificate image</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardHeader className="mt-auto">
        <CardTitle className="text-lg font-bold">
          {certification.title}
        </CardTitle>
        <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Award className="size-4 text-orange" aria-hidden="true" />
          Issued by {certification.issuer}
        </p>
        {certification.date && (
          <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <CalendarDays className="size-4 text-orange" aria-hidden="true" />
            {certification.date}
          </p>
        )}
        {certification.certificateUrl && (
          <a
            href={certification.certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-bold text-orange transition-colors hover:text-orange/80"
            aria-label={`View ${certification.title} certificate (opens in a new tab)`}
          >
            View certificate
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        )}
      </CardHeader>
    </Card>
  );
}
