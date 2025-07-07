// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import { fetchGitHubProfile } from '../utils/github';

const Hero = ({ isVisible }) => {
  const [profile, setProfile] = useState(null);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'Data Analyst', 
    'Problem Solver',
    'React Developer',
    'Python Developer'
  ];

  useEffect(() => {
    fetchGitHubProfile().then(setProfile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section id="home" className={`pt-20 md:pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 
      transition-opacity duration-1000 ease-out transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 
                transition-all duration-700 ease-out transform hover:scale-105">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dipesh Kumar
                </span>
              </h1>
              <div className="h-16 md:h-20">
                <p className="text-xl md:text-2xl text-gray-600 transition-all duration-500 delay-200">
                  I'm a{' '}
                  <span className="text-blue-600 font-semibold animate-pulse">
                    {roles[currentRole]}
                  </span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate about creating innovative solutions with modern web technologies and data analysis.
              {profile && ` Building amazing projects since ${new Date(profile.created_at).getFullYear()}.`}
            </p>

            {/* GitHub Stats */}
            {profile && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Github size={20} />
                  <span>{profile.public_repos} repositories</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar size={20} />
                  <span>Since {new Date(profile.created_at).getFullYear()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin size={20} />
                  <span>{profile.location || 'Open to opportunities'}</span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full 
                transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl transform
                flex items-center justify-center space-x-2">
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
              <a href="#projects" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full
                transition-all duration-300 ease-out hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-xl">
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href="https://github.com/dipeshkumar123" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-125">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/dipesh-panjiyar" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-125">
                <Linkedin size={24} />
              </a>
              <a href="mailto:panjiyardipesh123@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-125">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image/Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Animated background circles */}
              <div className="absolute inset-0 animate-pulse">
                <div className="w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce"></div>
              </div>
              <div className="absolute inset-4 animate-ping">
                <div className="w-72 h-72 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20"></div>
              </div>
              
              {/* Profile container */}
              <div className="relative z-10 w-80 h-80 bg-gradient-to-br from-white to-gray-50 rounded-full 
                flex items-center justify-center shadow-2xl border-4 border-white">
                {profile?.avatar_url ? (
                  <img 
                    src={profile.avatar_url} 
                    alt="Dipesh Kumar"
                    className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                ) : (
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                    flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                    DK
                  </div>
                )}
              </div>

              {/* Floating tech icons */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-bounce delay-1000">
                <span className="text-white font-bold">JS</span>
              </div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center animate-bounce delay-2000">
                <span className="text-white font-bold">PY</span>
              </div>
              <div className="absolute top-1/2 right-0 w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center animate-bounce delay-3000">
                <span className="text-white font-bold text-sm">R</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;