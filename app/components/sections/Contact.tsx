"use client";

import { GitBranch, Link2, Mail, Code2, Trophy } from "lucide-react";


const contacts = [
  {
    icon: <Link2 size={22} />,
    label: "LinkedIn",
    value: "in/shambhavi-mahi",
    href: "https://www.linkedin.com/in/shambhavi-mahi",
    color: "rgba(0,119,181,0.15)",
    borderColor: "rgba(0,119,181,0.3)",
  },
  {
    icon: <GitBranch size={22} />,
    label: "GitHub",
    value: "shambhavi-mahi",
    href: "https://github.com/shambhavi-mahi",
    color: "rgba(255,255,255,0.06)",
    borderColor: "rgba(255,255,255,0.15)",
  },

  {
    icon: <Code2 size={22} />,
    label: "LeetCode",
    value: "Shambhavi_mahi",
    href: "https://leetcode.com/Shambhavi_mahi",
    color: "rgba(255,161,22,0.1)",
    borderColor: "rgba(255,161,22,0.3)",
  },
  {
    icon: <Trophy size={22} />,
    label: "CodeChef",
    value: "kl2500030872 · 4★",
    href: "https://www.codechef.com/users/kl2500030872",
    color: "rgba(98,178,84,0.1)",
    borderColor: "rgba(98,178,84,0.3)",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      {/* Divider */}
      <div
        className="w-full h-px max-w-6xl mx-auto mb-28"
        style={{ background: "var(--border)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p
            className="text-sm font-mono mb-2"
            style={{ color: "var(--accent)" }}
          >
            04. get_in_touch
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Let&apos;s Connect
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something exciting.
          </p>
        </div>

        {/* Email CTA */}
        <div className="text-center mb-14">
          <a
            href="mailto:shambhavimahi23@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-medium text-lg transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              boxShadow: "0 0 30px rgba(99,102,241,0.25)",
            }}
          >
            <Mail size={20} />
            Say Hello
          </a>
        </div>

        {/* Social links grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-3 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: c.color,
                border: `1px solid ${c.borderColor}`,
              }}
            >
              <span style={{ color: "var(--foreground)" }}>{c.icon}</span>
              <div>
                <p
                  className="text-xs font-medium mb-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {c.label}
                </p>
                <p
                  className="text-sm font-semibold"
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
