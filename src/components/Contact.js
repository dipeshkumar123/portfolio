// components/Contact.jsx
import React from 'react';
import { Link2, Share2, Mail } from 'lucide-react';

const Contact = ({ isVisible }) => {
  const formFields = ['name', 'email', 'message'];
  const socialIcons = [Link2, Share2, Mail];

  return (
    <section id="contact" className={`py-16 bg-white
      transition-all duration-700 ease-out transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center
          transition-transform duration-500 hover:scale-105">
          Get in Touch
        </h2>
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center space-x-6 mb-8">
            {socialIcons.map((Icon, index) => (
              <a key={index} href="#" 
                className="text-gray-600 transition-all duration-300 ease-out transform
                hover:text-blue-600 hover:scale-125"
                style={{ transitionDelay: `${index * 100}ms` }}>
                <Icon size={24} />
              </a>
            ))}
          </div>
          <form className="space-y-6">
            {formFields.map((field, index) => (
              <div key={field} 
                className={`transition-all duration-500 transform
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}>
                <label htmlFor={field} className="block text-gray-700 mb-2 capitalize">{field}</label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg
                      transition-all duration-300 focus:ring-2 focus:ring-blue-600
                      focus:border-transparent hover:border-blue-400"
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg
                      transition-all duration-300 focus:ring-2 focus:ring-blue-600
                      focus:border-transparent hover:border-blue-400"
                  />
                )}
              </div>
            ))}
            <button type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg
                transition-all duration-500 ease-out transform
                hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;