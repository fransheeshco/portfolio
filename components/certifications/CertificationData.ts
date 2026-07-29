export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  certificateUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    image: "/certifications/ai-fluency-framework-foundations.png",
    certificateUrl:
      "/certifications/AI-Fluency-Framework-and-Foundations.pdf",
  },
];
