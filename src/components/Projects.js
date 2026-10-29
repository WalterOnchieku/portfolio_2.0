"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Code2 } from "lucide-react";
import projects from "@/data/projects";
import CharacterReel from "./CharacterReel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4 text-accent">
              <CharacterReel text="Selected work / 001—003" />
            </p>

            <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Projects that solve
              <span className="text-accent"> real problems.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
            A selection of my work across backend engineering, natural
            language processing, and computer vision.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/60 sm:p-8 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent">
                    {project.number}
                  </span>

                  <span className="h-px w-8 bg-border" />

                  <span className="eyebrow text-muted">
                    {project.category}
                  </span>
                </div>

                <Code2
                  size={20}
                  strokeWidth={1.5}
                  className="shrink-0 text-muted transition-colors duration-300 group-hover:text-accent"
                />
              </div>

              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {project.title}
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                {project.description}
              </p>

              <div
                className={`mt-7 grid gap-3 ${
                  project.featured
                    ? "sm:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 border-t border-border/80 pt-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-xs leading-5 text-muted sm:text-sm">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border px-3 py-1.5 font-mono text-[10px] tracking-wide text-foreground/80 sm:text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              
<div className="mt-8 flex flex-wrap items-center gap-3">
  {project.demoUrl ? (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
    >
      Live demo
      <ArrowUpRight size={16} />
    </a>
  ) : null}

  {project.repoUrl ? (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      GitHub
      <ArrowUpRight size={16} />
    </a>
  ) : null}
</div>


              <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-accent/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}