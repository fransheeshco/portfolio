"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const GREETING = "Never stop learning.";
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}<>/";

export default function PortfolioIntro() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(GREETING.length);
  const [noise, setNoise] = useState(0);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("portfolio-intro-played");
    if (hasPlayed || reduceMotion) return;

    sessionStorage.setItem("portfolio-intro-played", "true");

    const start = window.setTimeout(() => {
      setVisible(true);
      setProgress(0);
      const interval = window.setInterval(() => {
        setNoise((value) => value + 1);
        setProgress((value) => {
          if (value >= GREETING.length) {
            window.clearInterval(interval);
            window.setTimeout(() => setVisible(false), 550);
            return value;
          }
          return value + 1;
        });
      }, 48);
    }, 0);

    return () => window.clearTimeout(start);
  }, [reduceMotion]);

  const scrambled = useMemo(
    () =>
      GREETING.split("")
        .map((character, index) => {
          if (character === " " || index < progress) return character;
          return GLYPHS[(index * 7 + noise * 5) % GLYPHS.length];
        })
        .join(""),
    [noise, progress],
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-background px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.025, filter: "blur(10px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="text-center">
            <motion.div
              className="mx-auto mb-7 grid size-14 place-items-center rounded-2xl bg-orange text-xl font-black text-white shadow-[0_16px_35px_rgba(234,88,12,0.28)]"
              initial={{ y: 12, rotate: -8, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
            >
              F.
            </motion.div>
            <p className="font-mono text-xl font-semibold tracking-[0.12em] text-foreground sm:text-3xl">
              {scrambled}
            </p>
            <div className="mx-auto mt-5 h-1 w-36 overflow-hidden rounded-full bg-orange/10">
              <motion.div
                className="h-full origin-left rounded-full bg-orange"
                animate={{ scaleX: progress / GREETING.length }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
