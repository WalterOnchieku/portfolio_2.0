
"use client";

/*
 * AnimatedGeometry.js
 * Lightweight SVG artwork for the portfolio hero.
 *
 * Motion rotates the orbital paths and gently pulses the centre.
 * The reduced-motion preference disables continuous movement.
 */

import { motion, useReducedMotion } from "motion/react";

export default function AnimatedGeometry() {
  const reduceMotion = useReducedMotion();

  const orbitTransition = (duration, delay = 0) => ({
    duration: reduceMotion ? 0 : duration,
    delay,
    repeat: reduceMotion ? 0 : Infinity,
    ease: "linear",
  });

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[470px]"
      aria-hidden="true"
    >
      {/* Ambient glow behind the graphic */}
      <div className="pointer-events-none absolute inset-[20%] rounded-full bg-accent/10 blur-[70px]" />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="geometry-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              stroke="#92938B"
              strokeOpacity="0.16"
              strokeWidth="0.6"
            />
          </pattern>

          <radialGradient id="core-glow">
            <stop offset="0%" stopColor="#FF4D2E" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF4D2E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Technical grid */}
        <rect
          x="12"
          y="12"
          width="376"
          height="376"
          fill="url(#geometry-grid)"
          rx="4"
        />

        {/* Coordinate axes */}
        <path
          d="M200 22V378 M22 200H378"
          stroke="#92938B"
          strokeOpacity="0.24"
          strokeWidth="0.8"
          strokeDasharray="3 7"
        />

        {/* Centre glow */}
        <circle cx="200" cy="200" r="100" fill="url(#core-glow)" />

        {/* Fixed orbital paths */}
        <circle
          cx="200"
          cy="200"
          r="118"
          stroke="#92938B"
          strokeOpacity="0.4"
          strokeWidth="0.8"
        />

        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="#92938B"
          strokeOpacity="0.22"
          strokeWidth="0.8"
          strokeDasharray="2 7"
        />

        {/* Orbit one */}
        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={{ rotate: reduceMotion ? 0 : 360 }}
          transition={orbitTransition(36)}
        >
          <ellipse
            cx="200"
            cy="200"
            rx="118"
            ry="48"
            stroke="#FF4D2E"
            strokeWidth="1.2"
            transform="rotate(-35 200 200)"
          />

          <circle cx="318" cy="200" r="4" fill="#FF4D2E" />

          <circle
            cx="82"
            cy="200"
            r="2.5"
            fill="#F3F0E8"
          />
        </motion.g>

        {/* Orbit two moves in the opposite direction */}
        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={{ rotate: reduceMotion ? 0 : -360 }}
          transition={orbitTransition(48)}
        >
          <ellipse
            cx="200"
            cy="200"
            rx="78"
            ry="143"
            stroke="#F3F0E8"
            strokeOpacity="0.65"
            strokeWidth="0.9"
            transform="rotate(45 200 200)"
          />

          <circle cx="200" cy="57" r="3" fill="#FF4D2E" />
        </motion.g>

        {/* Central technical core */}
        <motion.g
          style={{ transformOrigin: "200px 200px" }}
          animate={
            reduceMotion
              ? { scale: 1 }
              : { scale: [1, 1.045, 1] }
          }
          transition={{
            duration: 4,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <circle
            cx="200"
            cy="200"
            r="37"
            stroke="#FF4D2E"
            strokeOpacity="0.7"
            strokeWidth="1"
          />

          <circle cx="200" cy="200" r="24" fill="#191A17" />

          <circle cx="200" cy="200" r="5" fill="#FF4D2E" />

          <path
            d="M200 190V210 M190 200H210"
            stroke="#F3F0E8"
            strokeWidth="0.8"
          />
        </motion.g>

        {/* Corner registration marks */}
        <g stroke="#FF4D2E" strokeWidth="1">
          <path d="M12 28V12H28" />
          <path d="M372 12H388V28" />
          <path d="M12 372V388H28" />
          <path d="M372 388H388V372" />
        </g>

        {/* Small coordinate labels */}
        <g
          fill="#92938B"
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="1"
        >
          <text x="20" y="44">SYS.001</text>
          <text x="324" y="44">X / 400</text>
          <text x="20" y="374">NODE_ACTIVE</text>
          <text x="324" y="374">Y / 400</text>
        </g>
      </svg>
    </div>
  );
}
