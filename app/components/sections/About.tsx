"use client";

import { Trophy, MapPin, BookOpen, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const stats = [
  { value: "11+", label: "Repositories" },
  { value: "3+", label: "Projects Built" },
  { value: "4★", label: "CodeChef Rating" },
  { value: "SIH", label: "Hackathon" },
];

const focuses = [
  { icon: <BookOpen size={15} />, text: "Data Structures & Algorithms" },
  { icon: <Cpu size={15} />, text: "Data Analytics" },
  { icon: <MapPin size={15} />, text: "Cloud Computing" },
  { icon: <Trophy size={15} />, text: "System Design" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 bg-[#0A0A0A]">
      {/* Gold top border line */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-20 reveal-up"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
            01. about_me
          </p>
          <h2 className="font-bebas text-6xl md:text-8xl tracking-wide" style={{ color: "#E8DFD8" }}>
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: bio */}
          <motion.div
            className="space-y-7 reveal-up"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-cormorant text-xl md:text-2xl italic leading-relaxed" style={{ color: "#C8BEAF" }}>
              I&apos;m <strong style={{ color: "#E8DFD8", fontStyle: "normal", fontWeight: 600 }}>Shambhavi</strong>, a Computer Science undergrad who
              likes taking a rough idea and turning it into something people can
              actually click through and use.
            </p>
            <p className="font-cormorant text-xl italic leading-relaxed" style={{ color: "#8C8070" }}>
              I treat every project as a small research problem: What breaks?
              What&apos;s the cleanest way to model this? What would make a stranger
              trust this UI?
            </p>

            {/* Current focus tags */}
            <div className="pt-2">
              <p className="font-montserrat text-xs tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
                Currently deep in
              </p>
              <div className="flex flex-wrap gap-2.5">
                {focuses.map((f) => (
                  <span
                    key={f.text}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-montserrat text-xs font-medium tracking-wide transition-all hover:-translate-y-0.5"
                    style={{
                      background: "rgba(99,102,241,0.07)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      color: "#C8BEAF",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }}>{f.icon}</span>
                    {f.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 font-montserrat text-xs tracking-wider pt-2" style={{ color: "var(--muted)" }}>
              <MapPin size={13} style={{ color: "var(--accent)" }} />
              India · UTC +05:30
            </div>
          </motion.div>

          {/* Right: stats */}
          <motion.div
            className="grid grid-cols-2 gap-4 reveal-up"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl p-8 text-center relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)" }}
                />
                <div className="font-bebas text-5xl md:text-6xl gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="font-montserrat text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
