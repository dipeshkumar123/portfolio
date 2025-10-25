// components/Experience.jsx
import React from 'react';
import { Briefcase, ArrowUpRight, CalendarDays } from 'lucide-react';

const TimelineItem = ({ year, title, company, description, outcomes, isVisible, index }) => (
  <div
    className={`relative grid gap-3 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-lg shadow-slate-900/5 backdrop-blur transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${index * 160}ms` }}
  >
    <div className="flex items-center justify-between text-sm text-slate-500">
      <span className="inline-flex items-center gap-2 rounded-full bg-blue-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
        <CalendarDays size={14} />
        {year}
      </span>
      <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
        <Briefcase size={14} />
        {company}
      </span>
    </div>
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
      <ArrowUpRight size={20} className="mt-1 shrink-0 text-blue-500" />
    </div>
    {outcomes && outcomes.length > 0 && (
      <ul className="mt-2 grid gap-2 text-sm text-slate-500">
        {outcomes.map(point => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
            {point}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Experience = ({ isVisible }) => {
  const experiences = [
    {
      year: '2024',
      title: 'Local Language Translator (Web App)',
      company: 'Self-initiated build',
      description: 'Designed a multilingual interface that converts daily phrases across dialects with instant feedback loops.',
      outcomes: [
        'Architected translation modules with JavaScript for rapid phrase mapping and offline fallbacks.',
        'Optimised UI states with TailwindCSS for accessibility and clear pronunciation cues.'
      ]
    },
    {
      year: '2024',
      title: 'Email Spam Detection Chrome Extension',
      company: 'Open-source initiative',
      description: 'Built a browser extension and Python service to classify e-mails using machine learning insights.',
      outcomes: [
        'Connected a Flask API with ML models to deliver real-time spam verdicts inside the browser.',
        'Implemented intuitive confidence indicators and history logs for transparency.'
      ]
    },
    {
      year: '2023',
      title: 'Portfolio experience refresh',
      company: 'Design & engineering sprint',
      description: 'Iterated on personal brand touchpoints with an emphasis on interaction speed, storytelling and responsive polish.',
      outcomes: [
        'Crafted modular sections enabling seamless content updates.',
        'Reduced bundle size and improved perceived performance using code-splitting and caching strategies.'
      ]
    }
  ];

  return (
    <section id="experience" className={`relative overflow-hidden py-24 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-blue-50/60" />
      <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-1/2 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 shadow-sm">
            Learnings in motion
          </span>
          <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">Project journeys & impact snapshots</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            A timeline of practical builds that sharpened my approach to experience design, engineering and analytics.
          </p>
        </div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.title} {...exp} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;