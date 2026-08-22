"use client";

import { useEffect, useState } from "react";
import { GitBranch, Link2, Code2, ChevronDown } from "lucide-react";


const roles = [
  "Full-Stack Developer",
  "Java Developer",
  "Problem Solver",
  "DSA Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="blob w-96 h-96 -top-20 -left-20"
        style={{ background: "var(--gradient-1)" }}
      />
      <div
        className="blob w-80 h-80 top-1/2 right-0"
        style={{ background: "var(--gradient-3)", opacity: 0.1 }}
      />
      <div
        className="blob w-64 h-64 bottom-20 left-1/3"
        style={{ background: "var(--gradient-2)", opacity: 0.12 }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.3)",
            color: "var(--accent)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Shambhavi</span>
        </h1>

        {/* Typewriter */}
        <div
          className="text-2xl md:text-3xl font-mono mb-6 h-10 flex items-center justify-center gap-1"
          style={{ color: "var(--muted)" }}
        >
          <span style={{ color: "var(--accent)" }}>&gt;</span>{" "}
          <span>{displayed}</span>
          <span
            className="animate-pulse"
            style={{ color: "var(--accent)" }}
          >
            |
          </span>
        </div>

        {/* Bio */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Good software should disappear into the experience — effortless for the
          person using it, deliberate in every line behind it.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-medium text-white transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))" }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 glass-card"
            style={{ color: "var(--foreground)" }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          {[
            {
              icon: <GitBranch size={20} />,
              href: "https://github.com/shambhavi-mahi",
              label: "GitHub",
            },
            {
              icon: <Link2 size={20} />,
              href: "https://www.linkedin.com/in/shambhavi-mahi",
              label: "LinkedIn",
            },

            {
              icon: <Code2 size={20} />,
              href: "https://leetcode.com/Shambhavi_mahi",
              label: "LeetCode",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className="p-3 rounded-xl transition-all duration-200 hover:-translate-y-1 glass-card"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--foreground)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
          style={{ color: "var(--muted)" }}
        >
          <span className="text-xs">Scroll</span>
          <ChevronDown size={16} />
        </a>
      </div>
    </section>
  );
}
