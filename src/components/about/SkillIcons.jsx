import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./SkillIcons.css";

const SkillIcons = ({ skills }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center w-full">
      <div className="skill-icons-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-icon ${skill.needsInvert ? 'needs-invert' : ''}`}
          >
            <div className="skill-tooltip-container">
              <img 
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
                alt={skill.name}
                onError={(e) => {
                  e.target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
                }}
              />
              <span className="skill-tooltip">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillIcons;