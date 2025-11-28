"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/public/vinopera.json";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  // We'll play the animation for a minimum duration or until it completes one loop
  // Since we want to ensure it's visible, let's use a timer as well as onLoopComplete if needed.
  // For now, let's just play it for 3 seconds or so to simulate loading/branding.
  


  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <div className="w-full h-full">
        <Lottie 
          animationData={animationData} 
          loop={false}
          autoplay={true}
          onComplete={onComplete}
        />
      </div>
    </motion.div>
  );
}
