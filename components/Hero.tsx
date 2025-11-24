"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  const [transition, setTransition] = React.useState<{
    isActive: boolean;
    x: number;
    y: number;
  }>({ isActive: false, x: 0, y: 0 });
  
  const overlayContentRef = React.useRef<HTMLDivElement>(null);
  const heroCardRef = React.useRef<HTMLElement>(null);

  const floatAnimation = (delay = 0) => ({
    y: [0, -10, 0],
    rotate: [0, 0.7, -0.7, 0],
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    } as const,
  });

  const handleNavigation = (id: string, e: React.MouseEvent) => {
    // Calculate coordinates relative to the Hero card
    let x = e.clientX;
    let y = e.clientY;

    if (heroCardRef.current) {
        const rect = heroCardRef.current.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
    }

    // 1. Find target
    const targetEl = document.getElementById(id);
    if (!targetEl) return;

    // 2. Clone target
    const clone = targetEl.cloneNode(true) as HTMLElement;
    clone.removeAttribute("id"); // Avoid duplicate IDs
    clone.style.marginTop = "0"; // Reset margins for overlay context
    clone.style.marginBottom = "0";
    clone.style.width = "100%";
    clone.style.height = "100%";
    clone.style.borderRadius = "40px"; // Ensure it matches the card
    clone.style.justifyContent = "flex-start"; // Force top alignment for transition
    
    // 3. Prepare overlay
    if (overlayContentRef.current) {
      overlayContentRef.current.innerHTML = "";
      overlayContentRef.current.appendChild(clone);
    }

    // 4. Trigger animation
    setTransition({ isActive: true, x, y });

    // 5. Wait for wipe to cover screen (approx 800ms for full cover)
    setTimeout(() => {
      const y = targetEl.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: y, behavior: "auto" });
      
      // 6. Fade out overlay
      // Add a small buffer (100ms) to ensure scroll is complete and frame is rendered
      setTimeout(() => {
        setTransition((prev) => ({ ...prev, isActive: false }));
        // Cleanup after animation
        setTimeout(() => {
             if (overlayContentRef.current) overlayContentRef.current.innerHTML = "";
        }, 500);
      }, 100);
    }, 800);
  };

  return (
    <motion.section
      ref={heroCardRef}
      className="min-h-[90vh] h-auto w-[90%] mx-auto rounded-[40px] flex flex-col overflow-y-auto relative mt-8 pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      style={{
        ...{
          backgroundImage: "url(/blueBG.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundColor: "#d3f1ff",
        },
        willChange: "transform, opacity",
      }}
    >
      {/* DROPLET TRANSITION OVERLAY (Scoped to Card) */}
      <motion.div
        initial={false}
        animate={transition.isActive ? "active" : "inactive"}
        variants={{
            active: { 
                clipPath: `circle(150% at ${transition.x}px ${transition.y}px)`,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
            },
            inactive: { 
                clipPath: `circle(0% at ${transition.x}px ${transition.y}px)`,
                opacity: 0,
                transition: { duration: 0.5, ease: "easeIn" }
            }
        }}
        className="absolute inset-0 z-[50] pointer-events-none overflow-hidden bg-white rounded-[40px]"
      >
        <div ref={overlayContentRef} className="w-full h-full" />
      </motion.div>

      {/* HEADER */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full px-6 md:px-10 lg:px-20 flex items-center justify-between h-16 font-poppins shrink-0"
        style={{ backgroundColor: "#d1f3ff", borderRadius: "0 0 24px 24px" }}
      >
        <h1 className="text-xl font-bold text-gray-900">VinOpera</h1>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <button 
            onClick={(e) => handleNavigation('explore', e)}
            className="hover:text-black transition"
          >
            Explore
          </button>
          <button 
            onClick={(e) => handleNavigation('features', e)}
            className="hover:text-black transition"
          >
            Features
          </button>
          <button 
            onClick={(e) => handleNavigation('pricing', e)}
            className="hover:text-black transition"
          >
            Pricing
          </button>
          <button className="px-5 py-1.5 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 transition">
            Start Creating
          </button>
        </nav>
        
        {/* Mobile Menu Button Placeholder */}
        <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
      </motion.header>

      {/* TITLE CARD + MOCKUP WRAPPER (Full width flex) */}
      <div className="relative z-10 w-full mx-auto mt-6 lg:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-8 px-6 md:px-10 lg:px-20 shrink-0">
        
        {/* TITLE CARD (80% width on desktop) */}
        <div className="w-full lg:w-[80%]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              animate={floatAnimation(0)}
              className="rounded-[36px] p-6 shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, #b8eaff 0%, #c3efff 50%, #d4f5ff 100%)",
              }}
            >
              {/* TOP SECTION: TITLE + VINKURA BADGE */}
              <div className="flex flex-col sm:flex-row items-start justify-between pl-2 sm:pl-6 pr-2 sm:pr-6 mb-4">
                <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] font-ramabhadra text-black leading-none">
                  VinOpera
                </h1>
                <div
                  className="px-4 py-1 rounded-full text-lg sm:text-xl text-center font-semibold mt-2 sm:mt-2"
                  style={{
                    border: "1.5px solid #000",
                  }}
                >
                  vinkura
                </div>
              </div>

              {/* BOTTOM SECTION: DESCRIPTION + WHAT WE PROVIDE */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pl-2 sm:pl-6 pr-2 sm:pr-6 mt-4 sm:mt-6 gap-4 sm:gap-0">
                <p className="text-lg sm:text-xl text-gray-800">
                  The canvas which breathes with you.
                </p>
                <div
                  className="w-fit px-5 py-2 rounded-full font-semibold text-sm"
                  style={{ background: "#91e2ff", border: "1px solid rgba(0,0,0,0.15)" }}
                >
                  what we provide.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* MOCKUP SECTION (20% width on desktop) */}
        <div className="w-full lg:w-[20%] flex items-start">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="w-full"
          >
            <motion.div
              animate={floatAnimation(0.5)}
              className="rounded-[36px] w-full overflow-hidden h-[150px]"
            >
              <img src="/lumeerlg.png" alt="Mockup" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

      </div>


      {/* MAIN GRID BELOW TITLE */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-20 flex-1 flex flex-col justify-end pb-10 lg:pb-12 mt-6 lg:mt-10 min-h-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[80fr_20fr] gap-6 lg:gap-10 h-auto lg:h-full">

          {/* LEFT MOCKUP */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="lg:row-span-2 h-[300px] lg:h-full"
          >
            <motion.div
              animate={floatAnimation(1)}
              className="rounded-[32px] bg-white p-4 shadow-xl h-full"
            >
              <div className="rounded-[28px] bg-gray-100 h-full relative shadow-inner">
                <div className="absolute top-3 left-4 flex gap-2">
                  <span className="h-4 w-4 bg-orange-500 rounded-full" />
                  <span className="h-2 w-2 bg-gray-300 rounded-full" />
                  <span className="h-2 w-2 bg-gray-300 rounded-full" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* INFINITY CANVAS CARD */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="h-[300px] lg:h-full"
          >
            <motion.div
              animate={floatAnimation(1.5)}
              className="rounded-[32px] p-6 shadow-md h-full flex flex-col justify-between"
              style={{
                background: "linear-gradient(to bottom, #d3f1ff 0%, #d3f1ff 55%, #9ad7ff 100%)",
              }}
            >
              <div>
                <h2 className="text-3xl font-bold text-black mb-3">The infinity canvas</h2>
                <p className="text-md font-medium text-gray-900 leading-relaxed">
                  Do things at your own pace. Life&apos;s not a race.
                  Breathe. You&apos;re always there.
                </p>
              </div>

              <button className="px-8 py-2 bg-white rounded-full shadow font-semibold self-start hover:scale-105 transition">
                explore
              </button>
            </motion.div>
          </motion.div>

          {/* BOTTOM RIGHT CARD (ALIGNED UNDER RIGHT COLUMN) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="lg:col-start-2 h-auto lg:h-full"
          >
            <motion.div
              animate={floatAnimation(2)}
              className="rounded-[28px] bg-white p-6 shadow-md h-full flex items-center"
            >
              <p className="text-md text-gray-900 leading-relaxed">
                A freeform digital space to type, sketch, and drop visuals freely — no rigid
                structure, just pure flow. Every idea you have, big or small, your creativity
                takes its natural shape.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
