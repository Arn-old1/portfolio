import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { 
      name: "HTML", 
      level: 90, 
      devicon: "devicon-html5-plain colored"
    },
    { 
      name: "CSS", 
      level: 85, 
      devicon: "devicon-css3-plain colored"
    },
    { 
      name: "Bootstrap", 
      level: 80, 
      devicon: "devicon-bootstrap-plain colored"
    },
    { 
      name: "JavaScript", 
      level: 75, 
      devicon: "devicon-javascript-plain colored"
    },
    { 
      name: "React", 
      level: 70, 
      devicon: "devicon-react-original colored"
    },
    { 
      name: "Next.js", 
      level: 65, 
      devicon: "devicon-nextjs-original colored"
    },
    { 
      name: "Tailwind", 
      level: 78, 
      devicon: "devicon-tailwindcss-plain colored"
    },
    { 
      name: "Sass", 
      level: 72, 
      devicon: "devicon-sass-original colored"
    },
    { 
      name: "TypeScript",        
      level: 68,
      devicon: "devicon-typescript-plain colored"
    },
    { 
      name: "Redux",
      level: 65,
      devicon: "devicon-redux-original colored"
    },
    { 
      name: "Git & GitHub",
      level: 82,
      devicon: "devicon-git-plain colored"
    },
    { 
      name: "Responsive Design",  
      level: 88,
      devicon: null, 
      icon: "📱"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !skillsAnimated) {
            setSkillsAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skillsAnimated]);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`skill-card ${skillsAnimated ? 'animate-in' : ''}`}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="skill-header">
              <div className="skill-icon">
                {skill.devicon ? (
                  <i className={skill.devicon}></i>
                ) : (
                  <span>{skill.icon}</span>
                )}
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{
                  width: skillsAnimated ? `${skill.level}%` : "0%",
                  background: skill.color,
                  transition: "width 1.5s ease-in-out",
                  transitionDelay: `${index * 0.1}s`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
 
<div className="contact-badge">

CONTACT
</div>