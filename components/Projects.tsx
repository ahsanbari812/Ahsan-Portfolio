"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Sparkles, Terminal, Briefcase, Cpu } from "lucide-react";
import { projects, currentRoles, CurrentRoleChip } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const getRoleIcon = (iconName: CurrentRoleChip["iconName"], logoBg?: string) => {
    const iconColor = logoBg === "light" ? "text-dark" : "text-cream-bg";
    const size = "w-6 h-6";
    switch (iconName) {
      case "code":
        return <Code className={`${size} ${iconColor}`} />;
      case "sparkles":
        return <Sparkles className={`${size} ${iconColor}`} />;
      case "terminal":
        return <Terminal className={`${size} ${iconColor}`} />;
      case "cpu":
        return <Cpu className={`${size} ${iconColor}`} />;
      default:
        return <Briefcase className={`${size} ${iconColor}`} />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* 1. Current Roles — Card-style row with large logos */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-start justify-center gap-12 sm:gap-16 lg:gap-24 mb-16 sm:mb-24 pt-4"
      >
        {currentRoles.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col items-center gap-4 cursor-pointer"
          >
            {/* Large Logo Container */}
            <div
              className={`
                w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl flex items-center justify-center
                transition-all duration-300 ease-out
                group-hover:scale-105 group-hover:shadow-soft-lg
                ${
                  item.logoBg === "light"
                    ? "bg-cream-surface border border-dark/[0.08]"
                    : "bg-dark"
                }
              `}
            >
              {item.logoUrl ? (
                <Image
                  src={item.logoUrl}
                  alt={`${item.company} logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              ) : (
                getRoleIcon(item.iconName, item.logoBg)
              )}
            </div>

            {/* Role · Company text */}
            <p className="text-sm sm:text-[15px] text-dark font-medium text-center leading-snug">
              <span>{item.role}</span>
              <span className="text-dark-muted mx-1.5">·</span>
              <span className="text-accent font-semibold group-hover:underline underline-offset-2 decoration-accent/40">
                {item.company}
              </span>
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* 2. Large Serif Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 sm:mb-20"
      >
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-dark tracking-tight font-normal leading-[1.05]">
          Projects
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mt-4" />
      </motion.div>

      {/* 3. Vertical Stack of Project Cards */}
      <div className="flex flex-col gap-10 sm:gap-14">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
