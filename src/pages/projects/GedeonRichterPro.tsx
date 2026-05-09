import ProjectLayout from "../../components/ProjectLayout";
import grpImg from "../../assets/reveals/grp.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function GedeonRichterPro() {
  return (
    <ProjectLayout currentProject="Gedeon Richter Pro">
      {/* Header Info */}
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
          Eindproject
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-pink-500">
          Gedeon Richter Pro
        </h1>
        <p className="text-sm text-brand-secondary max-w-2xl">
          Gedeon Richter Pro is een professionele en informatieve uitwerking voor een medisch platform met sterke inhoudsstructuur.
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative">
        <img 
          src={grpImg} 
          alt="Gedeon Richter Pro" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1828]/90 to-transparent flex items-center p-8 md:p-12">
           <div className="max-w-md">
             <div className="mb-6 flex items-center gap-4">
                <span className="text-white font-serif italic text-2xl border-l-2 border-brand-accent pl-4">GEDEON RICHTER | <span className="font-sans font-light">PRO</span></span>
             </div>
             <h2 className="text-2xl md:text-4xl font-display font-light text-white leading-tight mb-4">
                Medische expertise.<br/>
                <span className="text-brand-accent">Betrouwbare informatie.</span><br/>
                Praktische tools.
             </h2>
             <p className="text-white/70 text-xs">
                Toegang tot uitgebreide medische expertise, betrouwbare informatie en praktische tools voor uw dagelijkse praktijk. Registreer u gratis en raadpleeg Gedeon Richter Pro.
             </p>
           </div>
        </div>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Project Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-sm text-brand-secondary space-y-4 leading-relaxed">
            <p>
              Dit was mijn eerste project in JUNE20. Dit is een puur <span className="text-brand-accent font-bold">UX/UI project</span>, waarbij we een 'extensie' van de huidige <span className="text-brand-accent font-bold">Gedeon Richter website</span> moesten maken. Deze website is <span className="text-brand-accent font-bold">exclusief voor dokters en verplegers</span> die een eigen RIZIV-nummer hebben. Het platform bundelt medische expertise en praktische tools op één professionele plek om zorgverleners te ondersteunen in hun dagelijkse praktijk.
            </p>
            <p>
              Het geeft <span className="text-brand-accent font-bold">medische</span> en <span className="text-brand-accent font-bold">wetenschappelijke informatie</span> over vrouwengezondheid (bijv. contraceptie, baarmoederfibromen, endometriose, vaginale infecties, fertiliteit, menopauze, osteoporose).
            </p>
            <p>
              Bij deze opdracht had ik samen met Michiel (mijn stagementor) de opdracht gekregen om <span className="text-brand-accent font-bold">nieuwe pagina's</span> te designen en ook verschillende <span className="text-brand-accent font-bold">content blokken</span>. We hebben alle basis pagina's samen aangepakt, en de speciale pagina's zoals de '404' - pagina en de evenementen pagina heb ik volledig zelf mogen designen. Het favicon logo die je op de site ziet heb ik ook zelf mogen designen. Dit was de eerste keer dat ik echt een voldaan gevoel kreeg van een opdracht. Omdat mijn designs dan werden gebruikt op een echte <span className="text-brand-accent font-bold">professionele</span> site. Dit gaf me ook het zelfvertrouwen en motivatie om nog meer te doen en beter te worden in de design wereld.
            </p>
          </div>
        </div>

        {/* Right Column - Designs Carousel */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Designs:</h3>
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-xs font-bold text-white cursor-pointer">Pagina's</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">Cards</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">Grafieken</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">Pop-ups</span>
          </div>

          {/* Carousel Image Area */}
          <div className="relative bg-[#3b276b] rounded-xl h-64 md:h-[400px] flex items-center justify-center p-6">
             {/* Placeholder for GRP UI */}
             <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="h-6 border-b border-gray-200 flex items-center px-4 gap-2">
                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="p-4 flex gap-4 h-full">
                   <div className="w-1/3 bg-blue-50/50 rounded p-2">
                      <div className="w-full h-4 bg-blue-100 rounded mb-2"></div>
                      <div className="w-3/4 h-2 bg-blue-100 rounded mb-1"></div>
                      <div className="w-2/3 h-2 bg-blue-100 rounded"></div>
                   </div>
                   <div className="w-2/3 grid grid-cols-2 gap-2">
                      <div className="bg-pink-50 rounded h-16"></div>
                      <div className="bg-purple-50 rounded h-16"></div>
                      <div className="bg-blue-50 rounded h-16"></div>
                      <div className="bg-teal-50 rounded h-16"></div>
                   </div>
                </div>
             </div>

             {/* Carousel Controls */}
             <button className="absolute left-2 w-8 h-8 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors">
               <ArrowLeft size={14} />
             </button>
             <button className="absolute right-2 w-8 h-8 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors">
               <ArrowRight size={14} />
             </button>

             {/* Dots */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
             </div>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
