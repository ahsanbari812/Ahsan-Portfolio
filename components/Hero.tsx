"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "@/data/content";
import SkillsGraph from "./SkillsGraph";

export default function Hero() {
  return (
    <section
      id="work"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Personal Statement & Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Intro Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-dark-muted">
              {/* TODO: replace with real content */}
              {personalInfo.greeting}
            </span>
          </div>

          {/* Large Serif Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-dark leading-[1.12] tracking-tight font-normal mb-8">
            I craft modern <strong className="font-bold text-dark">web applications</strong> and
            architect <strong className="font-bold text-dark">AI-driven systems</strong>.
            <br />
            {/* Italic Accent Payoff Line */}
            <span className="italic text-[#D97F3D] block mt-2 sm:mt-3 font-normal">
              {/* TODO: replace with real content */}
              {personalInfo.headline.accentPayoff}
            </span>
          </h1>

          {/* Secondary Statement Paragraph */}
          <p className="text-base sm:text-lg text-dark-muted leading-relaxed max-w-2xl mb-10">
            {/* TODO: replace with real content */}
            {personalInfo.aboutSummary}
          </p>

          {/* Social & Contact Actions */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark text-cream-bg text-sm font-medium hover:bg-accent transition-colors duration-200 shadow-soft"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 rounded-full bg-cream-surface border border-dark/10 text-dark hover:text-accent hover:border-accent/40 transition-colors duration-200 shadow-soft"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 rounded-full bg-cream-surface border border-dark/10 text-dark hover:text-accent hover:border-accent/40 transition-colors duration-200 shadow-soft"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center p-3 rounded-full bg-cream-surface border border-dark/10 text-dark hover:text-accent hover:border-accent/40 transition-colors duration-200 shadow-soft"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-cream-surface border border-dark/10 text-dark text-xs sm:text-sm font-medium hover:text-accent hover:border-accent/40 transition-colors duration-200 shadow-soft"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>Resume</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Right Column: Animated Skills Constellation Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative w-full"
        >
          <SkillsGraph />
        </motion.div>
      </div>
    </section>
  );
}
