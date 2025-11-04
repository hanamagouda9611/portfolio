export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-900/10 blur-3xl -z-10"></div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-10 drop-shadow-[0_0_20px_#06b6d4]">
        Education
      </h2>

      {/* Glassy Container */}
      <div className="bg-white/10 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-8 sm:p-10 md:p-16 max-w-5xl w-full mx-auto shadow-[0_0_60px_#06b6d4]/20">
        <div className="max-w-4xl mx-auto text-gray-300 space-y-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start text-center sm:text-left gap-2 sm:gap-0">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400">
              B.E. Civil Engineering
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Govt. Engineering College, Haveri (2019–2022)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start text-center sm:text-left gap-2 sm:gap-0">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400">
              Diploma in Civil Engineering
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              Govt. Polytechnic College, Bagalkot (2016–2019)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start text-center sm:text-left gap-2 sm:gap-0">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400">
              SSLC
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400">
              MHM High School, Almatti D S (2015–2016)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
