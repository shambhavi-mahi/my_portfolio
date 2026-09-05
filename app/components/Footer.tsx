"use client";

import { GitBranch, Link2, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ background: "var(--background-alt)", borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="text-base font-bold gradient-text tracking-tight">
            shambhavi.dev
          </a>

          <div className="flex flex-wrap justify-center gap-8">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs font-medium transition-colors hover:text-[var(--foreground)]"
                style={{ color: "var(--muted)" }}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: <GitBranch size={16} />, href: "https://github.com/shambhavi-mahi" },
              { icon: <Link2 size={16} />, href: "https://www.linkedin.com/in/shambhavi-mahi" },
              { icon: <Mail size={16} />, href: "mailto:shambhavimahi23@gmail.com" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target={i < 2 ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Shambhavi. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Built with Next.js · Motion · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
