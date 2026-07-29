"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

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
    <section className="portfolio-section px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="section-kicker">{"// Education & experience"}</p>

        <div className="relative mt-7">
          <div className="absolute bottom-6 left-1/2 top-6 hidden w-px -translate-x-1/2 bg-blue-600/35 md:block" />

          <div className="flex flex-col gap-8 md:gap-10">
            {timeline.map((item, index) => {
              const Icon =
                item.type === "Experience"
                  ? BriefcaseBusiness
                  : GraduationCap;

              return (
                <div
                  key={`${item.organization}-${item.period}`}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="absolute left-1/2 z-10 hidden size-4 -translate-x-1/2 rounded-full border-4 border-background bg-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.16)] md:block" />
                  <span
                    className={`absolute top-1/2 hidden -translate-y-1/2 text-xs font-bold text-blue-600 md:block ${
                      index % 2 === 0
                        ? "left-[calc(50%+1.25rem)]"
                        : "right-[calc(50%+1.25rem)]"
                    }`}
                  >
                    {item.period}
                  </span>

                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full md:w-[43%]"
                  >
                    <Card className="h-full rounded-lg border bg-card/85 transition hover:-translate-y-1 hover:border-orange">
                      <CardHeader>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                            <Icon className="size-3.5" />
                            {item.type}
                          </span>
                          <span className="text-xs font-medium text-muted-foreground md:hidden">
                            {item.period}
                          </span>
                        </div>
                        <CardTitle className="flex flex-col gap-1.5">
                          <span className="text-lg font-bold">
                            {item.organization}
                          </span>
                          <span className="text-sm font-semibold text-muted-foreground">
                            {item.title}
                          </span>
                        </CardTitle>
                      </CardHeader>

                      {item.detail && (
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {item.detail}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
