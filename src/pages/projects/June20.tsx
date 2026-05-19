import { useState, useEffect } from "react";
import ProjectLayout from "../../components/ProjectLayout";
import TabCarousel from "../../components/TabCarousel";

// Hero
import heroBanner from "../../assets/banner_designs_pagina's/JUNE20_Banner_text.png";

// Headers
import header1 from "../../assets/WEBSITE BESTANDEN/JUNE20/Headers/Wireframe - 1.png";
import header4 from "../../assets/WEBSITE BESTANDEN/JUNE20/Headers/Wireframe - 4.png";
import header7 from "../../assets/WEBSITE BESTANDEN/JUNE20/Headers/Wireframe - 7.png";

// Footers
import footer1 from "../../assets/WEBSITE BESTANDEN/JUNE20/Footer/Footer.png";
import footer2 from "../../assets/WEBSITE BESTANDEN/JUNE20/Footer/Footer 2.png";
import footer3 from "../../assets/WEBSITE BESTANDEN/JUNE20/Footer/Footer 3.png";
import footer4 from "../../assets/WEBSITE BESTANDEN/JUNE20/Footer/Footer 4.png";
import footer5 from "../../assets/WEBSITE BESTANDEN/JUNE20/Footer/Footer 5.png";

// Motion Vacature videos
import anim1 from "../../assets/WEBSITE BESTANDEN/JUNE20/Motion Vacature/BDA_ANIM_1.mp4";
import anim2 from "../../assets/WEBSITE BESTANDEN/JUNE20/Motion Vacature/BDA_ANIM_2.mp4";
import anim3 from "../../assets/WEBSITE BESTANDEN/JUNE20/Motion Vacature/BDA_ANIM_3.mp4";
import vacature4x5 from "../../assets/WEBSITE BESTANDEN/JUNE20/Motion Vacature/Vacature_BD_4x5.mp4";

const headerTabs = [
  { label: "Headers", images: [header1, header4, header7] },
];

const footerTabs = [
  { label: "Footers", images: [footer1, footer2, footer3, footer4, footer5] },
];

const motionVideos = [
  { label: "BDA Anim 1",   src: anim1 },
  { label: "BDA Anim 2",   src: anim2 },
  { label: "BDA Anim 3",   src: anim3 },
  { label: "Vacature 4x5", src: vacature4x5 },
];

function VideoSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {motionVideos.map((v, i) => (
          <button
            key={v.label}
            onClick={() => setActive(i)}
            className={`text-xs font-bold transition-colors ${i === active ? "text-white" : "text-white/40 hover:text-white/70"}`}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div className="relative bg-[#1e1440] rounded-xl flex-grow flex items-center justify-center p-4 min-h-[280px]">
        <video
          key={motionVideos[active].src}
          src={motionVideos[active].src}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="max-h-[360px] w-auto rounded-lg shadow-lg object-contain"
        />
      </div>
    </div>
  );
}

export default function June20() {
  useEffect(() => { document.title = "JUNE20 — Brent Demulder"; }, []);
  return (
    <ProjectLayout currentProject="JUNE20">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#f05a28] mb-2 block bg-[#f05a28]/20 w-fit px-3 py-1 rounded-full border border-[#f05a28]/30">
          STAGEPROJECT
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f05a28] to-[#ff9a6c]">
          JUNE20
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">
          Interne projecten voor JUNE20 zelf — motion designs voor een vacature, headers en footers voor de vernieuwde website.
        </p>
      </div>

      {/* Hero */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative">
        <img loading="lazy" src={heroBanner} alt="JUNE20" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Project info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-sm text-white/70 space-y-4 leading-relaxed">
            <p>
              Voor <span className="text-[#f05a28] font-bold">JUNE20</span> zelf heb ik ook een paar opdrachten mogen doen. Waaronder een <span className="text-[#f05a28] font-bold">motion vacature</span> voor een nieuwe brand designer — vier animaties die de sfeer van het bureau neerzetten.
            </p>
            <p>
              Daarna heb ik ook <span className="text-[#f05a28] font-bold">headers en footers</span> ontworpen voor de vernieuwde JUNE20 website. Verschillende varianten, zodat het team kon kiezen welke het best bij de nieuwe huisstijl aansluit.
            </p>
            <p>
              JUNE20 is een Belgisch creatief bureau dat zich profileert als: <span className="text-[#f05a28] font-bold">"Small enough to CARE and big enough to MAKE IT HAPPEN."</span>
            </p>
          </div>
        </div>

        {/* Motion Vacature */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Motion Vacature:</h3>
          <VideoSection />
        </div>

        {/* Headers */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Headers:</h3>
          <TabCarousel tabs={headerTabs} aspectRatio="auto" />
        </div>

        {/* Footers */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Footers:</h3>
          <TabCarousel tabs={footerTabs} aspectRatio="auto" />
        </div>

      </div>
    </ProjectLayout>
  );
}
