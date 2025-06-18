import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./LogoMarquee.css";

const LogoMarquee = () => {
  const { theme } = useContext(ThemeContext);

  const techLogos = [
  
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      alt: "Django",
      needsInvert: true,
    },
   
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      alt: "Flask",
      needsInvert: true,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git",
      needsInvert: false,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "GitHub",
      needsInvert: true,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
      alt: "Azure DevOps",
      needsInvert: false,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      alt: "Python",
      needsInvert: false,
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        alt: "Spring",
        needsInvert: false,
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        alt: "Java",
        needsInvert: false,
    },
  
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      alt: "Laravel",
      needsInvert: false,
    },
   
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      alt: "Postman",
      needsInvert: false,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
      alt: "Insomnia",
      needsInvert: false,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      alt: "PHP",
      needsInvert: false,
    },
   
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
      alt: "Nginx",
      needsInvert: false,
    },
   
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      alt: "Amazon Web Services",
      needsInvert: false,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      alt: "Visual Studio Code",
      needsInvert: false,
    },
  ];

  return (
    <div className="logo-marquee-container">
      <div className="logo-marquee">
        <div className="logo-marquee-content">
          {techLogos.map((logo, index) => (
            <div
              key={index}
              className={`logo-item ${logo.needsInvert ? "needs-invert" : ""}`}
            >
              <div className="tooltip-container">
                <img src={logo.src} alt={logo.alt} />
                <span className="logo-tooltip">{logo.alt}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="logo-marquee-content" aria-hidden="true">
          {techLogos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className={`logo-item ${logo.needsInvert ? "needs-invert" : ""}`}
            >
              <div className="tooltip-container">
                <img src={logo.src} alt={logo.alt} />
                <span className="logo-tooltip">{logo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
