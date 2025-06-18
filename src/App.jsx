import { useContext, useEffect, useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
function App() {
  const { theme } = useContext(ThemeContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle mouse movement and other effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkZoomLevel = () => {
      setIsZoomedIn(window.innerWidth < 640);
    };

    const handleNavClick = (e) => {
      const target = e.target.closest("a[data-section]");
      if (!target) return;

      e.preventDefault();
      const sectionId = target.getAttribute("data-section");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Add all event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkZoomLevel);
    document.addEventListener("click", handleNavClick);

    // Initial check
    checkZoomLevel();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkZoomLevel);
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  // Always keep navbar visible - modified to just track scroll position
  const trackScrollPosition = () => {
    const currentScrollY = window.scrollY;
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", trackScrollPosition);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", trackScrollPosition);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`custom-cursor pointer-events-none ${
          theme === "dark" ? "custom-cursor-dark" : ""
        }`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />

      <div className=" main-container mx-auto  justify-center max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:justify-between lg:gap-8 md:px-12">
          <div className="portfolio-sidebar flex flex-col justify-between lg:max-h-screen lg:sticky lg:top-0 lg:flex  lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
            <Home />
          </div>

          <div className="pt-24 lg:w-[58%] lg:py-24 lg:pt-0 ">
            <motion.section
              id="about"
              className="pt-5 mb-16 scroll-mt-20 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <About />
            </motion.section>

            <motion.section
              id="experience" // Changed ID to be unique
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-12 lg:scroll-mt-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <Experience />
            </motion.section>
            <motion.section
              id="projects"
              className="pt-5 mb-16 scroll-mt-20 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Projects />
            </motion.section>
            <motion.section
              id="contact"
              className="pt-5 mb-16 scroll-mt-20 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Contact />
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
