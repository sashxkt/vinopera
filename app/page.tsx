"use client";

import Hero from "@/components/Hero";
import Middle from "@/components/Middle";
import Bottom from "@/components/Bottom";
import Pricing from "@/components/Pricing";
import Header from "@/components/Header";
import LoadingScreen from "@/components/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <main className="min-h-screen bg-background bg-dot-grid relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <Hero />
            <Middle />
            <Pricing />
            <Bottom />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
