import React from "react";
import { projects } from "../data/ProjectsData.js";
import "./Projects.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      data-aos="fade-up" 
    >
      <h2 className="section-title" data-aos="fade-down">
        Projects
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            data-aos="zoom-in" // each card zooms in
            data-aos-delay={index * 150} // stagger effect
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-demo"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-details"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}