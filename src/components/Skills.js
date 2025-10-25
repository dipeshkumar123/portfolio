// components/Skills.jsx
import React, { useMemo } from 'react';

const SkillBar = ({ skill, level, color, isVisible, index }) => (
  <div
    className={`mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-600">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
      <div
        className={`h-full ${color} transition-all duration-[1200ms] ease-out`}
        style={{ width: isVisible ? `${level}%` : '0%' }}
      />
    </div>
  </div>
);

const Skills = ({ isVisible }) => {
  const proficiency = useMemo(
    () => [
      { name: 'Interface Engineering', level: 90, color: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
      { name: 'Data & Analytics', level: 82, color: 'bg-gradient-to-r from-purple-500 to-fuchsia-500' },
      { name: 'API & Automation', level: 78, color: 'bg-gradient-to-r from-emerald-500 to-cyan-500' },
      { name: 'Problem Solving', level: 84, color: 'bg-gradient-to-r from-orange-500 to-amber-500' }
    ],
    []
  );

  const toolkit = useMemo(
    () => [
      {
        title: 'Frontend Craft',
        items: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
        tone: 'from-blue-500/10 via-indigo-500/10 to-purple-500/10'
      },
      {
        title: 'Backend & Cloud',
        items: ['Node.js', 'Express', 'Firebase', 'Supabase'],
        tone: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10'
      },
      {
        title: 'Data & Visualisation',
        items: ['Python', 'Pandas', 'Power BI', 'SQL'],
        tone: 'from-purple-500/10 via-fuchsia-500/10 to-pink-500/10'
      }
    ],
    []
  );

  const softSkills = ['User empathy', 'Storytelling with data', 'Rapid prototyping', 'Mentoring & collaboration'];

  return (
    <section id="skills" className={`relative overflow-hidden py-24 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-white via-slate-50 to-indigo-50/60" />
      <div className="absolute inset-x-0 bottom-6 -z-10 h-32 bg-gradient-to-r from-slate-200/40 via-blue-200/40 to-purple-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm">
            Skills & strengths
          </span>
          <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">The craftsmanship behind every build</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            A balanced toolkit that moves fluidly between interaction design, full-stack engineering and data storytelling.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr]">
          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-10 shadow-xl shadow-slate-900/5 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Proficiency pulse</p>
            <p className="mt-1 text-base text-slate-500">Confidence levels crafted through shipped features, prototypes and learnings.</p>
            <div className="mt-8">
              {proficiency.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  color={skill.color}
                  isVisible={isVisible}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {toolkit.map(card => (
              <div
                key={card.title}
                className={`group rounded-3xl border border-transparent bg-gradient-to-br ${card.tone} p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2`}
              >
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.items.map(item => (
                    <span key={item} className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-lg shadow-slate-900/5 backdrop-blur">
              <h3 className="text-xl font-semibold text-slate-900">People & process superpowers</h3>
              <p className="mt-2 text-sm text-slate-500">The principles I bring to every collaboration.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {softSkills.map(skill => (
                  <span key={skill} className="rounded-full border border-slate-200/60 bg-slate-100/70 px-4 py-2 text-sm font-medium text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;