// components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Personal Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dipesh Kumar Panjiyar
          </h3>
          <p className="text-gray-300 mb-4">
            Full Stack Developer & Data Analyst passionate about creating innovative solutions.
          </p>
          <p className="text-gray-400 text-sm">
            Building the future, one line of code at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
          <div className="space-y-2">
            <a href="#home" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect With Me</h4>
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <a 
              href="https://github.com/dipeshkumar123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 
              transition-all duration-300 transform hover:scale-110">
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dipesh-panjiyar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-blue-600 
              transition-all duration-300 transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:panjiyardipesh123@gmail.com"
              className="p-3 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-green-600 
              transition-all duration-300 transform hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            <p>panjiyardipesh123@gmail.com</p>
            <p className="mt-1">Open to opportunities</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dipesh Kumar Panjiyar. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" fill="currentColor" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;