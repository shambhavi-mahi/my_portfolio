"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

const ROLES = ["Full-Stack Development", "React & Next.js", "AI & Machine Learning"];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Mouse parallax for Dark Theme image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 35, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 35, stiffness: 100 });

  // Typewriter
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
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 12);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 10);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // GSAP entrance
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      // Dark theme animations
      gsap.fromTo(".dark-anim-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.2, ease: "power3.out" });
      gsap.fromTo(".dark-anim-img", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1.3, ease: "power2.out", delay: 0.4 });
      
      // Light theme animations
      gsap.fromTo(".light-anim-bg-text", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.2 });
      gsap.fromTo(".light-anim-img", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 1.2 });
      gsap.fromTo(".light-anim-bottom-left", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 2.2 });
      gsap.fromTo(".light-anim-desc", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1.0, ease: "power3.out", delay: 3.0 });
      gsap.fromTo(".light-anim-bottom-right", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.0, ease: "power3.out", delay: 3.2 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* =========================================================================
          LIGHT THEME: "Madison" Inspired Design
          ========================================================================= */}
      <div 
        className="absolute inset-0 dark:hidden bg-[#ffffff]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 0% 50%, #e9d5ff 0%, transparent 100%),
            radial-gradient(ellipse 70% 60% at 100% 50%, #e9d5ff 0%, transparent 100%)
          `
        }}
      >

        {/* Huge background text */}
        <div className="absolute top-[20%] left-0 w-full text-center z-0 light-anim-bg-text">
          <h1 
            className="text-[16vw] leading-none text-gray-900 opacity-90 tracking-tighter select-none"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Hey, there
          </h1>
        </div>

        {/* Center Image (z-20) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[85vh] z-20 light-anim-img">
          <Image
            src="/shambhavi_cutout_final.png"
            alt="Shambhavi"
            fill
            className="object-contain object-bottom select-none"
            style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))" }}
            priority
            draggable={false}
          />
        </div>

        {/* Foreground floating elements (z-30 so it's IN FRONT of the image) */}
        <div className="relative z-30 w-full max-w-[1400px] mx-auto h-screen flex flex-col justify-between p-6 md:p-12 pointer-events-none">
          
          {/* Top floating elements */}
          <div className="flex flex-col md:flex-row justify-end items-start md:items-center w-full mt-[20vh] gap-6">
            
            {/* Right description */}
            <div className="light-anim-desc max-w-[340px] text-left md:text-right pointer-events-auto bg-white/60 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none backdrop-blur-md md:backdrop-blur-none border md:border-transparent border-purple-100/50">
              <p className="text-[13px] md:text-sm font-medium text-gray-800 leading-[1.8] tracking-wide">
                Specialized in Full-Stack Development, Next.js, AI/ML, and building scalable software.
              </p>
            </div>
          </div>

          {/* Bottom giant text */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-[5vh] gap-8 md:gap-0 pointer-events-auto">
            
            {/* Bottom Left */}
            <div className="light-anim-bottom-left flex flex-col">
              <span 
                className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-gray-900"
                style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,1), 0 0 50px rgba(255,255,255,1)" }}
              >
                I AM
              </span>
              <span 
                className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85] -ml-1 text-gray-900"
                style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,1), 0 0 50px rgba(255,255,255,1)" }}
              >
                SHAMBHAVI
              </span>
            </div>

            {/* Bottom Right */}
            <div className="light-anim-bottom-right flex flex-col text-left md:text-right">
              <span 
                className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none text-gray-900"
                style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,1), 0 0 50px rgba(255,255,255,1)" }}
              >
                FULL-STACK
              </span>
              <span 
                className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none text-gray-900"
                style={{ textShadow: "0 0 15px rgba(255,255,255,1), 0 0 30px rgba(255,255,255,1), 0 0 50px rgba(255,255,255,1)" }}
              >
                DEVELOPER
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* =========================================================================
          DARK THEME: "WP Dev" Inspired Design
          ========================================================================= */}
      <div className="absolute inset-0 hidden dark:flex flex-col lg:flex-row items-center bg-[#050505]">
        <div className="relative z-10 max-w-7xl mx-auto px-10 w-full flex flex-col lg:flex-row items-center min-h-screen">
          
          {/* ── LEFT: Text ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl py-32 lg:py-0">
            {/* Name */}
            <h1 className="dark-anim-text opacity-0 text-5xl md:text-[3.5rem] font-semibold leading-snug mb-3 tracking-wide text-white">
              Hi, I am Shambhavi.
            </h1>

            {/* Typewriter */}
            <div className="dark-anim-text opacity-0 text-lg md:text-xl mb-12 flex items-center gap-1.5 h-8 font-medium text-[#999]">
              <span>I know </span>
              <span className="text-white">{displayed}</span>
              <span className="animate-pulse bg-white w-2 h-5 ml-0.5 inline-block" />
            </div>

            {/* CTA buttons */}
            <div className="dark-anim-text opacity-0 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-8 py-3.5 text-[10px] font-bold tracking-[0.2em] rounded-[3px] transition-all duration-300 hover:bg-[#7aa93c] hover:text-white items-center justify-center border border-[#7aa93c] text-[#7aa93c]"
              >
                SHOW PROFILE
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 text-[10px] font-bold tracking-[0.2em] rounded-[3px] transition-all duration-300 hover:opacity-80 items-center justify-center bg-[#7aa93c] text-[#050505]"
              >
                KNOW MORE
              </a>
            </div>
          </div>

          {/* ── RIGHT: Image ── */}
          <div
            className="hidden lg:flex absolute right-0 bottom-0 top-0 w-[60%] pointer-events-none items-end justify-end overflow-visible"
            style={{ perspective: "1000px", zIndex: 0 }}
          >
            <motion.div
              style={{ x: smoothX, y: smoothY, width: "100%", height: "100vh", position: "relative" }}
              className="dark-anim-img opacity-0"
            >
              <div style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d" }}>
                <Image
                  src="/shambhavi_cutout_final.png"
                  alt="Shambhavi"
                  fill
                  className="object-contain object-bottom object-right select-none"
                  style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))" }}
                  priority
                  draggable={false}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          COMMON ELEMENTS
          ========================================================================= */}
      {/* Scroll indicator (Only show in dark mode for WP Dev style) */}
      <a
        href="#featured"
        className="hidden dark:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 z-20 group text-[#777]"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} />
        </motion.div>
      </a>

    </section>
  );
}
