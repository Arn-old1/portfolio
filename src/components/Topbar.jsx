import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span>📧 arno.dev@gmail.com</span>
        <span className="tagline">Frontend Developer | 2 Years of Experience</span>
      </div>

      <div className="topbar-right">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="/resume.pdf" className="btn-small" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
}