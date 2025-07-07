// components/Contact.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = ({ isVisible }) => {
  const formFields = ['name', 'email', 'message'];
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dipeshkumar123',
      label: 'GitHub',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dipesh-panjiyar',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      href: 'mailto:panjiyardipesh123@gmail.com',
      label: 'Email',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" className={`py-16 bg-gradient-to-br from-blue-50 to-purple-50
      transition-all duration-700 ease-out transform
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4
            transition-transform duration-500 hover:scale-105">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                Whether you're looking for a developer to join your team or need help with a specific project, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:panjiyardipesh123@gmail.com" 
                     className="text-blue-600 hover:underline">
                    panjiyardipesh123@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <Github className="w-6 h-6 text-gray-900" />
                <div>
                  <p className="font-semibold text-gray-900">GitHub</p>
                  <a href="https://github.com/dipeshkumar123" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    github.com/dipeshkumar123
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <Linkedin className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/dipesh-panjiyar" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    linkedin.com/in/dipesh-panjiyar
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 mb-4">Connect with me on:</p>
              <div className="flex justify-center lg:justify-start space-x-6">
                {socialLinks.map((social, index) => (
                  <a key={index} 
                     href={social.href} 
                     target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                     rel="noopener noreferrer"
                     className={`text-gray-600 transition-all duration-300 ease-out transform
                     ${social.color} hover:scale-125`}
                     style={{ transitionDelay: `${index * 100}ms` }}
                     title={social.label}>
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
            <form className="space-y-6">
              {formFields.map((field, index) => (
                <div key={field} 
                  className={`transition-all duration-500 transform
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}>
                  <label htmlFor={field} className="block text-gray-700 mb-2 capitalize font-medium">
                    {field}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      rows={4}
                      placeholder={`Your ${field}...`}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                        transition-all duration-300 focus:ring-2 focus:ring-blue-600
                        focus:border-transparent hover:border-blue-400 resize-none"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      placeholder={`Your ${field}...`}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                        transition-all duration-300 focus:ring-2 focus:ring-blue-600
                        focus:border-transparent hover:border-blue-400"
                    />
                  )}
                </div>
              ))}
              <button type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg
                  transition-all duration-500 ease-out transform font-semibold
                  hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;