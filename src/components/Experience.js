// components/Experience.jsx
import React from 'react';

const TimelineItem = ({ year, title, company, description, isVisible, index }) => (
  <div className={`relative pl-8 pb-8 transition-all duration-500 transform
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${index * 200}ms` }}>
    <div className="absolute left-0 top-0 w-2 h-2 bg-blue-600 rounded-full" />
    <div className="absolute left-1 top-2 w-px h-full bg-gray-300" />
    <div className="text-sm text-blue-600 font-semibold mb-1">{year}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
    <div className="text-gray-600 mb-2">{company}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Experience = ({ isVisible }) => {
  const experiences = [
    {
      year: "2022 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      description: "Led development of multiple web applications using React and Next.js."
    },
    {
      year: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained various client projects using modern web technologies."
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 transition-transform duration-500 hover:scale-105">
          Work Experience Demo
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              {...exp}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;