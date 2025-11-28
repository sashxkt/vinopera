"use client";

import { motion } from "framer-motion";

export default function Bottom() {
  const floatAnimation = (delay = 0) => ({
    y: [0, -10, 0],
    rotate: [0, 0.5, -0.5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    } as const,
  });

  return (
    <motion.section
      id="explore"
      className="min-h-[90vh] w-[90%] mx-auto rounded-[40px] relative overflow-hidden flex flex-col my-8 bg-background border-2 border-border shadow-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
           style={{ 
             backgroundImage: "radial-gradient(#333 1px, transparent 1px)", 
             backgroundSize: "24px 24px" 
           }} 
      />

      {/* MAIN CONTENT */}
      <div className="w-full px-6 md:px-10 lg:px-20 relative z-10 flex-1 flex flex-col justify-center overflow-y-auto py-10">
        
        {/* HERO CARD - Aligned to Right */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          {/* NEW TOP LEFT CARD: Core Value Proposition */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/3"
          >
            <motion.div
              animate={floatAnimation(0.5)}
              className="bg-card rounded-[40px] p-8 shadow-sm border border-border h-full flex flex-col justify-center"
            >
              <h2 className="text-2xl font-bold text-card-foreground mb-4 font-ramabhadra">Why VinOpera?</h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                We merge the best of <strong>Figma</strong>'s visual freedom, <strong>tldraw</strong>'s infinite canvas, and <strong>ChatGPT</strong>'s intelligence into one seamless OS.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              animate={floatAnimation(0)}
              className="bg-card rounded-[40px] p-10 md:p-14 shadow-md border border-border w-full"
            >
              <h1 className="text-[40px] md:text-[80px] font-bold text-card-foreground leading-[0.9] tracking-tight mb-4 font-ramabhadra">
                Every Idea
              </h1>
              <div className="flex flex-col items-start gap-6">
                <p className="text-xl text-gray-500 font-medium ml-1">Deserves its canvas</p>
                <button className="self-end px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full shadow-lg transition-all hover:scale-105">
                  Join the creators
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* STATISTICS CARDS - Updated to Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              amount: "AI",
              label: "Models",
              description: "Powered by GPT-5, Claude 3.5, and Gemini 2.0 for unmatched intelligence.",
            },
            {
              amount: "Real",
              label: "Time",
              description: "Supabase Realtime & WebRTC ensure seamless multiplayer collaboration.",
            },
            {
              amount: "Secure",
              label: "Enterprise",
              description: "Enterprise-grade encryption, user isolation, and strict data policies.",
            },
            {
              amount: "<4s",
              label: "Latency",
              description: "Optimized for speed. No lag, just pure flow state performance.",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              <motion.div
                animate={floatAnimation(index * 0.5)}
                className="bg-card rounded-[32px] overflow-hidden shadow-sm border border-border h-full flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="bg-white/50 p-6 flex items-center gap-4 h-[120px] border-b border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-xl border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.216-.584-7.499-1.632z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-black font-ramabhadra">{stat.amount}</span>
                    <span className="text-[10px] font-medium text-gray-500 leading-tight uppercase tracking-wide border-l border-gray-300 pl-2 ml-1">
                      {stat.label}
                    </span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 bg-card flex-1">
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="w-full z-20 shrink-0 mt-auto"
      >
        <div className="bg-card border-t border-border w-full p-6 md:px-10 lg:px-20 flex flex-wrap items-center justify-between gap-4">
          <button className="px-8 py-2 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition text-sm shadow-sm">
            Thank You
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <span className="bg-gray-50 px-6 py-2 rounded-full text-xs font-medium text-gray-600 min-w-[180px] text-center border border-gray-200">123 Anywhere St., Any City</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <span className="bg-gray-50 px-6 py-2 rounded-full text-xs font-medium text-gray-600 min-w-[120px] text-center border border-gray-200">+1234567890</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="bg-gray-50 px-6 py-2 rounded-full text-xs font-medium text-gray-600 min-w-[180px] text-center border border-gray-200">hello@reallygreatsite.com</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
