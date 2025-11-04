import { Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="fixed bottom-0 left-0 w-full bg-white/10 backdrop-blur-md border-t border-cyan-400/30 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 px-6 md:px-12 py-4 text-white text-center shadow-lg shadow-cyan-500/20 z-40"
    >
      {/* Contact Details */}
      <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-lg">
        <p>📍 <span className="text-white">Bangalore, India</span></p>

        <p>
          📧{" "}
          <a
            href="mailto:hanamagoudpatil9611@gmail.com"
            className="text-cyan-400 hover:underline"
          >
            hanamagoudpatil9611@gmail.com
          </a>
        </p>

        <p>
          📞{" "}
          <a
            href="tel:+919611000925"
            className="text-cyan-400 hover:underline"
          >
            +91 96110 00925
          </a>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/hanamagoud-patil-897033148/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition transform hover:scale-110"
          title="LinkedIn"
        >
          <Linkedin size={26} />
        </a>

        <a
          href="https://github.com/hanamagouda9611"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition transform hover:scale-110"
          title="GitHub"
        >
          <Github size={26} />
        </a>

        <a
          href="https://www.instagram.com/h_gouda_p?igsh=cTExbmtsb3EzcjVw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition transform hover:scale-110"
          title="Instagram"
        >
          <Instagram size={26} />
        </a>
      </div>
    </footer>
  );
}
