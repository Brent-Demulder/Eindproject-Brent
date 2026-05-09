import ProjectLayout from "../../components/ProjectLayout";
import june20Img from "../../assets/reveals/june20.png";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function June20() {
  return (
    <ProjectLayout currentProject="JUNE20">
      {/* Header Info */}
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2 block">
          Eindproject
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 uppercase">
          JUNE20
        </h1>
        <p className="text-sm text-brand-secondary max-w-2xl">
          Oscare is een bedrijf die zich focust op het verzorgen van brandwondes en littekenverzorging.
          Mijn opdracht hierbij was om een campagne uit te schrijven voor de Escape Fire Truck!
          {/* Note: Keeping the placeholder text from the screenshot */}
        </p>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden mb-12 h-64 md:h-96 relative">
        <img 
          src={june20Img} 
          alt="JUNE20" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Project Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Project:</h3>
          <div className="text-sm text-brand-secondary space-y-4">
            <p>
              Voor <span className="text-white font-bold">JUNE20</span> zelf heb ik ook een paar opdrachten mogen doen. Waaronder een motion vacature voor een nieuwe brand designer. En dan ook nog <span className="text-red-500 font-bold">footers</span> en headers voor de vernieuwde website.
            </p>
            <p>
              <span className="text-red-500 font-bold">JUNE20</span> is een Belgisch creatief bureau/<span className="text-red-500 font-bold">marketing</span>- en communicatiebureau. Ze bieden branding en merkidentiteit, creatieve campagnes en content, multichannel- en mediastrategie, en sociale mediastrategie.
            </p>
            <p>
              Ze profileren zich als ondernemend: "<span className="text-red-500 font-bold">Small enough</span> to CARE and <span className="text-red-500 font-bold">big enough</span> to MAKE IT HAPPEN" en werken vaak langdurig met klanten.
            </p>
          </div>
        </div>

        {/* Right Column - Designs Carousel */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Designs:</h3>
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-6">
            <span className="text-xs font-bold text-white cursor-pointer">Motion Vacature</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">Headers</span>
            <span className="text-xs font-bold text-brand-secondary cursor-pointer">Footers</span>
          </div>

          {/* Carousel Image Area */}
          <div className="relative bg-[#3b276b] rounded-xl h-64 md:h-80 flex items-center justify-center overflow-hidden p-4">
             {/* Placeholder for Motion Graphic */}
             <div className="w-full max-w-[200px] h-full bg-[#f05a41] rounded-lg shadow-lg flex flex-col items-center justify-center p-6 relative">
                <span className="text-white/80 font-bold text-xs uppercase mb-2 text-center">Hiring a<br/>BRAND<br/>DESIGNER</span>
                <Play size={40} className="text-white/80 mt-2" />
                <div className="absolute top-2 right-2 rotate-12">
                   <span className="text-white/50 font-bold text-[8px] bg-white/20 px-1 py-0.5 rounded">APPLY</span>
                </div>
             </div>

             {/* Carousel Controls */}
             <button className="absolute left-4 w-8 h-8 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors">
               <ArrowLeft size={14} />
             </button>
             <button className="absolute right-4 w-8 h-8 rounded-full bg-[#241a4a]/80 text-white flex items-center justify-center hover:bg-brand-accent transition-colors">
               <ArrowRight size={14} />
             </button>
          </div>
        </div>
      </div>
    </ProjectLayout>
  );
}
