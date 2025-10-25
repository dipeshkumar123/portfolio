// App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';

const SECTION_IDS = ['home', 'projects', 'skills', 'experience', 'testimonials', 'about', 'contact'];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = useMemo(() => SECTION_IDS, []);

  useEffect(() => {
    const handleScroll = () => {
      const visibilityMap = {};

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          visibilityMap[section] = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        }
      });

      setIsVisible(visibilityMap);

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-x-0 top-0 z-50 h-1">
        <span
          className="block h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute -top-20 right-[-6rem] h-80 w-80 rounded-full bg-blue-200 blur-[120px] animate-blob" />
        <div className="absolute -bottom-32 left-[-4rem] h-96 w-96 rounded-full bg-purple-200 blur-[140px] animate-blob"
          style={{ animationDelay: '6s' }}
        />
        <div className="absolute top-1/3 left-12 h-72 w-72 rounded-full bg-cyan-200 blur-[120px] opacity-70 animate-blob"
          style={{ animationDelay: '12s' }}
        />
      </div>

      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        onNavigate={() => setIsMenuOpen(false)}
      />

      <main className="space-y-0">
        <Hero isVisible={isVisible.home} />
        <Projects isVisible={isVisible.projects} />
        <About isVisible={isVisible.about} />
        <Skills isVisible={isVisible.skills} />
        <Experience isVisible={isVisible.experience} />
        <Testimonials isVisible={isVisible.testimonials} />
        <Contact isVisible={isVisible.contact} />
      </main>

      <Footer />
    </div>
  );
};

export default App;