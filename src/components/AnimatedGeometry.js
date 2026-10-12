
"use client";

import { motion, useReducedMotion } from "motion/react";

const technologies = [
  { label: "Python", short: "PY" },
  { label: "FastAPI", short: "API" },
  { label: "Next.js", short: "JS" },
  { label: "AI / ML", short: "AI" },
  { label: "PostgreSQL", short: "DB" },
  { label: "Docker", short: "DX" },
];

const particles = [0, 90, 180, 270];

export default function AnimatedGeometry() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[470px]"
      role="img"
      aria-label="Technology orbit featuring Python, FastAPI, Next.js, AI and machine learning, PostgreSQL, and Docker"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[20%] rounded-full bg-accent/10 blur-[65px]"
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="absolute inset-[5%] rounded-full opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(146 147 139 / 12%) 1px, transparent 1px), linear-gradient(to bottom, rgb(146 147 139 / 12%) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(circle, black 25%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 25%, transparent 72%)",
        }}
      />

      {/* Static orbit rings */}
      <div
        aria-hidden="true"
        className="absolute inset-[7%] rounded-full border border-accent/25"
      />

      <div
        aria-hidden="true"
        className="absolute inset-[22%] rounded-full border border-foreground/15"
      />

      {/* Orbiting technology badges */}
      <div
        className={`absolute inset-0 ${
          reduceMotion ? "" : "animate-orbit"
        }`}
        aria-hidden="true"
      >
        {technologies.map((technology, index) => {
          const angle = (360 / technologies.length) * index;
          const radians = (angle * Math.PI) / 180;
          const radius = 42;

          // Fixed, rounded coordinates prevent hydration mismatches.
          const left = `${(
            50 + radius * Math.sin(radians)
          ).toFixed(4)}%`;

          const top = `${(
            50 - radius * Math.cos(radians)
          ).toFixed(4)}%`;

          return (
            <div
              key={technology.label}
              className="group absolute"
              style={{
                left,
                top,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Counter-rotate each badge to keep it upright */}
              <div
                className={`flex flex-col items-center ${
                  reduceMotion ? "" : "animate-counter-orbit"
                }`}
              >
                <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full border border-accent/40 bg-[#191a17] shadow-[0_0_25px_rgba(255,77,46,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:shadow-[0_0_32px_rgba(255,77,46,0.3)] sm:h-[66px] sm:w-[66px]">
                  <span className="font-mono text-sm font-semibold tracking-tight text-accent transition-colors duration-300 group-hover:text-background sm:text-base">
                    {technology.short}
                  </span>

                  <span className="absolute -right-0.5 top-1 h-2 w-2 rounded-full border border-background bg-accent" />
                </div>

                {/* Labels appear on hover */}
                <span className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-md border border-border bg-background/95 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-1 group-hover:opacity-100">
                  {technology.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Central hub */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 z-10 flex h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/50 bg-background shadow-[0_0_55px_rgba(255,77,46,0.13)] sm:h-[132px] sm:w-[132px]"
      >
        {/* Short, sharp signal burst */}
        {!reduceMotion && (
          <>
            <span
              aria-hidden="true"
              className="center-pulse"
            />
            <span
              aria-hidden="true"
              className="center-pulse center-pulse-delay"
            />

            {particles.map((angle) => (
              <span
                key={angle}
                aria-hidden="true"
                className="center-particle"
                style={{
                  "--particle-angle": `${angle}deg`,
                }}
              />
            ))}
          </>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-2 rounded-full border border-foreground/10"
        />

        <div className="relative z-10 flex flex-col items-center gap-1">
          <span className="font-mono text-2xl font-semibold tracking-tighter text-accent sm:text-3xl">
            {"</>"}
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted sm:text-[9px]">
            Build / Learn
          </span>
        </div>
      </motion.div>

      {/* Technical annotations */}
      <span
        aria-hidden="true"
        className="absolute left-[8%] top-[15%] font-mono text-[8px] tracking-widest text-muted/80 sm:text-[9px]"
      >
        SYS.001
      </span>

      <span
        aria-hidden="true"
        className="absolute bottom-[14%] right-[6%] font-mono text-[8px] tracking-widest text-muted/80 sm:text-[9px]"
      >
        NODE_ACTIVE
      </span>

      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[3%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
      />
    </div>
  );
}
