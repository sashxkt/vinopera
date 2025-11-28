"use client";

import { motion } from "framer-motion";
import React from "react";

import GlitchTitle from "./GlitchTitle";



export default function Hero() {
  return (
    <motion.section
      className="min-h-[90vh] w-[90%] mx-auto rounded-[40px] flex flex-col relative mt-4 overflow-hidden bg-background border-2 border-border shadow-xl perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
           style={{ 
             backgroundImage: "radial-gradient(#333 1px, transparent 1px)", 
             backgroundSize: "24px 24px" 
           }} 
      />

      {/* Gradient Blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 md:px-10 lg:px-20 py-20 text-center">
        


        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20 shadow-sm">
            vinkura 2.0 is here
          </span>
        </motion.div>

        <GlitchTitle />

        <motion.p 
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A freeform digital space to type, sketch, and drop visuals freely. 
          No rigid structure, just pure flow.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 relative"
        >


          <button className="px-10 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1">
            Start Creating
          </button>
          <button className="px-10 py-4 rounded-full bg-white text-black font-bold text-lg border-2 border-white hover:bg-gray-200 transition-all hover:border-gray-200">
            View Demo
          </button>
        </motion.div>
      </div>

      {/* Canvas Mockup Showcase with 3D Tilt */}
      <motion.div 
        className="relative z-10 w-full h-[450px] md:h-[600px] mt-auto overflow-hidden flex justify-center"
        initial={{ y: 100, opacity: 0, rotateX: 20 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.2 }}
        style={{ perspective: "1000px" }}
      >
        <motion.div 
          className="w-[95%] md:w-[85%] h-full bg-card rounded-t-[40px] border-t-2 border-x-2 border-border shadow-2xl p-4 md:p-8 relative"
          whileHover={{ y: -10, rotateX: 5 }}
          transition={{ duration: 0.4 }}
        >
           {/* Mockup UI Header */}
           <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-6">
            <div className="flex gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E] border border-[#D89E24]" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#28C840] border border-[#1AAB29]" />
            </div>
            <div className="h-3 w-48 bg-gray-200 rounded-full" />
            <div className="w-8 h-8 rounded-full bg-gray-200" />
          </div>
          
          {/* Mockup Content - Floating Cards inside Canvas */}
          <div className="relative w-full h-full">
            <motion.div 
              className="absolute top-10 left-10 md:left-20 w-56 h-40 bg-white rounded-2xl shadow-lg p-5 border border-gray-100"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 mb-4 flex items-center justify-center text-blue-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="h-2.5 w-32 bg-gray-100 rounded-full mb-3" />
              <div className="h-2.5 w-20 bg-gray-100 rounded-full" />
            </motion.div>

            <motion.div 
              className="absolute top-32 right-10 md:right-32 w-64 h-48 bg-white rounded-2xl shadow-lg p-5 border border-gray-100"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 border-2 border-white shadow-sm" />
                <div className="w-10 h-10 rounded-full bg-pink-100 border-2 border-white shadow-sm -ml-5" />
                <div className="w-10 h-10 rounded-full bg-yellow-100 border-2 border-white shadow-sm -ml-5 flex items-center justify-center text-xs font-bold text-yellow-600">+3</div>
              </div>
              <div className="h-2.5 w-full bg-gray-100 rounded-full mb-3" />
              <div className="h-2.5 w-4/5 bg-gray-100 rounded-full mb-3" />
              <div className="h-2.5 w-3/5 bg-gray-100 rounded-full" />
            </motion.div>

             <motion.div 
              className="absolute bottom-32 left-1/2 -translate-x-1/2 w-48 h-48 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-100"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="text-center">
                <span className="block text-3xl font-bold text-primary mb-1">∞</span>
                <span className="text-sm font-semibold text-gray-500">Infinite Canvas</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

