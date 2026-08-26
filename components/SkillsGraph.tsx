"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsConstellationNodes, SkillNode } from "@/data/content";

interface Edge {
  id: string;
  source: SkillNode;
  target: SkillNode;
}

export default function SkillsGraph() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Generate unique edges from the nodes list
  const edges: Edge[] = [];
  const nodeMap = new Map<string, SkillNode>();
  skillsConstellationNodes.forEach((n) => nodeMap.set(n.id, n));

  const edgeSet = new Set<string>();
  skillsConstellationNodes.forEach((node) => {
    node.connectedTo.forEach((targetId) => {
      const target = nodeMap.get(targetId);
      if (target) {
        const edgeKey = [node.id, target.id].sort().join("---");
        if (!edgeSet.has(edgeKey)) {
          edgeSet.add(edgeKey);
          edges.push({
            id: edgeKey,
            source: node,
            target: target,
          });
        }
      }
    });
  });

  const activeNode = hoveredNodeId ? nodeMap.get(hoveredNodeId) : null;

  return (
    <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[540/420] flex items-center justify-center select-none">
      {/* Subtle background glow behind the constellation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-accent/10 to-transparent rounded-3xl filter blur-2xl pointer-events-none -z-10" />

      <svg
        viewBox="0 0 540 420"
        className="w-full h-full overflow-visible drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle gradient for edges */}
          <linearGradient id="edgeGradDefault" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97F3D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D97F3D" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="edgeGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97F3D" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D97F3D" stopOpacity="0.6" />
          </linearGradient>

          {/* Node Glow Filter */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Connecting Lines / Constellation Edges */}
        <g className="edges-layer">
          {edges.map((edge, index) => {
            const isEdgeActive =
              hoveredNodeId === edge.source.id || hoveredNodeId === edge.target.id;
            const isDimmed = hoveredNodeId !== null && !isEdgeActive;

            return (
              <motion.line
                key={edge.id}
                x1={edge.source.x}
                y1={edge.source.y}
                x2={edge.target.x}
                y2={edge.target.y}
                stroke={isEdgeActive ? "url(#edgeGradActive)" : "#D97F3D"}
                strokeWidth={isEdgeActive ? 2.5 : edge.source.isHub && edge.target.isHub ? 1.8 : 1.2}
                strokeDasharray={
                  isEdgeActive
                    ? "none"
                    : edge.source.isHub || edge.target.isHub
                    ? "4,4"
                    : "3,3"
                }
                strokeOpacity={isDimmed ? 0.1 : isEdgeActive ? 0.95 : 0.35}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: isDimmed ? 0.1 : isEdgeActive ? 0.95 : 0.35 }}
                transition={{
                  pathLength: { duration: 1.2, delay: index * 0.05, ease: "easeInOut" },
                  opacity: { duration: 0.25 },
                }}
                className="transition-all duration-300 pointer-events-none"
              />
            );
          })}
        </g>

        {/* 2. Hub Radiance Rings */}
        {skillsConstellationNodes
          .filter((node) => node.isHub)
          .map((hub) => (
            <g key={`hub-glow-${hub.id}`} pointerEvents="none">
              <motion.circle
                cx={hub.x}
                cy={hub.y}
                r={24}
                fill="none"
                stroke="#D97F3D"
                strokeWidth={1}
                strokeDasharray="2,4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              />
            </g>
          ))}

        {/* 3. Skill & Hub Nodes */}
        <g className="nodes-layer">
          {skillsConstellationNodes.map((node, index) => {
            const isHovered = hoveredNodeId === node.id;
            const isConnectedToHovered =
              hoveredNodeId !== null &&
              (node.id === hoveredNodeId ||
                node.connectedTo.includes(hoveredNodeId) ||
                (nodeMap.get(hoveredNodeId)?.connectedTo.includes(node.id) ?? false));
            const isDimmed = hoveredNodeId !== null && !isConnectedToHovered;

            const isHub = node.isHub;
            const radius = isHub ? 9 : 7;

            return (
              <motion.g
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isHovered ? (isHub ? 1.25 : 1.35) : 1,
                  opacity: isDimmed ? 0.3 : 1,
                }}
                transition={{
                  scale: { type: "spring", stiffness: 350, damping: 20 },
                  opacity: { duration: 0.2 },
                  delay: isHovered ? 0 : 0.2 + index * 0.06,
                }}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                className="cursor-pointer focus:outline-none"
                tabIndex={0}
                role="button"
                aria-label={`Skill: ${node.label}`}
              >
                {/* Invisible larger hit target for smooth hover */}
                <circle cx={node.x} cy={node.y} r={28} fill="transparent" />

                {/* Outer halo on active/hover */}
                {(isHovered || (isConnectedToHovered && !isDimmed)) && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={radius + 7}
                    fill="#D97F3D"
                    fillOpacity={isHovered ? 0.25 : 0.12}
                    className="transition-all duration-300"
                  />
                )}

                {/* Node Solid Circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={radius}
                  fill={isHub ? "#1A1A1A" : "#D97F3D"}
                  stroke={isHub ? "#D97F3D" : "#FFFFFF"}
                  strokeWidth={isHub ? 2.5 : 2}
                  className="transition-colors duration-200"
                  filter={isHovered ? "url(#nodeGlow)" : undefined}
                />

                {/* Inner Core Dot for Hubs */}
                {isHub && (
                  <circle cx={node.x} cy={node.y} r={3} fill="#D97F3D" />
                )}

                {/* Text Label */}
                <text
                  x={node.x}
                  y={node.y + (node.y > 250 ? 22 : -16)}
                  textAnchor="middle"
                  fill="#1A1A1A"
                  className={`text-[11px] sm:text-[12px] font-medium tracking-tight transition-all duration-200 pointer-events-none select-none ${
                    isHovered
                      ? "font-bold fill-accent"
                      : isHub
                      ? "font-semibold fill-dark/90"
                      : "fill-dark/80"
                  }`}
                  style={{
                    fontFamily: "var(--font-sans)",
                    textShadow: "0 1px 4px rgba(237, 233, 226, 0.9)",
                  }}
                >
                  {node.label}
                </text>
              </motion.g>
            );
          })}
        </g>
      </svg>

      {/* Floating Info Tag on Hover */}
      <div className="absolute -bottom-4 sm:bottom-0 left-1/2 -translate-x-1/2 w-full text-center h-6 pointer-events-none">
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.18 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-cream-surface/95 border border-accent/30 rounded-full shadow-soft text-xs text-dark"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-semibold text-accent">{activeNode.label}</span>
              {activeNode.level && (
                <span className="text-dark-muted">· {activeNode.level}</span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
