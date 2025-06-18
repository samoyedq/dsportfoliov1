import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import "./Experience.css";

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      duration: "January 2025 - June 2025",
      company: "iEminence Inc.",
      title: "Intern Full-stack Engineer",
      description:
        "Developed a Human Resource Information System (HRIS) and contributed to multiple client projects. Focused on building responsive user interfaces using React and React Bootstrap, and implemented backend features with Node.js and Express.js. Worked with SSMS for database management and used Docker for containerization.",
      link: "https://www.ieminence.com/",
      skills: [
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "React Bootstrap",
        "SSMS",
        "Docker",
      ],
    },
    {
      duration: "October 2024 - April 2025",
      company: "Molino Polyclinic",
      title: "Full-stack Engineer / QA Analyst / Project Manager",
      description:
        "Led the development of the Molino Care App — a patient information and appointment management system tailored for Molino Polyclinic. Built end-to-end features using the MERN stack, implemented QA testing protocols, and managed timelines and collaboration across teams to ensure on-time delivery.",
      skills: [
        "React",
        "CRA",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Amazon Web Services",
        "Hostinger",
        "React Bootstrap",
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="sticky top-[3.8rem] z-30 py-4 flex overflow-hidden mb-6 md:static md:py-0 sticky-background">
        <motion.h2
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
      </div>

      <div className="space-y-8 experience-container">
        {experiences.map((exp, index) => (
          <motion.a
            key={index}
            target="_blank"
            className="experience-item box-hover grid grid-cols-12 gap-2 md:gap-8 p-4 my-4"
            href={exp.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* First column - Duration */}
            <div className="col-span-4 md:col-span-3">
              <h3
                className={`font-mono text-xs md:text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {exp.duration}
              </h3>
            </div>

            {/* Second column - Details */}
            <div className="col-span-8 md:col-span-9">
              <h3
                className={`font-medium text-base md:text-lg mb-1 flex items-center experience-title ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <span className="mr-1">
                  {exp.title} · {exp.company}
                </span>
                <span className="arrow-icon-container">
                  <GoArrowUpRight
                    className="arrow-icon text-md ml-1 transition-transform duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </h3>
              <p
                className={`text-sm md:text-base mb-3 md:mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full ${
                      theme === "dark"
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Experience;
