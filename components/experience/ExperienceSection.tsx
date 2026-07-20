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
    organization: "Mata Technologies",
    title: "React Native Mobile Developer Intern",
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
  {
    organization: "Xavier University Senior High School – Ateneo de Cagayan",
    title: "STEM Strand",
    period: "2021 – 2023",
    type: "Education",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative mx-auto w-full max-w-5xl px-4 py-20">
      <h2 className="mb-12 text-center text-3xl font-black">
        Education <span className="text-orange">& Experience</span>
      </h2>

      <div className="absolute bottom-10 left-1/2 top-28 hidden w-[2px] -translate-x-1/2 bg-orange/20 md:block" />

      <div className="flex flex-col gap-8 md:gap-10">
        {timeline.map((item, index) => {
          const Icon =
            item.type === "Experience" ? BriefcaseBusiness : GraduationCap;

          return (
            <div
              key={`${item.organization}-${item.period}`}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="absolute left-1/2 hidden size-4 -translate-x-1/2 rounded-full border-4 border-background bg-orange shadow-[0_0_0_3px_rgba(234,88,12,0.15)] md:block" />

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full md:w-[45%]"
              >
                <Card className="rounded-3xl border-orange/10 bg-card/85 shadow-[0_14px_40px_rgba(41,27,14,0.07)] transition hover:-translate-y-1 hover:border-orange/30 hover:shadow-[0_18px_45px_rgba(234,88,12,0.1)]">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">
                        <Icon className="size-3.5" />
                        {item.type}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
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
    </section>
  );
}
