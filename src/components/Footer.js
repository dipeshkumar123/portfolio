// components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center
      transition-opacity duration-500 hover:opacity-75">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;