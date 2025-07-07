// components/About.jsx
import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Zap } from 'lucide-react';
import { fetchGitHubStats } from '../utils/github';

const StatCard = ({ icon: Icon, title, value, description, delay }) => (
  <div 
    className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100
      transition-all duration-500 transform hover:scale-105 hover:shadow-xl
      animate-fade-in-up`}
    style={{ animationDelay: `${delay}ms` }}>
    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 
      rounded-lg mb-4 mx-auto">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">{value}</h3>
    <p className="text-blue-600 font-semibold text-center mb-1">{title}</p>
    <p className="text-gray-600 text-sm text-center">{description}</p>
  </div>
);

const About = ({ isVisible }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchGitHubStats().then(setStats);
  }, []);

  return (
    <section id="about" className={`py-16 bg-gradient-to-br from-gray-50 to-white
      transition-all duration-700 ease-out transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4
            transition-transform duration-500 hover:scale-105">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and analyzing data to drive insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            <div className="transition-all duration-500 delay-200 hover:text-gray-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hi there! I'm Dipesh Kumar Panjiyar
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a passionate Full Stack Developer and Data Analyst with a strong foundation in modern web technologies 
                and data science. My journey in tech began in {stats?.joinDate || '2023'}, and since then, I've been 
                constantly learning and evolving with the ever-changing landscape of technology.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I specialize in building responsive web applications using React.js, JavaScript, and Python. 
                My analytical mindset drives me to not just build applications, but to understand the data behind them 
                and optimize for better user experiences and business outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or diving deep into data to uncover meaningful insights. I believe in continuous learning and love 
                sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <Code className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Web Development</p>
                  <p className="text-sm text-gray-600">React, JavaScript, HTML/CSS</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <Database className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Data Analysis</p>
                  <p className="text-sm text-gray-600">Python, SQL, Machine Learning</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <Brain className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Problem Solving</p>
                  <p className="text-sm text-gray-600">Algorithms, Optimization</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                <Zap className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="font-semibold text-gray-900">Quick Learner</p>
                  <p className="text-sm text-gray-600">Adapting to new tech</p>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard
              icon={Code}
              title="Public Repositories"
              value={stats?.totalRepos || "11"}
              description="Projects on GitHub"
              delay={0}
            />
            <StatCard
              icon={Database}
              title="GitHub Followers"
              value={stats?.followers || "5"}
              description="Developer network"
              delay={200}
            />
            <StatCard
              icon={Brain}
              title="Years Experience"
              value={stats ? new Date().getFullYear() - stats.joinDate : "2+"}
              description="In development"
              delay={400}
            />
            <StatCard
              icon={Zap}
              title="Tech Languages"
              value={stats?.languages?.length || "5+"}
              description="Programming languages"
              delay={600}
            />
          </div>
        </div>

        {/* Technologies */}
        {stats?.languages && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {stats.languages.map((language, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 
                  text-blue-700 rounded-full font-medium transition-all duration-300 
                  hover:from-blue-200 hover:to-purple-200 hover:scale-105">
                  {language}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;