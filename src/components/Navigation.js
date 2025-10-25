// components/Navigation.jsx
import React from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Voices' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection, onNavigate }) => {
  const handleLinkClick = () => {
    if (onNavigate) onNavigate();
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-2 z-40 flex justify-center px-4">
      <div className="relative w-full max-w-6xl">
        <div className="flex h-16 items-center justify-between rounded-full bg-white/75 px-6 shadow-lg shadow-slate-900/5 backdrop-blur-md ring-1 ring-slate-200/50 transition-all">
          <a href="#home" className="flex items-center space-x-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-lg font-semibold text-white shadow-glow">
              D
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Portfolio</p>
              <p className="text-base font-semibold text-slate-900">Dipesh Kumar</p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleLinkClick}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-blue-50/80 opacity-100 shadow-sm transition-opacity duration-200" />
                )}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/Dipesh_Resume_FD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="rounded-full border border-slate-200/80 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-blue-500/80 hover:bg-blue-500 hover:text-white"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-200/80 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-blue-500/80 hover:bg-blue-500 hover:text-white"
            >
              Let's Talk
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="rounded-full border border-slate-200/60 p-2 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
              aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-3 overflow-hidden rounded-3xl bg-white/80 shadow-xl shadow-slate-900/10 backdrop-blur-lg ring-1 ring-slate-200/50 md:hidden">
            <div className="flex flex-col divide-y divide-slate-200/60">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between px-5 py-4 text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <span className="h-2 w-2 rounded-full bg-blue-500" />}
                </a>
              ))}
              <a
                href="/Dipesh_Resume_FD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="px-5 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="px-5 py-4 text-sm font-semibold text-blue-600 hover:bg-blue-50"
              >
                Let's Talk →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;