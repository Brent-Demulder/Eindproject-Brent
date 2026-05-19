import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const ease = [0.25, 0.1, 0.25, 1] as const;

function VlogCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer"
    >
      <div className="h-52 relative overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f05a28]/50 via-[#f05a28]/20 to-transparent" />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full blur-3xl bg-[#f05a28]/25 transition-opacity duration-500 group-hover:opacity-150" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-5 left-6 right-16">
          <p className="text-white font-display font-bold text-lg leading-tight tracking-tight drop-shadow-lg">A day in the life of JUNE20</p>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 bg-black/30 flex items-center justify-center">
          <ArrowUpRight size={14} className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
      <div className="flex flex-col flex-grow p-6 gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#f05a28]">Vlog</span>
          <span className="text-[10px] text-white/20 font-bold">01</span>
        </div>
        <h3 className="text-xl font-display font-bold tracking-tight text-white leading-snug">
          A day in the life of JUNE20
        </h3>
        <p className="text-xs text-white/50 leading-relaxed flex-grow">
          Een inkijk in een werkdag op het kantoor van JUNE20 — van briefing tot aflevering.
        </p>
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {["Video", "Editing"].map(tag => (
            <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border text-[#f05a28cc] border-[#f05a2830] bg-[#f05a2810]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CaseCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer"
    >
      <div className="h-52 relative overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9b6cff]/50 via-[#9b6cff]/20 to-transparent" />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full blur-3xl bg-[#9b6cff]/25 transition-opacity duration-500 group-hover:opacity-150" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-5 left-6 right-16">
          <p className="text-white font-display font-bold text-lg leading-tight tracking-tight drop-shadow-lg">Case Study — Stromer</p>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 bg-black/30 flex items-center justify-center">
          <ArrowUpRight size={14} className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
      <div className="flex flex-col flex-grow p-6 gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#9b6cff]">Case Study</span>
          <span className="text-[10px] text-white/20 font-bold">02</span>
        </div>
        <h3 className="text-xl font-display font-bold tracking-tight text-white leading-snug">
          Case Study — Stromer
        </h3>
        <p className="text-xs text-white/50 leading-relaxed flex-grow">
          Een diepgaande analyse van het Stromer project — van briefing en aanpak tot eindresultaat.
        </p>
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {["MP4", "Case"].map(tag => (
            <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border text-[#9b6cffcc] border-[#9b6cff30] bg-[#9b6cff10]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PosterCard({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 cursor-pointer"
    >
      <div className="h-52 relative overflow-hidden bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff66c4]/50 via-[#ff66c4]/20 to-transparent" />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full blur-3xl bg-[#ff66c4]/25 transition-opacity duration-500 group-hover:opacity-150" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-5 left-6 right-16">
          <p className="text-white font-display font-bold text-lg leading-tight tracking-tight drop-shadow-lg">Beursposter JUNE20</p>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 bg-black/30 flex items-center justify-center">
          <ArrowUpRight size={14} className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
      <div className="flex flex-col flex-grow p-6 gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff66c4]">Poster</span>
          <span className="text-[10px] text-white/20 font-bold">03</span>
        </div>
        <h3 className="text-xl font-display font-bold tracking-tight text-white leading-snug">
          Beursposter JUNE20
        </h3>
        <p className="text-xs text-white/50 leading-relaxed flex-grow">
          Poster in de huisstijl van JUNE20 om op een beurs medeleerlingen te overtuigen om hier op stage te komen.
        </p>
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {["Print", "Illustratie"].map(tag => (
            <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border text-[#ff66c4cc] border-[#ff66c430] bg-[#ff66c410]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const navigate = useNavigate();

  const cards = [
    <VlogCard key="vlog" onClick={() => navigate("/opdracht/vlog")} />,
    <CaseCard key="case" onClick={() => navigate("/opdracht/case")} />,
    <PosterCard key="poster" onClick={() => navigate("/opdracht/poster")} />,
  ];

  return (
    <section id="assignments" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
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
            <p className="text-white/60 text-sm max-w-sm">
              Drie eindopdrachten van het Graduaat Digitale Vormgeving 2025-2026.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
            >
              {card}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
