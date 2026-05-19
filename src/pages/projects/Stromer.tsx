import { useState, useEffect } from "react";
import ProjectLayout from "../../components/ProjectLayout";
import TabCarousel from "../../components/TabCarousel";

// Hero
import heroBanner from "../../assets/banner_designs_pagina's/Stromer_Banner_text.png";

// Motion Designs — Tell (4x5)
import motionPersonal from "../../assets/WEBSITE BESTANDEN/Stromer/Motion Designs/Tell/Personal/4x5/4x5_Stromer_Motion_Personal.mp4";
import motionFinancial from "../../assets/WEBSITE BESTANDEN/Stromer/Motion Designs/Tell/Financial/4x5/4x5_Stromer_Motion_Financial.mp4";
import motionReputation from "../../assets/WEBSITE BESTANDEN/Stromer/Motion Designs/Tell/Reputation/4x5/4x5_Stromer_Motion_Reputation.mp4";

// Motion Designs — Sell (4x5)
import motionSellST1 from "../../assets/WEBSITE BESTANDEN/Stromer/Motion Designs/Sell/ST1_USPs_CTA_01_4x5.mp4";
import motionSellST2 from "../../assets/WEBSITE BESTANDEN/Stromer/Motion Designs/Sell/ST2_USPs_CTA_01_4x5.mp4";
import motionSellST3 from "../../assets/WEBSITE BESTANDEN/Stromer/Motion Designs/Sell/ST3_USPs_CTA_01_4x5.mp4";

// Tell — Statische posts (clean filenames)
import tellS1 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Statische posts/1x1_Stromer_Sta-Patrick__ST7__1-Beste_aankoop_d.png";
import tellS2 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Statische posts/1x1_Stromer_Sta-Christoph__ST3_-De_auto_is_verl.png";
import tellS3 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Statische posts/1x1_Stromer_Sta-Raphael__ST3__2-Beste_keuze_die.png";
import tellS4 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Statische posts/1x1_Stromer_Sta-Martin__ST5__17-Nooit_gedacht_d.png";
import tellS5 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Statische posts/1x1_Stromer_Sta-Jael__ST5__2335-Nooit_meer_wach.png";
import tellS6 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Statische posts/1x1_Stromer_Sta-Elly__ST2__3745-Elke_rit_is_een.png";
import tellS7 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Statische posts/1x1_Stromer_Sta-Olivier__ST2__1-Rijdt_zo_soepel.png";
import tellS8 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Statische posts/1x1_Stromer_Sta-Claudia__ST2__1-Op_kantoor_aank.png";
import tellS9 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Statische posts/1x1 Stromer_Static_Credebility_ZQ_2.png";

// Tell — Carrousels
import tellCF1 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Carrousels/1/1x1 Stromer_Carrousel_Financial_1.1.png";
import tellCF2 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Carrousels/1/1x1 Stromer_Carrousel_Financial_1.2.png";
import tellCF3 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Carrousels/1/1x1 Stromer_Carrousel_Financial_1.3.png";
import tellCC1 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Carrousels/2/1x1 Stromer_Carrousel_Credebility_1.1.png";
import tellCC2 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Carrousels/2/1x1 Stromer_Carrousel_Credebility_1.2.png";
import tellCC3 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Carrousels/2/1x1 Stromer_Carrousel_Credebility_1.3.png";
import tellCP1 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Carrousels/3/1x1 Stromer_Carrousel_Personality_1.1.png";
import tellCP2 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Carrousels/3/1x1 Stromer_Carrousel_Personality_1.2.png";
import tellCP3 from "../../assets/WEBSITE BESTANDEN/Stromer/Tell/Carrousels/3/1x1 Stromer_Carrousel_Personality_1.3.png";

// Sell — Statische posts
import sellS1 from "../../assets/WEBSITE BESTANDEN/Stromer/Sell/Statische posts/1x1 Stromer_Static_Sell_ST1.png";
import sellS2 from "../../assets/WEBSITE BESTANDEN/Stromer/Sell/Statische posts/1x1 Stromer_Static_Sell_ST2.png";
import sellS3 from "../../assets/WEBSITE BESTANDEN/Stromer/Sell/Statische posts/1x1 Stromer_Static_Sell_ST3.png";
import sellSMB from "../../assets/WEBSITE BESTANDEN/Stromer/Sell/Statische posts/1x1 Stromer_Static_Sell_MB_2.png";

// Sell — Carrousels
import sellC1 from "../../assets/WEBSITE BESTANDEN/Stromer/Sell/Carrousels/1x1 Stromer_Carrousel_Sell_ST3 1.1.png";
import sellC2 from "../../assets/WEBSITE BESTANDEN/Stromer/Sell/Carrousels/1x1 Stromer_Carrousel_Sell_ST3 1.2.png";
import sellC3 from "../../assets/WEBSITE BESTANDEN/Stromer/Sell/Carrousels/1x1 Stromer_Carrousel_Sell_ST3 1.3.png";
import sellC4 from "../../assets/WEBSITE BESTANDEN/Stromer/Sell/Carrousels/1x1 Stromer_Carrousel_Sell_ST3 1.4.png";

const tellTabs = [
  { label: "Statisch",     images: [tellS1, tellS2, tellS3, tellS4, tellS5, tellS6, tellS7, tellS8, tellS9] },
  { label: "Financial",    images: [tellCF1, tellCF2, tellCF3] },
  { label: "Credibility",  images: [tellCC1, tellCC2, tellCC3] },
  { label: "Personality",  images: [tellCP1, tellCP2, tellCP3] },
];

const sellTabs = [
  { label: "Statisch",  images: [sellS1, sellS2, sellS3, sellSMB] },
  { label: "Carrousel", images: [sellC1, sellC2, sellC3, sellC4] },
];

const tellVideos = [
  { label: "Personal",   src: motionPersonal },
  { label: "Financial",  src: motionFinancial },
  { label: "Reputation", src: motionReputation },
];

const sellVideos = [
  { label: "ST1", src: motionSellST1 },
  { label: "ST2", src: motionSellST2 },
  { label: "ST3", src: motionSellST3 },
];

function VideoSection({ videos }: { videos: { label: string; src: string }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {videos.map((v, i) => (
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
          key={videos[active].src}
          src={videos[active].src}
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

export default function Stromer() {
  useEffect(() => { document.title = "Stromer — Brent Demulder"; }, []);
  return (
    <ProjectLayout currentProject="Stromer">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#f05a28] mb-2 block bg-[#f05a28]/20 w-fit px-3 py-1 rounded-full border border-[#f05a28]/30">
          STAGEPROJECT
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f05a28] to-[#ff9a6c]">
          Stromer
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">
          Social media campagne voor Stromer speed pedelecs — Tell- en Sell-strategie uitgewerkt in statische posts, carousels en motion designs.
        </p>
      </div>

      {/* Hero */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative">
        <img loading="lazy" src={heroBanner} alt="Stromer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Project info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-sm text-white/70 space-y-4 leading-relaxed">
            <p>
              Voor <span className="text-[#f05a28] font-bold">Stromer</span> — een Zwitsers merk van speed pedelecs — maakte ik een volledige social media campagne op basis van een <span className="text-[#f05a28] font-bold">Tell & Sell strategie</span>.
            </p>
            <p>
              De <span className="text-[#f05a28] font-bold">Tell-campagne</span> focust op merkbeleving via testimonials en brand storytelling: personal, financial en reputation. De <span className="text-[#f05a28] font-bold">Sell-campagne</span> zet de USP's van de fietsmodellen in de kijker.
            </p>
            <p>
              Per strategie maakte ik <span className="text-[#f05a28] font-bold">statische posts</span>, <span className="text-[#f05a28] font-bold">carousels</span> en <span className="text-[#f05a28] font-bold">motion designs</span> in meerdere formaten.
            </p>
          </div>
        </div>

        {/* Tell Motion Designs */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Tell — Motion:</h3>
          <VideoSection videos={tellVideos} />
        </div>

        {/* Tell posts — full width */}
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Tell — Posts:</h3>
          <TabCarousel tabs={tellTabs} aspectRatio="1/1" />
        </div>

        {/* Sell Motion Designs */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Sell — Motion:</h3>
          <VideoSection videos={sellVideos} />
        </div>

        {/* Sell posts */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Sell — Posts:</h3>
          <TabCarousel tabs={sellTabs} aspectRatio="1/1" />
        </div>

      </div>
    </ProjectLayout>
  );
}
