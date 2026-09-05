"use client";

import { motion } from "motion/react";
import { GitBranch, Link2, Mail, Code2, Trophy } from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const contacts = [
  { icon: <Link2 size={22} />, label: "LinkedIn", value: "in/shambhavi-mahi", href: "https://www.linkedin.com/in/shambhavi-mahi", color: "rgba(0,119,181,0.08)", borderColor: "rgba(0,119,181,0.2)", iconColor: "#0077B5" },
  { icon: <GitBranch size={22} />, label: "GitHub", value: "shambhavi-mahi", href: "https://github.com/shambhavi-mahi", color: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)", iconColor: "#E8DFD8" },
  { icon: <Code2 size={22} />, label: "LeetCode", value: "Shambhavi_mahi", href: "https://leetcode.com/Shambhavi_mahi", color: "rgba(255,161,22,0.07)", borderColor: "rgba(255,161,22,0.2)", iconColor: "#FFA116" },
  { icon: <Trophy size={22} />, label: "CodeChef", value: "kl2500030872 · 4★", href: "https://www.codechef.com/users/kl2500030872", color: "rgba(98,178,84,0.07)", borderColor: "rgba(98,178,84,0.2)", iconColor: "#62B254" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 bg-[#0A0A0A]">
      {/* Gold divider */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 text-center reveal-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            04. get_in_touch
          </p>
          <h2 className="font-bebas text-6xl md:text-8xl tracking-wide mb-8" style={{ color: "#E8DFD8" }}>
            Let&apos;s Connect
          </h2>
          <p className="font-cormorant text-xl italic max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something exciting.
          </p>
        </motion.div>

        {/* Email CTA — Monolith terminal-inspired */}
        <motion.div
          className="text-center mb-20 reveal-up"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.a
            href="mailto:shambhavimahi23@gmail.com"
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex items-center gap-3 font-montserrat px-10 py-5 rounded-2xl text-white font-bold text-base uppercase tracking-widest"
            style={{
              background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              boxShadow: "0 10px 40px rgba(99,102,241,0.2)",
            }}
          >
            <Mail size={20} />
            Say Hello
          </motion.a>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-up">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col items-center text-center gap-4 p-8 rounded-2xl overflow-hidden"
              style={{ background: c.color, border: `1px solid ${c.borderColor}` }}
            >
              {/* Top beam */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${c.iconColor}, transparent)` }}
              />
              <span style={{ color: c.iconColor }}>{c.icon}</span>
              <div>
                <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: "var(--muted)" }}>
                  {c.label}
                </p>
                <p className="font-montserrat text-sm font-bold" style={{ color: "#E8DFD8" }}>
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
