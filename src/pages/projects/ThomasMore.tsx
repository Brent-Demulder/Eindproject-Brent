import ProjectLayout from "../../components/ProjectLayout";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function ThomasMore() {
  return (
    <ProjectLayout currentProject="Thomas More">
      {/* Header Info */}
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
          Eindproject
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
          Thomas More
        </h1>
        <p className="text-sm text-brand-secondary max-w-2xl">
          Oscare is een bedrijf die zich focust op het verzorgen van brandwondes en littekenverzorging. Mijn opdracht hierbij was om een campagne uit te schrijven voor de Escape Fire Truck!
          {/* Note: Same placeholder text as in Figma screenshot */}
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative bg-[#110d14]">
         <div className="absolute inset-0 flex items-center p-8 md:p-12">
            <div className="max-w-md z-10">
               <div className="flex items-center gap-2 mb-6">
                  <span className="text-white font-display font-black text-2xl tracking-tighter">THOMAS</span>
                  <div className="w-12 h-1 bg-[#f05a28]"></div>
               </div>
               <h2 className="text-2xl md:text-4xl font-display text-white font-light leading-tight mb-4">
                  Vorm de toekomst<br/>
                  met <span className="text-[#f05a28] font-bold">kennis die werkt.</span>
               </h2>
               <p className="text-[#f05a28] font-bold text-sm mb-2">Praktisch. Persoonlijk. Professioneel.</p>
               <p className="text-white/60 text-xs">
                  Hoger onderwijs dat je voorbereidt op de praktijk. Ontdek opleidingen die aansluiten bij jouw talent en ambitie.
               </p>
            </div>
            
            {/* Abstract background flow */}
            <div className="absolute inset-0 right-0 overflow-hidden">
               <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#f05a28]/20 to-transparent blur-3xl"></div>
            </div>
         </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Top Left - Project Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-[11px] text-brand-secondary space-y-4">
            <p>
              Deze opdracht heb ik ook al de eerste dag van stage gekregen, waarbij ik meteen in een meeting werd gezet. Dit project was net van start gegaan, dus kon hem helemaal mee maken. We moesten <span className="text-[#f05a28] font-bold">sociale media posts</span> maken voor een campagne van <span className="text-[#f05a28] font-bold">verpleegkunde</span>, waar later ook nog <span className="text-[#f05a28] font-bold">vroedkunde</span> bij kwam.
            </p>
            <p>
              Ik was begonnen met templates te maken waar ik later mee verder kon. Na de templates had ik veel verschillende kleuren en lay-out versies gemaakt, zodat we een groot assortiment hebben waaruit we kunnen kiezen om mee verder te werken. Wanneer we deze templates hadden kon ik ze zetten in de formaten 1x1, 4x5 en 9x16. Ik moest dan ook nog <span className="text-[#f05a28] font-bold">Motion Designs</span> maken van beide campagnes. Deze heb ik dan nog in After Effects gemaakt in de verschillende formaten en ook telkens twee versies.
            </p>
            <p>
              Toen alle templates waren opgemaakt had ik ze in <span className="text-[#f05a28] font-bold">Figma Buzz</span> gezet en heb ik ook aan de collega's van dit project een korte presentatie gegeven over hoe je hiermee moet werken, want het is nog redelijk nieuw dat ze wel willen implementeren in <span className="text-[#f05a28] font-bold">JUNE20</span>. In Figma Buzz kunnen ze dan alle templates makkelijk en snel van tekst, foto en van plaats veranderen.
            </p>
            <p>
              We hadden weer een meeting met de klant, waarbij ze dan wat feedback gaf op alle designs. De gekozen templates waren allemaal in het <span className="text-[#f05a28] font-bold">oranje</span>, maar de klant wou dat er toch wat variaties op kom van verschillende kleuren. En wanneer ik dit had gedaan was het project afgerond.
            </p>
          </div>
        </div>

        {/* Top Right - Motion Designs Carousel */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Motion Designs:</h3>
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-xs font-bold text-white cursor-pointer">Verpleegkunde</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">Vroedkunde</span>
          </div>
          <div className="relative bg-[#2d1b54] rounded-xl flex-grow flex items-center justify-center p-4">
             {/* Placeholder for Motion Graphic */}
             <div className="w-full max-w-[220px] aspect-[4/5] bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-lg flex flex-col justify-center items-center relative overflow-hidden p-6">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center"></div>
                <h4 className="text-white font-display font-bold text-2xl text-center leading-tight mb-4 z-10">Gezocht:<br/>redders<br/>in nood.</h4>
                <Play size={40} className="text-white z-10" />
                <div className="absolute bottom-4 right-4 bg-[#f05a28] px-2 py-1 rounded text-[8px] font-bold text-white z-10">ZAT 25 APRIL</div>
             </div>

             <button className="absolute left-4 w-8 h-8 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-20">
               <ArrowLeft size={14} />
             </button>
             <button className="absolute right-4 w-8 h-8 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-20">
               <ArrowRight size={14} />
             </button>
          </div>
        </div>

        {/* Bottom Left - Verpleegkunde */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Verpleegkunde posts:</h3>
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-xs font-bold text-white cursor-pointer">Statisch</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">Carrousel</span>
          </div>
          <div className="relative bg-[#2d1b54] rounded-xl flex-grow flex items-center justify-center p-4">
             {/* Static Post Placeholder */}
             <div className="w-full max-w-[220px] aspect-[4/5] rounded-lg overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Verpleegkunde" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-4 right-4">
                   <h4 className="text-white font-display font-bold text-xl leading-tight mb-2">Draag ook<br/>zorg voor je<br/>eigen carrière.</h4>
                   <div className="flex justify-between items-end">
                      <p className="text-white/80 text-[8px] max-w-[100px]">Word verpleegkundige. Kom naar onze infodag op</p>
                      <div className="bg-[#f05a28] px-2 py-1 rounded text-[8px] font-bold text-white">ZAT 25 APRIL</div>
                   </div>
                </div>
             </div>
             
             <button className="absolute left-4 w-6 h-6 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-20">
               <ArrowLeft size={12} />
             </button>
             <button className="absolute right-4 w-6 h-6 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-20">
               <ArrowRight size={12} />
             </button>
          </div>
        </div>

        {/* Bottom Right - Vroedkunde */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Vroedkunde posts:</h3>
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-xs font-bold text-white cursor-pointer">Statisch</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">Carrousel</span>
          </div>
          <div className="relative bg-[#2d1b54] rounded-xl flex-grow flex items-center justify-center p-4">
             {/* Static Post Placeholder */}
             <div className="w-full max-w-[220px] aspect-[4/5] rounded-lg overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Vroedkunde" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-4 right-4">
                   <h4 className="text-white font-display font-bold text-lg leading-tight mb-2">Deel het eerste<br/>geluk van ouders,<br/>word vroedvrouw.</h4>
                   <div className="flex justify-between items-end">
                      <p className="text-white/80 text-[8px] max-w-[100px]">Studeer vroedkunde bij Thomas More. Infodag op 20 juni.</p>
                      <div className="bg-[#f05a28] px-2 py-1 rounded text-[8px] font-bold text-white">ZAT 20 JUNI</div>
                   </div>
                </div>
             </div>
             
             <button className="absolute left-4 w-6 h-6 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-20">
               <ArrowLeft size={12} />
             </button>
             <button className="absolute right-4 w-6 h-6 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-20">
               <ArrowRight size={12} />
             </button>
          </div>
        </div>

      </div>
    </ProjectLayout>
  );
}
