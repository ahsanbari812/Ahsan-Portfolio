"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export interface TimelineItemData {
  id: string;
  dateRange: string;
  roleLabel: string;
  logoText?: string;
  logoBg?: string;
  logoUrl?: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  bullets: string[];
  tags: string[];
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 sm:py-12 border-b border-dark/[0.08] last:border-b-0 hover:bg-cream-surface/40 px-4 sm:px-6 rounded-2xl transition-colors duration-200"
    >
      {/* Left Column (Narrow, ~200px equivalent: md:col-span-4 lg:col-span-3) */}
      <div className="md:col-span-4 lg:col-span-3.5 flex flex-col justify-start">
        {/* Date Range in gray uppercase small text */}
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-dark-muted uppercase font-mono mb-1">
          {item.dateRange}
        </span>

        {/* Role/Location Label in Accent Color, uppercase, bold, small */}
        <span className="text-xs sm:text-xs font-bold tracking-wider text-accent uppercase leading-relaxed">
          {item.roleLabel}
        </span>
      </div>

      {/* Right Column: Title, Company, Logo, Bullets, Tags (md:col-span-8 lg:col-span-8.5) */}
      <div className="md:col-span-8 lg:col-span-8.5 flex flex-col">
        {/* Header: Small square company logo + Job Title + Company Name + Location */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo Tile */}
          <div
            className={`w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center font-mono font-bold text-xs shadow-xs border border-dark/10 overflow-hidden ${
              item.logoUrl
                ? item.logoBg || "bg-white p-1"
                : item.logoBg || "bg-dark text-cream-bg"
            }`}
          >
            {item.logoUrl ? (
              <Image
                src={item.logoUrl}
                alt={`${item.company} logo`}
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            ) : (
              item.logoText || item.company.slice(0, 3).toUpperCase()
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-dark flex items-center gap-2">
              <span>{item.title}</span>
              {item.companyUrl && (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-muted hover:text-accent p-1 transition-colors"
                  aria-label={`${item.company} website`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </h3>

            <p className="text-sm sm:text-base text-dark-muted font-medium mt-0.5">
              <span>{item.company}</span>
              {item.location && (
                <>
                  <span className="mx-2 text-dark-subtle">·</span>
                  <span className="text-dark-subtle">{item.location}</span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Bullets: 2-3 bullet points prefixed with small accent arrow marker */}
        <ul className="space-y-3 my-3">
          {item.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-dark/80 leading-relaxed">
              <span className="text-accent mt-1 flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Skill Tags: Small rounded-pill outlined chips (not filled), gray border, gray text */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-dark/15 text-dark-muted text-xs font-medium tracking-tight bg-transparent hover:border-accent hover:text-accent transition-colors duration-150"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
