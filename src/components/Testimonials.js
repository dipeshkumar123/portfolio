// components/Testimonials.jsx
import React, { useState, useEffect } from 'react';

const Testimonial = ({ text, author, role, isActive }) => (
  <div className={`transition-all duration-500 transform absolute top-0 left-0 w-full
    ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
    <blockquote className="text-xl text-gray-600 mb-4">{text}</blockquote>
    <cite className="block">
      <span className="font-semibold text-gray-900">{author}</span>
      <span className="text-gray-600 ml-2">- {role}</span>
    </cite>
  </div>
);

const Testimonials = ({ isVisible }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
      author: "John Smith",
      role: "Project Manager"
    },
    {
      text: "Working with them was a great experience. They brought innovative solutions and met all deadlines.",
      author: "Sarah Johnson",
      role: "Tech Lead"
    }
  ];

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isVisible, testimonials.length]);

  return (
    <section id="testimonials" className={`py-16 bg-gray-50 transition-opacity duration-700
      ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 transition-transform duration-500 hover:scale-105">
          What People Say
        </h2>
        <div className="max-w-2xl mx-auto relative h-48">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
              isActive={currentIndex === index}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;