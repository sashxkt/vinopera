"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function GlitchTitle() {
  const [showVinOpera, setShowVinOpera] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start glitch
      setIsGlitching(true);
      
      // Switch text halfway through glitch
      setTimeout(() => {
        setShowVinOpera((prev) => !prev);
      }, 250);

      // Stop glitch
      setTimeout(() => {
        setIsGlitching(false);
      }, 500);
      
    }, 4000); // Toggle every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const vinOperaStyles = "text-7xl md:text-9xl lg:text-[20rem]  font-bold text-white font-ramabhadra tracking-tight leading-[0.9] relative z-10 text-center pt-20";
  const canvasStyles = "text-9xl md:text-9xl lg:text-[12rem] font-bold text-white font-ramabhadra tracking-tight leading-[0.9] relative z-10 text-center pt-20";

  return (
    <div className="relative inline-block h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center w-full">
      {/* Blueprint Grid Overlay during glitch */}
      <AnimatePresence>
        {isGlitching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 blueprint-grid-overlay pointer-events-none"
          />
        )}
      </AnimatePresence>

      <motion.h1
        className={`${showVinOpera ? vinOperaStyles : canvasStyles} ${
          isGlitching ? "blueprint-glitch" : ""
        }`}
        data-text={showVinOpera ? "VinOpera" : "The Canvas That Breathes."}
        animate={{
          scale: isGlitching ? [1, 1.05, 0.95, 1] : [1, 1.02, 1], // Aggressive shake during glitch, gentle breathe otherwise
        }}
        transition={{
          duration: isGlitching ? 0.5 : 4,
          repeat: isGlitching ? 0 : Infinity,
          ease: "easeInOut",
        }}
      >
        {showVinOpera ? (
          "VinOpera"
        ) : (
          <>
            The Canvas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              That Breathes.
            </span>
          </>
        )}
      </motion.h1>
    </div>
  );
}
