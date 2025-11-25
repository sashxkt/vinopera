"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  const handleNavigation = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-20 py-4 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-white font-ramabhadra">VinOpera</h1>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <button
          onClick={(e) => handleNavigation("features", e)}
          className="hover:text-white transition-colors"
        >
          Features
        </button>
        <button
          onClick={(e) => handleNavigation("pricing", e)}
          className="hover:text-white transition-colors"
        >
          Pricing
        </button>
        <button
          onClick={(e) => handleNavigation("explore", e)}
          className="hover:text-white transition-colors"
        >
          Explore
        </button>
      </nav>

      <div className="flex items-center gap-4">
        <button className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Log in
        </button>
        <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors shadow-sm">
          Get Started
        </button>
      </div>
    </motion.header>
  );
}
