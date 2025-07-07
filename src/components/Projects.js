// components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { fetchGitHubRepos, formatRepoForDisplay } from '../utils/github';

const ProjectCard = ({ project, index, isVisible }) => (
  <div 
    className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100
      transition-all duration-500 ease-out transform
      hover:shadow-2xl hover:scale-105 hover:-translate-y-2
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    style={{ transitionDelay: `${index * 200}ms` }}>
    
    {/* Project Header */}
    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-blue-600">
          {project.title}
        </h3>
        <div className="flex items-center space-x-2">
          {project.stars > 0 && (
            <div className="flex items-center space-x-1 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-medium">{project.stars}</span>
            </div>
          )}
          {project.forks > 0 && (
            <div className="flex items-center space-x-1 text-gray-500">
              <GitFork size={16} />
              <span className="text-sm">{project.forks}</span>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      {/* Language indicator */}
      {project.language && (
        <div className="flex items-center space-x-2 mb-4">
          <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
          <span className="text-sm text-gray-600">{project.language}</span>
          {project.updatedAt && (
            <span className="text-xs text-gray-400">
              • Updated {new Date(project.updatedAt).toLocaleDateString()}
            </span>
          )}
        </div>
      )}
    </div>

    {/* Project Body */}
    <div className="p-6">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.slice(0, 4).map((tag, tagIndex) => (
          <span key={tagIndex} 
            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 
            text-blue-700 rounded-full text-sm font-medium
            transition-all duration-300 hover:from-blue-200 hover:to-purple-200">
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
            +{project.tags.length - 4} more
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
          px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105
          flex items-center justify-center space-x-2">
          <Github size={16} />
          <span>View Code</span>
        </a>
        
        {/* Demo link if available (for specific repos) */}
        {(project.title.includes('portfolio') || project.title.includes('website')) && (
          <a 
            href={`https://${project.title.includes('portfolio') ? 'dipeshkumar123.github.io/portfolio' : '#'}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg
            transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105
            flex items-center justify-center space-x-2">
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

// Helper function to get language color
const getLanguageColor = (language) => {
  const colors = {
    JavaScript: 'bg-yellow-400',
    TypeScript: 'bg-blue-500',
    Python: 'bg-green-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-blue-400',
    React: 'bg-cyan-500',
    Vue: 'bg-green-400',
    Node: 'bg-green-600',
    Java: 'bg-red-500',
    'C++': 'bg-purple-500',
    PHP: 'bg-indigo-500',
    Ruby: 'bg-red-400',
    Go: 'bg-cyan-600',
    Rust: 'bg-orange-600',
    Swift: 'bg-orange-400',
    Kotlin: 'bg-purple-400'
  };
  return colors[language] || 'bg-gray-400';
};

const Projects = ({ isVisible }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const repos = await fetchGitHubRepos();
        const formattedProjects = repos.map(formatRepoForDisplay);
        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
        // Fallback to hardcoded projects if GitHub API fails
        setProjects([
          {
            title: "Local-Language-Translator-for-Daily-Phrases",
            description: "A web-based real-time local language translator designed for seamless communication in various local languages",
            tags: ["HTML", "CSS", "Javascript"],
            url: "https://github.com/dipeshkumar123/Local-Language-Translator-for-Daily-Phrases",
            stars: 0,
            forks: 0,
            language: "JavaScript"
          },
          {
            title: "Email-Spam-Detection-Chrome-Extension",
            description: "A machine learning backend for spam detection with a browser extension to provide real-time classification of email content",
            tags: ["HTML", "CSS", "Javascript", "Python"],
            url: "https://github.com/dipeshkumar123/Email-Spam-Detection-Chrome-Extension",
            stars: 0,
            forks: 0,
            language: "JavaScript"
          },
          {
            title: "Dance_Website",
            description: "A dance website using pug",
            tags: ["Pug", "CSS", "Javascript"],
            url: "https://github.com/dipeshkumar123/Dance_Website",
            stars: 0,
            forks: 0,
            language: "Pug"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={`py-16 bg-gradient-to-br from-gray-50 to-white transition-opacity duration-700 ease-out
      ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4
            transition-transform duration-500 hover:scale-105">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my recent work showcasing various technologies and problem-solving approaches.
          </p>
        </div>
        
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

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/dipeshkumar123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-full
            transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl">
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;