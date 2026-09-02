import AboutMe from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ContactSection from "@/components/contact/ContactSection";
import SectionTransition from "@/components/layout/SectionTransition";
import TechStackSection from "@/components/techstack/TechStackSection";
import CertificationsSection from "@/components/certifications/CertificationsSection";
import WhyHireSection from "@/components/about/WhyHireSection";

export default function Home() {
  return (
    <>
      <SectionTransition>
        <AboutMe />
      </SectionTransition>

      <SectionTransition id="tech-stack">
        <TechStackSection />
      </SectionTransition>

      <SectionTransition id="experience">
        <ExperienceSection />
      </SectionTransition>

      <SectionTransition>
        <WhyHireSection />
      </SectionTransition>

      <SectionTransition id="projects">
        <ProjectsSection />
      </SectionTransition>

      <SectionTransition id="certifications">
        <CertificationsSection />
      </SectionTransition>

      <SectionTransition id="contact">
        <ContactSection />
      </SectionTransition>
    </>
  );
}
