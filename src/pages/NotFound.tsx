import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function NotFound() {
  useEffect(() => { document.title = "404 — Brent Demulder"; }, []);
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b6cff] mb-6 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-px bg-[#9b6cff]" />
          Pagina niet gevonden
          <span className="w-8 h-px bg-[#9b6cff]" />
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease }}
            className="text-[clamp(6rem,20vw,14rem)] font-display font-black tracking-tighter leading-none bg-gradient-to-r from-[#9b6cff] to-[#ff66c4] bg-clip-text text-transparent"
          >
            404
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="text-white/50 text-sm mb-10"
        >
          Deze pagina bestaat niet (meer).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#9b6cff] to-[#ff66c4] text-white font-bold text-sm shadow-lg shadow-[#9b6cff]/25 hover:shadow-[#9b6cff]/40 transition-shadow"
          >
            <ArrowLeft size={16} />
            Terug naar home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
