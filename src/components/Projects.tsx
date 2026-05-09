import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="assignments" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Intro — Two Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="text-[#9b6cff] font-bold uppercase tracking-widest text-[10px] mb-4 block">
              EINDOPDRACHT GRADUAAT
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none text-white">
              MIJN
              <br />
              <span className="bg-gradient-to-r from-[#9b6cff] to-[#ff66c4] bg-clip-text text-transparent italic">
                OPDRACHTEN.
              </span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-white/60 text-xs md:text-sm max-w-sm">
              Hier vind je mijn drie eindopdrachten van het Graduaat Digitale Vormgeving 2025-2026.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Featured Card — June20 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => navigate('/project/june20')}
            className="lg:col-span-2 cursor-pointer group relative overflow-hidden rounded-[2rem] bg-[#2b1b4d] p-8 md:p-12 shadow-xl min-h-[420px] flex flex-col justify-between transition-all duration-500 hover:bg-[#34225e]"
          >
            {/* Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#9b6cff] font-bold uppercase tracking-widest text-[8px]">PROJECT 01</span>
                <motion.div whileHover={{ rotate: 45 }} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <ArrowUpRight size={14} className="text-white" />
                </motion.div>
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-tight text-white mb-4">
                A day in the
                <br />
                life of <span className="bg-gradient-to-r from-[#9b6cff] to-[#ff66c4] bg-clip-text text-transparent italic">JUNE20</span>
              </h3>
              <p className="text-white/60 text-xs max-w-xs">
                Volg een typische werkdag mee op het kantoor van JUNE20.
              </p>
            </div>

            {/* Image Container Placeholder to match screenshot */}
            <div className="relative z-10 mt-8 rounded-2xl overflow-hidden h-40 bg-gradient-to-b from-white/20 to-[#1e1e1e] flex items-end p-4">
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-black/40 text-[8px] font-bold uppercase tracking-wider text-white border border-white/10">Productie</div>
                <div className="px-3 py-1 rounded-full bg-black/40 text-[8px] font-bold uppercase tracking-wider text-white border border-white/10">Cultuur</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Card — Curendis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              onClick={() => navigate('/project/curendis')}
              className="group cursor-pointer relative rounded-[2rem] bg-[#1a1c29] p-8 shadow-xl flex-1 flex flex-col justify-center transition-all duration-500 hover:bg-[#222536]"
            >
              <div className="w-8 h-8 rounded-full bg-[#2a2c40] flex items-center justify-center mb-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9b6cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
              </div>
              <span className="text-[#9b6cff] font-bold uppercase tracking-widest text-[8px] mb-2 block">PROJECT 02</span>
              <h3 className="text-2xl font-display font-bold tracking-tighter text-white mb-2">Curendis</h3>
              <p className="text-white/60 text-[10px] leading-relaxed">
                Bekijk de reis van een UGO stolsels via 3D visuals.
              </p>
            </motion.div>

            {/* Card — Poster Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group cursor-pointer relative rounded-[2rem] bg-[#1e1726] p-8 shadow-xl flex-1 flex flex-col justify-center transition-all duration-500 hover:bg-[#281e33]"
            >
              <div className="w-8 h-8 rounded-full bg-[#30253d] flex items-center justify-center mb-6">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff66c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
              </div>
              <span className="text-[#9b6cff] font-bold uppercase tracking-widest text-[8px] mb-2 block">PROJECT 03</span>
              <h3 className="text-2xl font-display font-bold tracking-tighter text-white mb-2">Poster Design</h3>
              <p className="text-white/60 text-[10px] leading-relaxed">
                Ontdek mijn grafisch ontworpen poster voor deze organisatie.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
