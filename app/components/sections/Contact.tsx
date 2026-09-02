"use client";

import { GitBranch, Link2, Mail, Code2, Trophy } from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const contacts = [
  {
    icon: <Link2 size={24} />,
    label: "LinkedIn",
    value: "in/shambhavi-mahi",
    href: "https://www.linkedin.com/in/shambhavi-mahi",
    color: "rgba(0,119,181,0.05)",
    borderColor: "rgba(0,119,181,0.2)",
    iconColor: "#0077B5",
  },
  {
    icon: <GitBranch size={24} />,
    label: "GitHub",
    value: "shambhavi-mahi",
    href: "https://github.com/shambhavi-mahi",
    color: "rgba(36,41,46,0.05)",
    borderColor: "rgba(36,41,46,0.2)",
    iconColor: "#24292E",
  },
  {
    icon: <Code2 size={24} />,
    label: "LeetCode",
    value: "Shambhavi_mahi",
    href: "https://leetcode.com/Shambhavi_mahi",
    color: "rgba(255,161,22,0.05)",
    borderColor: "rgba(255,161,22,0.2)",
    iconColor: "#FFA116",
  },
  {
    icon: <Trophy size={24} />,
    label: "CodeChef",
    value: "kl2500030872 · 4★",
    href: "https://www.codechef.com/users/kl2500030872",
    color: "rgba(98,178,84,0.05)",
    borderColor: "rgba(98,178,84,0.2)",
    iconColor: "#62B254",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 bg-[var(--background)]">
      {/* Divider */}
      <div
        className="w-full h-px max-w-7xl mx-auto mb-28 reveal-up"
        style={{ background: "var(--border)" }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center reveal-up">
          <p
            className="text-sm font-mono mb-2 tracking-wider uppercase"
            style={{ color: "var(--accent)" }}
          >
            04. get_in_touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Let&apos;s Connect
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something exciting.
          </p>
        </div>

        {/* Email CTA */}
        <div className="text-center mb-16 reveal-up">
          <a
            href="mailto:shambhavimahi23@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              boxShadow: "0 10px 30px rgba(99,102,241,0.2)",
            }}
          >
            <Mail size={22} />
            Say Hello
          </a>
        </div>

        {/* Social links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center sm:items-start text-center sm:text-left gap-4 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 bg-[var(--surface)] shadow-sm hover:shadow-md"
              style={{
                border: `1px solid ${c.borderColor}`,
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ background: c.color, color: c.iconColor }}
              >
                {c.icon}
              </div>
              <div>
                <p
                  className="text-sm font-semibold mb-1 uppercase tracking-wider"
                  style={{ color: "var(--muted)" }}
                >
                  {c.label}
                </p>
                <p
                  className="text-base font-bold"
                  style={{ color: "var(--foreground)" }}
                >
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
