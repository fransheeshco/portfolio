import AboutMe from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ContactSection from "@/components/contact/ContactSection";
import PortfolioIntro from "@/components/about/PortfolioIntro";
import SectionTransition from "@/components/layout/SectionTransition";
import TechStackSection from "@/components/techstack/TechStackSection";

export default function Home() {
  return (
    <>
      <PortfolioIntro />
      <SectionTransition className="snap-start snap-always">
        <AboutMe />
      </SectionTransition>

      <SectionTransition id="tech-stack" className="snap-start snap-always">
        <TechStackSection />
      </SectionTransition>

      <SectionTransition id="projects" className="snap-start snap-always">
        <ProjectsSection />
      </SectionTransition>

      <SectionTransition id="experience" className="snap-start snap-always">
        <ExperienceSection />
      </SectionTransition>

      <SectionTransition id="contact" className="snap-start snap-always">
        <ContactSection />
      </SectionTransition>
    </>
  );
}
