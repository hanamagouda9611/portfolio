export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-900/10 blur-3xl -z-10"></div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-10 drop-shadow-[0_0_20px_#06b6d4]">
        Certifications
      </h2>

      {/* Glassy Container */}
      <div className="bg-white/10 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-8 sm:p-10 md:p-16 max-w-5xl w-full mx-auto shadow-[0_0_60px_#06b6d4]/20">
        <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
          <ul className="space-y-4">
            <li className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 hover:text-cyan-300 transition-all duration-300">
              🎓 <span className="text-cyan-400 font-semibold">Java Full Stack</span> – JSpiders
            </li>
            <li className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 hover:text-cyan-300 transition-all duration-300">
              ⚡ <span className="text-cyan-400 font-semibold">JavaScript</span> – Namaste JavaScript
            </li>
            <li className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 hover:text-cyan-300 transition-all duration-300">
              ☁️ <span className="text-cyan-400 font-semibold">FastAPI, AWS Cloud, DevOps, GeoServer, GeoPandas</span> – Udemy
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
