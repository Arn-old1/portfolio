import React from "react";
import "./About.css"
import profileImage from "../assets/pro.jpg";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-photo" data-aos="zoom-in">
        <img src={profileImage} alt="Kirabo Arnold" />
        </div>

        <div className="about-content fade-in-up">
          <p className="about-text">
          I’m a dedicated Frontend Developer with 2 years of experience building modern, responsive, and accessible web applications. My journey in web development started with curiosity about how design meets technology, and it quickly grew into a passion for creating digital products that combine clean code, creativity, and perform
          </p>
          <p className="about-text">
            I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, 
            you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
          
          <div className="about-cards">
            <div className="about-card fade-in-left">
              <div className="about-card-icon coffee">☕</div>
              <h3>Coffee Enthusiast</h3>
              <p>Fueled by coffee and passionate about clean code</p>
            </div>
            <div className="about-card fade-in-up">
              <div className="about-card-icon heart">❤️</div>
              <h3>Problem Solver</h3>
              <p>I love tackling complex challenges with creative solutions</p>
            </div>
            <div className="about-card fade-in-right">
              <div className="about-card-icon code">💻</div>
              <h3>Tech Explorer</h3>
              <p>Always learning and exploring new technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
