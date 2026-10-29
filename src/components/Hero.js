
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import AnimatedGeometry from "./AnimatedGeometry";
import CursorSpotlight from "./CursorSpotlight";
import CharacterReel from "./CharacterReel";

const technologies = ["Python", "FastAPI", "Next.js", "AI / ML"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="home"
      className="site-grid relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-24"
    >
      <CursorSpotlight />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12">
        {/* Introductory copy */}
        <div className="relative z-10">
          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.55, delay: 0.1 }}
            className="eyebrow mb-6 flex items-center gap-3 text-accent"
          >
            <span className="h-px w-8 bg-accent" />
            <CharacterReel text="Software developer / AI engineering" />
          </motion.p>

          <motion.h1
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            Building useful software.
            <span className="mt-2 block text-accent">
              Exploring intelligent systems.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            I build backend services, full-stack applications and
            AI-powered solutions to solve practical problems.
          </motion.p>

          {/* Main actions */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore my work
              <ArrowDown
                size={16}
                className="transition-transform duration-200 group-hover:translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Let's work together
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Technology labels */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {technologies.map((technology, index) => (
              <span
                key={technology}
                className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.13em] text-muted sm:text-xs"
              >
                {technology}
                {index < technologies.length - 1 && (
                  <span className="text-accent">/</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Animated technical artwork */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[460px] lg:max-w-none"
        >
          <AnimatedGeometry />

          <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:text-xs">
            Systems / Software / AI
          </p>
        </motion.div>
      </div>

      {/* Small desktop scroll cue */}
      <a
        href="#projects"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent lg:flex"
      >
        Scroll to explore
        <ArrowDown size={13} />
      </a>
    </section>
  );
}
