"use client";

import { GitBranch, Link2, Code2 } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-14 px-6 bg-[#0A0A0A]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="font-bebas text-2xl gradient-text tracking-[0.1em]">
            shambhavi.
          </a>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-montserrat text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E8DFD8")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            {[
              { icon: <GitBranch size={18} />, href: "https://github.com/shambhavi-mahi", label: "GitHub" },
              { icon: <Link2 size={18} />, href: "https://www.linkedin.com/in/shambhavi-mahi", label: "LinkedIn" },
              { icon: <Code2 size={18} />, href: "https://leetcode.com/Shambhavi_mahi", label: "LeetCode" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                whileHover={{ y: -2 }}
                className="transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E8DFD8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="font-montserrat text-xs tracking-widest" style={{ color: "var(--muted)" }}>
            © {currentYear} Shambhavi.
          </p>
          <p className="font-montserrat text-xs tracking-widest" style={{ color: "var(--muted)" }}>
            Built with Next.js · Motion · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
