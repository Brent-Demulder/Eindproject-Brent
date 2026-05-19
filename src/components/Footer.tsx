import { motion } from "motion/react";
import { Github, Linkedin, Instagram } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1 — Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col gap-4"
        >
          <span className="text-3xl font-display font-bold tracking-tight text-white">BRENT DEMULDER</span>
          <p className="text-white/60 text-[16px] max-w-xs leading-relaxed">
            Grafisch vormgever & UI/UX designer die een passie heeft voor Social Media design en Motion Design.
          </p>
          <div className="flex gap-3 mt-2">
            {[
            { Icon: Github, href: "https://github.com/Brent-Demulder", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/brent-demulder-042508356/", label: "LinkedIn" },
            { Icon: Instagram, href: "https://www.instagram.com/brentdemulder/", label: "Instagram" },
          ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Icon size={16} className="text-white/60" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Column 2 — Navigatie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="flex flex-col gap-4"
        >
          <span className="text-[12px] font-bold uppercase tracking-widest text-white/40 mb-1">NAVIGATIE</span>
          {[
            { label: "Home", href: "/#home" },
            { label: "Assignments", href: "/#assignments" },
            { label: "Projects", href: "/#projects-reveal" },
          ].map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="text-[16px] text-white/60 hover:text-white transition-colors w-fit"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Column 3 — Informatie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="flex flex-col gap-4"
        >
          <span className="text-[12px] font-bold uppercase tracking-widest text-white/40 mb-1">INFORMATIE</span>
          <a href="#" className="text-[16px] text-white/60 hover:text-white transition-colors">Privacybeleid</a>
          <a href="#" className="text-[16px] text-white/60 hover:text-white transition-colors">Voorwaarden</a>
          <span className="text-[16px] text-white/60">© {year} Brent Demulder</span>
        </motion.div>

      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex items-center justify-center"
      >
        <p className="text-[12px] font-bold tracking-[0.2em] text-white/20 uppercase">
          ONTWORPEN & ONTWIKKELD DOOR BRENT DEMULDER
        </p>
      </motion.div>
    </footer>
  );
}
