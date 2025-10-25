// components/Hero.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar, Sparkle, ArrowDown, FileDown } from 'lucide-react';
import { fetchGitHubProfile } from '../utils/github';

const Hero = ({ isVisible }) => {
  const [profile, setProfile] = useState(null);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'Data Analyst', 
    'Problem Solver',
    'React Developer',
    'Python Developer'
  ];

  const techStack = useMemo(
    () => ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Python', 'SQL', 'MongoDB', 'Power BI'],
    []
  );

  const heroStats = useMemo(() => {
    const joinYear = profile ? new Date(profile.created_at).getFullYear() : null;
    return [
      {
        label: 'Open-source Projects',
        value: profile ? `${profile.public_repos}+` : '10+',
        subLabel: 'Published on GitHub'
      },
      {
        label: 'Community Reach',
        value: profile ? `${profile.followers}+` : '5+',
        subLabel: 'Developers connected'
      },
      {
        label: 'Shipping Since',
        value: joinYear ? joinYear : '2023',
        subLabel: 'Building with passion'
      }
    ];
  }, [profile]);

  useEffect(() => {
    fetchGitHubProfile().then(setProfile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="home"
      className={`relative overflow-hidden pt-28 md:pt-36 pb-20 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 opacity-40 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr,0.95fr]">
          <div className="relative text-center lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Building delightful digital experiences
            </div>

            <h1 className="mb-6 text-4xl font-semibold text-slate-900 md:text-6xl lg:text-7xl">
              Crafting
              <span className="ml-3 inline-block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text font-bold text-transparent">
                mindful products
              </span>
            </h1>

            <div className="mb-6 min-h-[60px] text-lg text-slate-600 md:text-xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-base font-medium text-slate-700 shadow-sm">
                <Sparkle size={18} className="text-blue-500" />
                I’m a
                <span className="text-blue-600">
                  {roles[currentRole]}
                </span>
                crafting data-informed products.
              </p>
            </div>

            <p className="mx-auto mb-8 max-w-xl text-base text-slate-600 md:text-lg lg:mx-0">
              I bridge full-stack development with analytical thinking to design resilient, inclusive and insight-driven experiences.
              {profile && ` Currently leveling up every day since ${new Date(profile.created_at).getFullYear()}.`}
            </p>

            {profile && (
              <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 lg:justify-start">
                <div className="flex items-center gap-2">
                  <Github size={18} />
                  <span>{profile.public_repos} repositories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>Since {new Date(profile.created_at).getFullYear()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{profile.location || 'Remote-first'}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-soft"
              >
                <Mail size={18} />
                Let’s build together
              </a>
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-8 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-500/80 hover:text-blue-600"
              >
                View recent work
              </a>
              <a
                href="/Dipesh_Resume_FD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-8 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-500/80 hover:text-blue-600"
              >
                <FileDown size={18} />
                Download resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-slate-500 lg:justify-start">
              {techStack.map(tech => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {heroStats.map(stat => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-6 text-left shadow-md shadow-slate-900/5 backdrop-blur-sm"
                >
                  <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="text-xs text-slate-400">{stat.subLabel}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 text-slate-400 lg:justify-start">
              <a
                href="https://github.com/dipeshkumar123"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:-translate-y-1 hover:text-blue-600"
                aria-label="GitHub profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/dipesh-panjiyar"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:-translate-y-1 hover:text-blue-600"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:panjiyardipesh123@gmail.com"
                className="transition-transform duration-200 hover:-translate-y-1 hover:text-blue-600"
                aria-label="Send email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -left-12 -top-16 h-36 w-36 rounded-full bg-blue-200/70 blur-3xl" />
              <div className="absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-purple-200/70 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/90 p-6 shadow-soft backdrop-blur">
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute inset-0 rounded-[24px] bg-grid-pattern opacity-60" />
                  <div className="relative flex h-72 w-full items-center justify-center rounded-[24px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-6 shadow-glow">
                    {profile?.avatar_url ? (
                      <img
                        src={profile.avatar_url}
                        alt="Dipesh Kumar"
                        className="h-56 w-56 rounded-[20px] border-4 border-white/60 object-cover shadow-soft"
                      />
                    ) : (
                      <div className="flex h-48 w-48 items-center justify-center rounded-[20px] bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-6xl font-bold text-white shadow-soft">
                        DK
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="flex items-center justify-between rounded-2xl border border-blue-100/60 bg-blue-50/60 px-4 py-3 text-sm font-medium text-blue-700">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                        <Sparkle size={18} />
                      </span>
                      Crafting polished UI systems
                    </div>
                    <span className="hidden text-xs uppercase tracking-wide text-blue-500 sm:block">Focus</span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-600">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">Currently exploring</p>
                      <p className="font-semibold text-slate-700">AI-assisted workflows & cloud for data apps</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-12 left-1/2 flex w-full -translate-x-1/2 justify-center text-slate-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-medium shadow-sm backdrop-blur">
                  Scroll to explore
                  <ArrowDown size={16} className="animate-float" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;