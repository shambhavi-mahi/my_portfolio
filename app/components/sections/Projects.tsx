"use client";

import { useState } from "react";
import { ExternalLink, GitBranch, Star } from "lucide-react";
import Image from "next/image";

const langColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  Java: "#B07219",
  CSS: "#563D7C",
  HTML: "#E34C26",
  C: "#555555",
  default: "#6366F1",
};

type Repo = {
  name: string;
  description: string;
  language: string;
  url: string;
  stars: number;
  tags: string[];
  featured: boolean;
};

const repos: Repo[] = [
  {
    name: "edupath-ai",
    description: "Smart Career Guidance Platform — AI-powered college shortlisting, career roadmap building, and curated internship feed for students.",
    language: "TypeScript",
    url: "https://github.com/shambhavi-mahi/edupath-ai",
    stars: 1,
    tags: ["TypeScript", "React", "AI", "Full-Stack"],
    featured: true,
  },
  {
    name: "RideRush",
    description: "A ride-booking platform with a modern CSS-driven UI and seamless booking experience.",
    language: "CSS",
    url: "https://github.com/shambhavi-mahi/RideRush",
    stars: 0,
    tags: ["CSS", "Frontend", "UI"],
    featured: false,
  },
  {
    name: "SportsAnalytics",
    description: "Interactive dashboard turning raw match data into player and team-level insight — comparisons, trends, and visualizations in one query-driven view.",
    language: "Java",
    url: "https://github.com/Jahnavi277/SportsAnalytics",
    stars: 1,
    tags: ["Java", "PostgreSQL", "JavaScript"],
    featured: true,
  },
  {
    name: "shellforge",
    description: "A custom Unix-like shell built in C with command parsing, piping, redirection, and process management from scratch.",
    language: "C",
    url: "https://github.com/shambhavi-mahi/shellforge",
    stars: 0,
    tags: ["C", "Systems", "Shell", "OS"],
    featured: false,
  },
  {
    name: "Placement_Predict",
    description: "ML-powered placement prediction tool — estimates campus placement chances based on academic and co-curricular profile.",
    language: "HTML",
    url: "https://github.com/shambhavi-mahi/Placement_Predict",
    stars: 0,
    tags: ["HTML", "JavaScript", "ML", "Python"],
    featured: false,
  },
  {
    name: "Smart-Garbage-Collection-System",
    description: "Smart-city IoT system with real-time bin fill-level monitoring, route optimization for collection vehicles, and admin zone dashboard.",
    language: "JavaScript",
    url: "https://github.com/shambhavi-mahi/Smart-Garbage-Collection-System",
    stars: 0,
    tags: ["Python", "Flask", "PostgreSQL", "JavaScript"],
    featured: true,
  },
  {
    name: "Fed_Lab",
    description: "Frontend engineering lab — experimental UI components, layout explorations, and interactive demos in vanilla JavaScript.",
    language: "JavaScript",
    url: "https://github.com/shambhavi-mahi/Fed_Lab",
    stars: 0,
    tags: ["JavaScript", "Frontend", "CSS"],
    featured: false,
  },
  {
    name: "FED_Project",
    description: "Frontend development project showcasing responsive design patterns, animations, and modern web techniques.",
    language: "JavaScript",
    url: "https://github.com/shambhavi-mahi/FED_Project",
    stars: 0,
    tags: ["JavaScript", "CSS", "HTML", "Responsive"],
    featured: false,
  },
  {
    name: "SPA_Project",
    description: "Single Page Application project demonstrating client-side routing, dynamic content rendering, and modular JS architecture.",
    language: "JavaScript",
    url: "https://github.com/shambhavi-mahi/SPA_Project",
    stars: 0,
    tags: ["JavaScript", "SPA", "Frontend"],
    featured: false,
  },
  {
    name: "Ecom",
    description: "E-commerce UI built with CSS — product listings, cart layout, and responsive storefront design.",
    language: "CSS",
    url: "https://github.com/shambhavi-mahi/Ecom",
    stars: 0,
    tags: ["CSS", "HTML", "E-commerce", "UI"],
    featured: false,
  },
  {
    name: "Demo1",
    description: "HTML prototype and demo project — early-stage UI explorations and layout experiments.",
    language: "HTML",
    url: "https://github.com/shambhavi-mahi/Demo1",
    stars: 0,
    tags: ["HTML", "CSS", "Demo"],
    featured: false,
  },
];

const filters = ["All", "Featured", "TypeScript", "JavaScript", "Java", "Python", "C", "CSS", "HTML"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = repos.filter((r) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return r.featured;
    return r.language === activeFilter || r.tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-28 px-6">
      <div className="w-full h-px max-w-6xl mx-auto mb-28" style={{ background: "var(--border)" }} />
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-sm font-mono mb-2" style={{ color: "var(--accent)" }}>
              03. projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
              Things I&apos;ve Built
            </h2>
            <p className="mt-3 text-base" style={{ color: "var(--muted)" }}>
              {repos.length} public repositories &middot; hover to explore
            </p>
          </div>

          {/* AI Robot image */}
          <div
            className="relative w-40 h-40 md:w-52 md:h-52 flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 0 40px rgba(99,102,241,0.35)" }}
          >
            <Image src="/robot.jpg" alt="AI Tech Robot" fill className="object-cover" priority />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.25), transparent 60%)" }}
            />
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: activeFilter === f ? "var(--accent)" : "rgba(255,255,255,0.04)",
                border: activeFilter === f ? "1px solid var(--accent)" : "1px solid rgba(255,255,255,0.08)",
                color: activeFilter === f ? "#fff" : "var(--muted)",
                cursor: "pointer",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Repos grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-4 p-5 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: repo.featured ? "rgba(99,102,241,0.3)" : undefined }}
            >
              {repo.featured && (
                <span
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "var(--accent)" }}
                >
                  Featured
                </span>
              )}

              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.1)" }}
                >
                  <GitBranch size={15} style={{ color: "var(--accent)" }} />
                </div>
                <h3
                  className="font-semibold text-base leading-tight pt-1 transition-colors group-hover:text-purple-400"
                  style={{ color: "var(--foreground)" }}
                >
                  {repo.name}
                </h3>
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {repo.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ background: langColors[repo.language] ?? langColors.default }}
                  />
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{repo.language}</span>
                </div>
                {repo.stars > 0 && (
                  <div className="flex items-center gap-1" style={{ color: "var(--muted)" }}>
                    <Star size={12} />
                    <span className="text-xs">{repo.stars}</span>
                  </div>
                )}
                <ExternalLink
                  size={13}
                  style={{ color: "var(--muted)" }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {repo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "var(--muted)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Count display */}
        <p className="text-center mt-6 text-sm" style={{ color: "var(--muted)" }}>
          Showing {filtered.length} of {repos.length} repositories
        </p>

        {/* GitHub CTA */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/shambhavi-mahi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-80 glass-card"
            style={{ color: "var(--muted)" }}
          >
            <GitBranch size={16} />
            See all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
