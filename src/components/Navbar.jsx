import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">Arnold Kirabo</div>

          <ul className="navbar-nav">
            <li>
              <button className="nav-link" onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollToSection("skills")}>Skills</button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollToSection("projects")}>Projects</button>
            </li>
            <li>
              <button className="nav-link" onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
          </ul>

          <button
            className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
}