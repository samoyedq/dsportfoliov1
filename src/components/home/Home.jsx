import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("");

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ["about", "experience", "projects"];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="flex flex-col justify-between h-full w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top content section with flex-grow */}
        <div className="flex-grow">
          <motion.span
            className={`text-lg font-bold ml-1 md:ml-1 ${
              theme === "dark" ? "text-teal-400" : "text-teal-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.span>

          <div
            className={
              theme === "dark"
                ? "text-white type-animation-white"
                : "type-animation-white"
            }
            style={{ marginLeft: "0.1rem" }}
          >
            <TypeAnimation
              sequence={["Daniel", 1000, "Daniel Sebastian", () => {}]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <motion.h2
            className={`text-sm md:text-xl font-medium mb-4 md:mb-6 ml-1 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Full-stack Engineer
          </motion.h2>

          <motion.p
            className={`text-sm md:text-base lg:text-lg ml-1 mb-6 md:mb-8 max-w-lg  ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I build user-friendly web apps with modern tech to create software
            that makes life better.
          </motion.p>

          <motion.div
            className="hidden md:flex flex-col mt-4 mb-8 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            {/* Navigation links */}
            <a
              href="#about"
              data-section="about"
              className={`flex items-center space-x-4 ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
              onClick={() => setActiveSection("about")}
            >
              <motion.div
                className="h-[1px] bg-teal-500"
                animate={{
                  width: activeSection === "about" ? "5rem" : "3rem",
                  opacity: activeSection === "about" ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
                initial={false}
              ></motion.div>
              <span
                className={`uppercase tracking-widest text-sm font-medium ${
                  activeSection === "about"
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                    : ""
                }`}
              >
                About Me
              </span>
            </a>

            <a
              href="#experience"
              data-section="experience"
              className={`flex items-center space-x-4 ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
              onClick={() => setActiveSection("experience")}
            >
              <motion.div
                className="h-[1px] bg-teal-500"
                animate={{
                  width: activeSection === "experience" ? "5rem" : "3rem",
                  opacity: activeSection === "experience" ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
                initial={false}
              ></motion.div>
              <span
                className={`uppercase tracking-widest text-sm font-medium ${
                  activeSection === "experience"
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                    : ""
                }`}
              >
                Experience
              </span>
            </a>

            <a
              href="#projects"
              data-section="projects"
              className={`flex items-center space-x-4 ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
              onClick={() => setActiveSection("projects")}
            >
              <motion.div
                className="h-[1px] bg-teal-500"
                animate={{
                  width: activeSection === "projects" ? "5rem" : "3rem",
                  opacity: activeSection === "projects" ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
                initial={false}
              ></motion.div>
              <span
                className={`uppercase tracking-widest text-sm font-medium ${
                  activeSection === "projects"
                    ? theme === "dark"
                      ? "text-white"
                      : "text-gray-900"
                    : ""
                }`}
              >
                Projects
              </span>
            </a>
          </motion.div>
        </div>

        {/* Social links with margin-top for spacing */}
        <div className="mt-auto pt-8 flex items-center pb-8">
          <motion.div
            className="flex gap-5 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com/samoyedq"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl sm:text-2xl transition-all duration-300 transform hover:scale-110 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-sebastian-quilatan-168062284/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl sm:text-2xl transition-all duration-300 transform hover:scale-110 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/dnl.sb/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl sm:text-2xl transition-all duration-300 transform hover:scale-110 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-pink-400"
                  : "text-gray-600 hover:text-pink-500"
              }`}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
