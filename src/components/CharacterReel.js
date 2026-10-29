
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
} from "motion/react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/@";

export default function CharacterReel({
  text = "Software developer / AI engineering",
  duration = 1600,
  className = "",
}) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);

  // Detect when the component enters or leaves the viewport.
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.3,
  });

  const [revealed, setRevealed] = useState(false);
  const [spin, setSpin] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setRevealed(false);
      setSpin(0);
      return;
    }

    if (reduceMotion) {
      setRevealed(true);
      return;
    }

    setRevealed(false);
    setSpin(0);

    const interval = setInterval(() => {
      setSpin((current) => current + 1);
    }, 45);

    const finish = setTimeout(() => {
      clearInterval(interval);
      setRevealed(true);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(finish);
    };
  }, [isInView, reduceMotion, duration, text]);

  return (
    <span
      ref={containerRef}
      className={`inline-flex flex-wrap items-baseline ${className}`}
      aria-label={text}
      role="text"
    >
      {text.split("").map((character, index) => {
        const shouldSpin =
          isInView &&
          !revealed &&
          !reduceMotion &&
          character !== " " &&
          (index + spin) % 3 !== 0;

        const displayedCharacter = shouldSpin
          ? CHARACTERS[
              (index * 7 + spin * 11) % CHARACTERS.length
            ]
          : character;

        if (character === " ") {
          return (
            <span
              key={`${index}-space`}
              className="inline-block w-[0.32em]"
              aria-hidden="true"
            >
              {"\u00A0"}
            </span>
          );
        }

        return (
          <span
            key={`${index}-${character}`}
            className="relative inline-block h-[1.2em] w-[0.64em] overflow-hidden align-bottom"
            aria-hidden="true"
          >
            <motion.span
              className="absolute inset-x-0 top-0 block text-center"
              animate={
                shouldSpin
                  ? {
                      y: ["0%", "-110%", "0%"],
                      opacity: [1, 0.4, 1],
                    }
                  : { y: "0%", opacity: 1 }
              }
              transition={{
                duration: shouldSpin ? 0.34 : 0.2,
                ease: "easeInOut",
                repeat: shouldSpin ? 1 : 0,
              }}
            >
              {displayedCharacter}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
