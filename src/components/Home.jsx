import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-4 sm:px-8 md:px-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white relative overflow-hidden"
    >
      {/* Background Glow Layers */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-900/10 blur-3xl"></div>
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl top-1/3 left-1/3"
        ></motion.div>
      </div>

      {/* Glassy Main Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl bg-white/10 backdrop-blur-2xl border-[2px] border-cyan-400/40 rounded-3xl p-6 sm:p-10 md:p-16 shadow-[0_0_20px_#06b6d4]/40"
      >
        {/* Left Side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full md:w-1/2 mb-10 md:mb-0"
        >
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border-[3px] border-cyan-400/70 shadow-[0_0_20px_#06b6d4]/50 bg-white/10">
            <img
              src="./hanama.png"
              alt="Hanamagouda"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text + Socials */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-lg">
            Hanamagouda Patil
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-200 font-light">
            Software Engineer
          </h2>

          {/* New Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-md mt-4"
          >
            <span className="text-cyan-400 font-medium">HTML/CSS, JAVASCRIPT</span>{" || "}
            <span className="text-cyan-400 font-medium">PYTHON</span>{" || "}
            <span className="text-cyan-400 font-medium">POSTGRESQL</span>{" || "}
            <span className="text-cyan-400 font-medium">AWS CLOUD</span>

          </motion.p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 sm:gap-10 mt-6">
            <a
              href="https://www.linkedin.com/in/hanamagoud-patil-897033148/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-white/10 border border-cyan-400/40 hover:bg-cyan-400/30 hover:scale-110 transition"
              title="LinkedIn"
            >
              <Linkedin size={32} className="sm:w-10 sm:h-10" />
            </a>

            <a
              href="https://github.com/hanamagouda9611"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-white/10 border border-cyan-400/40 hover:bg-cyan-400/30 hover:scale-110 transition"
              title="GitHub"
            >
              <Github size={32} className="sm:w-10 sm:h-10" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
