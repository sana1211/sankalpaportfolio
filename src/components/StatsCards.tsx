import { motion } from "motion/react";
import { projectsList } from "./ProjectsSection";

interface StatItemProps {
  number: string;
  label: string;
  sup: string;
  delay: number;
  onClick?: () => void;
}

function StatCard({ number, label, sup, delay, onClick }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, x: 2 }}
      onClick={onClick}
      className="relative w-full max-w-[280px] bg-[#030303]/80 border border-neutral-900/80 hover:border-neutral-800/80 rounded-2xl px-4.5 py-3 flex items-center justify-between gap-3 group transition-all duration-300 overflow-hidden cursor-pointer backdrop-blur-md"
    >
      {/* Background radial gradient glow only visible on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,77,28,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* LEFT: Metric & Sup Row */}
      <div className="flex items-baseline gap-2 relative z-10">
        <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-white group-hover:text-[#FF4D1C] transition-colors duration-300 font-mono leading-none">
          {number}
        </h3>
        <span className="font-mono text-[9px] text-neutral-600 group-hover:text-neutral-500 transition-colors uppercase tracking-widest font-bold">
          [{sup}]
        </span>
      </div>

      {/* RIGHT: Label & Interactive Slide Indicator */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="text-right">
          <span className="text-[12px] font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
            {label}
          </span>
        </div>
        
        {/* Sleek inline arrow button indicating interactive behavior */}
        <div className="w-7 h-7 bg-neutral-950 border border-neutral-900 text-neutral-500 group-hover:text-white group-hover:border-[#FF4D1C]/30 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-0.5">
          <span className="text-[10px] font-sans transition-transform duration-300 group-hover:rotate-45">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsCards() {
  const projectCount = projectsList.length;

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center w-full" id="stats-grid">
      <StatCard 
        number={`${projectCount}`} 
        label="Projects delivered" 
        sup="50" 
        delay={0.1} 
        onClick={handleScrollToProjects}
      />
    </div>
  );
}
