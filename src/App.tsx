import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GlowBackground from "./components/GlowBackground";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

// Project pages
import Curendis from "./pages/projects/Curendis";
import June20 from "./pages/projects/June20";
import GedeonRichterPro from "./pages/projects/GedeonRichterPro";
import Oscare from "./pages/projects/Oscare";
import ThomasMore from "./pages/projects/ThomasMore";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0d29] flex flex-col font-sans">
      <GlowBackground />
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/curendis" element={<Curendis />} />
          <Route path="/project/june20" element={<June20 />} />
          <Route path="/project/gedeon-richter-pro" element={<GedeonRichterPro />} />
          <Route path="/project/oscare" element={<Oscare />} />
          <Route path="/project/thomas-more" element={<ThomasMore />} />
        </Routes>
      </main>
    </div>
  );
}
