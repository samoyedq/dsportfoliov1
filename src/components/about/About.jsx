import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import "./About.css";
import LogoMarquee from "./LogoMarquee";
import SkillIcons from "./SkillIcons";
// Import your logo images

const About = () => {
  const { theme } = useContext(ThemeContext);

  const frontendSkills = [
    { name: "React", icon: "react" },
    { name: "Vite.js", icon: "vitejs" },
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "React Bootstrap", icon: "reactbootstrap" },
    { name: "Redux", icon: "redux" },
  ];

  // Backend skills with icons
  const backendSkills = [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express", needsInvert: true },
    { name: "Python", icon: "python" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "Microsoft SQL Server", icon: "microsoftsqlserver" },
    { name: "Docker", icon: "docker" },
  ];

  const UIUXSkills = [
    { name: "Figma", icon: "figma" },
    { name: "Adobe Illustrator", icon: "illustrator" },
    { name: "Adobe Photoshop", icon: "photoshop" },

    { name: "Canva", icon: "canva" },
  ];

  return (
    <section id="about" className="pb-6">
      <div className="sticky top-[3.8rem] z-30 py-4 flex overflow-hidden top-0 mb-6 md:static md:py-0 bg-white-800 sticky-background">
        <motion.h2
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-3">
        {/* Right side - Content */}
        <motion.div
          className="w-full md:w-3/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className={`prose prose-lg max-w-none ${
              theme === "dark" ? "prose-dark" : ""
            }`}
          >
            <p
              className={`mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p
                className={`mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I'm passionate about <strong>building software</strong> and{" "}
                <strong>UI/UX designer</strong> from the Philippines. I
                specialize in creating Web Applications that is functional,
                user-friendly, and visually appealing.
              </p>
            </p>

            <p
              className={`mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              In the past, I’ve worked on a variety of projects—including web
              applications, mobile apps, and design initiatives. Through out my
              time in academe, I gained valuable experience in{" "}
              <strong>
                {" "}
                software development, UI/UX design, and project management.{" "}
              </strong>{" "}
              I also take pride in being academically driven, having ranked{" "}
              <strong>Top 9 nationwide</strong> in the{" "}
              <strong>Test of Practical Competency in ICT (TOPCIT)</strong>—an
              international IT proficiency exam developed by the South Korean
              government.
            </p>

            <h3
              className={`text-xl font-medium mb-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Core Skills
            </h3>

            <div className="grid mb-12  gap-8">
              <div>
                <h4
                  className={`text-lg font-medium mb-6 text-center ${
                    theme === "dark" ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  Front-end Development
                </h4>

                {/* Frontend skill icons */}
                <SkillIcons skills={frontendSkills} />
              </div>
              <div>
                <h4
                  className={`text-lg font-medium mb-6 text-center ${
                    theme === "dark" ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  Back-end Development
                </h4>

                {/* Backend skill icons */}
                <SkillIcons skills={backendSkills} />
              </div>
              <div>
                <h4
                  className={`text-lg font-medium mb-6 text-center ${
                    theme === "dark" ? "text-teal-400" : "text-teal-600"
                  }`}
                >
                  UI/UX Design
                </h4>
                {/* UI/UX skill icons */}
                <SkillIcons skills={UIUXSkills} />
              </div>
            </div>

            {/* Add Tech Stack heading */}
            <h3
              className={`text-xl font-medium mb-4 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Other Technologies I Work With
            </h3>

            {/* Add the LogoMarquee component */}
            <div className="mb-8 ">
              <LogoMarquee />
            </div>

            <h3
              className={`text-xl font-medium mb-4 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Current Focus
            </h3>
            <p
              className={`mb-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Currently focused on <strong>full-stack development</strong> and{" "}
              <strong>UI/UX design</strong>, I aim to build solutions that
              support communities and advance the{" "}
              <strong>Sustainable Development Goals.</strong> I believe in
              continuous learning to stay ahead in this ever-evolving field.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
