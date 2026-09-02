"use client";

import { GitBranch, Link2, Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-14 px-6 mt-10 bg-[var(--surface-elevated)]"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="font-mono text-xl font-bold gradient-text tracking-tight">
            shambhavi.
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {[
              { icon: <GitBranch size={20} />, href: "https://github.com/shambhavi-mahi", label: "GitHub" },
              { icon: <Link2 size={20} />, href: "https://www.linkedin.com/in/shambhavi-mahi", label: "LinkedIn" },
              { icon: <Code2 size={20} />, href: "https://leetcode.com/Shambhavi_mahi", label: "LeetCode" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="transition-colors duration-200 hover:-translate-y-0.5"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
            © {currentYear} Shambhavi.
          </p>
          <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
            Built with Next.js, Three.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
