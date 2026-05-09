import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import curendisImg from "../assets/reveals/curendis.png";
import grpImg from "../assets/reveals/grp.png";
import stromerImg from "../assets/reveals/stromer.png";
import june20Img from "../assets/reveals/june20.png";
import thomasMoreImg from "../assets/reveals/thomasmore.png";

const reveals = [
  {
    title: "Curendis",
    image: curendisImg,
    label: "Chiropractie",
    path: "/project/curendis"
  },
  {
    title: "Gedeon Richter Pro",
    image: grpImg,
    label: "Medische expertise",
    path: "/project/gedeon-richter-pro"
  },
  {
    title: "Stromer",
    image: stromerImg,
    label: "Spoed pedelecs",
    path: "/project/stromer"
  },
  {
    title: "June20",
    image: june20Img,
    label: "Creator agency",
    path: "/project/june20"
  },
  {
    title: "Thomas More",
    image: thomasMoreImg,
    label: "Onderwijs",
    path: "/project/thomas-more"
  },
  {
    title: "Oscare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1400",
    label: "Zorginstelling",
    path: "/project/oscare"
  },
];

export default function HoverReveal() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="projects-reveal" className="relative overflow-hidden py-24">
      {/* Full-bleed background images */}
      {reveals.map((item, idx) => (
        <AnimatePresence key={idx}>
          {hoveredIdx === idx && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0e0d29]/60" />
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Default background */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 z-0 ${
          hoveredIdx !== null ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundColor: 'transparent' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-0">
        {/* Section heading */}
        <div className="mb-16">
          <span className="text-[#9b6cff] font-bold uppercase tracking-widest text-[10px] mb-4 block">
            PROJECTEN TIJDENS MIJN STAGE
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-tight text-white">
            Mijn{" "}
            <span className="bg-gradient-to-r from-[#9b6cff] to-[#ff66c4] bg-clip-text text-transparent italic">
              projecten.
            </span>
          </h2>
        </div>

        {/* List */}
        <div className="space-y-0 border-t border-white/10 pt-4">
          {reveals.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/5 cursor-pointer transition-all duration-300 ${
                hoveredIdx !== null && hoveredIdx !== idx
                  ? "opacity-30"
                  : "opacity-100"
              }`}
            >
              <div className="flex items-center gap-6">
                <span className="text-[10px] text-white/30 font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3
                  className={`text-3xl md:text-5xl font-display font-bold tracking-tight transition-all duration-300 ${
                    hoveredIdx === idx
                      ? "bg-gradient-to-r from-[#9b6cff] to-[#ff66c4] bg-clip-text text-transparent translate-x-4"
                      : "text-white"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <span className="text-[10px] text-white/40">
                  {item.label}
                </span>
                <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                  VERKENNEN →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
