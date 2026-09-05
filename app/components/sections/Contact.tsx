"use client";

import { motion } from "motion/react";
import { GitBranch, Link2, Mail, Code2, Trophy } from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const contacts = [
  { icon: <Link2 size={20} />,    label: "LinkedIn", value: "in/shambhavi-mahi", href: "https://www.linkedin.com/in/shambhavi-mahi", accent: "#0077B5" },
  { icon: <GitBranch size={20} />, label: "GitHub",   value: "shambhavi-mahi",    href: "https://github.com/shambhavi-mahi",          accent: "#333333" },
  { icon: <Code2 size={20} />,    label: "LeetCode", value: "Shambhavi_mahi",    href: "https://leetcode.com/Shambhavi_mahi",         accent: "#FFA116" },
  { icon: <Trophy size={20} />,   label: "CodeChef", value: "4★ kl2500030872",   href: "https://www.codechef.com/users/kl2500030872", accent: "#62B254" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-24 reveal-up" />

        {/* Header */}
        <motion.div
          className="mb-16 text-center reveal-up"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            06. contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5" style={{ color: "var(--foreground)" }}>
            Let&apos;s Connect
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            Open to internships, collaborations, and conversations about interesting problems.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          className="text-center mb-16 reveal-up"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.a
            href="mailto:shambhavimahi23@gmail.com"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-bold text-sm text-white"
            style={{
              background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              boxShadow: "0 8px 30px rgba(99,102,241,0.22)",
            }}
          >
            <Mail size={18} />
            Say Hello · shambhavimahi23@gmail.com
          </motion.a>
        </motion.div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal-up">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center gap-3 p-7 rounded-2xl overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Top accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)` }}
              />
              <span style={{ color: c.accent }}>{c.icon}</span>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5" style={{ color: "var(--muted)" }}>
                  {c.label}
                </p>
                <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
