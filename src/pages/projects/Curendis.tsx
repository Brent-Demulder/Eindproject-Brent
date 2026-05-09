import ProjectLayout from "../../components/ProjectLayout";
import curendisImg from "../../assets/reveals/curendis.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Curendis() {
  return (
    <ProjectLayout currentProject="Curendis">
      {/* Header Info */}
      <div className="mb-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-2 block bg-brand-accent/20 w-fit px-3 py-1 rounded-full border border-brand-accent/30">
          EINDPROJECT
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9b6cff] to-[#ff66c4]">
          Curendis
        </h1>
        <p className="text-xs text-brand-secondary max-w-2xl font-bold">
          Oscare is een bedrijf die zich focust op het verzorgen van brandwondes en littekenverzorging.
          <br/>Mijn opdracht hierbij was om een campagne uit te schrijven voor de Escape Fire Truck!
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative">
        <img 
          src={curendisImg} 
          alt="Curendis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8 md:p-12">
        </div>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Project Info */}
        <div className="bg-[#3b237c] rounded-2xl p-8 shadow-inner border border-white/5">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-[11px] text-white/80 font-medium space-y-4 leading-relaxed">
            <p>
              Curendis is mijn recentste project. De bedoeling hier was om de website van Curendis volledig opnieuw aan te pakken. Een volledig <span className="text-[#ff66c4] font-bold">UX/UI</span> gerichte opdracht. We hadden een korte briefing en een kleine <span className="text-[#ff66c4] font-bold">brand guide</span> gekregen. Ik was dan begonnen met veel verschillende <span className="text-[#ff66c4] font-bold">low-fi wireframes</span> te maken. Waaruit ik dan een beetje kon <span className="text-[#ff66c4] font-bold">cherry picken</span> en zo <span className="text-[#ff66c4] font-bold">mid-fi designs</span> kon realiseren. Michiel was ondertussen ook al zelf bezig met wat designs te maken. Dus voor mijn <span className="text-[#ff66c4] font-bold">high-fi designs</span> had ik alles een beetje bij elkaar genomen en hier dan nog verschillende versies op gemaakt. In totaal heb ik ongeveer 12 <span className="text-[#ff66c4] font-bold">landingspagina's</span> gemaakt. Dan was het nog wachten op feedback van de klant voor we verder konden met dit project.
            </p>
            <p>
              Curendis presenteert zichzelf als een <span className="text-[#ff66c4] font-bold">multidisciplinaire kliniek</span> gericht op het verbeteren van gezondheid en levenskwaliteit, met een innovatieve, samenwerkende aanpak tussen specialisten.
            </p>
          </div>
        </div>

        {/* Right Column - Pagina's Carousel */}
        <div className="bg-[#3b237c] rounded-2xl p-8 shadow-inner border border-white/5">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Pagina's:</h3>
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-[10px] font-bold text-white cursor-pointer">Low-Fi</span>
            <span className="text-[10px] font-bold text-white/50 cursor-pointer hover:text-white transition-colors">Mid-Fi</span>
            <span className="text-[10px] font-bold text-white/50 cursor-pointer hover:text-white transition-colors">High-Fi</span>
            <span className="text-[10px] font-bold text-white/50 cursor-pointer hover:text-white transition-colors">Eindproduct</span>
          </div>

          {/* Carousel Image Area */}
          <div className="relative bg-[#e5e1e6] rounded-xl h-64 md:h-[350px] flex items-center justify-center">
             {/* Placeholder for Wireframe */}
             <div className="w-2/3 h-5/6 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-start p-4 relative overflow-hidden">
               <div className="w-full h-4 bg-gray-200 rounded-full mb-4"></div>
               <div className="w-full h-16 bg-gray-500 rounded-lg mb-2"></div>
               <div className="w-3/4 h-8 bg-gray-500 rounded-lg self-start mb-6"></div>
               <div className="w-2/3 h-6 bg-gray-500 rounded-full self-start mb-6"></div>
               <div className="w-full h-16 bg-gray-500 rounded-lg"></div>
               
               {/* Abstract wireframe curves */}
               <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full preserve-3d pointer-events-none opacity-20">
                  <path d="M-10,50 Q40,-10 110,60" fill="none" stroke="gray" strokeWidth="2" />
                  <path d="M-10,70 Q60,110 110,30" fill="none" stroke="gray" strokeWidth="2" />
               </svg>
             </div>

             {/* Carousel Controls */}
             <button className="absolute left-2 w-8 h-8 rounded-full bg-[#29175c] text-white flex items-center justify-center hover:bg-brand-accent transition-colors shadow-lg">
               <ArrowLeft size={14} />
             </button>
             <button className="absolute right-2 w-8 h-8 rounded-full bg-[#29175c] text-white flex items-center justify-center hover:bg-brand-accent transition-colors shadow-lg">
               <ArrowRight size={14} />
             </button>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
