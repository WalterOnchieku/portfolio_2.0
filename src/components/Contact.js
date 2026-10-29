"use client";

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  GitBranch,
  ContactRound,
  Mail,
} from "lucide-react";
import CharacterReel from "./CharacterReel";

const contactLinks = [
  {
    label: "Email",
    value: "walonchieku@gmail.com",
    href: "mailto:walonchieku@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Explore my code",
    href: "https://github.com/WalterOnchieku",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/walter-onchieku-9180b2116/",
    icon: ContactRound,
  },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden border-t border-border py-24 sm:py-32"
      >
        {/* Subtle decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow mb-5 flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-accent" />
              <CharacterReel text="Have a project in mind?" />
            </p>

            <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Let's build
              <span className="block text-accent">something useful.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Whether you're hiring for a software engineering or AI role,
              looking for a developer for your next project, or interested
              in collaborating, I'd be glad to hear from you.
            </p>

            <a
              href="mailto:walonchieku@gmail.com?subject=Let's%20work%20together"
              className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="self-end"
          >
            <p className="eyebrow mb-5 text-muted">Find me online</p>

            <div className="border-t border-border">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={
                      link.label === "Email" ? undefined : "noreferrer"
                    }
                    className="group flex items-center justify-between gap-4 border-b border-border py-5 transition-colors duration-200 hover:text-accent sm:py-6"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-200 group-hover:border-accent">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {link.label}
                        </p>

                        <p className="mt-1 truncate text-sm text-muted">
                          {link.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                );
              })}
            </div>

            <p className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Open to opportunities and collaboration
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <a
            href="#home"
            className="w-fit font-display text-sm font-bold tracking-wide text-foreground"
          >
            WALTER ONCHIEKU<span className="text-accent">.</span>
          </a>

          <p className="text-xs leading-6 text-muted">
            Software development · Backend engineering · AI
          </p>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 text-xs text-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowDownRight size={14} className="rotate-[-135deg]" />
          </a>

          <p className="font-mono text-[10px] text-muted">
            © 2026 Walter Onchieku
          </p>
        </div>
      </footer>
    </>
  );
}