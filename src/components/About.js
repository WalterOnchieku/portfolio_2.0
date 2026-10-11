"use client";

import { motion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Terminal } from "lucide-react";

const background = [
  {
    icon: BriefcaseBusiness,
    title: "ICT & Infrastructure",
    description:
      "Supporting business IT operations, troubleshooting networks and endpoints, and maintaining reliable infrastructure.",
  },
  {
    icon: Terminal,
    title: "Software Development",
    description:
      "Building APIs and web applications with a focus on maintainable code, practical functionality, and backend systems.",
  },
  {
    icon: GraduationCap,
    title: "AI Engineering",
    description:
      "Developing my skills in machine learning, deep learning, NLP, computer vision, and AI-powered applications.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow mb-4 text-accent">A little about me</p>

          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Bridging IT,
            <span className="block text-accent">software & AI.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-muted">
            I'm a computer science graduate and technology professional
            working across IT infrastructure, software development, and
            applied AI. My background in ICT support gives me a practical
            understanding of the systems businesses rely on every day.
          </p>

          <p className="mt-4 text-base leading-8 text-muted">
            I'm now building on that foundation by developing backend
            services, full-stack applications, and machine learning projects.
            I enjoy breaking down complex problems and turning what I learn
            into working software.
          </p>

          <a
            href="https://github.com/WalterOnchieku"
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
          >
            Explore my GitHub
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        <div className="flex flex-col">
          {background.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="grid grid-cols-[44px_1fr] gap-4 border-t border-border py-6 sm:grid-cols-[56px_1fr] sm:gap-5 sm:py-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-accent sm:h-12 sm:w-12">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}