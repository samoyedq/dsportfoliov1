import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import { GoArrowUpRight } from "react-icons/go";
import "./Projects.css"; // We'll create this file
import PortfolioImage from "../../assets/images/Portfolio.png"; // Update with your image path
import HRISImage from "../../assets/images/HRIS.png"; // Update with your image path
import PIAMSImages from "../../assets/images/PIAMS.png"; // Update with your image path
// Project data
const projectsData = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    image: PortfolioImage,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    liveLink: "https://your-portfolio-url.com",
    githubLink: "https://github.com/yourusername/portfolio",
    demoAvailable: false
  },
  {
    title: "Human Resource Information System (HRIS)",
    description: "A full-stack HRIS application that manages employee data, payroll, and attendance.",
    image: HRISImage,
    technologies: ["React", "Node.js", "Express", "SSMS", "Docker"],
    liveLink: "http://juanfile.com:5000/",
  },
  {
    title: "Patient Information and Appointment Management System",
    description: "A full-stack application for managing patient information and appointments.",
    image: PIAMSImages,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    // Note: No liveLink or githubLink provided
    demoAvailable: true // Flag to indicate a demo is available
  },
  // Add more projects
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle project click
  const handleProjectClick = (project) => {
    if (project.liveLink) {
      window.open(project.liveLink, '_blank');
    }
    // If no liveLink but demoAvailable, do nothing (tooltip shows it's demo only)
  };

  // Get tooltip text based on project
  const getTooltipText = (project) => {
    if (project.liveLink) {
      return "Visit live site";
    }
    if (project.demoAvailable) {
      return "Demo available on request";
    }
    return "Project details";
  };

  return (
    <section id="projects">
      <div className="sticky top-[3.8rem] z-30 py-4 flex overflow-hidden mb-6 md:static md:py-0 sticky-background">
        <motion.h2
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
      </div>

      <div className="mb-10 projects-container">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className={`project-item box-hover grid grid-cols-12 gap-4 p-4 rounded-lg mb-8 group cursor-pointer relative ${
              !project.liveLink && project.demoAvailable ? "demo-only" : ""
            }`}
            onClick={() => handleProjectClick(project)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Tooltip */}
            {hoveredIndex === index && (
              <div className="project-tooltip">
                {getTooltipText(project)}
              </div>
            )}

            {/* First column - Project Image */}
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <div className="project-image-container rounded-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Second column - Project Details */}
            <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col">
              <h3 className={`font-medium text-base md:text-lg mb-1 flex items-center project-title group ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                <span className="mr-1">{project.title}</span>
                <span className="arrow-icon-container inline-flex items-center transition-transform duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-1">
                  <GoArrowUpRight className="text-md ml-1" aria-hidden="true" />
                </span>
              </h3>
              
              <p className={`text-sm md:text-base mb-3 md:mb-4 ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}>
                {project.description}
              </p>
              
              {/* Technologies used */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className={`text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full ${
                        theme === "dark" 
                          ? "bg-gray-700 text-gray-300" 
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Only show "View Live" button if there is a liveLink */}
              {/* {project.liveLink && (
                <div className="flex gap-3 mt-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded transition-colors ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                  >
                    View Live
                  </a>
                </div>
              )} */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;