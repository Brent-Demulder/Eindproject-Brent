import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectLayout from "../../components/ProjectLayout";
import TabCarousel from "../../components/TabCarousel";

// Hero
import heroBanner from "../../assets/banner_designs_pagina's/THMO_Banner_text.png";

// Verpleegkunde — Statisch (4x5)
import vStatic1 from "../../assets/WEBSITE BESTANDEN/THMO/Verpleegkunde/Statisch/4x5 Static 1.png";
import vStatic2 from "../../assets/WEBSITE BESTANDEN/THMO/Verpleegkunde/Statisch/4x5 Static 2.png";
import vStatic3 from "../../assets/WEBSITE BESTANDEN/THMO/Verpleegkunde/Statisch/4x5 Static 3.png";

// Verpleegkunde — Carrousel (4x5)
import vCarr1 from "../../assets/WEBSITE BESTANDEN/THMO/Verpleegkunde/Carrousel/4x5 Carrousel 1.png";
import vCarr2 from "../../assets/WEBSITE BESTANDEN/THMO/Verpleegkunde/Carrousel/4x5 Carrousel 2.png";
import vCarr3 from "../../assets/WEBSITE BESTANDEN/THMO/Verpleegkunde/Carrousel/4x5 Carrousel 3.png";

// Vroedkunde — Sell statisch
import sellS1 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Statisch/Sell_static1_4x5.png";
import sellS2 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Statisch/Sell_static2_4x5.png";
import sellS3 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Statisch/Sell_static3_4x5.png";
import sellS4 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Statisch/Sell_static4_4x5.png";

// Vroedkunde — Touch statisch
import touchS1 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Statisch/touch_static1_4x5.png";
import touchS2 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Statisch/touch_static2_4x5.png";
import touchS3 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Statisch/touch_static3_4x5.png";
import touchS4 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Statisch/touch_static4_4x5.png";

// Vroedkunde — Touch carrousel
import touchC1 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Carrousel/Touch_Carrousel_1_4x5.png";
import touchC2 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Carrousel/Touch_Carrousel_2_4x5.png";
import touchC3 from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Carrousel/Touch_Carrousel_3_4x5.png";

// Videos
import videoVerpleegkunde from "../../assets/WEBSITE BESTANDEN/THMO/Verpleegkunde/Motion/4 5 THMO_Video verpleegkunde.mp4";
import videoVroedkundeSell from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Motion/THMO_Vroedkunde_Sell_1.mp4";
import videoVroedkundeTouch from "../../assets/WEBSITE BESTANDEN/THMO/Vroedkunde/Motion/THMO_Vroedkunde_Touch.mp4";

const verpleegkundeTabs = [
  { label: "Statisch", images: [vStatic1, vStatic2, vStatic3] },
  { label: "Carrousel", images: [vCarr1, vCarr2, vCarr3] },
];

const vroedkundeTabs = [
  { label: "Sell",            images: [sellS1, sellS2, sellS3, sellS4] },
  { label: "Touch statisch",  images: [touchS1, touchS2, touchS3, touchS4] },
  { label: "Touch carrousel", images: [touchC1, touchC2, touchC3] },
];

const motionVideos = [
  { label: "Verpleegkunde", src: videoVerpleegkunde },
  { label: "Vroedkunde Sell",  src: videoVroedkundeSell },
  { label: "Vroedkunde Touch", src: videoVroedkundeTouch },
];

function VideoSection() {
  const [active, setActive] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  function goTo(i: number) { setActive(i); setImgIdx(0); }

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {motionVideos.map((v, i) => (
          <button
            key={v.label}
            onClick={() => goTo(i)}
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

export default function ThomasMore() {
  useEffect(() => { document.title = "Thomas More — Brent Demulder"; }, []);
  return (
    <ProjectLayout currentProject="Thomas More">

      {/* Header */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#f05a28] mb-2 block bg-[#f05a28]/20 w-fit px-3 py-1 rounded-full border border-[#f05a28]/30">
          STAGEPROJECT
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f05a28] to-[#ff9a6c]">
          Thomas More
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">
          Social media campagnes voor Thomas More Hogeschool — verpleegkunde en vroedkunde opleidingen in de kijker gezet via statische posts, carousels en motion designs.
        </p>
      </div>

      {/* Hero */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative">
        <img loading="lazy" src={heroBanner} alt="Thomas More" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Project info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-sm text-white/70 space-y-4 leading-relaxed">
            <p>
              Dit project heb ik al de eerste dag van stage gekregen. We moesten <span className="text-[#f05a28] font-bold">sociale media posts</span> maken voor een campagne van <span className="text-[#f05a28] font-bold">verpleegkunde</span>, waar later <span className="text-[#f05a28] font-bold">vroedkunde</span> bij kwam.
            </p>
            <p>
              Ik begon met templates te maken in meerdere kleuren en lay-outs, waarna ik ze opmmaakte in de formaten <span className="text-[#f05a28] font-bold">1x1, 4x5 en 9x16</span>. Daarna maakte ik <span className="text-[#f05a28] font-bold">Motion Designs</span> in After Effects in dezelfde formaten — telkens twee versies.
            </p>
            <p>
              Na afloop gaf ik de templates in via <span className="text-[#f05a28] font-bold">Figma Buzz</span> en presenteerde ik een korte uitleg aan de collega's zodat zij de templates zelf snel kunnen aanpassen.
            </p>
            <p>
              Na feedback van de klant werden ook kleurvariaties toegevoegd, waarna het project was afgerond.
            </p>
          </div>
        </div>

        {/* Motion Designs */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Motion Designs:</h3>
          <VideoSection />
        </div>

        {/* Verpleegkunde posts */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Verpleegkunde posts:</h3>
          <TabCarousel tabs={verpleegkundeTabs} aspectRatio="4/5" />
        </div>

        {/* Vroedkunde posts */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Vroedkunde posts:</h3>
          <TabCarousel tabs={vroedkundeTabs} aspectRatio="4/5" />
        </div>

      </div>
    </ProjectLayout>
  );
}
