import React, { useEffect, useState } from "react";
import "./FloatingIcons.css";
// import actual icons from react-icons
import { FaReact, FaBootstrap, FaHtml5, FaGitAlt, FaSass } from "react-icons/fa";
import { SiJavascript, SiCss3, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const FloatingIcons = () => {
  const [icons, setIcons] = useState([]);

  // icon components
  const techIcons = [
    { icon: <FaReact />, name: "React", color: "#61dafb" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "#7952b3" },
    { icon: <SiCss3 />, name: "CSS3", color: "#1572b6" },
    { icon: <FaHtml5 />, name: "HTML5", color: "#e34f26" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06b6d4" },
    { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
    { icon: <FaGitAlt />, name: "Git", color: "#f05032" },
    { icon: <FaSass />, name: "Sass", color: "#cc6699" },
  ];

  useEffect(() => {
    const generateIcons = () => {
      const generatedIcons = techIcons.map((tech, index) => ({
        ...tech,
        id: index,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 30 + 20, // 20-50px
        animationDelay: Math.random() * 10,
        animationDuration: Math.random() * 20 + 10, // 10-30s
        opacity: Math.random() * 0.4 + 0.1,
      }));
      setIcons(generatedIcons);
    };

    generateIcons();
    window.addEventListener("resize", generateIcons);
    return () => window.removeEventListener("resize", generateIcons);
  }, []);

  return (
    <div className="floating-icons-container">
      {icons.map((iconData) => (
        <div
          key={iconData.id}
          className="floating-icon"
          style={{
            left: `${iconData.x}px`,
            top: `${iconData.y}px`,
            fontSize: `${iconData.size}px`,
            color: iconData.color,
            opacity: iconData.opacity,
            animationDelay: `${iconData.animationDelay}s`,
            animationDuration: `${iconData.animationDuration}s`,
          }}
        >
          {iconData.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;