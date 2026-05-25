import { useState, useEffect } from "react";
import SriLankaClock from "./SriLankaClock";

interface HeaderProps {
  onOpenOnboarding: () => void;
}

export default function Header({ onOpenOnboarding }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/75 backdrop-blur-md border-b border-neutral-900/60 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.9)]" 
          : "bg-transparent py-6 border-b border-transparent"
      }`}
      id="main-header"
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between" id="header-inner">
        {/* BRAND LOGO */}
        <div className="flex items-center gap-2" id="brand-logo-container">
        <a href="#home" className="relative group cursor-pointer flex items-center gap-2">
          {/* High Fidelity Isometric 3D Ribbon Logo */}
          <div className="w-8 h-8 relative shrink-0">
            <svg 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full transform transition-transform duration-500 group-hover:rotate-12"
            >
              {/* Left Wing / Diamond (Bright Orange) */}
              <path 
                d="M10 8L18 4V16L10 20V8Z" 
                fill="#FF4D1C" 
                className="opacity-95"
              />
              {/* Right Wing / Diamond (Crimson / Deep Orange) */}
              <path 
                d="M18 16L26 12V24L18 28V16Z" 
                fill="#E0360D" 
              />
              {/* Top Accent Fold (Light Orange Highlight) */}
              <path 
                d="M18 4L26 12L18 16L10 8L18 4Z" 
                fill="#FF6E47" 
                className="opacity-90"
              />
              {/* Tiny subtle depth overlay */}
              <circle cx="18" cy="16" r="1.5" fill="#FFFFFF" className="opacity-40" />
            </svg>
          </div>
          <span className="text-xl font-bold font-sans text-white tracking-tight">
            Sankalpa<span className="text-[#FF4D1C]">.</span>
          </span>
        </a>
      </div>

      {/* CENTER PILL NAVIGATION */}
      <nav 
        className="hidden md:flex items-center gap-1 bg-[#0A0A0A]/85 backdrop-blur-md border border-neutral-800/80 rounded-full p-1.5 shadow-xl transition-all duration-300 hover:border-neutral-700/80"
        id="navigation-bar"
      >
        <a 
          href="#home"
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white hover:bg-neutral-900/40"
          id="nav-home"
        >
          Home
        </a>

        <a 
          href="#about"
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white hover:bg-neutral-900/40"
          id="nav-about"
        >
          About Me
        </a>

        <a 
          href="#skills"
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white hover:bg-neutral-900/40"
          id="nav-skills"
        >
          Skills
        </a>

        <a 
          href="#projects"
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white hover:bg-neutral-900/40"
          id="nav-projects"
        >
          Projects
        </a>

        <a 
          href="#education"
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white hover:bg-neutral-900/40"
          id="nav-education"
        >
          Education
        </a>

        <a 
          href="#contact"
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white hover:bg-neutral-900/40"
          id="nav-contact"
        >
          Contact Me
        </a>
      </nav>

      {/* RIGHT CONTROLS: LIVE CLOCK & TALK TO ME BUTTON */}
      <div className="flex items-center gap-6" id="header-right">
        {/* Real-time Sri Lanka clock */}
        <div className="hidden sm:block">
          <SriLankaClock />
        </div>

        {/* Button: Talk to Me */}
        <a 
          href="#contact"
          className="bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-neutral-400/10 text-center"
          id="hdr-btn-get-started"
        >
          Let's Talk
        </a>
      </div>
      </div>
    </header>
  );
}
