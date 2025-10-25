// components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ text, author, role, isActive }) => (
  <div
    className={`absolute inset-0 rounded-3xl border border-slate-200/60 bg-white/85 p-10 shadow-xl shadow-slate-900/10 backdrop-blur transition-all duration-500 ${
      isActive ? 'opacity-100 translate-x-0 scale-100' : 'pointer-events-none opacity-0 translate-x-6 scale-95'
    }`}
  >
    <Quote className="h-10 w-10 text-blue-200" />
    <blockquote className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">{text}</blockquote>
    <cite className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-500">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {author.charAt(0)}
      </span>
      <span className="text-left">
        <span className="block text-base font-semibold text-slate-900">{author}</span>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{role}</span>
      </span>
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
    <section
      id="testimonials"
      className={`relative overflow-hidden py-24 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-slate-50 to-blue-50/50" />
      <div className="absolute inset-x-0 top-1/4 -z-10 h-64 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-cyan-200/40 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 shadow-sm">
          Kind words
        </span>
        <h2 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">Trusted by teammates & mentors</h2>
        <p className="mt-4 text-base text-slate-600 md:text-lg">
          Collaborators appreciate the blend of thoughtful communication, creative problem solving and execution focus.
        </p>

        <div className="relative mx-auto mt-12 h-72 max-w-3xl">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} {...testimonial} isActive={currentIndex === index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;