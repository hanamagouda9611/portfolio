import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certification />
      <Contact />
    </>
  );
}
