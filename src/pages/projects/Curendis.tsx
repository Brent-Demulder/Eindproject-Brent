import { useEffect } from "react";
import { FileText, ExternalLink } from "lucide-react";
import ProjectLayout from "../../components/ProjectLayout";

// Hero
import heroBanner from "../../assets/banner_designs_pagina's/Curendis_Banner_text.png";

// Low-Fi PDFs
import lowV1 from "../../assets/WEBSITE BESTANDEN/Curendis/Low-FI/LO_FI_Onepager - V1.pdf";
import lowV2 from "../../assets/WEBSITE BESTANDEN/Curendis/Low-FI/LO_FI_Onepager - V2.pdf";
import lowV3 from "../../assets/WEBSITE BESTANDEN/Curendis/Low-FI/LO_FI_Onepager - V3.pdf";
import lowV4 from "../../assets/WEBSITE BESTANDEN/Curendis/Low-FI/LO_FI_Onepager - V4.pdf";

// Mid-Fi PDFs
import midV1 from "../../assets/WEBSITE BESTANDEN/Curendis/Mid-Fi/mid_FI_Homepage - V1.pdf";
import midV2 from "../../assets/WEBSITE BESTANDEN/Curendis/Mid-Fi/mid-FI_Homepage - V2.pdf";
import midV3 from "../../assets/WEBSITE BESTANDEN/Curendis/Mid-Fi/Mid-FI_Homepage - V3.pdf";
import midV4 from "../../assets/WEBSITE BESTANDEN/Curendis/Mid-Fi/Mid-FI_Homepage - V4.pdf";

// High-Fi PDFs
import highV5 from "../../assets/WEBSITE BESTANDEN/Curendis/High-Fi/Mid-FI_Homepage - V5.pdf";
import highV6 from "../../assets/WEBSITE BESTANDEN/Curendis/High-Fi/MID_FI_Homepage - V6.pdf";
import highV7 from "../../assets/WEBSITE BESTANDEN/Curendis/High-Fi/MID_FI_Homepage - V7.pdf";
import highV71 from "../../assets/WEBSITE BESTANDEN/Curendis/High-Fi/MID_FI_Homepage - V7.1.pdf";
import highV8 from "../../assets/WEBSITE BESTANDEN/Curendis/High-Fi/MID_FI_Homepage - V8.pdf";
import highV9 from "../../assets/WEBSITE BESTANDEN/Curendis/High-Fi/MID_FI_Homepage - V9.pdf";

interface PdfLinkProps {
  href: string;
  label: string;
}

function PdfLink({ href, label }: PdfLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group min-w-[90px]"
    >
      <FileText size={28} className="text-[#9b6cff]/60 group-hover:text-[#9b6cff] transition-colors" />
      <span className="text-[10px] font-bold text-white/60 group-hover:text-white transition-colors text-center leading-tight">{label}</span>
      <ExternalLink size={10} className="text-white/20" />
    </a>
  );
}

export default function Curendis() {
  useEffect(() => { document.title = "Curendis — Brent Demulder"; }, []);
  return (
    <ProjectLayout currentProject="Curendis">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#9b6cff] mb-2 block bg-[#9b6cff]/20 w-fit px-3 py-1 rounded-full border border-[#9b6cff]/30">
          EINDPROJECT
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9b6cff] to-[#ff66c4]">
          Curendis
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">
          Volledige UX/UI redesign van de Curendis website — van low-fi wireframes over mid-fi iteraties tot high-fi designs. In totaal 14 versies van de homepage.
        </p>
      </div>

      {/* Hero */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative">
        <img loading="lazy" src={heroBanner} alt="Curendis" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Project info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-sm text-white/70 space-y-4 leading-relaxed">
            <p>
              Curendis is mijn recentste project. De bedoeling was de website volledig opnieuw aan te pakken — een puur <span className="text-[#9b6cff] font-bold">UX/UI</span> gerichte opdracht. Na een korte briefing en brand guide begon ik met vele <span className="text-[#9b6cff] font-bold">low-fi wireframes</span>.
            </p>
            <p>
              Daaruit kon ik cherry-picken om zo <span className="text-[#9b6cff] font-bold">mid-fi designs</span> te realiseren. Michiel was ondertussen ook zelf bezig, dus voor mijn <span className="text-[#9b6cff] font-bold">high-fi designs</span> heb ik alles samengebracht en daar nog meerdere varianten op gemaakt.
            </p>
            <p>
              In totaal maakte ik ongeveer <span className="text-[#9b6cff] font-bold">14 landingspagina's</span>. Curendis is een <span className="text-[#9b6cff] font-bold">multidisciplinaire kliniek</span> gericht op het verbeteren van gezondheid en levenskwaliteit.
            </p>
          </div>
        </div>

        {/* Design process overview */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Design proces:</h3>
          <div className="flex flex-col gap-4 flex-grow justify-center">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#9b6cff]/20 border border-[#9b6cff]/40 flex items-center justify-center flex-shrink-0">
                <span className="text-[#9b6cff] text-[10px] font-bold">01</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Low-Fi Wireframes</p>
                <p className="text-white/50 text-xs">4 varianten — structuur en layout vastleggen</p>
              </div>
            </div>
            <div className="w-px h-4 bg-white/10 ml-4" />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#9b6cff]/20 border border-[#9b6cff]/40 flex items-center justify-center flex-shrink-0">
                <span className="text-[#9b6cff] text-[10px] font-bold">02</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Mid-Fi Designs</p>
                <p className="text-white/50 text-xs">4 varianten — stijl en componenten uitwerken</p>
              </div>
            </div>
            <div className="w-px h-4 bg-white/10 ml-4" />
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#ff66c4]/20 border border-[#ff66c4]/40 flex items-center justify-center flex-shrink-0">
                <span className="text-[#ff66c4] text-[10px] font-bold">03</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">High-Fi Designs</p>
                <p className="text-white/50 text-xs">6 varianten — finale afwerking en kleur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Low-Fi downloads */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-2">Low-Fi</h3>
          <p className="text-xs text-white/40 mb-6">Wireframes — 4 versies</p>
          <div className="flex flex-wrap gap-3">
            <PdfLink href={lowV1} label="V1" />
            <PdfLink href={lowV2} label="V2" />
            <PdfLink href={lowV3} label="V3" />
            <PdfLink href={lowV4} label="V4" />
          </div>
        </div>

        {/* Mid-Fi downloads */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-2">Mid-Fi</h3>
          <p className="text-xs text-white/40 mb-6">Homepage designs — 4 versies</p>
          <div className="flex flex-wrap gap-3">
            <PdfLink href={midV1} label="V1" />
            <PdfLink href={midV2} label="V2" />
            <PdfLink href={midV3} label="V3" />
            <PdfLink href={midV4} label="V4" />
          </div>
        </div>

        {/* High-Fi downloads — full width */}
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-2">High-Fi</h3>
          <p className="text-xs text-white/40 mb-6">Finale homepage designs — 6 versies</p>
          <div className="flex flex-wrap gap-3">
            <PdfLink href={highV5} label="V5" />
            <PdfLink href={highV6} label="V6" />
            <PdfLink href={highV7} label="V7" />
            <PdfLink href={highV71} label="V7.1" />
            <PdfLink href={highV8} label="V8" />
            <PdfLink href={highV9} label="V9" />
          </div>
        </div>

      </div>
    </ProjectLayout>
  );
}
