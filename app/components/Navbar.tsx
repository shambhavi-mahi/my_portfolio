"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-lg font-bold gradient-text tracking-tight">
          shambhavi.dev
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:text-[var(--foreground)]"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--accent)",
              color: "#fff",
              boxShadow: "0 4px 14px rgba(99,102,241,0.25)",
            }}
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--foreground)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 py-6 flex flex-col gap-5"
          style={{ background: "rgba(255,255,255,0.97)", borderTop: "1px solid var(--border)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium"
              style={{ color: "var(--muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white"
            style={{ background: "var(--accent)" }}
            onClick={() => setMenuOpen(false)}
          >
            <FileText size={15} />
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
