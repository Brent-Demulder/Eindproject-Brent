import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlowBackground from "./components/GlowBackground";
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";

// Project pages
import Curendis from "./pages/projects/Curendis";
import June20 from "./pages/projects/June20";
import GedeonRichterPro from "./pages/projects/GedeonRichterPro";
import Oscare from "./pages/projects/Oscare";
import ThomasMore from "./pages/projects/ThomasMore";
import Stromer from "./pages/projects/Stromer";

// School project pages
import Vlog from "./pages/schoolprojects/Vlog";
import Case from "./pages/schoolprojects/Case";
import Poster from "./pages/schoolprojects/Poster";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0e0d29] flex flex-col font-sans">
      <CustomCursor />
      <GlowBackground />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/project/curendis" element={<Curendis />} />
              <Route path="/project/june20" element={<June20 />} />
              <Route path="/project/gedeon-richter-pro" element={<GedeonRichterPro />} />
              <Route path="/project/oscare" element={<Oscare />} />
              <Route path="/project/thomas-more" element={<ThomasMore />} />
              <Route path="/project/stromer" element={<Stromer />} />
              <Route path="/opdracht/vlog" element={<Vlog />} />
              <Route path="/opdracht/case" element={<Case />} />
              <Route path="/opdracht/poster" element={<Poster />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
