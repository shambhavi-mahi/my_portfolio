"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { GitBranch, Link2, Mail, FileText, ChevronDown } from "lucide-react";
import gsap from "gsap";
import dynamic from "next/dynamic";

// Lazy-load the 3D scene so it doesn't block SSR
const RobotScene = dynamic(() => import("../3d/RobotScene"), { ssr: false });

// ─── Cycling roles ──────────────────────────────────────────────────────────
const ROLES = ["Full-Stack Developer", "AI/ML Enthusiast", "Problem Solver"];

// ─── Subtle floating particles ───────────────────────────────────────────────
const PARTICLES = [
  { x: 8,  y: 15, s: 3, d: 14 }, { x: 92, y: 10, s: 2, d: 18 },
  { x: 20, y: 78, s: 2, d: 12 }, { x: 85, y: 60, s: 3, d: 20 },
  { x: 45, y: 90, s: 2, d: 16 }, { x: 70, y: 30, s: 2, d: 13 },
  { x: 55, y: 5,  s: 3, d: 19 }, { x: 3,  y: 50, s: 2, d: 15 },
  { x: 95, y: 85, s: 2, d: 17 }, { x: 30, y: 40, s: 3, d: 11 },
];

export default function Hero() {
  const heroRef  = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const badgeRef  = useRef<HTMLDivElement>(null);
  const line1Ref  = useRef<HTMLParagraphElement>(null);
  const nameRef   = useRef<HTMLHeadingElement>(null);
  const titleRef  = useRef<HTMLDivElement>(null);
  const bioRef    = useRef<HTMLParagraphElement>(null);
  const btnsRef   = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  // Typewriter
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing,    setTyping]    = useState(true);

  // Mouse parallax for photo
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 120 });

  // ── Typewriter ────────────────────────────────────────────────────────
  useEffect(() => {
    const role = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length) {
        t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
      } else {
        t = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((p) => (p + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  // ── Mouse parallax ────────────────────────────────────────────────────
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) / cx * 8);
      mouseY.set((e.clientY - cy) / cy * 6);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  // ── GSAP entrance ─────────────────────────────────────────────────────
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(badgeRef.current,  { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.2 })
        .fromTo(line1Ref.current,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(nameRef.current,   { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .fromTo(titleRef.current,  { opacity: 0       }, { opacity: 1,       duration: 0.6 }, "-=0.3")
        .fromTo(bioRef.current,    { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .fromTo(btnsRef.current,   { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(socialRef.current, { opacity: 0       }, { opacity: 1,       duration: 0.6 }, "-=0.4")
        .fromTo(photoRef.current,
          { opacity: 0, x: 50, filter: "blur(10px)" },
          { opacity: 1, x: 0,  filter: "blur(0px)", duration: 1.4, ease: "power2.out" },
          "-=1.1"
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-[var(--background)] overflow-hidden"
    >
      {/* Subtle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, background: "rgba(99,102,241,0.2)" }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          />
        ))}
      </div>

      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 60% at 75% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Main layout ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-28 pb-16">

        {/* ── LEFT: Text column ───────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">

          <div
            ref={badgeRef}
            className="opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-7 tracking-wide"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#16a34a" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for Internships · Hackathons · Collaborations
          </div>

          <p ref={line1Ref} className="opacity-0 text-lg font-medium mb-1" style={{ color: "var(--muted)" }}>
            Hi, I&apos;m
          </p>

          <h1
            ref={nameRef}
            className="opacity-0 text-6xl md:text-8xl font-bold leading-none mb-5 tracking-tight"
          >
            <span className="gradient-text">Shambhavi</span>
          </h1>

          <div
            ref={titleRef}
            className="opacity-0 font-mono text-lg md:text-xl mb-6 flex items-center gap-1.5 h-8"
            style={{ color: "var(--muted)" }}
          >
            <span className="gradient-text font-bold text-xl">&gt;</span>
            <span style={{ color: "var(--foreground)", fontWeight: 500 }}>{displayed}</span>
            <span className="animate-pulse" style={{ color: "var(--accent)" }}>|</span>
          </div>

          <p
            ref={bioRef}
            className="opacity-0 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ color: "var(--muted)" }}
          >
            I build practical, user-focused web applications and turn ideas into
            clean, scalable products. Passionate about AI/ML, full-stack systems,
            and writing code that actually matters.
          </p>

          <div ref={btnsRef} className="opacity-0 flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-9">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))", boxShadow: "0 4px 18px rgba(99,102,241,0.25)" }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
            >
              Let&apos;s Connect
            </a>
          </div>

          <div ref={socialRef} className="opacity-0 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            {[
              { icon: <GitBranch size={17} />, href: "https://github.com/shambhavi-mahi",          label: "GitHub" },
              { icon: <Link2    size={17} />, href: "https://www.linkedin.com/in/shambhavi-mahi", label: "LinkedIn" },
              { icon: <Mail     size={17} />, href: "mailto:shambhavimahi23@gmail.com",           label: "Email" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                title={s.label}
                whileHover={{ y: -2, scale: 1.05 }}
                className="p-2.5 rounded-xl flex items-center gap-1.5 text-xs font-medium"
                style={{ background: "var(--surface-elevated)", border: "1px solid var(--border)", color: "var(--muted)" }}
              >
                {s.icon}
                {s.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.05 }}
              className="px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
              style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)", color: "var(--accent)" }}
            >
              <FileText size={14} /> Resume
            </motion.a>
          </div>
        </div>

        {/* ── RIGHT: 3D Robot + Floating Photo cutout ─────────────────────── */}
        <div
          ref={photoRef}
          className="flex-1 relative opacity-0"
          style={{ height: 560 }}
        >
          {/* 3D Robot fills the background */}
          <div className="absolute inset-0">
            <RobotScene />
          </div>

          {/* Photo cutout floats in front of the robot */}
          <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="absolute bottom-0 right-0 z-10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              style={{
                width: 300,
                height: 420,
                position: "relative",
                filter: "drop-shadow(0 20px 40px rgba(99,102,241,0.18)) drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
              }}
            >
              <Image
                src="/shambhavi_cutout.png"
                alt="Shambhavi"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>

          {/* Subtle glow below photo */}
          <div
            className="absolute bottom-0 right-10 w-64 h-16 rounded-full z-0"
            style={{
              background: "radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)",
              filter: "blur(16px)",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#featured"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 group"
        style={{ color: "var(--muted)" }}
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase group-hover:text-[var(--foreground)] transition-colors">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </a>
    </section>
  );
}
