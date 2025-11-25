"use client";

import { motion } from "framer-motion";

export default function Pricing() {
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
      id="pricing"
      className="min-h-[90vh] w-[90%] mx-auto rounded-[40px] flex flex-col overflow-y-auto relative mt-8 pb-10 bg-background border-2 border-border shadow-xl"
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

        {/* Pricing Heading Card */}
        <div className="mb-12 mt-16 flex justify-center relative z-10">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-2/3 px-6"
            >
                <motion.div
                    animate={floatAnimation(0)}
                    className="bg-card rounded-[40px] p-10 md:p-14 shadow-sm border border-border text-center relative overflow-hidden"
                >
                    <h2 className="text-[40px] md:text-[70px] font-bold text-card-foreground leading-[0.9] tracking-tight mb-4 font-ramabhadra">
                        Pricing Plans
                    </h2>
                    <p className="text-xl text-gray-600 font-medium max-w-lg mx-auto">
                        Choose the perfect plan for your creative journey.
                    </p>
                </motion.div>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10 lg:px-20 pb-10 relative z-10">
             {/* Pricing - 3 Tiers */}
             
                 {/* Starter */}
                 <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                 >
                   <motion.div
                     animate={floatAnimation(0.5)}
                     className="bg-card rounded-[32px] p-8 shadow-sm h-full flex flex-col justify-between border border-border hover:shadow-md transition-shadow"
                   >
                     <div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-2 font-ramabhadra">Free Tier</h3>
                        <div className="text-4xl font-bold text-card-foreground mb-4">₹0</div>
                        <p className="text-sm text-gray-600 mb-6">Perfect for students and hobbyists.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Limited Canvases
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Basic AI Access
                            </li>
                            <li className="flex items-center text-sm text-gray-700">
                                <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                No Code Execution
                            </li>
                        </ul>
                     </div>
                     <button className="w-full py-3 rounded-full border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors">
                        Get Started
                     </button>
                   </motion.div>
                 </motion.div>

                 {/* Creator */}
                 <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                    className="relative"
                 >
                   <motion.div
                     animate={floatAnimation(2)}
                     className="rounded-[32px] p-8 shadow-md h-full flex flex-col justify-between relative z-10 border border-primary/20"
                     style={{ background: "linear-gradient(135deg, #FFF5EB 0%, #FFE4C4 100%)" }}
                   >
                     <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">POPULAR</div>
                     <div>
                        <h3 className="text-2xl font-bold text-black mb-2 font-ramabhadra">Creator</h3>
                        <div className="text-4xl font-bold text-black mb-4">₹499<span className="text-lg font-normal opacity-70">/mo</span></div>
                        <p className="text-sm text-gray-700 mb-6">For power users and creators.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm text-gray-800">
                                <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Unlimited Canvases
                            </li>
                            <li className="flex items-center text-sm text-gray-800">
                                <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Full AI Access & Code Execution
                            </li>
                            <li className="flex items-center text-sm text-gray-800">
                                <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Templates & Export
                            </li>
                        </ul>
                     </div>
                     <button className="w-full py-3 rounded-full bg-black text-white font-bold hover:bg-gray-800 transition-colors shadow-sm">
                        Start Free Trial
                     </button>
                   </motion.div>
                 </motion.div>

                 {/* Pro Team */}
                 <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                 >
                   <motion.div
                     animate={floatAnimation(1)}
                     className="bg-zinc-900 rounded-[32px] p-8 shadow-lg h-full flex flex-col justify-between text-white border border-gray-800"
                   >
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-ramabhadra">Pro Team</h3>
                        <div className="text-4xl font-bold text-white mb-4">₹1499<span className="text-lg font-normal opacity-70">/user</span></div>
                        <p className="text-sm text-gray-400 mb-6">For small teams and agencies.</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm text-gray-300">
                                <svg className="w-4 h-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Real-time Collaboration
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <svg className="w-4 h-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Team Canvas & Shared Assets
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <svg className="w-4 h-4 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Admin Controls
                            </li>
                        </ul>
                     </div>
                     <button className="w-full py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                        Contact Sales
                     </button>
                   </motion.div>
                 </motion.div>
        </div>
    </motion.section>
  );
}
