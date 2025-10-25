// components/About.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Code, Database, Brain, Zap, Sparkles, Compass } from 'lucide-react';
import { fetchGitHubStats } from '../utils/github';

const StatCard = ({ icon: Icon, title, value, description, delay }) => (
  <div
    className={`rounded-2xl border border-slate-200/70 bg-white/90 p-6 text-center shadow-lg shadow-slate-900/5 backdrop-blur transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white shadow-glow">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-3xl font-semibold text-slate-900">{value}</h3>
    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">{title}</p>
    <p className="mt-2 text-sm text-slate-500">{description}</p>
  </div>
);

const About = ({ isVisible }) => {
  const [stats, setStats] = useState(null);
  const principles = useMemo(
    () => [
      {
        icon: Sparkles,
        title: 'Craft beautiful systems',
        description: 'Design modular UI foundations that scale gracefully across devices and use-cases.'
      },
      {
        icon: Brain,
        title: 'Think in data',
        description: 'Transform insights into actionable strategies and visual narratives that inform decisions.'
      },
      {
        icon: Compass,
        title: 'Collaborate intentionally',
        description: 'Build clear communication loops between product, design and engineering teams.'
      }
    ],
    []
  );

  useEffect(() => {
    fetchGitHubStats().then(setStats);
  }, []);

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-24 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-slate-50 to-blue-50/60" />
      <div className="absolute inset-x-0 top-10 -z-10 h-48 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-cyan-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-purple-200/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-600 shadow-sm">
            About Dipesh
          </span>
          <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">Creating meaningful, measurable experiences</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            I enjoy designing and engineering interfaces that feel intuitive, inclusive and data-informed.
            The journey started in {stats?.joinDate || '2023'} and keeps expanding with every collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-10">
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-900/5 backdrop-blur">
              <h3 className="text-2xl font-semibold text-slate-900">Hey, I’m Dipesh 👋</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                I‘m a full-stack developer and data analyst who loves bringing clarity to complex problems. React and modern
                JavaScript power my interfaces, while Python and SQL help surface the insights that keep experiences honest.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Every project I take on blends empathetic UX thinking with measurable outcomes—whether that’s shipping performant web apps,
                crafting dashboards or automating everyday workflows. Curiosity keeps me exploring new frameworks and technologies, but the
                north star stays the same: build things people genuinely enjoy using.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl bg-blue-50/80 p-4">
                  <Code className="mt-1 h-6 w-6 text-blue-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Front-of-screen experiences</p>
                    <p className="text-sm text-slate-500">React, Next.js, TailwindCSS, Framer Motion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-purple-50/80 p-4">
                  <Database className="mt-1 h-6 w-6 text-purple-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Data-informed storytelling</p>
                    <p className="text-sm text-slate-500">Python, SQL, Power BI, Pandas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-emerald-50/80 p-4">
                  <Brain className="mt-1 h-6 w-6 text-emerald-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Systems thinking</p>
                    <p className="text-sm text-slate-500">Automation, API design, analytics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-orange-50/80 p-4">
                  <Zap className="mt-1 h-6 w-6 text-orange-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Momentum & learning</p>
                    <p className="text-sm text-slate-500">Continuous discovery, open-source, community</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {principles.map(principle => (
                <div key={principle.title} className="rounded-2xl border border-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-6 text-white shadow-lg">
                  <principle.icon className="h-6 w-6 text-blue-200" />
                  <p className="mt-4 text-lg font-semibold">{principle.title}</p>
                  <p className="mt-2 text-sm text-blue-100">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <StatCard
              icon={Code}
              title="Public Repositories"
              value={stats?.totalRepos || '11'}
              description="Open-source and personal builds"
              delay={0}
            />
            <StatCard
              icon={Database}
              title="GitHub Followers"
              value={stats?.followers || '5'}
              description="Collaborators & peers"
              delay={120}
            />
            <StatCard
              icon={Brain}
              title="Years of Learning"
              value={stats ? new Date().getFullYear() - stats.joinDate : '2+'}
              description="Hands-on experimentation"
              delay={240}
            />
            <StatCard
              icon={Zap}
              title="Languages in toolkit"
              value={stats?.languages?.length || '5+'}
              description="Languages shaping my builds"
              delay={360}
            />
          </div>
        </div>

        {stats?.languages && (
          <div className="mt-16 rounded-3xl border border-slate-200/60 bg-white/80 p-10 shadow-lg shadow-slate-900/5 backdrop-blur">
            <h3 className="text-xl font-semibold text-slate-900">Toolstack I’m fluent in</h3>
            <p className="mt-2 text-sm text-slate-500">A blend of languages and technologies that help ideas move from sketch to shipped product.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {stats.languages.map(language => (
                <span
                  key={language}
                  className="rounded-full border border-slate-200/70 bg-slate-100/70 px-4 py-2 text-sm font-semibold text-slate-600 transition-all duration-200 hover:border-blue-400 hover:text-blue-600"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;