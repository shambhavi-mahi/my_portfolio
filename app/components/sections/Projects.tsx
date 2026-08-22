"use client";

import { ExternalLink, GitBranch } from "lucide-react";


const projects = [
  {
    number: "01",
    title: "Smart Career Guidance Platform",
    description:
      "A full-stack platform that helps students cut through the noise of academic and career choices — career exploration, college shortlisting, roadmap building, and curated opportunities, all in one place.",
    tags: ["Python", "Flask", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Personalized career & college recommendations",
      "Roadmap generator tailored to a chosen track",
      "Curated feed of internships, courses & competitions",
      "Clean, responsive dashboard",
    ],
    github: "https://github.com/shambhavi-mahi/edupath-ai",
    color: "rgba(99, 102, 241, 0.15)",
    borderColor: "rgba(99, 102, 241, 0.3)",
  },
  {
    number: "02",
    title: "Sports Analytics Dashboard",
    description:
      "An interactive dashboard built to turn raw match data into player and team-level insight — comparisons, trends, and visualizations in one query-driven view.",
    tags: ["Java", "PostgreSQL", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Head-to-head player statistical comparison",
      "Team performance visualizations",
      "Filterable, query-driven data views",
      "Insight cards summarizing key trends",
    ],
    github: "https://github.com/Jahnavi277/SportsAnalytics",
    color: "rgba(139, 92, 246, 0.15)",
    borderColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    number: "03",
    title: "Smart Garbage Collection System",
    description:
      "A smart-city system that uses real-time bin monitoring to cut unnecessary collection runs and route trucks more efficiently.",
    tags: ["Python", "Flask", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Real-time bin fill-level monitoring",
      "Route optimization for collection vehicles",
      "Admin dashboard for zone monitoring",
      "Alerts for near-capacity bins",
    ],
    github:
      "https://github.com/shambhavi-mahi/Smart-Garbage-Collection-System",
    color: "rgba(236, 72, 153, 0.15)",
    borderColor: "rgba(236, 72, 153, 0.3)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      {/* Divider */}
      <div
        className="w-full h-px max-w-6xl mx-auto mb-28"
        style={{ background: "var(--border)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-sm font-mono mb-2"
            style={{ color: "var(--accent)" }}
          >
            03. projects
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Things I&apos;ve Built
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 glass-card overflow-hidden"
            >
              {/* Glow accent top-left */}
              <div
                className="absolute -top-10 -left-10 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: project.color }}
              />

              <div className="relative grid md:grid-cols-[1fr_auto] gap-8">
                {/* Left content */}
                <div>
                  {/* Number */}
                  <span
                    className="font-mono text-xs mb-3 block"
                    style={{ color: "var(--muted)" }}
                  >
                    {project.number}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: "var(--foreground)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-5 leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-6">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: project.color,
                          border: `1px solid ${project.borderColor}`,
                          color: "var(--foreground)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: links */}
                <div className="flex md:flex-col items-start md:items-end gap-3 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:opacity-80 glass-card"
                    style={{ color: "var(--foreground)" }}
                  >
                    <GitBranch size={15} />
                    Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:opacity-80"
                    style={{
                      background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                      color: "#fff",
                    }}
                  >
                    <ExternalLink size={15} />
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
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
