import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Social from "./components/Social";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,    
      once: true,          
      easing: "ease-in-out"
    });
  }, []);

  return (
    <>
    <FloatingIcons/>
      <Navbar />
      <Hero />
      <Social />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}