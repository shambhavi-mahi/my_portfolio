"use client";

import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const skillCategories = [
  {
    title: "Languages",
    emoji: "🔤",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    emoji: "🎨",
    skills: ["React", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: ["Spring Boot", "Flask", "REST APIs"],
  },
  {
    title: "Database",
    emoji: "🗄️",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tooling",
    emoji: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "PyCharm"],
  },
  {
    title: "Foundations",
    emoji: "📐",
    skills: ["DSA", "Applied AI", "System Design", "Cloud Computing"],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-6 bg-[var(--background)]">
      {/* Subtle divider */}
      <div className="w-full h-px max-w-7xl mx-auto mb-28 reveal-up" style={{ background: "var(--border)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 reveal-up">
          <p className="text-sm font-mono mb-2 tracking-wider uppercase" style={{ color: "var(--accent)" }}>
            02. tech_stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
            What I Build With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-7 group reveal-up"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                  {category.title}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "var(--surface-elevated)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
