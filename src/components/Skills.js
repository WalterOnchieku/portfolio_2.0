"use client";

import { motion } from "motion/react";
import {
  Network,
  Server,
  PanelsTopLeft,
  BrainCircuit,
  Wrench,
} from "lucide-react";
import CharacterReel from "./CharacterReel";

const skillGroups = [
  {
    number: "01",
    title: "ICT & Infrastructure",
    description: "Business IT operations, support, and connectivity.",
    icon: Network,
    skills: [
      "Windows Server",
      "Active Directory",
      "Microsoft 365",
      "LAN / WAN",
      "DNS / DHCP",
      "VPN",
      "FortiGate",
      "UniFi",
      "CCTV systems",
      "Power backup",
    ],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description: "Services, data models, and application logic.",
    icon: Server,
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "REST APIs",
      "SQLAlchemy",
      "PostgreSQL",
      "Authentication",
      "RabbitMQ",
      "Docker",
    ],
  },
  {
    number: "03",
    title: "Frontend Development",
    description: "Interfaces and full-stack web applications.",
    icon: PanelsTopLeft,
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "HTML & CSS",
      "Tailwind CSS",
      "Redux Toolkit",
      "Responsive UI",
    ],
  },
  {
    number: "04",
    title: "AI & Machine Learning",
    description: "Practical model development and AI applications.",
    icon: BrainCircuit,
    skills: [
      "TensorFlow",
      "Keras",
      "Transfer Learning",
      "Computer Vision",
      "NLP",
      "Transformers",
      "DistilBERT",
      "Semantic Search",
      "LLM Applications",
    ],
  },
  {
    number: "05",
    title: "Tools & Engineering",
    description: "Development workflows, environments, and testing.",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "Linux / WSL",
      "Docker Compose",
      "Jupyter",
      "Postman",
      "Alembic",
      "API Testing",
      "Debugging",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="eyebrow mb-4 text-accent">
            <CharacterReel text="Technical toolkit / 001—005" />
          </p>

          <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Skills built through
            <span className="text-accent"> practice.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            A growing toolkit shaped by hands-on ICT work, application
            development, and AI engineering projects.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                }}
                className="group rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/60 sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-accent transition-colors group-hover:border-accent/50">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <span className="font-mono text-xs text-muted">
                    {group.number}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {group.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border/80 px-2.5 py-1.5 text-xs text-foreground/80 transition-colors duration-200 group-hover:border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}