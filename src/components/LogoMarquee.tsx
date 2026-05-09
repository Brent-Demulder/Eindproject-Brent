const logos = [
  "Curendis", "GRP", "Stromer", "June20", "Thomas More", "Oscare"
];

// Duplicate the logos so the seamless loop can translate exactly -50%
const allLogos = [...logos, ...logos];

export default function LogoMarquee() {
  return (
    <section className="py-10 border-y border-white/5 overflow-hidden select-none" style={{ backgroundColor: '#0e0d29' }}>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div
        className="flex gap-16 whitespace-nowrap"
        style={{ animation: 'marquee-scroll 20s linear infinite', width: 'max-content' }}
      >
        {allLogos.map((logo, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white/20 hover:text-white/60 transition-colors cursor-default"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
