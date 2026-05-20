import { useEffect } from "react";
import { Play } from "lucide-react";
import ProjectLayout from "../../components/ProjectLayout";

export default function Case() {
  useEffect(() => { document.title = "Case — Brent Demulder"; }, []);
  return (
    <ProjectLayout currentProject="Case" type="opdracht">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#9b6cff] mb-2 block bg-[#9b6cff]/20 w-fit px-3 py-1 rounded-full border border-[#9b6cff]/30">
          EINDOPDRACHT — CASE
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9b6cff] to-[#ff66c4]">
          Case Study
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">
          Een diepgaande analyse van het Stromer project — van briefing en aanpak tot eindresultaat en reflectie.
        </p>
      </div>

      {/* Video placeholder */}
      <div className="rounded-2xl mb-12 bg-[#1e1440] border border-[#9b6cff]/10 flex flex-col items-center justify-center gap-5 py-20">
        <Play size={56} className="text-[#9b6cff]/40 stroke-1" />
        <div className="text-center">
          <p className="text-white font-bold mb-1">Video presentatie</p>
          <p className="text-white/40 text-sm">Beschikbaar op aanvraag</p>
        </div>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Over de opdracht:</h3>
          <div className="text-sm text-white/70 space-y-4 leading-relaxed">
            <p>
              Voor de case werk ik het <span className="text-[#9b6cff] font-bold">Stromer project</span> grondig uit en analyseer ik het van briefing tot eindresultaat.
            </p>
            <p>
              Het traject, de keuzes en de reflectie worden gebundeld in een <span className="text-[#9b6cff] font-bold">video presentatie</span>.
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Format:</h3>
          <div className="flex flex-col gap-3 flex-grow justify-center">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#9b6cff]/10 border border-[#9b6cff]/20">
              <div className="w-2 h-2 rounded-full bg-[#9b6cff]" />
              <span className="text-white text-sm font-bold">MP4 — Video presentatie</span>
            </div>
          </div>
        </div>

      </div>
    </ProjectLayout>
  );
}
