"use client";

import { useEffect, useState, useRef } from "react";
import { GitBranch, Link2, Code2, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RobotScene from "../3d/RobotScene";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const heroRef = useRef<HTMLElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  
  // Elements for GSAP animation
  const badgeRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const text = "Full-Stack Developer";
    let timeout: ReturnType<typeof setTimeout>;
    
    // Slight delay before typing starts to match GSAP reveal
    const startTyping = setTimeout(() => {
      let i = 0;
      const typeNext = () => {
        if (i <= text.length) {
          setDisplayed(text.slice(0, i));
          i++;
          timeout = setTimeout(typeNext, 70);
        }
      };
      typeNext();
    }, 1500);

    return () => {
      clearTimeout(startTyping);
      clearTimeout(timeout);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Entrance Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(badgeRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
        .fromTo(nameRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(titleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.4")
        .fromTo(bioRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(socialRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(robotRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }, "-=1");

      // 2. Scroll Animation for Robot
      gsap.to(robotRef.current, {
        y: -150,
        rotationZ: 5,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, heroRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Soft Light Background elements */}
      <div className="absolute inset-0 z-0 bg-[var(--background)]">
        <div
          className="blob w-[30rem] h-[30rem] -top-20 -left-20"
          style={{ background: "var(--gradient-1)" }}
        />
        <div
          className="blob w-[25rem] h-[25rem] top-1/2 right-0"
          style={{ background: "var(--gradient-3)" }}
        />
        <div
          className="blob w-[20rem] h-[20rem] bottom-20 left-1/3"
          style={{ background: "var(--gradient-2)", opacity: 0.2 }}
        />
        {/* Subtle grid pattern for light theme */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* LEFT COLUMN - TEXT */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start z-20">
          
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 opacity-0"
            style={{
              background: "var(--surface-elevated)",
              border: "1px solid var(--border)",
              color: "var(--accent)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </div>

          {/* Main heading */}
          <h1 ref={nameRef} className="text-5xl md:text-7xl font-bold mb-4 leading-tight opacity-0">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Shambhavi</span>
          </h1>

          {/* Typewriter Terminal Title */}
          <div
            ref={titleRef}
            className="text-2xl md:text-3xl font-mono mb-6 h-10 flex items-center justify-center lg:justify-start gap-2 opacity-0"
            style={{ color: "var(--foreground)" }}
          >
            <span style={{ color: "var(--accent)", fontWeight: "bold" }}>&gt;</span>
            <span>{displayed}</span>
            <span className="animate-pulse" style={{ color: "var(--accent)" }}>|</span>
          </div>

          {/* Bio */}
          <p
            ref={bioRef}
            className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed opacity-0"
            style={{ color: "var(--muted)" }}
          >
            Good software should disappear into the experience — effortless for the
            person using it, deliberate in every line behind it.
          </p>

          {/* CTA buttons */}
          <div ref={buttonsRef} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 opacity-0">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
                boxShadow: "0 10px 25px rgba(99, 102, 241, 0.25)"
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 glass-card"
              style={{ color: "var(--foreground)" }}
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div ref={socialRef} className="flex items-center justify-center lg:justify-start gap-5 opacity-0">
            {[
              { icon: <GitBranch size={20} />, href: "https://github.com/shambhavi-mahi", label: "GitHub" },
              { icon: <Link2 size={20} />, href: "https://www.linkedin.com/in/shambhavi-mahi", label: "LinkedIn" },
              { icon: <Code2 size={20} />, href: "https://leetcode.com/Shambhavi_mahi", label: "LeetCode" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 glass-card"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN - 3D ROBOT */}
        <div ref={robotRef} className="flex-1 w-full lg:w-auto h-[400px] md:h-[600px] z-10 opacity-0 relative">
          <RobotScene />
        </div>
        
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce z-20"
        style={{ color: "var(--muted)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}
