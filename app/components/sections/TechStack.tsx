"use client";

import { motion } from "motion/react";

const techs = [
  "Java", "Python", "JavaScript", "TypeScript", "C",
  "React", "Next.js", "Spring Boot", "Flask",
  "PostgreSQL", "MongoDB", "Git",
];

export default function TechStack() {
  return (
    <section className="py-16 px-6 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-center mb-10"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Work With
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {techs.map((t, i) => (
            <motion.span
              key={t}
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold cursor-default select-none"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                transitionDelay: `${i * 20}ms`,
              }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
