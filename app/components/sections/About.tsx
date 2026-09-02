"use client";

import { Trophy, MapPin, BookOpen, Cpu } from "lucide-react";
import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const stats = [
  { value: "11+", label: "Repositories" },
  { value: "3+", label: "Projects Built" },
  { value: "4★", label: "CodeChef Rating" },
  { value: "SIH", label: "Hackathon" },
];

const focuses = [
  { icon: <BookOpen size={16} />, text: "Data Structures & Algorithms" },
  { icon: <Cpu size={16} />, text: "Data Analytics" },
  { icon: <MapPin size={16} />, text: "Cloud Computing" },
  { icon: <Trophy size={16} />, text: "System Design" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 reveal-up">
          <p className="text-sm font-mono mb-2 tracking-wider uppercase" style={{ color: "var(--accent)" }}>
            01. about_me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-6 reveal-up">
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              I&apos;m <strong style={{ color: "var(--foreground)", fontWeight: 600 }}>Shambhavi</strong>, a Computer Science undergrad who
              likes taking a rough idea and turning it into something people can
              actually click through and use. Most of what I build lives in the
              full stack — from schema design to the pixel details of a dashboard.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              I treat every project as a small research problem: What breaks?
              What&apos;s the cleanest way to model this? What would make a stranger
              trust this UI? That mindset is what my repos are trying to show.
            </p>

            {/* Current focuses */}
            <div className="pt-2">
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>
                Currently deep in:
              </p>
              <div className="flex flex-wrap gap-3">
                {focuses.map((f) => (
                  <span
                    key={f.text}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>{f.icon}</span>
                    {f.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm font-medium pt-4" style={{ color: "var(--muted)" }}>
              <MapPin size={16} style={{ color: "var(--accent)" }} />
              India · UTC +05:30
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-5 reveal-up">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
