import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, FileText } from "lucide-react";
import ProjectLayout from "../../components/ProjectLayout";

import poster1 from "../../assets/Schoolprojecten/Poster/Versie 1.png";
import poster2 from "../../assets/Schoolprojecten/Poster/Versie 2.png";
import poster3 from "../../assets/Schoolprojecten/Poster/Versie 3.png";
import poster4 from "../../assets/Schoolprojecten/Poster/Versie 4.png";
import posterFinaal from "../../assets/Schoolprojecten/Poster/Finale versie/2526_WPLOJ_DemulderB_Poster.pdf";

const posters = [
  { label: "Versie 1", src: poster1 },
  { label: "Versie 2", src: poster2 },
  { label: "Versie 3", src: poster3 },
  { label: "Versie 4", src: poster4 },
];

export default function Poster() {
  useEffect(() => { document.title = "Poster — Brent Demulder"; }, []);
  const [active, setActive] = useState(0);

  function prev() { setActive(i => (i - 1 + posters.length) % posters.length); }
  function next() { setActive(i => (i + 1) % posters.length); }

  return (
    <ProjectLayout currentProject="Poster" type="opdracht">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff66c4] mb-2 block bg-[#ff66c4]/20 w-fit px-3 py-1 rounded-full border border-[#ff66c4]/30">
          EINDOPDRACHT — POSTER
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9b6cff] to-[#ff66c4]">
          Beursposter JUNE20
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">
          Poster in de huisstijl van JUNE20 om op een beurs medeleerlingen te overtuigen om hier op stage te komen.
        </p>
      </div>

      {/* Finale poster */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff66c4] bg-[#ff66c4]/15 px-3 py-1 rounded-full border border-[#ff66c4]/30">
            Finale versie
          </span>
          <span className="text-white/30 text-xs">Versie 4</span>
        </div>
        <a
          href={posterFinaal}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#1e1440] rounded-2xl flex flex-col items-center justify-center gap-5 py-16 border border-[#ff66c4]/10 hover:border-[#ff66c4]/30 transition-colors"
        >
          <FileText size={56} className="text-[#ff66c4]/40 stroke-1 group-hover:text-[#ff66c4]/70 transition-colors" />
          <div className="text-center">
            <p className="text-white font-bold mb-1">Finale poster — PDF</p>
            <p className="text-white/40 text-sm">Klik om de PDF te openen</p>
          </div>
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff66c4]/15 border border-[#ff66c4]/30 text-[#ff66c4] font-bold text-sm group-hover:bg-[#ff66c4]/25 transition-colors">
            <ExternalLink size={13} /> Bekijk PDF
          </span>
        </a>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Over de opdracht:</h3>
          <div className="text-sm text-white/70 space-y-4 leading-relaxed">
            <p>
              Voor mijn derde eindopdracht moest ik een <span className="text-[#ff66c4] font-bold">beursposter</span> ontwerpen in de huisstijl van JUNE20.
            </p>
            <p>
              De poster wordt gebruikt op een <span className="text-[#ff66c4] font-bold">stagemarktkring</span> om medestudenten te overtuigen om bij JUNE20 stage te lopen.
            </p>
            <p>
              Ik maakte <span className="text-[#ff66c4] font-bold">vier versies</span> met kleine variaties in layout en kleurgebruik.
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Format:</h3>
          <div className="flex flex-col gap-3 flex-grow justify-center">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#ff66c4]/10 border border-[#ff66c4]/20">
              <div className="w-2 h-2 rounded-full bg-[#ff66c4]" />
              <span className="text-white text-sm font-bold">Print — Beursposter A1</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <span className="text-white/50 text-sm">4 versies — variaties in layout & kleur</span>
            </div>
          </div>
        </div>

      </div>

      {/* Alle versies carrousel */}
      <div>
        <h3 className="text-2xl font-display font-bold text-white mb-6">Alle versies</h3>

        {/* Version tabs */}
        <div className="flex justify-center gap-6 mb-6">
          {posters.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              className={`text-xs font-bold transition-colors ${i === active ? "text-white" : "text-white/30 hover:text-white/60"}`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Image + arrows */}
        <div className="relative bg-[#1e1440] rounded-2xl flex items-center justify-center p-6 min-h-[500px]">
          <img
            key={active}
            src={posters[active].src}
            alt={posters[active].label}
            className="max-h-[600px] w-auto object-contain rounded-lg shadow-2xl"
          />

          <button
            onClick={prev}
            className="absolute left-4 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-[#ff66c4]/30 transition-colors"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-[#ff66c4]/30 transition-colors"
          >
            <ArrowRight size={16} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {posters.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-[#ff66c4]" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>

    </ProjectLayout>
  );
}
