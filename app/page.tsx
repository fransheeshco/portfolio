import AboutMe from "@/components/about/AboutSection";
import ProjectsSection from "@/components/projects/ProjectSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <section>
        <AboutMe />
      </section>

      <section id="projects"> 
        <ProjectsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
