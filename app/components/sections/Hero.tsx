"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { GitBranch, Link2, Code2, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Custom cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Scroll-linked robot parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-photo", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full border border-[#6366F1]/40 mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: 14,
          height: 14,
          backgroundColor: "rgba(99,102,241,0.6)",
        }}
      />

      {/* Ambient background blobs */}
      <div className="blob w-[40rem] h-[40rem] -top-40 -left-40 bg-[#6366F1]" style={{ opacity: 0.07 }} />
      <div className="blob w-[30rem] h-[30rem] top-1/2 right-0 bg-[#8B5CF6]" style={{ opacity: 0.06 }} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-16 py-28">
        
        {/* LEFT — TEXT */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUpVariants}>
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.25)",
                color: "var(--accent)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </div>
          </motion.div>

          {/* Name — Bebas Neue cinematic style */}
          <motion.h1
            variants={fadeUpVariants}
            className="font-bebas text-[5.5rem] md:text-[8rem] lg:text-[8rem] leading-none tracking-wide mb-4"
            style={{ color: "#E8DFD8" }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Shambhavi</span>
          </motion.h1>

          {/* Terminal title */}
          <motion.div
            variants={fadeUpVariants}
            className="font-mono text-xl md:text-2xl mb-6 flex items-center gap-2"
            style={{ color: "var(--muted)" }}
          >
            <span className="gradient-text font-bold text-2xl">&gt;</span>
            <span style={{ color: "#E8DFD8" }}>Full-Stack Developer</span>
            <span className="animate-pulse" style={{ color: "var(--accent)" }}>|</span>
          </motion.div>

          {/* Cormorant bio — editorial feel */}
          <motion.p
            variants={fadeUpVariants}
            className="font-cormorant text-xl md:text-2xl italic max-w-xl mb-10 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Good software should disappear into the experience — effortless for the
            person using it, deliberate in every line behind it.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-montserrat text-sm tracking-wide"
              style={{
                background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                boxShadow: "0 0 24px rgba(99,102,241,0.25)",
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 font-montserrat text-sm tracking-wide"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#E8DFD8",
              }}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            {[
              { icon: <GitBranch size={18} />, href: "https://github.com/shambhavi-mahi", label: "GitHub" },
              { icon: <Link2 size={18} />, href: "https://www.linkedin.com/in/shambhavi-mahi", label: "LinkedIn" },
              { icon: <Code2 size={18} />, href: "https://leetcode.com/Shambhavi_mahi", label: "LeetCode" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                  background: "rgba(255,255,255,0.02)",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E8DFD8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — PHOTO with cinematic 3D tilt */}
        <motion.div
          className="hero-photo flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <PhotoCard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce z-20"
        style={{ color: "var(--muted)" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-montserrat">Scroll</span>
        <ChevronDown size={14} />
      </a>
    </section>
  );
}

// ─── Photo Card with 3D Tilt ───────────────────────────────────────────────

function PhotoCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const sRotX = useSpring(rotX, { damping: 20, stiffness: 200 });
  const sRotY = useSpring(rotY, { damping: 20, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotX.set(-y * 14);
    rotY.set(x * 14);
  };

  const handleMouseLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: sRotX,
        rotateY: sRotY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Gold corner brackets */}
      <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 z-20" style={{ borderColor: "var(--gold)" }} />
      <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 z-20" style={{ borderColor: "var(--gold)" }} />
      <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 z-20" style={{ borderColor: "var(--gold)" }} />
      <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 z-20" style={{ borderColor: "var(--gold)" }} />

      {/* Photo */}
      <Image
        src="/shambhavi.jpg"
        alt="Shambhavi"
        fill
        className="object-cover object-top"
        priority
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%)",
        }}
      />

      {/* Name card at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 px-6 py-5 z-10"
        style={{
          background: "rgba(10,10,10,0.6)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(212,175,55,0.2)",
        }}
      >
        <p className="font-great-vibes text-2xl" style={{ color: "var(--gold-light)" }}>
          Shambhavi
        </p>
        <p className="font-montserrat text-xs tracking-widest uppercase mt-0.5" style={{ color: "var(--muted)" }}>
          Full-Stack Developer
        </p>
      </div>

      {/* Subtle border */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ border: "1px solid rgba(212,175,55,0.15)" }}
      />
    </motion.div>
  );
}
