"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const featured = [
  {
    num: "01",
    name: "edupath-ai",
    headline: "AI-Powered Career Guidance Platform",
    description:
      "Smart college shortlisting, AI-driven career roadmap builder, and curated internship feed for students. Full-stack Next.js + AI integrations.",
    tags: ["TypeScript", "React", "AI/ML", "Full-Stack"],
    url: "https://github.com/shambhavi-mahi/edupath-ai",
    accent: "#6366F1",
  },
  {
    num: "02",
    name: "Smart-Garbage-Collection-System",
    headline: "Smart-City IoT Waste Management",
    description:
      "Real-time bin fill-level monitoring, ML-powered route optimization for collection vehicles, and admin zone dashboard for a smarter city.",
    tags: ["Python", "Flask", "PostgreSQL", "IoT", "ML"],
    url: "https://github.com/shambhavi-mahi/Smart-Garbage-Collection-System",
    accent: "#10B981",
  },
  {
    num: "03",
    name: "SportsAnalytics",
    headline: "Sports Data Analytics Dashboard",
    description:
      "Interactive dashboard turning raw match data into player and team-level insights — comparisons, trends, and visualizations in one query-driven view.",
    tags: ["Java", "PostgreSQL", "JavaScript", "Data"],
    url: "https://github.com/Jahnavi277/SportsAnalytics",
    accent: "#F59E0B",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function FeaturedProjects() {
  return (
    <section id="featured" className="py-28 px-6 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            Selected Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              Featured Projects
            </h2>
            <a
              href="#projects"
              className="text-sm font-semibold flex items-center gap-1.5 transition-colors hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              View all work <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featured.map((p) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col gap-5 p-7 rounded-2xl overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }}
              />

              {/* Number */}
              <span
                className="text-xs font-bold font-mono tracking-widest"
                style={{ color: "var(--muted)" }}
              >
                {p.num}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-lg font-bold mb-2 leading-snug group-hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--foreground)" }}
                >
                  {p.headline}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {p.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{
                      background: "var(--surface-elevated)",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div
                className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all"
                style={{ color: "var(--accent)" }}
              >
                View Project <ArrowUpRight size={13} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
