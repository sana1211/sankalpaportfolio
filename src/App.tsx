/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Globe, ArrowRight, ArrowUp, Download } from "lucide-react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import OnboardingModal from "./components/OnboardingModal";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const userEmail = "sankalpasugathsiri64@gmail.com";


  // Dynamic Scroll Progress Physics
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll position to show/hide the scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 300px (past the fold of the hero section)
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#FF4D1C] selection:text-white overflow-x-hidden pb-16">
      
      {/* BEAUTIFUL COLORFUL PRELOADER LOADING ANIMATION */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* LANDING PAGE SCROLL PROGRESS INDICATOR */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#FF4D1C] origin-[0%] z-[100] pointer-events-none"
        style={{ scaleX }}
        id="scroll-progress-bar"
      />
      
      {/* HERO BACKGROUND VIDEO STREAMING ENGINE */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0" id="hero-bg-video-container">
        {/* Subtle luxury gradient to merge the cinematic film into the pure black footer layout */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black z-10" />
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          id="hero-bg-video"
        >
          <source src="https://res.cloudinary.com/dnxcdaqzt/video/upload/v1779559231/kling_20260516_Image_to_Video__4121_0_ft9sxg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* BACKGROUND VOLUMETRIC GLOWS */}
      {/* Elegant deep red-orange atmospheric radial light on top of video, below the text */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[radial-gradient(circle_at_center,rgba(255,77,28,0.065),transparent_65%)] rounded-full pointer-events-none blur-3xl z-10" 
        id="bg-glow-orange-left"
      />
      <div 
        className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(235,54,13,0.04),transparent_60%)] rounded-full pointer-events-none blur-3xl z-10" 
        id="bg-glow-red-right"
      />

      {/* HEADER SECTION */}
      <Header onOpenOnboarding={() => setIsOnboardingOpen(true)} />

      {/* MAIN CONTAINER */}
      <div className="relative z-10">
        
        {/* SECTION 1: HOME (HERO) */}
        <section id="home" className="min-h-[85vh] flex items-center justify-center pt-24 sm:pt-28 md:pt-36 pb-12">
          <main 
            className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center"
            id="hero-main"
          >
            {/* WRAPPER: HERO ESSENTIALS (centered layout) */}
            <div className="w-full space-y-8 flex flex-col items-center text-center">
              
              {/* GLOBE WIREFRAME SUBTITLE */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-3 text-center"
                id="globe-subtitle"
              >
                {/* Spinning/pulsating wireframe globe icon with rich colors */}
                <motion.div 
                  animate={{ 
                    rotate: 360 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 20, 
                    ease: "linear" 
                  }}
                  className="relative p-[1.5px] bg-gradient-to-tr from-[#FF4D1C] via-[#9333EA] to-[#06B6D4] rounded-xl shrink-0 shadow-[0_0_25px_rgba(255,77,28,0.25)] group"
                >
                  {/* Outer vibrant colorful pulsing halo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4D1C] via-[#9333EA] to-[#06B6D4] rounded-xl blur-lg opacity-60 animate-pulse-slow [-webkit-backface-visibility:hidden] [backface-visibility:hidden]" />
                  
                  <div className="relative bg-neutral-950 p-2 rounded-[10px] flex items-center justify-center" id="globe-color-inner">
                    <Globe className="w-5 h-5 text-[#FF4D1C] drop-shadow-[0_0_6px_rgba(255,77,28,0.6)]" strokeWidth={1.5} />
                  </div>
                </motion.div>
                
                
              </motion.div>

              {/* MASSIVE HERO HEADINGS: STAGGER TRANSLATED */}
              <div className="space-y-0 text-center" id="hero-title-container">

                <motion.h3 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white text-5xl sm:text-7xl md:text-[86px] font-normal leading-[1.02] tracking-tighter"
                >
                  <span className="font-serif-custom italic text-[#FF4D1C] font-normal tracking-wide">Hello I'am</span>
                </motion.h3>

                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white text-5xl sm:text-7xl md:text-[86px] font-normal leading-[1.02] tracking-tighter capitalize"
                >
                  Sankalpa Sithmina
                </motion.h1>

                
              </div>

              {/* DESCRIPTION PARAGRAPH */}
              <motion.p 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-lg sm:text-[17px] font-light leading-relaxed max-w-xl text-center mx-auto"
                id="hero-desc"
              >
                Full-stack engineer and interaction designer. Building sophisticated, lightning-fast digital solutions with precision, luxury typography, and fluid movement.
              </motion.p>

              {/* GRADIENT HORIZONTAL DIVIDER */}
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-[#FF4D1C]/40 to-transparent origin-center my-2 mx-auto"
                id="hero-divider"
              >
                &nbsp;
              </motion.div>

              {/* CALL TO ACTION ROW & SOCIAL PROOF */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 w-full pt-2" id="cta-social-row">
                
                {/* PILL CTA 1: ORANGE PILL WITH CIRCULAR SLIDING ARROW */}
                <a
                  href="#projects"
                  className="group relative flex items-center justify-between bg-gradient-to-r from-[#E0360D] to-[#FF4D1C] text-white pl-6 pr-2.5 py-2.5 rounded-full font-semibold text-sm hover:opacity-95 transition-all duration-300 shadow-xl cursor-pointer"
                  id="cta-get-started-hero"
                >
                  <span className="mr-4 sm:mr-6 tracking-wide">View My Work</span>
                  {/* White Circle Arrow Container */}
                  <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4 text-black transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                  </div>
                </a>

                {/* PILL CTA 2: DOWNLOAD CV MAPPED TO THE NEW CV PDF */}
                <a
                  href="/cv/Sugathsiri_CV.pdf"
                  download="Sugathsiri_CV.pdf"
                  className="group relative flex items-center justify-between bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700/80 text-white pl-6 pr-2.5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-xl cursor-pointer hover:bg-neutral-900"
                  id="cta-download-cv-hero"
                >
                  <span className="mr-4 sm:mr-6 tracking-wide text-neutral-200 group-hover:text-white transition-colors">Download CV</span>
                  {/* Circle Orange/Red Container with Download Icon */}
                  <div className="w-9 h-9 bg-neutral-800 text-white group-hover:bg-[#FF4D1C]/90 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-y-0.5 group-hover:shadow-[0_0_12px_rgba(255,77,28,0.5)]">
                    <Download className="w-4 h-4 text-neutral-300 group-hover:text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </a>

                {/* OVERLAPPING AVATARS / CLIENT COUNTER */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="flex items-center gap-3"
                  id="social-proof-container"
                >
                  {/* Overlapping Portraits Wrapper */}
                  

                  {/* Counter Text */}
                  
                </motion.div>

              </div>

            </div>
          </main>
        </section>

        {/* SECTION 2: ABOUT ME */}
        <AboutSection />

        {/* SECTION 3: SKILLS */}
        <SkillsSection />

        {/* SECTION 4: PROJECTS */}
        <ProjectsSection />

        {/* SECTION FOR EDUCATION AND CERTIFICATIONS */}
        <EducationSection />

        {/* SECTION 5: CONTACT ME */}
        <ContactSection />

      </div>

      {/* INTERACTIVE ONBOARDING CONSOLE (IF ACCESSED DIRECTLY) */}
      <OnboardingModal 
        isOpen={isOnboardingOpen} 
        onClose={() => setIsOnboardingOpen(false)} 
        userEmail={userEmail}
      />

      {/* FLOATING SCROLL-TO-TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 15 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{
              y: [0, -5, 0],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileActive={{ scale: 0.92 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[90] w-12 h-12 rounded-full bg-[#FF4D1C] text-white flex items-center justify-center shadow-xl shadow-[#FF4D1C]/25 border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#FF4D1C]/50 hover:bg-[#E33E0F] transition-all duration-300 cursor-pointer pointer-events-auto"
            id="scroll-to-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
