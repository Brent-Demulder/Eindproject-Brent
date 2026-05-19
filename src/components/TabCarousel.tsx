import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Tab {
  label: string;
  images: string[];
}

interface TabCarouselProps {
  tabs: Tab[];
  aspectRatio?: string;
}

export default function TabCarousel({ tabs, aspectRatio = "4/5" }: TabCarouselProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [index, setIndex] = useState(0);

  const images = tabs[activeTab].images;

  function goTo(tab: number) {
    setActiveTab(tab);
    setIndex(0);
  }

  function prev() {
    setIndex(i => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex(i => (i + 1) % images.length);
  }

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => goTo(i)}
            className={`text-xs font-bold transition-colors ${
              i === activeTab ? "text-white" : "text-white/40 hover:text-white/70"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Image area */}
      <div className="relative bg-[#1e1440] rounded-xl flex-grow flex items-center justify-center p-4 overflow-hidden min-h-[280px]">
        <img
          key={`${activeTab}-${index}`}
          src={images[index]}
          alt={tabs[activeTab].label}
          loading="lazy"
          className="max-h-[360px] w-auto object-contain rounded-lg shadow-lg"
          style={{ aspectRatio }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-10"
            >
              <ArrowLeft size={14} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-brand-accent transition-colors z-10"
            >
              <ArrowRight size={14} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === index ? "bg-brand-accent" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
