"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Code2, Sparkles, Activity } from "lucide-react";
import { Project } from "@/data/content";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Status pill styling
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "LIVE":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE
          </span>
        );
      case "IN PROGRESS":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-amber-50 text-accent border border-amber-200/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            IN PROGRESS
          </span>
        );
      case "SHIPPED":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            SHIPPED
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gray-100 text-gray-700 border border-gray-200">
            {status}
          </span>
        );
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-cream-surface rounded-3xl p-7 sm:p-10 lg:p-12 border border-dark/[0.06] shadow-soft hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Header Row */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold tracking-tight text-dark hover:text-accent transition-colors duration-200"
            >
              <span>{project.name}</span>
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-muted hover:text-dark p-1.5 rounded-full hover:bg-black/[0.04] transition-colors"
                aria-label={`${project.name} GitHub Repository`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>

          <div>{getStatusBadge(project.status)}</div>
        </div>

        {/* Project Tagline if available */}
        {project.tagline && (
          <p className="text-sm font-medium text-accent mb-3">
            {project.tagline}
          </p>
        )}

        {/* Description */}
        <p className="text-dark-muted text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Feature Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
            {project.highlights.map((h, hIdx) => (
              <div
                key={hIdx}
                className="p-2.5 sm:p-3 rounded-xl bg-white/60 border border-dark/[0.06] shadow-2xs"
              >
                <div className="flex items-center gap-1.5 text-accent text-[11px] font-mono font-semibold mb-1">
                  <span>Feature 0{hIdx + 1}</span>
                </div>
                <p className="text-xs text-dark-muted leading-snug">
                  {h}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack: Uppercase dot-separated text */}
        <div className="mb-8 flex flex-wrap items-center text-xs font-semibold tracking-wider text-dark-muted uppercase">
          {project.stack.map((tech, i) => (
            <React.Fragment key={tech}>
              <span className="hover:text-dark transition-colors">{tech}</span>
              {i < project.stack.length - 1 && (
                <span className="mx-2.5 text-accent font-bold">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Device Mockup Frame (Dark rounded rectangle browser preview) */}
      <div className="w-full rounded-2xl bg-[#18181B] border border-white/10 shadow-2xl overflow-hidden mt-2 group-hover:border-accent/40 transition-colors duration-300">
        {/* Browser Top Bar */}
        <div className="px-4 py-3 bg-[#121214] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-4 py-1 rounded-md bg-[#232326] text-[11px] text-zinc-400 font-mono tracking-tight max-w-[280px] truncate border border-white/5">
            <span className="text-accent">https://</span>
            <span className="text-zinc-300">{project.url.replace(/^https?:\/\//, "")}</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-500">
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Mockup Screen Content / Image Slot */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] bg-[#121215] overflow-hidden group/image">
          {project.image ? (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={`${project.name} preview screenshot`}
                fill
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority={index === 0}
              />
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-6">
                <span className="text-xs font-medium text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                  {project.tagline || project.name}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white text-xs font-semibold hover:bg-accent-hover transition-colors shadow-soft"
                >
                  <span>Open Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="relative z-10 flex flex-col h-full justify-between p-6 sm:p-8">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                  <Code2 className="w-3.5 h-3.5 text-accent" />
                  <span>{project.name} Architecture</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {project.tagline || project.name}
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
