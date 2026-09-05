"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const langColors: Record<string, string> = {
  TypeScript: "#3178C6", JavaScript: "#F59E0B", Python: "#3572A5",
  Java: "#B07219", CSS: "#563D7C", HTML: "#E34C26", C: "#555555", default: "#6366F1",
};

type Repo = { name: string; description: string; language: string; url: string; stars: number; tags: string[]; featured: boolean; };

const repos: Repo[] = [
  { name: "edupath-ai", description: "AI-powered college shortlisting, career roadmap building, and curated internship feed for students.", language: "TypeScript", url: "https://github.com/shambhavi-mahi/edupath-ai", stars: 1, tags: ["TypeScript", "React", "AI"], featured: true },
  { name: "Smart-Garbage-Collection-System", description: "Smart-city IoT system with real-time bin fill-level monitoring and ML route optimization.", language: "JavaScript", url: "https://github.com/shambhavi-mahi/Smart-Garbage-Collection-System", stars: 0, tags: ["Python", "Flask", "PostgreSQL"], featured: true },
  { name: "SportsAnalytics", description: "Interactive dashboard turning raw match data into player and team-level insights.", language: "Java", url: "https://github.com/Jahnavi277/SportsAnalytics", stars: 1, tags: ["Java", "PostgreSQL", "JavaScript"], featured: true },
  { name: "shellforge", description: "A custom Unix-like shell built in C with piping, redirection, and process management.", language: "C", url: "https://github.com/shambhavi-mahi/shellforge", stars: 0, tags: ["C", "Systems", "Shell"], featured: false },
  { name: "Placement_Predict", description: "ML-powered placement prediction tool — estimates campus placement chances based on academic profile.", language: "HTML", url: "https://github.com/shambhavi-mahi/Placement_Predict", stars: 0, tags: ["HTML", "JavaScript", "ML"], featured: false },
  { name: "RideRush", description: "A ride-booking platform with a modern CSS-driven UI and seamless booking experience.", language: "CSS", url: "https://github.com/shambhavi-mahi/RideRush", stars: 0, tags: ["CSS", "Frontend", "UI"], featured: false },
  { name: "Fed_Lab", description: "Frontend engineering lab — experimental UI components and interactive demos.", language: "JavaScript", url: "https://github.com/shambhavi-mahi/Fed_Lab", stars: 0, tags: ["JavaScript", "Frontend", "CSS"], featured: false },
  { name: "FED_Project", description: "Responsive design patterns, animations, and modern web techniques.", language: "JavaScript", url: "https://github.com/shambhavi-mahi/FED_Project", stars: 0, tags: ["JavaScript", "CSS", "HTML"], featured: false },
  { name: "SPA_Project", description: "Single Page Application with client-side routing and modular JS architecture.", language: "JavaScript", url: "https://github.com/shambhavi-mahi/SPA_Project", stars: 0, tags: ["JavaScript", "SPA"], featured: false },
  { name: "Ecom", description: "E-commerce UI — product listings, cart layout, and responsive storefront design.", language: "CSS", url: "https://github.com/shambhavi-mahi/Ecom", stars: 0, tags: ["CSS", "HTML", "E-commerce"], featured: false },
  { name: "Demo1", description: "HTML prototype and demo project — early-stage UI explorations.", language: "HTML", url: "https://github.com/shambhavi-mahi/Demo1", stars: 0, tags: ["HTML", "CSS"], featured: false },
];

const filters = ["All", "Featured", "TypeScript", "JavaScript", "Java", "Python", "C", "CSS", "HTML"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const filtered = repos.filter((r) => {
    if (active === "All") return true;
    if (active === "Featured") return r.featured;
    return r.language === active || r.tags.includes(active);
  });

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-24 reveal-up" />

        {/* Header */}
        <motion.div
          className="mb-14 reveal-up"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            04. projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              All Work
            </h2>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              {repos.length} repositories
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10 reveal-up"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
              style={{
                background: active === f ? "var(--accent)" : "var(--surface)",
                border: active === f ? "1px solid var(--accent)" : "1px solid var(--border)",
                color: active === f ? "#fff" : "var(--muted)",
                cursor: "pointer",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden reveal-up"
              style={{
                background: "var(--surface)",
                border: repo.featured ? "1px solid rgba(99,102,241,0.2)" : "1px solid var(--border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              }}
            >
              {/* Top accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2))" }}
              />

              {/* Watermark number */}
              <span
                className="absolute top-3 right-4 text-6xl font-bold font-mono select-none pointer-events-none"
                style={{ color: "rgba(0,0,0,0.03)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {repo.featured && (
                <span
                  className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: "rgba(99,102,241,0.08)", color: "var(--accent)" }}
                >
                  Featured
                </span>
              )}

              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.08)" }}
                >
                  <GitBranch size={14} style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="text-sm font-bold leading-snug pt-1 group-hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--foreground)" }}
                >
                  {repo.name}
                </h3>
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {repo.description}
              </p>

              <div
                className="flex items-center justify-between pt-3 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: langColors[repo.language] ?? langColors.default }} />
                  <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>{repo.language}</span>
                </div>
                {repo.stars > 0 && (
                  <span className="flex items-center gap-1 text-xs" style={{ color: "var(--muted)" }}>
                    <Star size={11} /> {repo.stars}
                  </span>
                )}
                <ExternalLink size={13} style={{ color: "var(--muted)" }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {repo.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium"
                    style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)", color: "var(--muted)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <p className="text-center text-xs font-medium mt-10" style={{ color: "var(--muted)" }}>
          Showing {filtered.length} of {repos.length} repositories
        </p>
        <div className="text-center mt-5">
          <motion.a
            href="https://github.com/shambhavi-mahi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <GitBranch size={15} /> View all on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
