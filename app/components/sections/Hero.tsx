"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { GitBranch, Link2, Mail, FileText, ChevronDown } from "lucide-react";
import gsap from "gsap";

const ROLES = ["Full-Stack Developer", "AI/ML Enthusiast", "Problem Solver"];

const PARTICLES = [
  { x: 8,  y: 15, s: 3, d: 14 }, { x: 92, y: 10, s: 2, d: 18 },
  { x: 20, y: 78, s: 2, d: 12 }, { x: 85, y: 60, s: 3, d: 20 },
  { x: 45, y: 90, s: 2, d: 16 }, { x: 70, y: 30, s: 2, d: 13 },
  { x: 55, y: 5,  s: 3, d: 19 }, { x: 3,  y: 50, s: 2, d: 15 },
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

  const [roleIdx,   setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing,    setTyping]    = useState(true);

  // Mouse parallax — subtle drift on the photo
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 35, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 35, stiffness: 100 });

  // Typewriter cycle
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

  // Mouse tracking
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth  - 0.5) * 12);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 10);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // GSAP entrance
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(badgeRef.current,  { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.2 })
        .fromTo(line1Ref.current,  { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(nameRef.current,   { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .fromTo(titleRef.current,  { opacity: 0       }, { opacity: 1,       duration: 0.6 }, "-=0.3")
        .fromTo(bioRef.current,    { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.3")
        .fromTo(btnsRef.current,   { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(socialRef.current, { opacity: 0       }, { opacity: 1,       duration: 0.6 }, "-=0.4")
        .fromTo(photoRef.current,
          { opacity: 0, x: 40, filter: "blur(8px)" },
          { opacity: 1, x: 0,  filter: "blur(0px)", duration: 1.3, ease: "power2.out" },
          "-=1.1"
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Subtle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, background: "rgba(99,102,241,0.2)" }}
            animate={{ y: [0, -16, 0], opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
          />
        ))}
      </div>

      {/* Radial glow on the right behind photo */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 70% 50%, var(--accent-glow), transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center min-h-screen">

        {/* ── LEFT: Text ─────────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl py-32 lg:py-0">

          {/* Badge */}
          <div
            ref={badgeRef}
            className="opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-wide"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#16a34a" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for Internships · Hackathons · Collaborations
          </div>

          {/* Hi, I'm */}
          <p ref={line1Ref} className="opacity-0 text-lg font-medium mb-1" style={{ color: "var(--muted)" }}>
            Hi, I&apos;m
          </p>

          {/* Name */}
          <h1
            ref={nameRef}
            className="opacity-0 text-7xl md:text-8xl font-bold leading-none mb-5 tracking-tight"
          >
            <span className="gradient-text">Shambhavi</span>
          </h1>

          {/* Cycling typewriter */}
          <div
            ref={titleRef}
            className="opacity-0 font-mono text-lg md:text-xl mb-6 flex items-center gap-1.5 h-8"
            style={{ color: "var(--muted)" }}
          >
            <span className="gradient-text font-bold text-xl">&gt;</span>
            <span style={{ color: "var(--foreground)", fontWeight: 500 }}>{displayed}</span>
            <span className="animate-pulse" style={{ color: "var(--accent)" }}>|</span>
          </div>

          {/* Bio */}
          <p
            ref={bioRef}
            className="opacity-0 text-base md:text-lg leading-relaxed mb-10 max-w-md"
            style={{ color: "var(--muted)" }}
          >
            I build practical, user-focused web applications and turn ideas into
            clean, scalable products. Passionate about AI/ML, full-stack systems,
            and writing code that actually matters.
          </p>

          {/* CTA buttons */}
          <div ref={btnsRef} className="opacity-0 flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-9">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                boxShadow: "0 4px 18px rgba(99,102,241,0.25)",
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Social links */}
          <div ref={socialRef} className="opacity-0 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            {[
              { icon: <GitBranch size={15} />, label: "GitHub",   href: "https://github.com/shambhavi-mahi" },
              { icon: <Link2    size={15} />, label: "LinkedIn", href: "https://www.linkedin.com/in/shambhavi-mahi" },
              { icon: <Mail     size={15} />, label: "Email",    href: "mailto:shambhavimahi23@gmail.com" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-colors"
                style={{
                  background: "var(--surface-elevated)",
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
              >
                {s.icon} {s.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "var(--accent)",
              }}
            >
              <FileText size={14} /> Resume
            </motion.a>
          </div>
        </div>

        {/* ── RIGHT: Photo with gradient vignette ─────────────────────────── */}
        <div
          ref={photoRef}
          className="hidden lg:flex flex-1 items-end justify-center opacity-0"
          style={{ alignSelf: "flex-end" }}
        >
          <motion.div
            style={{ x: smoothX, y: smoothY }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Container: original photo + gradient overlays that eat the bg */}
            <div style={{ position: "relative", width: 420, height: 540 }}>

              {/* The original photo — full quality, no broken cutout */}
              <Image
                src="/shambhavi.jpg"
                alt="Shambhavi"
                fill
                className="object-cover object-top select-none"
                priority
                draggable={false}
              />

              {/* ── Gradient overlays — fade ALL edges into page background ── */}
              {/* Bottom — strongest fade (hides where clothing ends) */}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
                style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)" }}
              />
              {/* Left edge */}
              <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none"
                style={{ background: "linear-gradient(to right, var(--background) 0%, transparent 100%)" }}
              />
              {/* Right edge */}
              <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none"
                style={{ background: "linear-gradient(to left, var(--background) 0%, transparent 100%)" }}
              />
              {/* Top edge — gentle */}
              <div className="absolute top-0 left-0 right-0 h-1/6 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, var(--background) 0%, transparent 100%)" }}
              />
              {/* Radial corners — soften diagonal corners */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 75% 80% at 50% 38%, transparent 45%, var(--background) 90%)",
                }}
              />
            </div>
          </motion.div>
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
          <ChevronDown size={15} />
        </motion.div>
      </a>
    </section>
  );
}
