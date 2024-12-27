// components/Skills.jsx
import React from 'react';

const SkillBar = ({ skill, level, color, isVisible, index }) => (
  <div 
    className={`mb-6 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="flex justify-between mb-2">
      <span className="text-gray-700 font-medium">{skill}</span>
      <span className="text-gray-600">{level}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color} transition-all duration-1000 ease-out`}
        style={{ width: isVisible ? `${level}%` : '0%' }}
      />
    </div>
  </div>
);

const Skills = ({ isVisible }) => {
  const skills = [
    { name: "Frontend Development", level: 90, color: "bg-blue-600" },
    { name: "Backend Development", level: 85, color: "bg-green-600" },
    { name: "Problem Solving", level: 80, color: "bg-purple-600" },
    { name: "Data Analyst", level: 75, color: "bg-orange-600" }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 transition-transform duration-500 hover:scale-105">
          Skills & Expertise
        </h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.name}
              level={skill.level}
              color={skill.color}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;