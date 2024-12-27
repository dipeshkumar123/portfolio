// components/About.jsx
import React from 'react';

const About = ({ isVisible }) => (
  <section id="about" className={`py-16 bg-gray-50
    transition-all duration-700 ease-out transform
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center
          transition-transform duration-500 hover:scale-105">
          About Me
        </h2>
        <p className="text-gray-600 mb-6 transition-all duration-500 delay-200 hover:text-gray-900">
          I'm a passionate developer with experience in building modern web applications.
          My focus is on creating intuitive and performant user experiences using the latest technologies.
        </p>
        <p className="text-gray-600 transition-all duration-500 delay-300 hover:text-gray-900">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
          or sharing my knowledge through technical writing and mentoring.
        </p>
      </div>
    </div>
  </section>
);

export default About;