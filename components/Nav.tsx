"use client";

import React, { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>("work");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 30;
          setScrolled(isScrolled);

          const sections = navLinks.map((item) => document.getElementById(item.id));
          const scrollPosition = window.scrollY + 200;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(navLinks[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const topOffset = scrolled ? 80 : 90;
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(elem, { offset: -topOffset, duration: 1.2 });
      } else {
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
      setActiveSection(targetId);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveSection("work");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center">
      {/* Morphing Nav Surface */}
      <nav
        className={`pointer-events-auto backdrop-blur-md flex items-center justify-between mx-auto transform-gpu transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "translate-y-0 w-full max-w-full rounded-none px-6 sm:px-10 lg:px-16 py-3.5 bg-cream-surface/95 border-b border-dark/[0.08] shadow-sm"
            : "translate-y-5 w-[92vw] max-w-[450px] rounded-full px-2 py-1.5 bg-cream-surface/85 border border-dark/[0.07] shadow-soft"
        }`}
        style={{
          willChange: "transform, width, max-width, border-radius, padding, background-color",
        }}
        aria-label="Main Navigation"
      >
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
          {/* Left: Brand Name (Fades & slides in on full-width expansion) */}
          <div
            className={`flex-1 hidden md:flex items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled
                ? "opacity-100 translate-x-0 max-w-[260px] delay-100"
                : "opacity-0 -translate-x-4 max-w-0 pointer-events-none"
            }`}
          >
            <a
              href="#work"
              onClick={scrollToTop}
              className="font-serif text-lg font-bold text-dark tracking-tight hover:text-accent transition-colors whitespace-nowrap"
            >
              {personalInfo.name}
            </a>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex items-center justify-center gap-1 sm:gap-1.5 mx-auto">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium tracking-tight rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-dark/70 hover:text-dark hover:bg-black/[0.03]"
                  }`}
                >
                  {/* Active Brown Pill Indicator */}
                  <span
                    className={`absolute inset-0 rounded-full bg-[#784421] z-[-1] shadow-xs transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  />
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right: Contact Button (Fades & slides in on full-width expansion) */}
          <div
            className={`flex-1 hidden md:flex justify-end items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled
                ? "opacity-100 translate-x-0 max-w-[200px] delay-100"
                : "opacity-0 translate-x-4 max-w-0 pointer-events-none"
            }`}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${personalInfo.email}`;
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-dark text-cream-bg text-xs font-semibold hover:bg-accent transition-colors shadow-xs whitespace-nowrap"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
