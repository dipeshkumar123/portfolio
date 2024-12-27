// components/Hero.jsx
import React from 'react';

const Hero = ({ isVisible }) => {
  return (
    <section id="home" className={`pt-20 md:pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 
      transition-opacity duration-1000 ease-out transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 
            transition-all duration-700 ease-out transform hover:scale-105">
            Hello, I'm <span className="text-blue-600 animate-pulse">Dipesh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 transition-all duration-500 delay-200">
            Full Stack Developer | Data Analyst | Problem Solver
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg 
              transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
              Contact Me
            </a>
            <a href="#projects" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg
              transition-all duration-300 ease-out hover:bg-blue-50 hover:scale-105 hover:shadow-lg">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;