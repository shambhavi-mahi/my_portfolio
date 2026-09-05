"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const skillCategories = [
  { title: "Languages",   emoji: "🔤", skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C"] },
  { title: "Frontend",    emoji: "🎨", skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend",     emoji: "⚙️", skills: ["Spring Boot", "Flask", "REST APIs"] },
  { title: "Database",    emoji: "🗄️", skills: ["PostgreSQL", "MongoDB"] },
  { title: "Tooling",     emoji: "🛠️", skills: ["Git", "GitHub", "VS Code", "PyCharm"] },
  { title: "Foundations", emoji: "📐", skills: ["DSA", "Applied AI", "System Design", "Cloud Computing"] },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-24 reveal-up" />

        <motion.div
          className="mb-16 reveal-up"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            03. tech_stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
            What I Build With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl p-6 overflow-hidden reveal-up"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              }}
            >
              {/* Hover top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2))" }}
              />

              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{cat.emoji}</span>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium cursor-default"
                    style={{
                      background: "var(--surface-elevated)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
