"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-dark/[0.08] py-14 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand / Name & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif text-2xl font-bold text-dark tracking-tight">
            {personalInfo.name}
          </span>
          <p className="text-sm text-dark-muted mt-1">
            {personalInfo.title} · {personalInfo.location}
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-cream-surface border border-dark/10 text-dark-muted hover:text-accent hover:border-accent/40 transition-colors shadow-soft"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-cream-surface border border-dark/10 text-dark-muted hover:text-accent hover:border-accent/40 transition-colors shadow-soft"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-full bg-cream-surface border border-dark/10 text-dark-muted hover:text-accent hover:border-accent/40 transition-colors shadow-soft"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Scroll to top button */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-dark-muted font-mono">
            © {new Date().getFullYear()} · All rights reserved
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-cream-surface border border-dark/10 text-dark-muted hover:text-accent hover:border-accent/40 transition-colors shadow-soft"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
