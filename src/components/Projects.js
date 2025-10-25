// components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Clock } from 'lucide-react';
import { fetchGitHubRepos, formatRepoForDisplay } from '../utils/github';

const FEATURED_PROJECTS = [
  {
    slug: 'Email-Spam-Detection-Chrome-Extension',
    title: 'Email Spam Detection Chrome Extension',
    description: 'Prototype Chrome extension that flags suspicious emails before they reach your inbox.',
    highlights: [
      'Pairs a JavaScript extension UI with a Python-backed classification service.',
      'Surfaces confidence scores and recommended actions in real time.',
      'Explores dataset preprocessing, model training and deployment workflows.'
    ],
    tags: ['JavaScript', 'Python', 'Machine Learning', 'Chrome Extension', 'Flask'],
  },
  {
    slug: 'Local-Language-Translator-for-Daily-Phrases',
    title: 'Local Language Translator',
    description: 'Browser-based translator focused on everyday phrases across regional Indian languages.',
    highlights: [
      'Clean interface for quick phrase lookup without switching apps.',
      'Client-side language dictionaries to keep responses instant.',
      'Built as an accessible utility for travellers and multilingual teams.'
    ],
    tags: ['JavaScript', 'i18n', 'Vanilla JS', 'Responsive UI'],
  },
  {
    slug: 'HeyChat',
    title: 'HeyChat',
    description: 'Chat experience sandbox that experiments with messaging UI states and flows.',
    highlights: [
      'Lightweight front-end prototype that prioritises clarity and speed.',
      'Focus on reusable message primitives and status indicators.',
      'Serves as a playground for testing UX copy and conversation pacing.'
    ],
    tags: ['JavaScript', 'UI Prototype', 'Real-time UX'],
  },
  {
    slug: 'Farm-Chat-Bot',
    title: 'Farm Chat Bot',
    description: 'Conversational assistant concept tailored for quick agronomy tips and seasonal guidance.',
    highlights: [
      'Guided prompts that help farmers reach relevant responses faster.',
      'Template-driven script makes it simple to extend new knowledge bases.',
      'Optimised for low-bandwidth scenarios with progressive enhancement.'
    ],
    tags: ['Conversational UX', 'JavaScript', 'Accessibility'],
  },
  {
    slug: 'petStoreAutomation',
    title: 'Pet Store API Automation',
    description: 'Automated testing suite exploring the Swagger PetStore reference API.',
    highlights: [
      'Covers critical CRUD requests with assertions around status codes and payloads.',
      'Reusable helpers make it easy to spin up additional scenarios.',
      'Documents test flow to support handover and future expansion.'
    ],
    tags: ['API Automation', 'Test Strategy', 'Quality Engineering'],
  }
];

const ProjectCard = ({ project, index, isVisible }) => {
  const hasDemo = Boolean(project.homepage);

  return (
    <div
      className={`group relative h-full rounded-3xl border-gradient transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative h-full overflow-hidden rounded-3xl bg-white/90 p-6 shadow-lg shadow-slate-900/5 backdrop-blur">
        <div className="absolute inset-x-6 top-0 h-32 rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-2xl" />

        <div className="relative flex items-start justify-between">
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 shadow-sm">
            Project #{String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            {project.stars > 0 && (
              <span className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                {project.stars}
              </span>
            )}
            {project.forks > 0 && (
              <span className="flex items-center gap-1">
                <GitFork size={16} />
                {project.forks}
              </span>
            )}
          </div>
        </div>

        <h3 className="relative mt-5 text-2xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
          {project.title}
        </h3>

        {project.description && (
          <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
            {project.description}
          </p>
        )}

        {project.highlights?.length > 0 && (
          <ul className="relative mt-4 space-y-2 text-sm text-slate-500">
            {project.highlights.map(highlight => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="relative mt-6 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
          {project.language && (
            <span className="mr-2 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm">
              <span className={`h-2 w-2 rounded-full ${getLanguageColor(project.language)}`} />
              {project.language}
            </span>
          )}
          {project.updatedAt && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-slate-500 shadow-sm">
              <Clock size={14} />
              Updated {new Date(project.updatedAt).toLocaleDateString()}
            </span>
          )}
        </div>

        {project.tags?.length > 0 && (
          <div className="relative mt-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 6).map(tag => (
              <span
                key={tag}
                className="rounded-full bg-slate-100/80 px-3 py-1 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 6 && (
              <span className="rounded-full bg-slate-100/60 px-3 py-1 text-xs font-semibold text-slate-400">
                +{project.tags.length - 6} more
              </span>
            )}
          </div>
        )}

        <div className="relative mt-8 flex flex-wrap gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-md"
          >
            <Github size={16} />
            View repository
          </a>
          {hasDemo && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-blue-500/60 bg-white px-4 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50"
            >
              <ExternalLink size={16} />
              Visit live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const getLanguageColor = language => {
  const colors = {
    JavaScript: 'bg-yellow-400',
    TypeScript: 'bg-blue-500',
    Python: 'bg-green-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-blue-400',
    React: 'bg-cyan-500',
    Vue: 'bg-green-400',
    Node: 'bg-green-600',
    Java: 'bg-red-500',
    'C++': 'bg-purple-500',
    PHP: 'bg-indigo-500',
    Ruby: 'bg-red-400',
    Go: 'bg-cyan-600',
    Rust: 'bg-orange-600',
    Swift: 'bg-orange-400',
    Kotlin: 'bg-purple-400'
  };
  return colors[language] || 'bg-gray-400';
};

const PROJECT_FALLBACKS = FEATURED_PROJECTS.map(project => ({
  ...project,
  url: `https://github.com/dipeshkumar123/${project.slug}`,
  homepage: project.homepage,
  stars: 0,
  forks: 0,
  language: project.tags?.[0] || undefined,
  updatedAt: null
}));

const Projects = ({ isVisible }) => {
  const [projects, setProjects] = useState(PROJECT_FALLBACKS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const repos = await fetchGitHubRepos();
        const formattedProjects = repos.map(formatRepoForDisplay);

        const curated = FEATURED_PROJECTS.map(project => {
          const repo = formattedProjects.find(item => item.title.toLowerCase() === project.slug.toLowerCase());
          const mergedTags = Array.from(
            new Set([
              ...(project.tags || []),
              ...(repo?.tags || []).filter(Boolean)
            ])
          );

          return {
            ...project,
            tags: mergedTags,
            url: repo?.url || `https://github.com/dipeshkumar123/${project.slug}`,
            homepage: project.homepage || repo?.homepage || '',
            stars: repo?.stars ?? 0,
            forks: repo?.forks ?? 0,
            language: repo?.language || project.tags?.[0] || undefined,
            updatedAt: repo?.updatedAt ?? null
          };
        });

        setProjects(curated);
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects(PROJECT_FALLBACKS);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const sectionClasses = `relative py-24 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`;

  if (loading) {
    return (
      <section id="projects" className={sectionClasses}>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 h-12 w-48 animate-pulse rounded-full bg-slate-200/70" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-96 rounded-3xl bg-slate-200/60" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={sectionClasses}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-blue-50/50" />
      <div className="absolute inset-x-0 top-16 -z-10 h-32 translate-y-12 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-cyan-200/40 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 shadow-sm">
            Selected work
          </span>
          <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">Projects that blend craft & impact</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            A snapshot of recent explorations where thoughtful UX, clean engineering and automation intersect.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 text-left shadow-lg shadow-slate-900/5 backdrop-blur">
            <h3 className="text-2xl font-semibold text-slate-900">Looking for something specific?</h3>
            <p className="mt-3 text-slate-600">
              I love collaborating on user-first products, data visualisations and automation workflows. Drop a message and let’s build it together.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
            >
              Start a conversation
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="rounded-3xl border border-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-8 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">More builds</p>
            <h3 className="mt-3 text-2xl font-semibold">Explore all repositories</h3>
            <p className="mt-3 text-sm text-blue-100">
              Dive into experiments, learnings and open-source contributions across the stack.
            </p>
            <a
              href="https://github.com/dipeshkumar123"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              <Github size={16} />
              GitHub profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;