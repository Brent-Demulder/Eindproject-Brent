import { motion } from "motion/react";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-4">
          <span className="text-lg font-display font-bold tracking-tight text-white">BRENT DEMULDER</span>
          <p className="text-white/60 text-[10px] max-w-xs leading-relaxed">
            Grafisch vormgever & UI/UX designer die een passie heeft voor Social Media design en Motion Design.
          </p>
          <div className="flex gap-3 mt-2">
            {[Github, Linkedin, Instagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -3 }}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Icon size={12} className="text-white/60" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Column 2 — Navigatie */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">NAVIGATIE</span>
          <a href="#home" className="text-[10px] text-white/60 hover:text-white transition-colors">Home</a>
          <a href="#assignments" className="text-[10px] text-white/60 hover:text-white transition-colors">Assignments</a>
          <a href="#projects-reveal" className="text-[10px] text-white/60 hover:text-white transition-colors">Projects</a>
        </div>

        {/* Column 3 — Informatie */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">INFORMATIE</span>
          <a href="#" className="text-[10px] text-white/60 hover:text-white transition-colors">Privacybeleid</a>
          <a href="#" className="text-[10px] text-white/60 hover:text-white transition-colors">Voorwaarden</a>
          <span className="text-[10px] text-white/60">© 2025 Brent Demulder</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex items-center justify-center">
        <p className="text-[8px] font-bold tracking-[0.2em] text-white/20 uppercase">
          ONTWORPEN & ONTWIKKELD DOOR BRENT DEMULDER
        </p>
      </div>
    </footer>
  );
}
