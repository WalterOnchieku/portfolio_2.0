
"use client";

/*
 * Navbar.js
 * A compact, sticky navigation bar for the one-page portfolio.
 */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          className="font-display text-sm font-bold tracking-wide text-foreground sm:text-base"
          aria-label="Walter Onchieku, home"
        >
          WALTER ONCHIEKU<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-background sm:text-sm"
          >
            Let's talk
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
