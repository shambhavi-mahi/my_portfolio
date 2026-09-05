"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const timeline = [
  {
    period: "2022 – Present",
    role: "B.Tech — Computer Science & Engineering",
    org: "KL University, Andhra Pradesh",
    bullets: [
      "CGPA: 9.0+ | Consistent academic performer",
      "Coursework: DSA, DBMS, OS, CN, Software Engineering, ML",
      "Active participant in coding contests and hackathons",
    ],
    type: "education",
  },
  {
    period: "2024",
    role: "Smart India Hackathon (SIH) — Participant",
    org: "Government of India",
    bullets: [
      "Developed an IoT-based smart waste management solution",
      "Integrated ML route optimization and a real-time admin dashboard",
      "Collaborated in a cross-functional team of 6 under a 36-hour deadline",
    ],
    type: "hackathon",
  },
  {
    period: "2023 – Present",
    role: "Competitive Programming",
    org: "CodeChef · LeetCode",
    bullets: [
      "CodeChef: 4★ rating",
      "LeetCode: Active problem solver, 100+ problems",
      "Focus areas: Arrays, Trees, Graphs, Dynamic Programming",
    ],
    type: "competitive",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-6 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-24 reveal-up" />

        {/* Header */}
        <motion.div
          className="mb-16 reveal-up"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            05. experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
            My Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div
            className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-px"
            style={{ background: "var(--border)" }}
          />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-12 md:pl-16 reveal-up"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Node */}
                <div
                  className="absolute left-[11px] md:left-[15px] top-1 w-4 h-4 rounded-full border-2"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--accent)",
                    boxShadow: "0 0 0 3px rgba(99,102,241,0.1)",
                  }}
                />

                {/* Card */}
                <div
                  className="p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                        {item.org}
                      </p>
                    </div>
                    <span
                      className="text-xs font-mono font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto"
                      style={{
                        background: "var(--surface-elevated)",
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
