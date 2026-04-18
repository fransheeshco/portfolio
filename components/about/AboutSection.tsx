import TechStackMarquee from "@/components/about/Marquee";

import { FaGithub, FaLinkedin, FaRegEnvelope, FaMapPin } from "react-icons/fa";
import { Download } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center gap-4 py-20 px-6">
      
      <h1 className="text-6xl sm:text-7xl md:text-7xl font-extrabold tracking-tight">
        HELLO, WORLD!
      </h1>

      <h2 className="text-6xl sm:text-6xl md:text-6xl font-bold tracking-tight">
        I’M <span style={{ color: "#00E1FF" }}>FRANCE</span>!
      </h2>

      <p className="text-sm md:text-lg text-muted-foreground font-medium tracking-wide">
        ASPIRING SOFTWARE ENGINEER • BS COMPUTER SCIENCE STUDENT
      </p>

      <p className="text-sm sm:text-sm md:text-base text-muted-foreground max-w-2xl">
        FROM MINDANAO STATE UNIVERSITY - ILIGAN INSTITUTE OF TECHNOLOGY
      </p>

      <p className="text-sm sm:text-sm md:text-base text-muted-foreground">
        <FaMapPin className="inline-block mr-2" />
        ILIGAN CITY, PHILIPPINES
      </p>

      <div className="text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-4 text-sm sm:text-sm md:text-sm">
        <a
          href="/Resume_Cejas.pdf"
          download
          className="hover:text-foreground flex items-center gap-1.5 transition-colors"
        >
          <Download className="size-4" />
          Resume
        </a>

        <div className="bg-border hidden h-4 w-px sm:block" />

        <a
          href="https://github.com/fransheeshco"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground flex items-center gap-1.5 transition-colors"
        >
          <FaGithub className="size-4" />
          GitHub
        </a>

        <div className="bg-border hidden h-4 w-px sm:block" />

        <a
          href="https://www.linkedin.com/in/francis-nelson-cejas-b10ba73a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground flex items-center gap-1.5 transition-colors"
        >
          <FaLinkedin className="size-4" />
          LinkedIn
        </a>

        <div className="bg-border hidden h-4 w-px sm:block" />

        <a
          href="mailto:francisnelson.dev@gmail.com"
          className="hover:text-foreground flex items-center gap-1.5 transition-colors"
        >
          <FaRegEnvelope className="size-4" />
          Email
        </a>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <h3 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Tech Stack
        </h3>

        <div className="h-px w-20 bg-border/60 dark:bg-border/60" />
      </div>

      <div className="relative w-full overflow-hidden py-3 [transform:translateZ(0)]">
        <TechStackMarquee />
      </div>
    </section>
  );
}