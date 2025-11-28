"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Rate limiting (Client-side)
    const lastSubmission = localStorage.getItem("vinopera_waitlist_last_submission");
    if (lastSubmission) {
      const lastTime = new Date(lastSubmission).getTime();
      const currentTime = new Date().getTime();
      const hoursDiff = (currentTime - lastTime) / (1000 * 60 * 60);
      
      if (hoursDiff < 24) {
        setError("You have already joined the waitlist. Please try again later.");
        setLoading(false);
        return;
      }
    }
    
    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: new Date(),
      });
      localStorage.setItem("vinopera_waitlist_last_submission", new Date().toISOString());
      setSubmitted(true);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background bg-dot-grid relative overflow-hidden flex flex-col">
      <Header />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl w-full text-center relative z-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-ramabhadra text-white mb-6 leading-tight">
            Join the <span className="text-primary">Revolution</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 font-poppins">
            Be the first to experience the future of digital creativity. 
            Sign up for early access and exclusive updates.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Joining..." : "Join Now"}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
              <p className="text-gray-400">We'll be in touch soon.</p>
            </motion.div>
          )}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-10 z-20"
        >
          <a href="/" className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-2">
            ← Back to Home
          </a>
        </motion.div>
      </div>
    </main>
  );
}
