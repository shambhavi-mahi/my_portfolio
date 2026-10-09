"use client";

import { useEffect, useState } from "react";

// Original light portfolio
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import TechStack from "./components/sections/TechStack";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

// Cinematic dark portfolio
import CinematicApp from "../components/App";

export default function ThemeRouter() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Read initial theme
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current ?? "light");

    // Watch for theme changes (e.g. from the toggle button)
    const observer = new MutationObserver(() => {
      const updated = document.documentElement.getAttribute("data-theme");
      setTheme(updated ?? "light");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // Avoid hydration mismatch — render nothing until theme is known
  if (theme === null) return null;

  if (theme === "dark") {
    return <CinematicApp />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <TechStack />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
