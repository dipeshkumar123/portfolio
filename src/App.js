// App.jsx
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  const projects = [
    {
      title: "Local-Language-Translator-for-Daily-Phrases",
      description: "A web-based real-time local language translator designed for seamless communication in various local languages",
      tags: ["HTML", "CSS", "Javascript"],
      image: "/images/image.png"
    },
    {
      title: "Spam Email Classification and Browser Extension",
      description: "A machine learning backend for spam detection with a browser extension to provide real-time classification of email content",
      tags: ["HTML", "CSS", "Javascript", "Python"],
      image: "/images/image2.png"
    },
    {
      title: "Dance_Website",
      description: "A dance website using pug",
      tags: ["Pug", "CSS", "Javascript"],
      image: "/images/image3.png"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'experience', 'testimonials', 'about', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          setIsVisible(prev => ({
            ...prev,
            [section]: rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0
          }));
        }
      });

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />
      <Hero isVisible={isVisible.home} />
      <Projects projects={projects} isVisible={isVisible.projects} />
      <About isVisible={isVisible.about} />
      <Skills isVisible={isVisible.skills} />
      <Experience isVisible={isVisible.experience} />
      <Testimonials isVisible={isVisible.testimonials} />
      <Contact isVisible={isVisible.contact} />
      <Footer />
    </div>
  );
};

export default App;