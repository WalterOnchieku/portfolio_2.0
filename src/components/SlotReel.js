
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const words = ["SOFTWARE", "SOLUTIONS", "INTELLIGENT", "USEFUL"];

export default function SlotReel() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Keep the final word visible when reduced motion is preferred.
    if (reduceMotion) {
      setIndex(words.length - 1);
      return;
    }

    // Cycle through the words, then settle on the final one.
    const timers = words.map((_, wordIndex) =>
      setTimeout(() => {
        setIndex(wordIndex);
      }, 850 + wordIndex * 650)
    );

    return () => timers.forEach(clearTimeout);
  }, [reduceMotion]);

  return (
    <span
      className="relative inline-flex min-w-0 overflow-hidden align-bottom"
      aria-label="useful systems"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={reduceMotion ? false : { y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={reduceMotion ? undefined : { y: "-100%", opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
          aria-hidden="true"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
