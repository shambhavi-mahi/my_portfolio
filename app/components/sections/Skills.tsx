"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const skillCategories = [
  { title: "Languages", emoji: "🔤", skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"] },
  { title: "Frontend", emoji: "🎨", skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", emoji: "⚙️", skills: ["Spring Boot", "Flask", "REST APIs"] },
  { title: "Database", emoji: "🗄️", skills: ["PostgreSQL", "MongoDB"] },
  { title: "Tooling", emoji: "🛠️", skills: ["Git", "GitHub", "VS Code", "PyCharm"] },
  { title: "Foundations", emoji: "📐", skills: ["DSA", "Applied AI", "System Design", "Cloud Computing"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.07 },
  }),
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 bg-[#0A0A0A]">
      {/* Gold divider */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 reveal-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            02. tech_stack
          </p>
          <h2 className="font-bebas text-6xl md:text-8xl tracking-wide" style={{ color: "#E8DFD8" }}>
            What I Build With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl p-7 overflow-hidden group reveal-up"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Top accent beam on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="font-montserrat text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1.5 rounded-lg font-montserrat text-xs font-medium transition-all duration-200 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "#C8BEAF",
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
