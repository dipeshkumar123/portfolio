// components/Navigation.jsx
import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection }) => {
  const menuItems = ['home', 'projects', 'about', 'contact'];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50 transition-transform duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Dipesh</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <a 
                key={item}
                href={`#${item}`} 
                className={`hover:text-blue-600 ${
                  activeSection === item ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map(item => (
              <a
                key={item}
                href={`#${item}`}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;