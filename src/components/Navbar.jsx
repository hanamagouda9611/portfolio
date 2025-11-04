import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Certifications",
  ];

  // Highlight section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 150;
      sections.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section.toLowerCase());
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[75%] 
      z-50 flex items-center justify-between px-6 sm:px-10 py-3 rounded-full 
      border transition-all duration-300 
      ${scrolled
        ? "bg-white/20 border-cyan-400/40 backdrop-blur-2xl shadow-[0_0_20px_#06b6d4]/30 scale-95"
        : "bg-white/10 border-cyan-400/20 backdrop-blur-xl shadow-[0_0_20px_#06b6d4]/40"
      }`}
    >
      {/* Left Logo */}
      <a
        href="#home"
        className="flex items-center gap-2 sm:gap-3 text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-wide"
      >
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_15px_#06b6d4]/50 bg-white/10">
          <img
            src="./hanama.png"
            alt="Logo"
            className="w-full h-full object-cover object-center scale-110"
          />
        </div>
      </a>



      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`relative text-base font-medium transition-all duration-200 
              ${activeSection === item.toLowerCase()
                ? "text-cyan-400 after:w-full"
                : "text-gray-200 hover:text-cyan-300 after:w-0"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300`}
          >
            {item}
          </a>
        ))}

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1rFR1ZFf0cZYgGayBWaQIirGaOJspZYBP/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 
                     hover:bg-cyan-400 hover:text-black font-semibold 
                     transition-all duration-300 shadow-md shadow-cyan-500/30"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-cyan-400 focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-black/60 backdrop-blur-xl 
                     border border-cyan-400/20 rounded-3xl py-6 flex flex-col items-center gap-4 md:hidden"
        >
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`text-lg transition-all ${
                activeSection === item.toLowerCase()
                  ? "text-cyan-400"
                  : "text-gray-200 hover:text-cyan-300"
              }`}
            >
              {item}
            </a>
          ))}

          {/* Resume Button (Mobile) */}
          <a
            href="https://drive.google.com/file/d/1rFR1ZFf0cZYgGayBWaQIirGaOJspZYBP/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 
                       hover:bg-cyan-400 hover:text-black transition-all font-semibold"
          >
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
