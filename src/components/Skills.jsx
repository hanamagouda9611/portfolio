const skills = {
  "Programming & APIs": ["Python", "FastAPI", "RESTful APIs"],
  "Web Development": ["HTML", "CSS", "JavaScript", "Leaflet.js", "Mapbox GL JS", "React"],
  "Databases": ["PostgreSQL", "PostGIS", "Oracle SQL"],
  "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Terraform", "Ansible"],
  "ETL & GIS Tools": ["GeoServer", "QGIS", "GeoPandas", "GDAL", "FME"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-900/10 blur-3xl -z-10"></div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-12 drop-shadow-[0_0_20px_#06b6d4]">
        Technical Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {Object.entries(skills).map(([category, list]) => (
          <div
            key={category}
            className="bg-white/10 backdrop-blur-2xl border border-cyan-400/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_#06b6d4]/10 hover:shadow-[0_0_60px_#06b6d4]/40 hover:scale-[1.03] transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 text-center sm:text-left">
              {category}
            </h3>
            <ul className="text-gray-300 list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl">
              {list.map((skill) => (
                <li
                  key={skill}
                  className="hover:text-cyan-300 transition-all duration-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
