import { motion } from "motion/react";
import { Sparkles, Terminal, BookOpen, MapPin } from "lucide-react";
import StatsCards from "./StatsCards";

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="w-full max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-20 border-t border-neutral-900 bg-black/30 backdrop-blur-md rounded-3xl mt-12 overflow-hidden"
    >
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(255,77,28,0.035),transparent_70%)] pointer-events-none rounded-full blur-3xl" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Column: Headline and Pitch */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-[11px] font-mono uppercase tracking-widest text-[#FF4D1C]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sankalpa Sithmina</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-sans font-normal tracking-tight text-white leading-[1.12]">
            Undergraduate <br />
            in <span className="font-serif-custom italic text-[#FF4D1C] font-normal tracking-wide">University of Moratuwa</span>
          </h2>
          
          <p className="text-white text-lg font-light leading-relaxed">
            I am a full-stack engineer and interaction designer dedicated to creating highly optimized, fluid, and eye-catching digital experiences. Bridging the gap between robust system architecture and pristine visual interface is where I thrive.
          </p>

          <p className="text-white text-lg font-light leading-relaxed">
            Through clean code syntax, rigorous performance metrics, and modern UI architectures like React, TypeScript, and Tailwind, I design native-feeling web environments crafted specifically to prioritize the human element.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 text-xs font-mono text-neutral-500">
            <div className="flex items-center gap-2 px-3.5 py-2 border border-neutral-900 rounded-xl bg-neutral-950/40">
              <Terminal className="w-3.5 h-3.5 text-[#FF4D1C]" />
              <span>Full-Stack Developer</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 border border-neutral-900 rounded-xl bg-neutral-950/40">
              <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
              <span>UI/UX Designer</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 border border-neutral-900 rounded-xl bg-neutral-950/40">
              <MapPin className="w-3.5 h-3.5 text-[#FF4D1C]" />
              <span>IoT Application Developer</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-8 text-left">
          

          {/* Integrated Statistics Grid */}
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold block mb-4">
              
            </span>
            <StatsCards />
          </div>
        </div>

      </div>
    </section>
  );
}
