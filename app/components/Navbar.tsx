"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bebas text-2xl gradient-text tracking-[0.1em]">
          shambhavi.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-montserrat text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E8DFD8")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-montserrat px-5 py-2.5 rounded-xl text-xs font-bold text-white uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              boxShadow: "0 4px 16px rgba(99,102,241,0.2)",
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: "#E8DFD8" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 py-6 flex flex-col gap-6"
          style={{ background: "rgba(10,10,10,0.97)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-montserrat text-sm tracking-widest uppercase"
              style={{ color: "var(--muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-montserrat px-5 py-3 rounded-xl text-sm font-bold text-white text-center uppercase tracking-wider"
            style={{ background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))" }}
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
