import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const StatusTexts = [
    "Loading......",
    "Loading......",
    "Loading......",
    "Loading......",
    "Loading......"
  ];

  useEffect(() => {
    // 1. Slow, realistic-feeling progress bar simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment dynamically: faster at first, slower at the end
        const remaining = 100 - prev;
        const speed = remaining > 30 ? Math.random() * 8 + 4 : Math.random() * 4 + 1;
        const next = prev + speed;
        return next > 100 ? 100 : Math.round(next);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // 2. Rotate through the loading status strings based on progress thresholds
    const sectionSize = 100 / StatusTexts.length;
    const computedIndex = Math.min(
      Math.floor(progress / sectionSize),
      StatusTexts.length - 1
    );
    setTextIndex(computedIndex);

    if (progress === 100) {
      // Small timeout for user to feel completion, then trigger collapse
      const timeout = setTimeout(() => {
        onFinish();
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -30,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 w-full h-full bg-black z-[99999] flex flex-col items-center justify-center overflow-hidden"
      id="custom-creative-preloader"
    >
      {/* BACKGROUND GRAPHIC NOISE + RADIAL BLURS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,28,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)] rounded-full blur-3xl" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05),transparent_70%)] rounded-full blur-3xl" />

      {/* FLOATING PARTICLES INSIDE THE BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 rounded-full bg-[#FF4D1C] opacity-40 animate-pulse" />
        <div className="absolute top-[70%] left-[15%] w-2 h-2 rounded-full bg-[#9333EA] opacity-30 animate-ping [animation-duration:3s]" />
        <div className="absolute top-[40%] right-[25%] w-1 h-1 rounded-full bg-[#06B6D4] opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-lg w-full">
        {/* LOGO GESTURE & WAVEFORM ANIMATION */}
        <div className="relative mb-12" id="preloader-geometric-wrapper">
          {/* Pulsating backdrops circles */}
          <motion.div 
            animate={{ 
              scale: [1, 1.12, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut"
            }}
            className="absolute -inset-10 bg-gradient-to-tr from-[#FF4D1C]/20 via-[#9333EA]/20 to-[#06B6D4]/20 rounded-full blur-2xl"
          />

          {/* Master Creative Sphere */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Spinning Neon Gradient Orbit Ring 1 (Clockwise) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-t-[#FF4D1C] border-r-[#9333EA] border-b-transparent border-l-[#06B6D4] opacity-75"
            />

            {/* Spinning Neon Gradient Orbit Ring 2 (Anti-Clockwise) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-3 rounded-full border border-double border-b-[#FF4D1C] border-l-[#9333EA] border-t-transparent border-r-[#06B6D4] opacity-80"
            />

            {/* Glowing colorful core with a rotating pulse */}
            <motion.div 
              animate={{ 
                scale: [0.95, 1.05, 0.95],
                rotate: [0, 45, 0]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3, 
                ease: "easeInOut" 
              }}
              className="w-20 h-20 bg-gradient-to-br from-[#FF4D1C] via-[#9333EA] to-[#06B6D4] rounded-2xl flex items-center justify-center shadow-[0_0_35px_rgba(255,77,28,0.4)] relative"
            >
              {/* Internal overlay to soften the background */}
              <div className="absolute inset-[1.5px] bg-[#0c0c0e] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#FF4D1C] drop-shadow-[0_0_8px_rgba(255,77,28,0.5)] animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* METADATA BRACKETS DESIGN HEADER */}
        <div className="space-y-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2"
          >
            <span className="text-[10px] uppercase font-mono text-neutral-500 tracking-widest font-bold">
              
            </span>
          </motion.div>

          {/* DYNAMIC METRIC PERCENTAGE & DISPLAY TITLE */}
          <div className="space-y-1">
            <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
              HELLO WELCOME!
            </h2>
            <div className="font-mono text-[11px] text-[#FF4D1C] font-semibold tracking-wider h-5 flex items-center justify-center">
              <span className="opacity-75">{StatusTexts[textIndex]}</span>
            </div>
          </div>

          {/* PROGRESS SLIDER COMPONENT */}
          <div className="relative pt-4 w-full px-4" id="preloader-progress-track">
            {/* Dark glass bar wrapper */}
            <div className="relative h-[4px] w-full bg-neutral-900 border border-neutral-800/40 rounded-full overflow-hidden">
              {/* Colorful gradient indicator */}
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#FF4D1C] via-[#9333EA] to-[#06B6D4] rounded-full shadow-[0_0_10px_rgba(255,77,28,0.5)]"
                style={{ width: `${progress}%` }}
                layoutId="loaderBar"
              />
            </div>

            {/* Numbers tracker row */}
            <div className="flex justify-between items-center mt-2.5 px-1 text-[10px] font-mono font-medium text-neutral-500">
              <span>PROG: {progress}%</span>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
