import ProjectLayout from "../../components/ProjectLayout";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";

export default function Oscare() {
  return (
    <ProjectLayout currentProject="Oscare">
      {/* Header Info */}
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
          Eindproject
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          Oscare
        </h1>
        <p className="text-sm text-brand-secondary max-w-2xl">
          Oscare is een bedrijf die zich focust op het verzorgen van brandwondes en littekenverzorging. Mijn opdracht hierbij was om een campagne uit te schrijven voor de Escape Fire Truck!
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative bg-[#1a0f35]">
         <div className="absolute inset-0 flex">
            {/* Left side text */}
            <div className="w-1/2 p-8 md:p-12 flex flex-col justify-center">
               <div className="flex items-center gap-2 mb-8">
                  <span className="text-white font-display text-2xl font-bold tracking-tight">Oscare</span>
                  <div className="flex gap-1">
                     <div className="w-2 h-2 rounded-full bg-[#8cc63f]"></div>
                     <div className="w-2 h-2 rounded-full bg-[#00adef]"></div>
                     <div className="w-2 h-2 rounded-full bg-[#ec008c]"></div>
                     <div className="w-2 h-2 rounded-full bg-[#fff200]"></div>
                  </div>
               </div>
               <div className="w-12 h-0.5 bg-[#8cc63f] mb-4"></div>
               <h2 className="text-3xl md:text-5xl font-display font-black text-[#e4f5d4] leading-tight mb-4 uppercase">
                  DE ULTIEME<br/>
                  VUURPROEF<br/>
                  VOOR JOUW EVENT!
               </h2>
               <p className="text-white/80 text-xs max-w-xs">
                  Kan jouw team tijdig ontsnappen? Test jullie brandveiligheid op een onvergetelijke, spannende manier met de mobiele <span className="text-[#8cc63f] font-bold">Fire Safety Truck</span> van Oscare.
               </p>
            </div>
            {/* Right side abstract graphic placeholder */}
            <div className="w-1/2 relative">
               <div className="absolute inset-0 bg-gradient-to-l from-purple-600/40 to-transparent"></div>
               <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full preserve-3d">
                  <path d="M10,50 Q40,10 70,50 T90,90" fill="none" stroke="white" strokeWidth="0.5" className="opacity-50 blur-[1px] shadow-[0_0_15px_rgba(255,255,255,0.5)]"/>
                  <path d="M10,60 Q40,20 70,60 T90,100" fill="none" stroke="#d8b4fe" strokeWidth="1" className="shadow-[0_0_20px_rgba(216,180,254,0.8)]"/>
               </svg>
            </div>
         </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Top Left - Project Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-[11px] text-brand-secondary space-y-4 flex-grow">
            <p>
              De bedoeling van deze opdracht was om mijn <span className="text-yellow-500 font-bold">marketing skills</span> uit te breiden. Ik moest dan onderzoek doen naar Oscare - die al een klant is van JUNE20 - en dan hier een campagne voor verzinnen en uitwerken. Ik heb gekozen voor de <span className="text-yellow-500 font-bold">Fire Escape Truck</span>. Het is een mobiele escape room die ze al hebben, maar nog niet veel reclame voor hebben gemaakt.
            </p>
            <p>
              Ik heb hier dan wat research voor gedaan met behulp van <span className="text-yellow-500 font-bold">NotebookLM</span> en alles in een rapport gezet.
            </p>
            <p>
              Wanneer ik alles van informatie had uitgewerkt was ik van start gegaan met <span className="text-yellow-500 font-bold">banner designs</span> en <span className="text-yellow-500 font-bold">social media posts</span> te maken. Ik heb dan eerst een paar eerste designs uitgewerkt, voor dan later dit te gebruiken als basis voor mijn andere posts. Hierbij heb ik ook <span className="text-yellow-500 font-bold">A/B testing</span> gebruikt, waarbij ik heb nagedacht over specifieke tijden om deze campagne te lanceren. Ik heb dan vier verschillende thema's gevonden en hier vier verschillende versies telkens voor gemaakt. Die kan je hier rechts terug vinden.
            </p>
            <p>
              Als laatste heb ik ook nog een <span className="text-yellow-500 font-bold">landingspagina</span> gemaakt - waarbij je een formulier kan invullen om de truck te huren.
            </p>
            <p>
              De bedoeling van de campagne is om kinderen de gevaren van brand aan te leren, en snel uit gevaarlijke situaties te geraken voor het te laat is.
            </p>
          </div>
        </div>

        {/* Top Right - Posts Carousel */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col h-full">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Posts:</h3>
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-xs font-bold text-white cursor-pointer">Kamp</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">BBQ</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">Nieuwjaar</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">School</span>
          </div>
          <div className="relative bg-[#2d1b54] rounded-xl flex-grow flex items-center justify-center p-4 overflow-hidden">
             {/* Placeholder for Post Image */}
             <div className="w-full max-w-[220px] aspect-[4/5] bg-slate-800 rounded-lg overflow-hidden relative border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-10"></div>
                <div className="absolute inset-x-0 top-6 z-20 text-center px-4">
                   <h4 className="text-white font-display font-black italic text-lg leading-tight uppercase">GEEN ZOMERKAMP<br/>ZONDER KAMPVUUR!</h4>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-16 h-16 bg-orange-500/50 rounded-full blur-xl"></div>
                </div>
             </div>

             <button className="absolute left-2 w-8 h-8 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-30">
               <ArrowLeft size={14} />
             </button>
             <button className="absolute right-2 w-8 h-8 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-30">
               <ArrowRight size={14} />
             </button>
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                <div className="w-1 h-1 rounded-full bg-brand-accent"></div>
                <div className="w-1 h-1 rounded-full bg-white/30"></div>
                <div className="w-1 h-1 rounded-full bg-white/30"></div>
                <div className="w-1 h-1 rounded-full bg-white/30"></div>
             </div>
          </div>
        </div>

        {/* Bottom Left - Landingspagina */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Landingspagina:</h3>
          <div className="flex gap-4 h-64 md:h-80">
             {/* Placeholder for tall landing pages */}
             <div className="w-1/2 h-full bg-[#1a2b4c] rounded-lg overflow-hidden border border-white/10 p-2 flex flex-col gap-2">
                <div className="h-16 bg-blue-400/20 rounded"></div>
                <div className="grid grid-cols-4 gap-1">
                   <div className="h-8 bg-blue-400/40 rounded"></div>
                   <div className="h-8 bg-red-400/40 rounded"></div>
                   <div className="h-8 bg-yellow-400/40 rounded"></div>
                   <div className="h-8 bg-green-400/40 rounded"></div>
                </div>
                <div className="flex-grow bg-white/5 rounded"></div>
                <div className="h-10 bg-white/10 rounded"></div>
             </div>
             <div className="w-1/2 h-full bg-[#1a2b4c] rounded-lg overflow-hidden border border-white/10 p-2 flex flex-col gap-2">
                <div className="h-16 bg-blue-400/20 rounded"></div>
                <div className="grid grid-cols-4 gap-1">
                   <div className="h-8 bg-blue-400/40 rounded"></div>
                   <div className="h-8 bg-red-400/40 rounded"></div>
                   <div className="h-8 bg-yellow-400/40 rounded"></div>
                   <div className="h-8 bg-green-400/40 rounded"></div>
                </div>
                <div className="h-10 bg-white/10 rounded mt-4"></div>
                <div className="flex-grow bg-white/5 rounded"></div>
             </div>
          </div>
        </div>

        {/* Bottom Right Container */}
        <div className="flex flex-col gap-6">
           {/* Banners */}
           <div className="bg-[#38266e] border border-white/10 rounded-2xl p-8 h-40">
             <h3 className="text-2xl font-display font-bold text-white">Banners:</h3>
           </div>
           
           {/* Rapport */}
           <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex-grow flex items-center justify-between">
             <div className="max-w-[200px]">
               <h3 className="text-2xl font-display font-bold text-white mb-2">Rapport:</h3>
               <p className="text-[10px] text-brand-secondary">
                 In dit rapport staat alles grondig uitgeschreven. Van KPI's tot concurrentieanalyse tot persona's. Hierin kan je alles terugvinden waar ik over heb nagedacht bij dit project en hoe ik alles heb aangepakt.
               </p>
             </div>
             <FileText size={64} className="text-brand-accent/50 stroke-1" />
           </div>
        </div>

      </div>
    </ProjectLayout>
  );
}
