"use client";

import { GitBranch, Link2, Code2 } from "lucide-react";



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-6 mt-10"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-mono text-lg font-bold gradient-text">
            shambhavi.
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {["About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--muted)")
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <GitBranch size={18} />,
                href: "https://github.com/shambhavi-mahi",
                label: "GitHub",
              },
              {
                icon: <Link2 size={18} />,
                href: "https://www.linkedin.com/in/shambhavi-mahi",
                label: "LinkedIn",
              },
              {
                icon: <Code2 size={18} />,
                href: "https://leetcode.com/Shambhavi_mahi",
                label: "LeetCode",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
                }
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <p
          className="text-center text-xs mt-8"
          style={{ color: "var(--muted)" }}
        >
          © {currentYear} Shambhavi. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
