import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Layout, 
  Database, 
  Wrench, 
  ShieldAlert
} from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  percentage: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
}

const frontendSkills: SkillItem[] = [
  { 
    name: "React.JS", 
    level: 95, 
    percentage: "95%", 
    tag: "Framework", 
    description: "Component mechanics, dynamic hooks, virtual dom, synchronized rendering.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
        alt="React" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "TypeScript", 
    level: 90, 
    percentage: "90%", 
    tag: "Language", 
    description: "Strict typing schema, component generics, robust interface designs.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
        alt="TypeScript" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Javascript", 
    level: 93, 
    percentage: "93%", 
    tag: "Language", 
    description: "Async event cycles, non-blocking single-threaded engine, modern ES6+ standards.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        alt="Javascript" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "HTML", 
    level: 95, 
    percentage: "95%", 
    tag: "Markup", 
    description: "Structured templates, interactive Accessibility (A11y), clean web hierarchies.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
        alt="HTML5" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "CSS", 
    level: 90, 
    percentage: "90%", 
    tag: "Styling", 
    description: "Advanced layouts, animations & transitions, fluid cross-browser standards.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
        alt="CSS3" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Tailwind CSS", 
    level: 98, 
    percentage: "98%", 
    tag: "Styling", 
    description: "Atomic fluid systems, customized breakpoints, optimized layouts.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
        alt="Tailwind CSS" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Flutter", 
    level: 85, 
    percentage: "85%", 
    tag: "Mobile", 
    description: "Cross-platform widgets render pipeline, pixel-perfect native elements.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" 
        alt="Flutter" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Framer Motion", 
    level: 92, 
    percentage: "92%", 
    tag: "Animation", 
    description: "Staggered transitions, hover actions, continuous layout scale physics.",
    icon: (
      <img 
        src="https://www.vectorlogo.zone/logos/framer/framer-icon.svg" 
        alt="Framer Motion" 
        className="w-full h-full object-contain p-0.5" 
        referrerPolicy="no-referrer" 
      />
    )
  }
];

const backendSkills: SkillItem[] = [
  { 
    name: "MERN Stack", 
    level: 91, 
    percentage: "91%", 
    tag: "Fullstack", 
    description: "Full lifecycle pipeline spanning MongoDB, Express, React, and Node.js.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
        alt="MERN Stack" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Java", 
    level: 87, 
    percentage: "87%", 
    tag: "Language", 
    description: "Object-oriented structures, robust enterprise architectures, JVM scale pipelines.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
        alt="Java" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: ".NET", 
    level: 83, 
    percentage: "83%", 
    tag: "Framework", 
    description: "Corporate multi-layer backend APIs, high security caching, reliable services.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" 
        alt=".NET" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "MongoDB", 
    level: 89, 
    percentage: "89%", 
    tag: "Database", 
    description: "NoSQL collection schemas, document aggregation queries, indexed structures.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
        alt="MongoDB" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "MySQL / PostgreSQL", 
    level: 88, 
    percentage: "88%", 
    tag: "Database", 
    description: "Relational constraints, precise querying optimization, data isolation models.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
        alt="PostgreSQL" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Node.js / Express", 
    level: 88, 
    percentage: "88%", 
    tag: "Runtime", 
    description: "High-throughput REST APIs, server-side stream proxies, microservices.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
        alt="NodeJS" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Firebase / Firestore", 
    level: 90, 
    percentage: "90%", 
    tag: "BaaS", 
    description: "Sovereign client sync protocols, secure authentication levels.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" 
        alt="Firebase" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Docker / cloud deploy", 
    level: 82, 
    percentage: "82%", 
    tag: "DevOps", 
    description: "Reliable production deployment containers, proxy routing networks.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
        alt="Docker" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  }
];

const designSkills: SkillItem[] = [
  { 
    name: "Figma (UI/UX design)", 
    level: 88, 
    percentage: "88%", 
    tag: "Design", 
    description: "Interactive desktop-first layouts, typographic pairing concepts.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
        alt="Figma" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Photoshop", 
    level: 89, 
    percentage: "89%", 
    tag: "Design", 
    description: "Digital photo manipulation, advanced image layers, lighting/vibrancy edits.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" 
        alt="Photoshop" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Canva Capcut", 
    level: 90, 
    percentage: "90%", 
    tag: "Content", 
    description: "Fast-pace layout compositions, video montage, transitions, sound sync effects.",
    icon: (
      <img 
        src="https://www.vectorlogo.zone/logos/canva/canva-icon.svg" 
        alt="Canva" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Sankalpa. (My Logo)", 
    level: 100, 
    percentage: "100%", 
    tag: "Identity", 
    description: "Bespoke high-fidelity digital interfaces, pristine portfolio signatures, unified identity systems.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M10 8L18 4V16L10 20V8Z" fill="#FF4D1C" className="opacity-95" />
        <path d="M18 16L26 12V24L18 28V16Z" fill="#E0360D" />
        <path d="M18 4L26 12L18 16L10 8L18 4Z" fill="#FF6E47" className="opacity-90" />
        <circle cx="18" cy="16" r="1.5" fill="#FFFFFF" className="opacity-40" />
      </svg>
    )
  },
  { 
    name: "Git / VCS Git", 
    level: 94, 
    percentage: "94%", 
    tag: "Workflow", 
    description: "Sovereign commit structures, branches merging, code lifecycle management.",
    icon: (
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
        alt="Git" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "API Integration Prot", 
    level: 95, 
    percentage: "95%", 
    tag: "Protocols", 
    description: "Safe client keys protection, third-party webhook receivers.",
    icon: (
      <img 
        src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" 
        alt="Postman" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  },
  { 
    name: "Analytical metrics", 
    level: 85, 
    percentage: "85%", 
    tag: "Insights", 
    description: "User session tracking dashboards, flow optimization analytics.",
    icon: (
      <img 
        src="https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" 
        alt="Google Analytics" 
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer" 
      />
    )
  }
];

const allSkills: SkillItem[] = [
  ...frontendSkills,
  ...backendSkills,
  ...designSkills
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 18
      }
    }
  };

  return (
    <section 
      id="skills" 
      className="w-full max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-20 border-t border-neutral-900 bg-black/35 backdrop-blur-md rounded-3xl mt-12 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,77,28,0.025),transparent_70%)] pointer-events-none rounded-full blur-3xl" />

      {/* SECTION HEADER */}
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-[11px] font-mono uppercase tracking-widest text-[#FF4D1C]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Dexterity</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-sans font-normal tracking-tight text-white leading-none">
          Fostering clean and robust <br />
          development <span className="font-serif-custom italic text-[#FF4D1C] font-normal tracking-wide">Standards</span>
        </h2>
        
        <p className="text-neutral-400 text-sm font-light leading-relaxed">
          Explore the full collective stack below. Optimized to deliver highly responsive digital solutions.
        </p>
      </div>

      {/* SKILLS CARDS GRID AND STAT METER CONTAINER */}
      <div className="relative z-10 w-full min-h-[195px] flex items-center justify-center" id="skills-visualization">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-10 max-w-5xl mx-auto justify-items-center"
        >
          {allSkills.map((skill) => (
            <motion.div 
              key={skill.name}
              variants={itemVariants}
              className="group flex flex-col items-center justify-center gap-2.5 relative"
              id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Responsive, interactively animated circular colorful logo */}
              <motion.div
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 8,
                  boxShadow: "0px 0px 20px rgba(255, 77, 28, 0.4)" 
                }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="relative p-[1.2px] bg-gradient-to-tr from-[#FF4D1C] via-[#9333EA] to-[#06B6D4] rounded-full shrink-0 cursor-pointer pointer-events-auto"
              >
                {/* Outer vibrant colorful blur halo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4D1C] via-[#9333EA] to-[#06B6D4] rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="relative bg-neutral-950 p-3.5 rounded-full flex items-center justify-center h-16 w-16 border border-white/5">
                  <div className="w-7 h-7 flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                    {skill.icon}
                  </div>
                </div>
              </motion.div>
              
              {/* Permanently visible skill name below the logo */}
              <span className="text-[10px] font-mono text-neutral-400 font-bold tracking-wider group-hover:text-[#FF4D1C] transition-colors duration-300 text-center select-none max-w-[120px] leading-relaxed">
                {skill.name.toUpperCase()}
              </span>

              {/* Elegant dynamic progress bar filling up on enter / view */}
              <div className="w-20 flex flex-col items-center gap-1 mt-0.5 pointer-events-none select-none">
                <div className="flex justify-between w-full text-[8.5px] font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors">
                  <span>LEVEL</span>
                  <span className="text-[#FF4D1C] font-semibold">{skill.percentage}</span>
                </div>
                <div className="w-full h-1 bg-neutral-950 border border-neutral-900/60 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: skill.percentage }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 1.25, ease: "easeOut" }}
                    style={{ 
                      background: "linear-gradient(to right, #FF4D1C, #9333EA, #06B6D4)"
                    }}
                    className="h-full rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
