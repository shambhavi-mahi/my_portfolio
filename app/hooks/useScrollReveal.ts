import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion || !ref.current) return;

    const ctx = gsap.context(() => {
      // Find all elements to animate (we'll tag them with a specific class in the components)
      const elements = gsap.utils.toArray(".reveal-up");
      
      elements.forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 30, opacity: 0 }, 
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
}
