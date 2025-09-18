import React from "react";
import "./Hero.css";
import profileImage from "../assets/pro.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero dark" data-aos="fade-up">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow" data-aos="fade-right">Frontend Developer</p>
          <h1 data-aos="fade-left">
             <span>Kirabo Arnold</span>
          </h1>
          <p className="lead" data-aos="fade-right">
            I build modern, responsive web applications using React, JavaScript and CSS.
          </p>
          <div className="hero-ctas" data-aos="zoom-in">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              📄 Download cv
            </a>
            <a href="#projects" className="btn btn-outline">
              See Projects
            </a>
          </div>
        </div>

        <div className="hero-media"data-aos="zoom-in"> 
          <div className="avatar-ring"> 
            <div className="avatar-glow"></div>
            <img src={profileImage} alt="Kirabo Arnold" className="avatar-img" />
          </div>
        </div>
      </div>
    </section>
  );
}