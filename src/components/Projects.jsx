export default function Projects() {
  const projects = [
    {
      title: "IMARG MAP – Cloud GIS Web App",
      desc: "A scalable cloud-based GIS platform using React, GeoServer, PostGIS, AWS, and Kubernetes.",
    },
    {
      title: "ENC MAP – Marine Navigation Tool",
      desc: "Developed compliant marine navigation charts using GeoServer and S-57 datasets.",
    },
    {
      title: "Geocoding API",
      desc: "Location-based API using FastAPI, Elasticsearch, and PostGIS for geospatial search.",
    },
    {
      title: "ETL Pipeline for Spatial Data",
      desc: "Automated Python ETL for spatial data ingestion with GeoPandas and GDAL.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-900/10 blur-3xl -z-10"></div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-12 drop-shadow-[0_0_20px_#06b6d4]">
        Projects
      </h2>

      {/* Glassy Container */}
      <div className="bg-white/10 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-6 sm:p-10 md:p-16 max-w-6xl w-full mx-auto shadow-[0_0_60px_#06b6d4]/20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white/10 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-[0_0_40px_#06b6d4]/30 transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
