import { Suspense, lazy } from "react";
import { motion } from "motion/react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center">

      {/* Spline — rechts, loopt door tot de rand */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -right-96 top-0 h-full w-full hidden md:block"
      >
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#9b6cff]/30 border-t-[#9b6cff] animate-spin" />
          </div>
        }>
          <Spline
            scene="https://prod.spline.design/RLqol81aWL1v9uLl/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </motion.div>


      {/* Tekst — links */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-16 pt-24 pb-16">
        <div className="max-w-xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-[#9b6cff]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b6cff]">
              Graduaat Digitale Vormgeving · Stage JUNE20
            </span>
          </motion.div>

          {/* Naam */}
          <div className="mb-6">
            {["BRENT", "DEMULDER"].map((word, i) => (
              <div key={word} className="overflow-hidden pr-2">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1 + i * 0.12, ease }}
                  className="text-[clamp(3rem,8vw,7rem)] font-display font-black tracking-tighter leading-none block"
                >
                  {i === 1 ? (
                    <span className="bg-gradient-to-r from-[#9b6cff] to-[#ff66c4] bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    <span className="text-white">{word}</span>
                  )}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Beschrijving */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="text-white/50 text-sm leading-relaxed mb-8"
          >
            Grafisch vormgever & UI/UX designer met een passie voor{" "}
            <span className="text-white/80">social media design</span> en{" "}
            <span className="text-white/80">motion design</span>.
          </motion.p>

          {/* Knoppen */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <motion.a
              href="#projects-reveal"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#9b6cff] to-[#ff66c4] text-white font-bold text-sm shadow-lg shadow-[#9b6cff]/25 hover:shadow-[#9b6cff]/40 transition-shadow"
            >
              Bekijk projecten
            </motion.a>
            <motion.a
              href="#assignments"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Opdrachten
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65, ease }}
            className="flex gap-8 pt-8 border-t border-white/5"
          >
            {[
              { value: "6",    label: "Stageprojecten" },
              { value: "3",    label: "Eindopdrachten" },
              { value: "2026", label: "Afstudeerjaar" },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
                <p className="text-[9px] uppercase tracking-widest text-white/30 font-bold mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>

    </section>
  );
}
