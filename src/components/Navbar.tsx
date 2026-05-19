import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Assignments", href: "/#assignments" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
      scrolled ? "bg-[#0e0d29]/40 backdrop-blur-md border-b border-white/5" : ""
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo — links naar home */}
        <a href="/" className="text-lg md:text-2xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity">
          BRENT DEMULDER
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-brand-secondary hover:text-white transition-all hover:tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#assignments"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-secondary text-white font-bold text-sm shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 transition-all hover:scale-105"
          >
            Bekijk mijn projecten
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl p-8 flex flex-col gap-6 md:hidden border-b border-white/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold uppercase tracking-widest text-brand-secondary hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#assignments"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-accent to-brand-accent-secondary text-white font-bold text-sm text-center"
            >
              Bekijk mijn projecten
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
