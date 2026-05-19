const logos = [
  "Curendis", "GRP", "Stromer", "June20", "Thomas More", "Oscare"
];

export default function LogoMarquee() {
  return (
    <section className="py-10 border-y border-white/5 overflow-hidden select-none bg-[#0e0d29]">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="marquee-inner">
        {[...logos, ...logos].map((logo, i) => (
          <span
            key={i}
            className="shrink-0 px-10 text-4xl md:text-5xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white/20 to-white/20 hover:from-[#9b6cff] hover:to-[#ff66c4] transition-all duration-300 cursor-default"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
