"use client";

import { MapPin, BookOpen, Cpu, Trophy } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const stats = [
  { value: "11+", label: "Repositories" },
  { value: "4★",  label: "CodeChef" },
  { value: "SIH", label: "Hackathon" },
  { value: "9.0+", label: "CGPA" },
];

const focuses = [
  { icon: <BookOpen size={14} />, text: "Data Structures & Algorithms" },
  { icon: <Cpu size={14} />,      text: "Data Analytics" },
  { icon: <MapPin size={14} />,   text: "Cloud Computing" },
  { icon: <Trophy size={14} />,   text: "System Design" },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto">

        <div className="section-divider mb-24 reveal-up" />

        {/* Header */}
        <motion.div
          className="mb-16 reveal-up"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            02. about_me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: bio */}
          <motion.div
            className="space-y-6 reveal-up"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              I&apos;m <strong style={{ color: "var(--foreground)" }}>Shambhavi</strong>, a Computer Science undergrad
              passionate about building things that are useful. I gravitate toward full-stack projects where
              I can touch the backend logic <em>and</em> make the frontend feel polished.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Every project I take on starts with a simple question: what would make this
              feel effortless to use? That&apos;s what drives my design and engineering decisions.
            </p>

            {/* Focus tags */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>
                Currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {focuses.map((f) => (
                  <span
                    key={f.text}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: "rgba(99,102,241,0.06)",
                      border: "1px solid rgba(99,102,241,0.15)",
                      color: "var(--foreground)",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>{f.icon}</span>
                    {f.text}
                  </span>
                ))}
              </div>
            </div>

            <p className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--muted)" }}>
              <MapPin size={13} style={{ color: "var(--accent)" }} /> India · UTC +05:30
            </p>
          </motion.div>

          {/* Right: stat grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 reveal-up"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="rounded-2xl p-7 text-center"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div className="text-4xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
