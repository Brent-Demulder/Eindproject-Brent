import { useEffect } from "react";
import { FileText, ExternalLink } from "lucide-react";
import ProjectLayout from "../../components/ProjectLayout";
import TabCarousel from "../../components/TabCarousel";

// Hero
import heroBanner from "../../assets/banner_designs_pagina's/GRP_Banner_text.png";

// Pagina's
import pageContent from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Pagina's/GR - Content detailpagina.png";
import pageMed from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Pagina's/GR - Geneesmiddel detailpagina.png";

// Pop-ups
import popLogin from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Pop-ups/Login pop-up.png";
import popFout from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Pop-ups/Foutmeldingen.png";
import popBevestig from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Pop-ups/Bevestigingsboodschap.png";

// Cards
import cardMetBeeldRoze from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Cards/GR_Template_MetBeeld_Roze.png";
import cardZonderBeeldRoze from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Cards/GR_Template_ZonderBeeld_Roze.png";
import cardZonderBeeldBlauw from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Cards/GR_Template_ZonderBeeld_Blauw.png";
import cardMetBeeldBlauw from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Cards/GR_Template_MetBeeld_Blauw.png";
import cardZonderBeeldDonker from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Cards/GR_Template_ZonderBeeld_DonkerBlauw.png";
import cardAfbeeldingen from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Cards/Afbeeldingen zonder cut.png";

// Grafieken (clean filenames only)
import grafLenzetto1 from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Grafieken/Lenzetto 1.png";
import grafFrans from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Grafieken/Frans.png";
import grafLenzetto2 from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Grafieken/Lenzetto 2 - Nederlands.png";
import grafFrans3 from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Grafieken/Frans - 3.png";
import grafFrans1 from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Grafieken/Frans - 1.png";

// PDFs
import pdfEvenementen from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Pagina's/Landingspagina - evenementen pagina.pdf";
import pdf404 from "../../assets/WEBSITE BESTANDEN/Gedeon Richter Pro/Pagina's/404 pagina.pdf";

const paginasTabs = [
  { label: "Pagina's", images: [pageContent, pageMed] },
];

const popupTabs = [
  { label: "Pop-ups", images: [popLogin, popFout, popBevestig] },
];

const cardTabs = [
  { label: "Cards", images: [cardMetBeeldRoze, cardZonderBeeldRoze, cardMetBeeldBlauw, cardZonderBeeldBlauw, cardZonderBeeldDonker, cardAfbeeldingen] },
];

const grafiekenTabs = [
  { label: "Grafieken", images: [grafLenzetto1, grafLenzetto2, grafFrans, grafFrans1, grafFrans3] },
];

export default function GedeonRichterPro() {
  useEffect(() => { document.title = "Gedeon Richter Pro — Brent Demulder"; }, []);
  return (
    <ProjectLayout currentProject="Gedeon Richter Pro">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#9b6cff] mb-2 block bg-[#9b6cff]/20 w-fit px-3 py-1 rounded-full border border-[#9b6cff]/30">
          STAGEPROJECT
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9b6cff] to-[#ff66c4]">
          Gedeon Richter Pro
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">
          UX/UI design voor een exclusief medisch platform voor zorgverleners — pagina-designs, content blokken, cards, grafieken en pop-ups.
        </p>
      </div>

      {/* Hero */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative">
        <img loading="lazy" src={heroBanner} alt="Gedeon Richter Pro" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Project info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-sm text-white/70 space-y-4 leading-relaxed">
            <p>
              Dit was mijn eerste project bij JUNE20 — een puur <span className="text-[#9b6cff] font-bold">UX/UI project</span>. We moesten een extensie maken van de bestaande <span className="text-[#9b6cff] font-bold">Gedeon Richter website</span>, exclusief voor dokters en verplegers met een RIZIV-nummer.
            </p>
            <p>
              Het platform bundelt <span className="text-[#9b6cff] font-bold">medische en wetenschappelijke informatie</span> over vrouwengezondheid: contraceptie, endometriose, fertiliteit, menopauze en meer.
            </p>
            <p>
              Ik mocht <span className="text-[#9b6cff] font-bold">nieuwe pagina's</span> en <span className="text-[#9b6cff] font-bold">content blokken</span> designen. De speciale pagina's — de <span className="text-[#9b6cff] font-bold">404-pagina</span> en de <span className="text-[#9b6cff] font-bold">evenementenpagina</span> — heb ik volledig zelf ontworpen. Ook het favicon logo is van mijn hand. Het moment dat mijn designs op een echte professionele site verschenen gaf me echt een voldaan gevoel.
            </p>
          </div>
        </div>

        {/* Pagina's */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Pagina's:</h3>
          <TabCarousel tabs={paginasTabs} aspectRatio="auto" />
        </div>

        {/* Cards */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Cards:</h3>
          <TabCarousel tabs={cardTabs} aspectRatio="auto" />
        </div>

        {/* Pop-ups */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Pop-ups:</h3>
          <TabCarousel tabs={popupTabs} aspectRatio="auto" />
        </div>

        {/* Grafieken — full width */}
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Grafieken:</h3>
          <TabCarousel tabs={grafiekenTabs} aspectRatio="auto" />
        </div>

        {/* PDF downloads */}
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Speciale pagina's:</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={pdfEvenementen}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <FileText size={40} className="text-[#9b6cff]/60 group-hover:text-[#9b6cff] transition-colors" />
              <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors text-center">Evenementenpagina</span>
              <ExternalLink size={12} className="text-white/30" />
            </a>
            <a
              href={pdf404}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <FileText size={40} className="text-[#9b6cff]/60 group-hover:text-[#9b6cff] transition-colors" />
              <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors text-center">404 Pagina</span>
              <ExternalLink size={12} className="text-white/30" />
            </a>
          </div>
        </div>

      </div>
    </ProjectLayout>
  );
}
