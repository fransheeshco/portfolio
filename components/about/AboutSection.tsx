"use client";

import HeroIllustration from "@/components/about/HeroIllustration";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BrainCircuit,
  Code2,
  FunctionSquare,
  Mail,
  MessagesSquare,
  BookOpen,
  FolderKanban,
  Sparkles,
  Trophy,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const interests = [
  {
    title: "Full-Stack Developer",
    copy: "I build end to end applications!",
    icon: Code2,
  },
  {
    title: "Debater",
    copy: "I debate a lot on the weekends!",
    icon: MessagesSquare,
  },
  {
    title: "Math Enthusiast",
    copy: "Cool concepts, very hard to learn.",
    icon: FunctionSquare,
  },
  {
    title: "AI Explorer",
    copy: "Curious about intelligence, natural and artificial.",
    icon: BrainCircuit,
  },
];

const profileDetails = [
  { label: "Projects", value: "3+", icon: FolderKanban },
  { label: "Achievements", value: "Always growing", icon: Trophy },
  { label: "Course", value: "BS Computer Science", icon: BookOpen },
  { label: "Curious", value: "By nature", icon: Sparkles },
];

const NAME = "FRANCIS";
const SHUFFLE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function ShufflingIdentity() {
  const reduceMotion = useReducedMotion();
  const [displayName, setDisplayName] = useState(NAME);

  useEffect(() => {
    if (reduceMotion) return;

    let shuffleTimer: number | undefined;
    const shuffle = () => {
      let resolved = 0;
      shuffleTimer = window.setInterval(() => {
        setDisplayName(
          NAME.split("")
            .map((character, index) =>
              index < resolved
                ? character
                : SHUFFLE_CHARACTERS[
                    Math.floor(Math.random() * SHUFFLE_CHARACTERS.length)
                  ],
            )
            .join(""),
        );
        resolved += 1;

        if (resolved > NAME.length) {
          window.clearInterval(shuffleTimer);
          setDisplayName(NAME);
        }
      }, 65);
    };

    const firstShuffle = window.setTimeout(shuffle, 1200);
    const repeatShuffle = window.setInterval(shuffle, 4300);

    return () => {
      window.clearTimeout(firstShuffle);
      window.clearInterval(repeatShuffle);
      if (shuffleTimer) window.clearInterval(shuffleTimer);
    };
  }, [reduceMotion]);

  return (
    <p
      className="relative z-10 mx-auto w-fit font-mono text-base font-black tracking-[0.14em] sm:text-lg"
      aria-label="Hi, I'm Francis"
    >
      <span className="text-orange" aria-hidden="true">
        {"{ "}
      </span>
      <span aria-hidden="true">
        HI, I&apos;M{" "}
        <span className="inline-block min-w-[7ch] text-orange">
          {displayName}
        </span>
      </span>
      <span className="text-orange" aria-hidden="true">
        {" }"}
      </span>
    </p>
  );
}

export default function AboutMe() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-5 pb-10 pt-24 sm:px-8 lg:min-h-[720px] lg:px-12 lg:pb-8 lg:pt-24 xl:px-16"
    >
      <div
        className="pointer-events-none absolute right-[3%] top-28 grid grid-cols-5 gap-3 opacity-35"
        aria-hidden="true"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span key={index} className="size-1 rounded-full bg-orange" />
        ))}
      </div>

      <div className="mx-auto grid max-w-[1440px] items-start gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 xl:gap-16">
        <div className="relative z-0 order-1 lg:pt-8">
          <ShufflingIdentity />
          <div className="-mt-5 lg:-mt-9">
            <HeroIllustration />
          </div>
        </div>

        <div className="relative z-20 order-2 lg:pt-2 before:pointer-events-none before:absolute before:-inset-y-4 before:-left-12 before:-right-4 before:-z-10 before:hidden before:bg-gradient-to-r before:from-transparent before:from-0% before:via-background/70 before:via-45% before:to-background before:to-82% lg:before:block">
          <motion.h1
            {...enter(0.12)}
            className="mx-auto max-w-[780px] text-balance text-center text-[clamp(2.2rem,3.75vw,4.2rem)] font-black leading-[1] tracking-[-0.05em] text-foreground lg:mx-0 lg:text-left"
          >
            I like building <span className="text-orange">software</span> and{" "}
            <span className="relative inline-block text-orange">debating </span> ideas.
          </motion.h1>

          <motion.div
            {...enter(0.3)}
            className="mt-6"
          >
            <p className="mx-auto max-w-xl text-center text-sm font-medium leading-6 text-muted-foreground sm:text-base lg:mx-0 lg:text-left">
              <span className="font-bold text-foreground">
                Computer Science student
              </span>{" "}
              building practical software while exploring mathematics,
              artificial intelligence, and ideas worth debating.
            </p>
          </motion.div>

          <div className="mt-6 flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <motion.div
                {...enter(0.44)}
                className="grid grid-cols-2 gap-3 xl:grid-cols-4"
              >
                {interests.map((interest) => (
                  <article
                    key={interest.title}
                    className="group min-h-28 rounded-2xl border border-orange/10 bg-card/75 p-4 shadow-[0_10px_32px_rgba(41,27,14,0.06)] transition duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-[0_16px_38px_rgba(234,88,12,0.1)] sm:min-h-32"
                  >
                    <interest.icon
                      className="mb-3 size-6 text-orange"
                      strokeWidth={1.8}
                    />
                    <h2 className="text-sm font-bold leading-tight">
                      {interest.title}
                    </h2>
                    <p className="mt-2 hidden text-xs leading-[1.15rem] text-muted-foreground sm:block">
                      {interest.copy}
                    </p>
                  </article>
                ))}
              </motion.div>

              <motion.div
                {...enter(0.54)}
                className="mt-4 grid grid-cols-2 overflow-hidden rounded-3xl border border-orange/10 bg-background/80 p-2 shadow-[0_14px_40px_rgba(41,27,14,0.07)] backdrop-blur sm:grid-cols-4 sm:rounded-full sm:px-2 sm:py-1.5"
              >
                {profileDetails.map((detail, index) => (
                  <div
                    key={detail.label}
                    className={`flex min-w-0 items-center justify-start gap-2 px-3 py-3 sm:justify-center sm:px-2 sm:py-2 ${
                      index % 2 === 1 ? "border-l border-orange/10" : ""
                    } ${
                      index >= 2 ? "border-t border-orange/10 sm:border-t-0" : ""
                    } ${index > 0 ? "sm:border-l sm:border-orange/10" : ""}`}
                  >
                    <detail.icon
                      className="size-5 shrink-0 text-orange sm:size-4"
                      strokeWidth={1.8}
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold leading-tight">
                        {detail.label}
                      </p>
                      <p className="truncate text-[10px] text-muted-foreground">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.aside
              {...enter(0.55)}
              className="hidden shrink-0 flex-col items-center overflow-hidden rounded-full border border-orange/10 bg-background/90 p-2 text-muted-foreground shadow-[0_14px_35px_rgba(25,20,15,0.12)] backdrop-blur md:flex"
              aria-label="Social links"
            >
              <SocialLink href="https://github.com/fransheeshco" label="GitHub">
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/francis-nelson-cejas-b10ba73a9/"
                label="LinkedIn"
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="mailto:francisnelson.dev@gmail.com"
                label="Email"
              >
                <Mail />
              </SocialLink>
            </motion.aside>
          </div>
        </div>
      </div>

    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full transition hover:bg-orange/10 hover:text-orange focus-visible:outline-2 focus-visible:outline-orange [&_svg]:size-5"
    >
      {children}
    </a>
  );
}
