import { useEffect } from "react";
import { FileText, ExternalLink } from "lucide-react";
import ProjectLayout from "../../components/ProjectLayout";
import TabCarousel from "../../components/TabCarousel";

// Hero
import heroBanner from "../../assets/banner_designs_pagina's/Oscare_Banner_text.png";

// Banners
import bannerA from "../../assets/WEBSITE BESTANDEN/Oscare/Banners/Banner A.png";
import bannerB1 from "../../assets/WEBSITE BESTANDEN/Oscare/Banners/Banner B.1.png";
import bannerB2 from "../../assets/WEBSITE BESTANDEN/Oscare/Banners/Banner B.2.png";

// Posts — Kamp
import kamp1 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Leiding_Kamp/4x5_Oscare_Statisch_1.png";
import kamp2 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Leiding_Kamp/4x5_Oscare_Statisch_2.png";
import kamp3 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Leiding_Kamp/4x5_Oscare_Statisch_3.png";
import kamp4 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Leiding_Kamp/4x5_Oscare_Statisch_4.png";

// Posts — BBQ
import bbq1 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Ouders_BBQ/4x5_Oscare_Statisch_1.png";
import bbq2 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Ouders_BBQ/4x5_Oscare_Statisch_2.png";
import bbq3 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Ouders_BBQ/4x5_Oscare_Statisch_3.png";
import bbq4 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Ouders_BBQ/4x5_Oscare_Statisch_4.png";

// Posts — Nieuwjaar
import nieuw1 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Ouders_Nieuwjaar/4x5_Oscare_Statisch_1.png";
import nieuw2 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Ouders_Nieuwjaar/4x5_Oscare_Statisch_2.png";
import nieuw3 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Ouders_Nieuwjaar/4x5_Oscare_Statisch_3.png";
import nieuw4 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_Ouders_Nieuwjaar/4x5_Oscare_Statisch_4.png";

// Posts — School
import school1 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_School/4x5_Oscare_Statisch_1.png";
import school2 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_School/4x5_Oscare_Statisch_2.png";
import school3 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_School/4x5_Oscare_Statisch_3.png";
import school4 from "../../assets/WEBSITE BESTANDEN/Oscare/Posts/DG_School/4x5_Oscare_Statisch_4.png";

// PDFs (as links)
import landingLicht from "../../assets/WEBSITE BESTANDEN/Oscare/landingspagina/Landingspagina_Licht.pdf";
import landingDonker from "../../assets/WEBSITE BESTANDEN/Oscare/landingspagina/Landingspagina_Donker.pdf";
import rapport from "../../assets/WEBSITE BESTANDEN/Oscare/Rapport/Oscare_Rapport.pdf";

const postTabs = [
  { label: "Kamp",     images: [kamp1, kamp2, kamp3, kamp4] },
  { label: "BBQ",      images: [bbq1, bbq2, bbq3, bbq4] },
  { label: "Nieuwjaar",images: [nieuw1, nieuw2, nieuw3, nieuw4] },
  { label: "School",   images: [school1, school2, school3, school4] },
];

const bannerTabs = [
  { label: "Banners", images: [bannerA, bannerB1, bannerB2] },
];

export default function Oscare() {
  useEffect(() => { document.title = "Oscare — Brent Demulder"; }, []);
  return (
    <ProjectLayout currentProject="Oscare">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8cc63f] mb-2 block bg-[#8cc63f]/20 w-fit px-3 py-1 rounded-full border border-[#8cc63f]/30">
          STAGEPROJECT
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8cc63f] to-[#00adef]">
          Oscare
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">
          Oscare is een vzw die zich focust op het begeleiden van kinderen en jongeren. Mijn opdracht was een volledige digitale remarketingcampagne uitwerken voor de Fire Escape Room.
        </p>
      </div>

      {/* Hero */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative">
        <img loading="lazy" src={heroBanner} alt="Oscare" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Project info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-sm text-white/70 space-y-4 leading-relaxed">
            <p>
              De bedoeling van deze opdracht was om mijn <span className="text-[#8cc63f] font-bold">marketing skills</span> uit te breiden. Ik moest onderzoek doen naar Oscare — al een klant van JUNE20 — en een campagne verzinnen en uitwerken. Ik koos voor de <span className="text-[#8cc63f] font-bold">Fire Escape Truck</span>: een mobiele escape room die ze al hebben maar waarvoor nog weinig reclame is gemaakt.
            </p>
            <p>
              Ik heb research gedaan met behulp van <span className="text-[#8cc63f] font-bold">NotebookLM</span> en alles in een rapport gebundeld. Daarna maakte ik <span className="text-[#8cc63f] font-bold">banner designs</span> en <span className="text-[#8cc63f] font-bold">social media posts</span>, waarbij ik <span className="text-[#8cc63f] font-bold">A/B testing</span> gebruikte en vier verschillende thema's uitwerkte: Kamp, BBQ, Nieuwjaar en School.
            </p>
            <p>
              Als laatste maakte ik een <span className="text-[#8cc63f] font-bold">landingspagina</span> met een formulier om de truck te huren — beschikbaar in een licht en donker thema.
            </p>
          </div>
        </div>

        {/* Posts carousel */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Posts:</h3>
          <TabCarousel tabs={postTabs} aspectRatio="4/5" />
        </div>

        {/* Landingspagina */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Landingspagina:</h3>
          <div className="flex gap-4">
            <a
              href={landingLicht}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <FileText size={40} className="text-[#8cc63f]/60 group-hover:text-[#8cc63f] transition-colors" />
              <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors text-center">Licht thema</span>
              <ExternalLink size={12} className="text-white/30" />
            </a>
            <a
              href={landingDonker}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <FileText size={40} className="text-[#8cc63f]/60 group-hover:text-[#8cc63f] transition-colors" />
              <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors text-center">Donker thema</span>
              <ExternalLink size={12} className="text-white/30" />
            </a>
          </div>
        </div>

        {/* Rapport */}
        <a
          href={rapport}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-between hover:bg-white/10 transition-colors group"
        >
          <div className="max-w-[200px]">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Rapport:</h3>
            <p className="text-sm text-white/60">
              Strategie, KPI's, concurrentieanalyse en persona's — alles gebundeld in dit rapport.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FileText size={56} className="text-[#8cc63f]/50 stroke-1 group-hover:text-[#8cc63f] transition-colors" />
            <ExternalLink size={14} className="text-white/30 group-hover:text-white/60 transition-colors" />
          </div>
        </a>

        {/* Banners — volle breedte */}
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Banners:</h3>
          <TabCarousel tabs={bannerTabs} aspectRatio="auto" />
        </div>

      </div>
    </ProjectLayout>
  );
}
