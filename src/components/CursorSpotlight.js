
"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (reducedMotion.matches || !finePointer.matches) {
      return;
    }

    function handleMouseMove(event) {
      if (!spotlightRef.current) return;

      spotlightRef.current.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      spotlightRef.current.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );

      spotlightRef.current.classList.add("is-visible");
    }

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="cursor-spotlight"
    />
  );
}
