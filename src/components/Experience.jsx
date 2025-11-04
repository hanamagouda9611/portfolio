export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-900/10 blur-3xl -z-10"></div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-12 drop-shadow-[0_0_20px_#06b6d4]">
        Experience
      </h2>

      {/* Glassy Card */}
      <div className="bg-white/10 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-6 sm:p-10 md:p-16 max-w-5xl w-full mx-auto shadow-[0_0_60px_#06b6d4]/20 text-left">
        {/* Job Title */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
          Software Engineer – Deduce Technologies Pvt Ltd
        </h3>

        {/* Duration */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6">
          Jan 2023 – Present | Bangalore
        </p>

        {/* Responsibilities */}
        <ul className="text-gray-200 list-disc list-inside space-y-3 text-base sm:text-lg md:text-xl leading-relaxed">
          <li>Developed and managed scalable GIS-based applications and APIs.</li>
          <li>Automated AWS infrastructure provisioning using Terraform and Ansible.</li>
          <li>Built containerized services deployed via Kubernetes and Docker.</li>
          <li>Developed RESTful APIs using FastAPI and Node.js with PostGIS and GeoServer integrations.</li>
          <li>Implemented CI/CD pipelines using GitHub Actions and Jenkins for automated deployments.</li>
        </ul>
      </div>
    </section>
  );
}
