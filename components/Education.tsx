"use client";

import React from "react";
import { motion } from "framer-motion";
import { education } from "@/data/content";
import TimelineItem from "./TimelineItem";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 md:py-36 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 sm:mb-20"
      >
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-dark tracking-tight font-normal leading-[1.05]">
          Education
        </h2>
        <div className="h-1 w-20 bg-accent rounded-full mt-4" />
      </motion.div>

      {/* Timeline Entries in Surface Container */}
      <div className="bg-cream-surface rounded-3xl p-4 sm:p-8 lg:p-10 border border-dark/[0.06] shadow-soft">
        <div className="divide-y divide-dark/[0.08]">
          {education.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={{
                ...item,
                company: item.institution,
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
