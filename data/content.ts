// =============================================================================
// PORTFOLIO CONTENT & DATA STORE
// Single source of truth for all portfolio sections and components.
// =============================================================================

export interface Project {
  id: string;
  name: string;
  url: string;
  githubUrl?: string;
  status: "LIVE" | "IN PROGRESS" | "SHIPPED" | "PROTOTYPE";
  statusColor?: string; // Optional override
  description: string;
  stack: string[];
  image: string;
  previewType?: "browser" | "mobile" | "terminal";
  tagline?: string;
  highlights?: string[];
}

export interface Experience {
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

export interface Education {
  id: string;
  dateRange: string;
  roleLabel: string;
  logoText?: string;
  logoBg?: string;
  logoUrl?: string;
  title: string;
  institution: string;
  location: string;
  bullets: string[];
  tags: string[];
}

export interface CurrentRoleChip {
  id: string;
  role: string;
  company: string;
  url: string;
  iconName: "code" | "sparkles" | "terminal" | "briefcase" | "cpu" | "brain";
  logoUrl?: string;   // Path to company logo image (will be provided later)
  logoBg?: string;    // Background style: "dark" | "light" (default: "dark")
}

export interface SkillNode {
  id: string;
  label: string;
  category: "frontend" | "backend" | "ai" | "core" | "database";
  x: number; // Percentage (0-100) or SVG canvas coord
  y: number; // Percentage (0-100) or SVG canvas coord
  isHub?: boolean;
  level?: string;
  connectedTo: string[]; // IDs of connected nodes
}

// -----------------------------------------------------------------------------
// Personal Information & Hero Content
// -----------------------------------------------------------------------------
export const personalInfo = {
  name: "Muhammad Ahsan Bari", // TODO: replace with real content
  greeting: "Hi, I'm Muhammad Ahsan Bari", // TODO: replace with real content
  title: "Software Engineer & AI Solutions Builder", // TODO: replace with real content
  location: "Karachi, Pakistan", // TODO: replace with real content
  email: "muhammadahsan0812@gmail.com", // TODO: replace with real content
  linkedin: "https://linkedin.com/in/ahsanbari812", // TODO: replace with real content
  github: "https://github.com/ahsanbari812", // TODO: replace with real content
  portfolioUrl: "https://ahsanportfolio-phi.vercel.app", // TODO: replace with real content
  resumeUrl: "/MUHAMMAD_AHSAN_BARI_RESUME.pdf", // TODO: replace with real content

  // Hero Headline Configuration
  headline: {
    part1: "I build robust full-stack web applications and integrate practical AI pipelines that solve real problems.", // TODO: replace with real content
    accentPayoff: "I engineer both with precision.", // TODO: replace with real content (Italic serif accent line)
    part2: "Focused on high-performance React & Next.js systems, scalable REST APIs, and intelligent LLM-driven agent workflows.", // TODO: replace with real content
  },

  aboutSummary:
    "Software Engineer with hands-on experience building modern web applications and REST APIs using React.js, Next.js, Node.js, and Express.js. Experienced in developing enterprise web solutions and integrating AI-powered features using LLM APIs and Local AI Models.", // TODO: replace with real content
};

// -----------------------------------------------------------------------------
// Interactive Skills Constellation Graph Data (8 Nodes + 2 Hubs)
// -----------------------------------------------------------------------------
export const skillsConstellationNodes: SkillNode[] = [
  // Hubs
  {
    id: "hub-web",
    label: "Web Architecture",
    category: "core",
    x: 180,
    y: 190,
    isHub: true,
    level: "Core Hub",
    connectedTo: ["react", "nextjs", "typescript", "tailwind", "nodejs"],
  },
  {
    id: "hub-ai",
    label: "AI & Systems",
    category: "core",
    x: 360,
    y: 200,
    isHub: true,
    level: "Intelligent Hub",
    connectedTo: ["python", "ai-llms", "mongodb", "nodejs", "typescript"],
  },
  // Skill Nodes
  {
    id: "react",
    label: "React",
    category: "frontend",
    x: 90,
    y: 110,
    level: "Advanced",
    connectedTo: ["hub-web", "nextjs", "tailwind"],
  },
  {
    id: "nextjs",
    label: "Next.js",
    category: "frontend",
    x: 230,
    y: 80,
    level: "Advanced",
    connectedTo: ["hub-web", "typescript", "react"],
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "core",
    x: 270,
    y: 290,
    level: "Proficient",
    connectedTo: ["hub-web", "hub-ai", "nextjs", "nodejs"],
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    category: "frontend",
    x: 80,
    y: 270,
    level: "Advanced",
    connectedTo: ["hub-web", "react"],
  },
  {
    id: "nodejs",
    label: "Node.js",
    category: "backend",
    x: 180,
    y: 330,
    level: "Advanced",
    connectedTo: ["hub-web", "hub-ai", "mongodb"],
  },
  {
    id: "python",
    label: "Python",
    category: "ai",
    x: 410,
    y: 90,
    level: "Proficient",
    connectedTo: ["hub-ai", "ai-llms"],
  },
  {
    id: "ai-llms",
    label: "AI / LLMs",
    category: "ai",
    x: 460,
    y: 220,
    level: "Advanced (Gemini API)",
    connectedTo: ["hub-ai", "python"],
  },
  {
    id: "mongodb",
    label: "MongoDB",
    category: "database",
    x: 390,
    y: 320,
    level: "Proficient",
    connectedTo: ["hub-ai", "nodejs"],
  },
];

// -----------------------------------------------------------------------------
// Projects Section: Current Roles Chips (Above Projects Title)
// -----------------------------------------------------------------------------
export const currentRoles: CurrentRoleChip[] = [
  {
    id: "role-1",
    role: "Information Systems Intern",
    company: "FFC",
    url: "https://ffc.com.pk/",
    iconName: "code",
    logoUrl: "logos/ffc.svg",
    logoBg: "light",
  },
  {
    id: "role-2",
    role: "Frontend Developer Intern",
    company: "Ssoft Technologies",
    url: "#", // TODO: replace with real URL
    iconName: "briefcase",
    logoUrl: "", // TODO: provide UNB logo
    logoBg: "light",
  },
  {
    id: "role-3",
    role: "AI Solutions",
    company: "Freelance",
    url: "#", // TODO: replace with real URL
    iconName: "brain",
    logoUrl: "", // TODO: provide CoralOS logo
    logoBg: "light",
  },
];

// -----------------------------------------------------------------------------
// Projects Data Stack
// -----------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id: "smart-hospital-system",
    name: "Smart Hospital System", // TODO: replace with real content
    url: "https://smart-hospital-system.vercel.app/", // TODO: replace with real content
    githubUrl: "https://github.com/ahsanbari812/Smart-Hospital-System", // TODO: replace with real content
    status: "LIVE",
    tagline: "End-to-end clinical workflow & patient record system",
    description:
      "A comprehensive full-stack healthcare management platform featuring secure patient registration, doctor appointment scheduling, and electronic health record management. Built with robust JWT role-based access control for administrators, medical staff, and patients.", // TODO: replace with real content
    stack: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS", "JWT Auth"], // TODO: replace with real content
    image: "/Screenshots/Smart Hospital System.png",
    previewType: "browser",
    highlights: [
      "Role-based authentication system with granular permissions",
      "Dynamic appointment slot scheduler with conflict resolution",
      "Interactive medical record viewer with responsive dashboard",
    ],
  },
  {
    id: "ustaad-ai",
    name: "Ustaad AI", // TODO: replace with real content
    url: "https://github.com/ahsanbari812/Ustaad-AI", // TODO: replace with real content
    githubUrl: "https://github.com/ahsanbari812/Ustaad-AI", // TODO: replace with real content
    status: "IN PROGRESS",
    tagline: "Multilingual voice & text service orchestrator for informal economies",
    description:
      "A cross-platform mobile application empowering Pakistan's informal skilled workforce. Employs a multi-agent orchestration pipeline to facilitate natural-language service bookings across English, Urdu, and Roman Urdu with geospatial Haversine provider ranking.", // TODO: replace with real content
    stack: ["React Native", "Expo", "Firebase", "Gemini API", "Haversine Algo", "TypeScript"], // TODO: replace with real content
    image: "/Screenshots/Ustaad AI.png",
    previewType: "browser",
    highlights: [
      "Gemini API integration with Roman Urdu natural language understanding",
      "Geospatial radius matching via custom Haversine provider ranking",
      "Real-time bidirectional service state machine over Firebase",
    ],
  },
  {
    id: "ai-resume-builder",
    name: "AI Resume Builder", // TODO: replace with real content
    url: "https://ai-resume-builder-fast.vercel.app/", // TODO: replace with real content
    githubUrl: "https://github.com/ahsanbari812/AI-Resume-Builder", // TODO: replace with real content
    status: "SHIPPED",
    tagline: "Intelligent career narrative generator with PDF synthesis",
    description:
      "A full-stack web application leveraging LLM APIs to transform unstructured career highlights into ATS-optimized, professionally formatted resumes. Incorporates resilient retry pipelines, token-efficient prompt templates, and direct vector PDF export.", // TODO: replace with real content
    stack: ["React.js", "Node.js", "Gemini API", "REST APIs", "Tailwind CSS", "React-PDF"], // TODO: replace with real content
    image: "/Screenshots/AI resume builder.png",
    previewType: "browser",
    highlights: [
      "Structured JSON schema enforcement via Google Gemini API",
      "Client-side vector PDF generation with multiple serif/sans themes",
      "Live side-by-side markdown editing with instant preview updates",
    ],
  },
];

// -----------------------------------------------------------------------------
// Experience Timeline Data
// -----------------------------------------------------------------------------
export const experience: Experience[] = [
  {
    id: "exp-ffc",
    dateRange: "JUL 2026 – AUG 2026", // TODO: replace with real content
    roleLabel: "WEB DEV & ERP INTERN · KARACHI", // TODO: replace with real content
    logoUrl: "/logos/ffc.svg",
    logoBg: "bg-white p-1.5",
    title: "Web Development & ERP Intern", // TODO: replace with real content
    company: "Fauji Fertilizer Company (FFC)", // TODO: replace with real content
    companyUrl: "https://www.ffc.com.pk",
    location: "Karachi, Pakistan", // TODO: replace with real content
    bullets: [
      "Developed and maintained responsive web-based modules integrated with the enterprise ERP system to streamline departmental data access and reporting workflows.",
      "Collaborated closely with cross-functional technical teams and business stakeholders to translate domain requirements into high-reliability functional interfaces.",
      "Diagnosed and resolved UI data-synchronization bottlenecks, documenting module architecture and integration specifications for future maintainability.",
    ],
    tags: ["React.js", "ERP Systems", "Enterprise APIs", "JavaScript (ES6+)", "UI Optimization", "Data Sync"], // TODO: replace with real content
  },
  {
    id: "exp-ssoft",
    dateRange: "JUN 2025 – JUL 2025", // TODO: replace with real content
    roleLabel: "FRONTEND INTERN · KARACHI", // TODO: replace with real content
    logoText: "SSOFT",
    logoBg: "bg-blue-950 text-blue-300",
    title: "Frontend Developer Intern", // TODO: replace with real content
    company: "Ssoft Technologies", // TODO: replace with real content
    location: "Karachi, Pakistan", // TODO: replace with real content
    bullets: [
      "Engineered reusable and accessible React component libraries with Tailwind CSS, cutting duplicated layout work across client projects by over 30%.",
      "Integrated RESTful backend microservices using Axios and custom React hooks for seamless data flow, caching, and state synchronization.",
      "Boosted client-side performance benchmarks through code splitting, dynamic imports, asset optimization, and selective rendering.",
    ],
    tags: ["React.js", "Tailwind CSS", "Axios", "REST APIs", "State Management", "Performance Optimization"], // TODO: replace with real content
  },
];

// -----------------------------------------------------------------------------
// Education Timeline Data
// -----------------------------------------------------------------------------
export const education: Education[] = [
  {
    id: "edu-fast",
    dateRange: "2023 – PRESENT", // TODO: replace with real content
    roleLabel: "UNDERGRADUATE · BS COMPUTER SCIENCE", // TODO: replace with real content
    logoUrl: "/logos/fast.png",
    logoBg: "bg-white p-1.5",
    title: "Bachelor of Science in Computer Science", // TODO: replace with real content
    institution: "FAST National University of Computer and Emerging Sciences", // TODO: replace with real content
    location: "Karachi, Pakistan", // TODO: replace with real content
    bullets: [
      "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, Web Technologies, Artificial Intelligence.",
      "Active participant in collegiate hackathons, algorithmic coding competitions, and developer community tech workshops.",
    ],
    tags: ["Data Structures & Algorithms", "Operating Systems", "Database Systems", "Software Engineering", "AI/ML Foundations"], // TODO: replace with real content
  },
];

// -----------------------------------------------------------------------------
// Navigation Bar Links (Work · Projects · Experience · Education)
// -----------------------------------------------------------------------------
export const navLinks = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
];
