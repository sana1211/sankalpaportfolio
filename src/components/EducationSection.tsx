import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Calendar, Award, BookOpen, MapPin, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
  skillsAcquired: string[];
  achievements: string[];
  color: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Information Technology (BIT)",
    institution: "University of Moratuwa",
    location: "Sri Lanka",
    period: "2024 — Present",
    grade: "2nd Year",
    description: "Currently pursuing the Bachelor of Information Technology (BIT) degree at the University of Moratuwa while specializing in modern software engineering, full-stack web development, UI/UX design principles, and scalable digital solutions. Focused on building responsive applications, interactive user experiences, and efficient backend systems.",
    skillsAcquired: ["Software Engineering", "Web Application Development", "Web Application Development", "UI / UX Engineering", "Data Structures & Algorithms"],
    achievements: [
      "Currently following second year academic studies",
      "Strong focus on responsive UI/UX experiences",
      "Developing modern frontend and full-stack projects"
    ],
    color: "from-[#FF4D1C] to-[#E0360D]"
  },
  {
    id: 2,
    degree: "Advanced Diploma in Interactive Design",
    institution: "Sri Lanka Institute of Information Technology",
    location: "Malabe, Sri Lanka",
    period: "2018 — 2020",
    grade: "Distinction Rank",
    description: "Explored advanced typography pairing, interface layout physics, responsive grids, and design systems. Specialized in bridges connecting cinematic animation to high-throughput web codebases.",
    skillsAcquired: ["Visual Ergonomics", "Typography Theory", "Interactive Prototyping", "Design Systems"],
    achievements: [
      "Award for Most Creative UI Sandbox Prototyping",
      "Maintained 100% score on vector optimization systems",
      "Completed 18 separate industry-sponsored interface reviews"
    ],
    color: "from-blue-600 to-indigo-800"
  },
  {
    id: 3,
    degree: "AWS Certified Solutions Architect",
    institution: "Amazon Web Services (AWS)",
    location: "Credential ID: AWS-ASA-7749",
    period: "2025",
    grade: "Professional Certification",
    description: "Authorized cloud engineering validation certifying state-of-the-art proficiency in constructing multi-region server scaling networks, secure API proxy boundaries, and highly available cluster setups.",
    skillsAcquired: ["AWS ECS & VPC", "IAM Security Filters", "Serverless Infrastructure", "Cloudfront Caching"],
    achievements: [
      "Passed with 940/1000 score",
      "Designed automatic disaster recovery failovers in production sandbox",
      "Implemented zero-trust secure data flows matching SOC2 standards"
    ],
    color: "from-amber-500 to-[#FF4D1C]"
  }
];

export default function EducationSection() {
  const [activeId, setActiveId] = useState<number>(1);

  const selectedEdu = educationData.find(edu => edu.id === activeId) || educationData[0];

  return (
    <section 
      id="education" 
      className="w-full max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-20 border-t border-neutral-900 bg-black/30 backdrop-blur-md rounded-3xl mt-12 overflow-hidden"
    >
      {/* Background elegant radial aura */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,77,28,0.015),transparent_70%)] pointer-events-none rounded-full blur-3xl" />

      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10 text-left">
        <div className="space-y-4 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-[11px] font-mono uppercase tracking-widest text-[#FF4D1C]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Foundations & Certs</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-sans font-normal tracking-tight text-white leading-tight">
            Academic pathways & <br />
            technical authorization
          </h2>
          <p className="text-neutral-400 text-sm font-light leading-relaxed">
            The architectural knowledge and visual principles driving my engineering strategy, refined through rigorous academic validation and professional credentials.
          </p>
        </div>

        
      </div>

      {/* INTERACTIVE COMPONENT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10" id="education-grid">
        
        {/* Left Hand: Selector Milestones / Timeline */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-start w-full" id="education-timeline-selector">
          {educationData.map((edu, index) => {
            const isSelected = activeId === edu.id;
            return (
              <motion.div
                key={edu.id}
                whileHover={{ y: -2 }}
                onClick={() => setActiveId(edu.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex items-start gap-4 group relative ${
                  isSelected 
                    ? "bg-[#050505] border-neutral-800"
                    : "bg-[#010101] border-neutral-900/60 hover:bg-[#030303] hover:border-neutral-900"
                }`}
                id={`education-card-${edu.id}`}
              >
                {/* Timeline Connector Line */}
                {index < educationData.length - 1 && (
                  <div className="absolute left-[34px] top-16 bottom-[-24px] w-[1px] bg-neutral-900 pointer-events-none hidden sm:block" />
                )}

                {/* Left: Icon Badge */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-105 duration-300 relative z-10`}>
                  <GraduationCap className="w-5 h-5" />
                </div>

                {/* Middle: Core Details */}
                <div className="min-w-0 text-left flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-mono text-[9px] uppercase font-bold tracking-wider text-neutral-500">
                      {edu.period}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                      {edu.grade}
                    </span>
                  </div>
                  <h3 className={`text-base font-semibold tracking-tight transition-colors leading-snug group-hover:text-[#FF4D1C] ${
                    isSelected ? "text-[#FF4D1C]" : "text-white"
                  }`}>
                    {edu.degree}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-1.5 font-light">
                    {edu.institution}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="shrink-0 self-center pl-1">
                  <ArrowRight className={`w-4 h-4 transition-all duration-300 ${
                    isSelected ? "translate-x-1 text-[#FF4D1C]" : "text-neutral-800 group-hover:text-neutral-500 group-hover:translate-x-0.5"
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Hand: Interactive Deep-Dive Details Panel */}
        <div className="lg:col-span-7 w-full h-full" id="education-detail-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEdu.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-[#030303] border border-neutral-900 hover:border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col h-auto min-h-[420px] text-left transition-all relative overflow-hidden"
            >
              {/* Corner decorative aura mesh */}
              <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${selectedEdu.color} rounded-full blur-3xl pointer-events-none opacity-5`} />

              {/* Title & Organization Info */}
              <div className="space-y-4 mb-6 relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#FF4D1C] uppercase font-bold">
                  EXPANDED SCHOLASTIC PATHWAY
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-start justify-between">
                  {/* Left Column of heading */}
                  <div className="md:col-span-8">
                    <h3 className="text-2xl sm:text-3xl font-normal text-white leading-tight">
                      {selectedEdu.degree}
                    </h3>
                    <p className="text-[#FF4D1C] text-sm font-medium mt-1">
                      {selectedEdu.institution}
                    </p>
                  </div>

                  {/* Right Column of Heading (Metadata) */}
                  <div className="md:col-span-4 flex flex-col md:items-end gap-1.5 text-xs text-neutral-400 font-mono pt-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{selectedEdu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:text-right">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span className="truncate max-w-[150px]" title={selectedEdu.location}>
                        {selectedEdu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comprehensive Description */}
              <div className="space-y-6 relative z-10 flex-1">
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                  {selectedEdu.description}
                </p>

                {/* Core Modules Tags Grid */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white">
                    <BookOpen className="w-4 h-4 text-[#FF4D1C]" />
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-neutral-450">
                      Core Subjects & Domains
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedEdu.skillsAcquired.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-semibold font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notable Milestone Ribbons */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-white">
                    <Award className="w-4 h-4 text-[#FF4D1C]" />
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-neutral-450">
                      Academic/Professional Honors
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {selectedEdu.achievements.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-neutral-400 font-sans py-0.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500/85 shrink-0 mt-0.5" />
                        <span className="leading-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
