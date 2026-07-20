"use client";

import portfolioPicture from "@/assets/Picture-Portfolio.jpeg";
import { AceternityGridBackground } from "@/components/ui/aceternity-grid-background";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { BrainCircuit, Code2, Pi } from "lucide-react";

const drift = (x: number, y: number, duration: number, delay = 0) => ({
  x: [0, x, -x * 0.35, 0],
  y: [0, -y, y * 0.3, 0],
  transition: {
    duration,
    delay,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
});

export default function HeroIllustration() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto h-[360px] w-full max-w-[480px] sm:h-[430px] lg:h-[500px]"
      initial={reduceMotion ? false : { opacity: 0, x: -24, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 75, damping: 18, delay: 0.15 }}
      aria-hidden="true"
    >
      <div className="absolute inset-x-[4%] bottom-[4%] h-[62%] rounded-full bg-orange/8 blur-3xl" />
      <AceternityGridBackground className="-inset-[18%] opacity-65" />

      <motion.div
        className="absolute bottom-[17%] left-1/2 size-[70%] -translate-x-1/2"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -8, 0], scale: [1, 1.012, 1] }
        }
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <AvatarImage />
      </motion.div>

      <Badge className="left-[1%] top-[5%]" animation={drift(5, 8, 5.8, 0.3)}>
        <Code2 />
      </Badge>
      <Badge
        className="right-[5%] top-[11%]"
        animation={drift(-6, 7, 6.5, 0.7)}
      >
        <BrainCircuit />
      </Badge>
      <Badge
        className="bottom-[7%] left-[8%]"
        animation={drift(5, 6, 5.3, 0.9)}
      >
        <Pi />
      </Badge>

    </motion.div>
  );
}

function AvatarImage() {
  return (
    <div className="absolute inset-[5%] z-10 overflow-hidden rounded-full border-2 border-white/45 shadow-[0_18px_28px_rgba(87,28,4,0.2)]">
      <Image
        src={portfolioPicture}
        alt="Francis"
        fill
        priority
        sizes="(min-width: 1024px) 300px, 240px"
        className="object-cover object-[50%_58%]"
      />
    </div>
  );
}

function Badge({
  children,
  className,
  animation,
}: {
  children: React.ReactNode;
  className: string;
  animation: ReturnType<typeof drift>;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute z-10 grid size-12 place-items-center rounded-2xl border border-orange/15 bg-background/92 text-orange shadow-[0_14px_32px_rgba(25,20,15,0.11)] backdrop-blur sm:size-14 [&_svg]:size-6 ${className}`}
      animate={reduceMotion ? undefined : animation}
    >
      {children}
    </motion.div>
  );
}
