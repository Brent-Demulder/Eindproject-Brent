export default function GlowBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0e0d29]">
      {/* Ultra-performant static gradients (no blurs) */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 60%, rgba(59, 130, 246, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 60%)
          `
        }}
      />
    </div>
  );
}
