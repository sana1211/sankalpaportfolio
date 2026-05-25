import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { Sparkles, Terminal, Code, Cpu, ExternalLink, Globe, Layers, ArrowRight } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  filterCategory: "Full Stack" | "Frontend" | "IOT";
  tags: string[];
  description: string;
  architecture: string[];
  icon: React.ReactNode;
  color: string;
  linkText: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: 1,
    title: "E-Passport System",
    category: "FULL STACK / SECURITY / GOVERNMENT SERVICE",
    filterCategory: "Full Stack",
    tags: ["React. js", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    description: "Secure passport application platform developed using the MERN Stack with OTP verification, appointment booking, and application tracking features.",
    architecture: ["OTP Verification System", "Appointment Booking", "Passport Status Tracking", "Secure Authentication"],
    icon: <Cpu className="w-5 h-5" />,
    color: "from-[#FF4D1C] to-[#E0360D]",
    linkText: "GitHub"
  },
  {
    id: 2,
    title: "POS Management System",
    category: "RETAIL MANAGEMENT / INVENTORY / BUSINESS SYSTEM",
    filterCategory: "Full Stack",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    description: "Full-stack retail and inventory management solution designed for billing, stock tracking, and product management with real-time updates.",
    architecture: ["Billing & Checkout", "Inventory Tracking", "Sales Monitoring"],
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    color: "from-blue-600 to-indigo-800",
    linkText: "Inspect Portal Data"
  },
  {
    id: 3,
    title: "Employee Management System",
    category: "DESKTOP APPLICATION / DATABASE MANAGEMENT",
    filterCategory: "Frontend",
    tags: ["C#", ".NET Framework", "SQL Server", "Windows Forms"],
    description: "Desktop-based employee management system developed using C# and SQL Server to manage employee records and analytics.",
    architecture: ["Employee Record Management", "Status Tracking", "Employee Statistics", "Database Integration"],
    icon: <Layers className="w-5 h-5 text-emerald-400" />,
    color: "from-emerald-500 to-teal-700",
    linkText: "Open Animation Lab"
  },
  {
    id: 4,
    title: "Wallpaper Gallery Website",
    category: "FRONTEND DEVELOPMENT",
    filterCategory: "Frontend",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Responsive wallpaper browsing platform with interactive UI animations and download functionality.",
    architecture: ["Responsive Design", "Interactive UI", "Wallpaper Categories", "Download Functionality", "Smooth Animations"],
    icon: <Terminal className="w-5 h-5 text-amber-400" />,
    color: "from-amber-500 to-[#FF4D1C]",
    linkText: "Verify Ledger Signatures"
  }
];

const categories = ["All", "Full Stack", "Frontend", "IOT"] as const;
type CategoryType = typeof categories[number];

interface ProjectCardProps {
  key?: React.Key;
  project: ProjectItem;
  isSelected: boolean;
  onClick: () => void;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(({ project, isSelected, onClick }, ref) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 24, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-10, 10]);
  
  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      layout
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        layout: { duration: 0.3 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`p-5 rounded-2xl text-left border cursor-pointer flex items-center justify-between group relative overflow-hidden transition-all duration-300 ${
        isSelected 
          ? "bg-[#050505] border-neutral-800"
          : "bg-[#010101] border-neutral-900/60 hover:bg-[#030303] hover:border-neutral-800/80"
      }`}
      id={`project-selector-card-${project.id}`}
    >
      {/* 3D Core content layer */}
      <div
        style={{
          transform: "translateZ(25px)",
          transformStyle: "preserve-3d",
        }}
        className="flex items-center gap-4 min-w-0 pointer-events-none"
      >
        {/* Decorative Icon Container */}
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shrink-0 group-hover:scale-108 duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)]`}>
          {project.icon}
        </div>
        <div className="min-w-0 text-left">
          <span className="text-[9px] font-mono uppercase text-neutral-500 tracking-widest block font-bold leading-none mb-1">
            {project.category}
          </span>
          <h3 className={`text-sm sm:text-base font-semibold truncate group-hover:text-[#FF4D1C] transition-colors ${
            isSelected ? "text-[#FF4D1C]" : "text-white"
          }`}>
            {project.title}
          </h3>
        </div>
      </div>

      <div 
        style={{
          transform: "translateZ(15px)",
        }}
        className="pl-2 shrink-0 pointer-events-none"
      >
        <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
          isSelected ? "translate-x-1.5 text-[#FF4D1C]" : "text-neutral-700 group-hover:text-[#FF4D1C] group-hover:translate-x-0.5"
        }`} />
      </div>

      {/* Futuristic soft reflection shine overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--glare-x)_var(--glare-y),white,transparent_50%)]"
        style={{
          "--glare-x": glareX,
          "--glare-y": glareY,
        } as any}
      />
    </motion.div>
  );
});

export default function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");

  const filteredProjects = selectedCategory === "All"
    ? projectsList
    : projectsList.filter(p => p.filterCategory === selectedCategory);

  const selectedProject = filteredProjects.find(p => p.id === selectedProjectId) || filteredProjects[0] || projectsList[0];

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
    const nextFiltered = category === "All"
      ? projectsList
      : projectsList.filter(p => p.filterCategory === category);
    
    // Auto-select first project of the new category to prevent blank detail panels
    if (nextFiltered.length > 0 && !nextFiltered.some(p => p.id === selectedProjectId)) {
      setSelectedProjectId(nextFiltered[0].id);
    }
  };

  return (
    <section 
      id="projects" 
      className="w-full max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-20 border-t border-neutral-900 bg-black/40 backdrop-blur-md rounded-3xl mt-12 overflow-hidden"
    >
      {/* Visual background atmospheric radial glow */}
      <div className="absolute top-0 left-1/3 w-[380px] h-[380px] bg-[radial-gradient(circle_at_center,rgba(255,77,28,0.02),transparent_70%)] pointer-events-none rounded-full blur-3xl animate-pulse" />

      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-11 relative z-10 text-left">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-[11px] font-mono uppercase tracking-widest text-[#FF4D1C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Project Showcase</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-sans font-normal tracking-tight text-white leading-tight">
            Building Modern Software <br />
            Solutions For The Future.
          </h2>
          
        </div>

        
      </div>

      {/* FILTER BAR SECTION */}
      <div className="flex flex-wrap items-center gap-2 mb-10 relative z-10" id="projects-filter-bar">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors duration-300 cursor-pointer select-none border focus:outline-none ${
                isActive 
                  ? "text-black border-white z-10" 
                  : "text-neutral-400 border-neutral-900 bg-neutral-950/20 hover:text-white hover:border-neutral-800"
              }`}
              id={`projects-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectCategory"
                  className="absolute inset-0 bg-white rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              {category}
            </button>
          );
        })}
      </div>

      {/* INTERACTIVE ROW LAYOUT (BENTO SCHEME) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10" id="projects-bento-layout">
        
        {/* Left Column - Project Selector panels (Span 5) */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-start w-full relative min-h-[280px]" id="projects-selector-col">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedProjectId === project.id}
                onClick={() => setSelectedProjectId(project.id)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Right Column - Deep Project Architecture Details inspect (Span 7) */}
        <div className="lg:col-span-7 w-full h-full" id="project-architecture-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[#030303] border border-neutral-900 hover:border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between h-auto min-h-[400px] text-left transition-all relative overflow-hidden"
            >
              {/* Decorative dynamic neon layout mesh glow */}
              <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${selectedProject.color} rounded-full blur-3xl pointer-events-none opacity-5`} />

              <div className="space-y-6">
                
                {/* Active Category Tag and Title */}
                <div className="flex flex-col gap-1 inline-block">
                  <span className="text-[10px] font-mono tracking-widest text-[#FF4D1C] uppercase font-bold">
                    ACTIVE SOURCE DETAILS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Tags row */}
                <div className="flex flex-wrap gap-2 pt-1" id="project-tech-tags">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-semibold font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Solid Description */}
                <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Sub Architecture Framework Variables */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-white">
                    <Terminal className="w-4 h-4 text-[#FF4D1C]" />
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-neutral-300">
                      Engineering Sub-system Elements
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-neutral-400">
                    {selectedProject.architecture.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 border border-neutral-900 bg-neutral-950/20 rounded-lg group/item hover:border-neutral-800 transition-colors"
                      >
                        <Code className="w-3.5 h-3.5 text-neutral-600 group-hover/item:text-[#FF4D1C] transition-colors" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action trigger button */}
              <div className="mt-8 pt-6 border-t border-neutral-900/50 flex flex-wrap justify-between items-center gap-4">
                  <span className="text-[11px] font-light text-neutral-500 flex items-center gap-1">
                    <Code className="w-3 h-3 text-neutral-600" />
                    <span>Licensed under Apache 2.0</span>
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileActive={{ scale: 0.98 }}
                    onClick={() => {
                      window.open("https://github.com/SankalpaSugathsiri", "_blank", "noopener,noreferrer");
                    }}
                    className="group relative inline-flex items-center gap-2 text-white font-semibold text-xs tracking-wider uppercase bg-neutral-900/60 border border-neutral-800 hover:border-[#FF4D1C] px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer pointer-events-auto"
                    id="btn-projects-link"
                  >
                    <span>{selectedProject.linkText}</span>
                    <ExternalLink className="w-3 h-3 text-[#FF4D1C]" />
                  </motion.button>
                </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
