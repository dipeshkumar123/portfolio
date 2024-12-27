// components/Projects.jsx
import React from 'react';

const ProjectCard = ({ project, index, isVisible }) => (
  <div 
    className={`bg-white rounded-lg shadow-md overflow-hidden
      transition-all duration-500 ease-out transform
      hover:shadow-xl hover:scale-105
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${index * 200}ms` }}>
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" 
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-600">
        {project.title}
      </h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm
            transition-all duration-300 hover:bg-blue-100 hover:text-blue-600">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = ({ projects, isVisible }) => {
  return (
    <section id="projects" className={`py-16 bg-white transition-opacity duration-700 ease-out
      ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center
          transition-transform duration-500 hover:scale-105">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;