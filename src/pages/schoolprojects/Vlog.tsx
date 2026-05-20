import { useEffect } from "react";
import ProjectLayout from "../../components/ProjectLayout";

import vlogVideo from "../../assets/Schoolprojecten/Vlog_(Day_In_The_Life)/versie1.mp4";

export default function Vlog() {
  useEffect(() => { document.title = "Vlog — Brent Demulder"; }, []);
  return (
    <ProjectLayout currentProject="Vlog" type="opdracht">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#f05a28] mb-2 block bg-[#f05a28]/20 w-fit px-3 py-1 rounded-full border border-[#f05a28]/30">
          EINDOPDRACHT — VLOG
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f05a28] to-[#ff9a6c]">
          A day in the life of JUNE20
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">
          Een kijk achter de schermen bij JUNE20 — één volledige werkdag gevolgd van briefing tot aflevering.
        </p>
      </div>

      {/* Video player */}
      <div className="rounded-2xl overflow-hidden mb-12 bg-black relative">
        <video
          src={vlogVideo}
          controls
          playsInline
          preload="none"
          className="w-full max-h-[600px] object-contain"
        />
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Over de opdracht */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Over de opdracht:</h3>
          <div className="text-sm text-white/70 space-y-4 leading-relaxed">
            <p>
              Voor mijn eerste eindopdracht moest ik een <span className="text-[#f05a28] font-bold">vlog</span> maken die een dag op het stagekantoor van JUNE20 vastlegt.
            </p>
            <p>
              De bedoeling is om via beeld en geluid de <span className="text-[#f05a28] font-bold">sfeer, cultuur en het werkproces</span> van het bureau over te brengen naar medestudenten.
            </p>
          </div>
        </div>

        {/* Versie info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Versie:</h3>
          <div className="flex flex-col gap-4 flex-grow justify-center">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f05a28]/10 border border-[#f05a28]/20">
              <div className="w-8 h-8 rounded-full bg-[#f05a28]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#f05a28] text-[10px] font-bold">V1</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Versie 1 — Finale versie</p>
                <p className="text-white/50 text-xs">Definitieve montage</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ProjectLayout>
  );
}
