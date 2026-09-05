"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const langColors: Record<string, string> = {
  TypeScript: "#3178C6", JavaScript: "#F7DF1E", Python: "#3572A5",
  Java: "#B07219", CSS: "#563D7C", HTML: "#E34C26", C: "#555555", default: "#6366F1",
};

type Repo = { name: string; description: string; language: string; url: string; stars: number; tags: string[]; featured: boolean; };

const repos: Repo[] = [
  { name: "edupath-ai", description: "Smart Career Guidance Platform — AI-powered college shortlisting, career roadmap building, and curated internship feed for students.", language: "TypeScript", url: "https://github.com/shambhavi-mahi/edupath-ai", stars: 1, tags: ["TypeScript", "React", "AI", "Full-Stack"], featured: true },
  { name: "RideRush", description: "A ride-booking platform with a modern CSS-driven UI and seamless booking experience.", language: "CSS", url: "https://github.com/shambhavi-mahi/RideRush", stars: 0, tags: ["CSS", "Frontend", "UI"], featured: false },
  { name: "SportsAnalytics", description: "Interactive dashboard turning raw match data into player and team-level insight — comparisons, trends, and visualizations.", language: "Java", url: "https://github.com/Jahnavi277/SportsAnalytics", stars: 1, tags: ["Java", "PostgreSQL", "JavaScript"], featured: true },
  { name: "shellforge", description: "A custom Unix-like shell built in C with command parsing, piping, redirection, and process management from scratch.", language: "C", url: "https://github.com/shambhavi-mahi/shellforge", stars: 0, tags: ["C", "Systems", "Shell"], featured: false },
  { name: "Placement_Predict", description: "ML-powered placement prediction tool — estimates campus placement chances based on academic and co-curricular profile.", language: "HTML", url: "https://github.com/shambhavi-mahi/Placement_Predict", stars: 0, tags: ["HTML", "JavaScript", "ML"], featured: false },
  { name: "Smart-Garbage-Collection-System", description: "Smart-city IoT system with real-time bin fill-level monitoring, route optimization for collection vehicles, and admin dashboard.", language: "JavaScript", url: "https://github.com/shambhavi-mahi/Smart-Garbage-Collection-System", stars: 0, tags: ["Python", "Flask", "PostgreSQL"], featured: true },
  { name: "Fed_Lab", description: "Frontend engineering lab — experimental UI components, layout explorations, and interactive demos.", language: "JavaScript", url: "https://github.com/shambhavi-mahi/Fed_Lab", stars: 0, tags: ["JavaScript", "Frontend", "CSS"], featured: false },
  { name: "FED_Project", description: "Frontend development project showcasing responsive design patterns and modern web techniques.", language: "JavaScript", url: "https://github.com/shambhavi-mahi/FED_Project", stars: 0, tags: ["JavaScript", "CSS", "HTML"], featured: false },
  { name: "SPA_Project", description: "Single Page Application demonstrating client-side routing, dynamic content rendering, and modular JS architecture.", language: "JavaScript", url: "https://github.com/shambhavi-mahi/SPA_Project", stars: 0, tags: ["JavaScript", "SPA", "Frontend"], featured: false },
  { name: "Ecom", description: "E-commerce UI built with CSS — product listings, cart layout, and responsive storefront design.", language: "CSS", url: "https://github.com/shambhavi-mahi/Ecom", stars: 0, tags: ["CSS", "HTML", "E-commerce"], featured: false },
  { name: "Demo1", description: "HTML prototype and demo project — early-stage UI explorations and layout experiments.", language: "HTML", url: "https://github.com/shambhavi-mahi/Demo1", stars: 0, tags: ["HTML", "CSS", "Demo"], featured: false },
];

const filters = ["All", "Featured", "TypeScript", "JavaScript", "Java", "Python", "C", "CSS", "HTML"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const filtered = repos.filter((r) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return r.featured;
    return r.language === activeFilter || r.tags.includes(activeFilter);
  });

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 bg-[#0A0A0A]">
      {/* Gold divider */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14 reveal-up"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            03. projects
          </p>
          <h2 className="font-bebas text-6xl md:text-8xl tracking-wide" style={{ color: "#E8DFD8" }}>
            Things I&apos;ve Built
          </h2>
          <p className="font-montserrat text-sm mt-4" style={{ color: "var(--muted)" }}>
            {repos.length} public repositories · hover to explore
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          className="flex flex-wrap gap-2.5 mb-12 reveal-up"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="font-montserrat px-5 py-2 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              style={{
                background: activeFilter === f ? "var(--accent)" : "rgba(255,255,255,0.03)",
                border: activeFilter === f ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.07)",
                color: activeFilter === f ? "#fff" : "var(--muted)",
                cursor: "pointer",
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden reveal-up"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: repo.featured ? "1px solid rgba(99,102,241,0.25)" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Top accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
              />

              {/* Oversized number watermark */}
              <div
                className="absolute top-2 right-3 font-bebas text-7xl select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.03)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {repo.featured && (
                <span
                  className="absolute top-4 right-4 font-montserrat px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: "rgba(99,102,241,0.12)", color: "var(--accent)" }}
                >
                  Featured
                </span>
              )}

              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.1)" }}
                >
                  <GitBranch size={15} style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="font-montserrat font-bold text-base leading-tight pt-1.5 transition-colors group-hover:text-indigo-400"
                  style={{ color: "#E8DFD8" }}
                >
                  {repo.name}
                </h3>
              </div>

              <p className="font-cormorant text-base italic leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {repo.description}
              </p>

              <div
                className="flex items-center justify-between pt-3 mt-1 border-t"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: langColors[repo.language] ?? langColors.default }} />
                  <span className="font-montserrat text-xs" style={{ color: "var(--muted)" }}>{repo.language}</span>
                </div>
                {repo.stars > 0 && (
                  <div className="flex items-center gap-1" style={{ color: "var(--muted)" }}>
                    <Star size={12} />
                    <span className="font-montserrat text-xs">{repo.stars}</span>
                  </div>
                )}
                <ExternalLink size={14} style={{ color: "var(--muted)" }} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {repo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-montserrat px-2 py-0.5 rounded-md text-[11px]"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "var(--muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Count + CTA */}
        <div className="text-center mt-12">
          <p className="font-montserrat text-xs tracking-widest uppercase mb-6" style={{ color: "var(--muted)" }}>
            Showing {filtered.length} of {repos.length} repositories
          </p>
          <motion.a
            href="https://github.com/shambhavi-mahi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="inline-flex items-center gap-2 font-montserrat px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#E8DFD8",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <GitBranch size={16} />
            See all repositories on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
