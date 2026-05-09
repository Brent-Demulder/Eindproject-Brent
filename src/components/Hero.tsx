import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl bg-gradient-to-br from-[#1a1438] to-[#120d2a] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 h-[600px] flex flex-col items-center justify-between border border-white/5 shadow-2xl relative overflow-hidden">
        
        {/* Subtle glow inside the container */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#251543]/40 to-transparent pointer-events-none"></div>

        {/* Top Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md z-10"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b6cff]">
            BRENT | EINDPROJECT
          </span>
        </motion.div>

        {/* Center Text (3D Placeholder) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="z-10 text-center"
        >
          <h1 className="text-xl md:text-3xl font-display font-bold tracking-[0.4em] text-white/30 uppercase">
            3D ASSET SLEEPING
          </h1>
        </motion.div>

        {/* Bottom Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-4 z-10"
        >
          <a
            href="#projects-reveal"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-secondary text-white font-bold text-sm shadow-lg hover:shadow-brand-accent/40 transition-all hover:scale-105"
          >
            Bekijk Projecten
          </a>
          <a
            href="#assignments"
            className="px-8 py-3 rounded-full bg-[#1e1e1e] border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all"
          >
            School opdrachten
          </a>
        </motion.div>
      </div>
    </section>
  );
}
