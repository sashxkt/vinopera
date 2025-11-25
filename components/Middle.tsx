"use client";

import { motion } from "framer-motion";

export default function Middle() {
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
      id="features"
      className="min-h-screen w-[90%] mx-auto rounded-[40px] relative overflow-hidden flex flex-col justify-center py-20 my-8 bg-background border-2 border-border shadow-xl"
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

      {/* MAIN CONTENT CONTAINER */}
      <div className="w-full px-6 md:px-10 lg:px-20 relative z-10">
        
        {/* HEADER PILLS */}
        <div className="flex gap-4 mb-12 justify-center md:justify-start">
          <div className="bg-card border border-border px-6 py-2 rounded-full shadow-sm text-card-foreground font-medium text-sm">
            VinOpera
          </div>
          <div className="bg-primary px-6 py-2 rounded-full shadow-sm text-white font-medium text-sm">
            Core Product Modules
          </div>
        </div>

        {/* TOP GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 auto-rows-fr">
          {/* Card 1: Canvas Layer */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              animate={floatAnimation(0)}
              className="bg-card rounded-[32px] p-8 shadow-sm border border-border h-full flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground font-ramabhadra">Canvas Layer</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Infinite canvas with live AI overlays. Drag, resize, group, and organize your thoughts visually.
              </p>
            </motion.div>
          </motion.div>

          {/* Card 2: Collaboration */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div
              animate={floatAnimation(0.5)}
              className="bg-card rounded-[32px] p-8 shadow-sm border border-border h-full flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground font-ramabhadra">Collaboration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Real-time multiplayer editing, comments, threads, and seamless sharing across devices.
              </p>
            </motion.div>
          </motion.div>

          {/* Card 3: AI Agent Layer (Tall) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="md:row-span-2"
          >
            <motion.div
              animate={floatAnimation(1)}
              className="bg-white rounded-[32px] p-8 shadow-md border border-border h-full flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-xl shadow-sm border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black font-ramabhadra">AI Agent Layer</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Context-aware chat that understands your active canvas.
              </p>
              <ul className="text-sm text-gray-600 leading-relaxed mt-4 space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Auto-tagging & embedding
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Research & Coding agents
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Data analysis & Graph gen
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Meeting notes & Q&A
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Card 4: File Intelligence (Spans 2 cols) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="md:col-span-2"
          >
            <motion.div
              animate={floatAnimation(1.5)}
              className="bg-card rounded-[32px] p-8 shadow-sm border border-border h-full flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
               <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-card-foreground font-ramabhadra">File Intelligence</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-[80%]">
                Upload PDF, DOCX, CSV, Audio, or Video. We automatically parse, chunk, and visualize them as cards. Use "Context Mode" to chat with your files instantly.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* MIDDLE ROW: VIDEO TUTORIAL */}
        <div className="mb-6">
          <motion.div
             initial={{ scale: 0.95, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div
              animate={floatAnimation(0.2)}
              className="w-full rounded-[48px] overflow-hidden shadow-lg relative h-[400px] md:h-[500px] bg-black flex items-center justify-center border border-border"
            >
               <div className="text-center z-10">
                 <h2 className="text-[40px] md:text-[80px] font-ramabhadra leading-tight text-white">
                   See VinOpera<br/>in Action
                 </h2>
               </div>
            </motion.div>
          </motion.div>
        </div>

        {/* REVISED BOTTOM LAYOUT IMPLEMENTATION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
             {/* Code Execution */}
             <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
             >
                <motion.div
                  animate={floatAnimation(0.8)}
                  className="bg-card rounded-[32px] p-8 shadow-sm border border-border h-full flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                   <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      </svg>
                   </div>
                   <h3 className="text-xl font-bold text-card-foreground font-ramabhadra">Code Execution</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     In-browser sandbox for Python & JS. Generate graphs, clean data, and visualize results instantly.
                   </p>
                </motion.div>
             </motion.div>

             {/* Content Creation */}
             <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
             >
                <motion.div
                  animate={floatAnimation(1.2)}
                  className="bg-card rounded-[32px] p-8 shadow-sm border border-border h-full flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                   <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                      </svg>
                   </div>
                   <h3 className="text-xl font-bold text-card-foreground font-ramabhadra">Content Creation</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     One-click blogs, scripts, and reports. Use visual templates and AI layout suggestions.
                   </p>
                </motion.div>
             </motion.div>

             {/* Workspace OS */}
             <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
             >
                <motion.div
                  animate={floatAnimation(1.6)}
                  className="bg-card rounded-[32px] p-8 shadow-sm border border-border h-full flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                   <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                      </svg>
                   </div>
                   <h3 className="text-xl font-bold text-card-foreground font-ramabhadra">Workspace OS</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">
                     Projects, versioning, autosave, and global search across all your canvases.
                   </p>
                </motion.div>
             </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

