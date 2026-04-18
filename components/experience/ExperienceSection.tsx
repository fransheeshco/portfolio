"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  GPA?: string;
};

const education: EducationItem[] = [
  {
    school: "MINDANAO STATE UNIVERSITY - ILIGAN INSTITUTE OF TECHNOLOGY",
    degree: "BS in Computer Science",
    period: "2023 - Present",
    GPA: "1.51",
  },
  {
    school: "XAVIER UNIVERSITY SENIOR HIGH SCHOOL - ATENEO DE CAGAYAN",
    degree: "STEM Strand",
    period: "2021 - 2023",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative w-full max-w-4xl mx-auto py-20 px-4">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-10 text-center">
        Education & Experience
      </h2>

      {/* Timeline line */}
      <div className="absolute left-1/2 top-24 bottom-10 w-[2px] bg-muted -translate-x-1/2 hidden md:block" />

      <div className="flex flex-col gap-10">
        {education.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary hidden md:block" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-[45%]"
            >
              <Card className="shadow-md border-muted">
                <CardHeader>
                  <CardTitle className="flex flex-col gap-1">
                    <span className="text-lg font-semibold">
                      {item.school}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.degree}
                    </span>
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {item.period}
                  </p>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.GPA && `GPA: ${item.GPA}`}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}