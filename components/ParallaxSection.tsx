"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ParallaxSection = ({ children, className = "" }: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate as it enters the viewport
  // 0 = top of section hits bottom of viewport
  // 0.5 = center of section hits center of viewport (approx)
  
  // We want it to be fully visible when it's well into the viewport.
  // Let's try a simpler offset for the animation trigger: "start end" to "center center"
  
  const { scrollYProgress: entryProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(entryProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(entryProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
