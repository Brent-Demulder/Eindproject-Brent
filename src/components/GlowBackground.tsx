export default function GlowBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0e0d29]">

      {/* Paars — linksboven */}
      <div
        className="absolute rounded-full opacity-30"
        style={{
          width: "700px",
          height: "700px",
          top: "-200px",
          left: "-150px",
          background: "#7c3aed",
          filter: "blur(120px)",
          willChange: "transform",
        }}
      />

      {/* Blauw — rechtsonder */}
      <div
        className="absolute rounded-full opacity-25"
        style={{
          width: "600px",
          height: "600px",
          bottom: "-150px",
          right: "-100px",
          background: "#2563eb",
          filter: "blur(110px)",
          willChange: "transform",
        }}
      />

      {/* Magenta — rechtsboven */}
      <div
        className="absolute rounded-full opacity-20"
        style={{
          width: "500px",
          height: "500px",
          top: "10%",
          right: "-100px",
          background: "#db2777",
          filter: "blur(130px)",
          willChange: "transform",
        }}
      />

      {/* Blauw-paars — midden */}
      <div
        className="absolute rounded-full opacity-15"
        style={{
          width: "800px",
          height: "400px",
          top: "40%",
          left: "20%",
          background: "#4f46e5",
          filter: "blur(150px)",
          willChange: "transform",
        }}
      />

    </div>
  );
}
