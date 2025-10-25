// components/Footer.jsx
import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUpRight } from 'lucide-react';

const Footer = () => (
  <footer className="relative overflow-hidden bg-slate-950 text-white">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" />
    <div className="absolute inset-x-0 -top-20 -z-10 h-64 bg-gradient-to-r from-blue-500/30 via-indigo-500/20 to-purple-500/30 blur-3xl" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl shadow-blue-500/10 backdrop-blur">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <h3 className="text-3xl font-semibold text-white">Let’s co-create experiences people talk about</h3>
            <p className="mt-3 text-sm text-slate-300">
              I’m always curious about new problems to solve—product MVPs, dashboards, design systems and automation flows.
              Bring an idea or a sprint brief, and I’ll bring clarity plus momentum.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
            >
              Start a project
              <ArrowUpRight size={18} />
            </a>
            <a
              href="mailto:panjiyardipesh123@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-200"
            >
              Email direct
            </a>
            <a
              href="/Dipesh_Resume_FD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15"
            >
              View resume
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Portfolio</p>
          <h4 className="mt-3 text-2xl font-semibold">Dipesh Kumar Panjiyar</h4>
          <p className="mt-4 text-sm text-slate-300">
            Full-stack developer melding thoughtful UX with data-led decision making. Building human, scalable experiences one iteration at a time.
          </p>
        </div>

        <div className="text-sm text-slate-300">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Navigate</p>
          <div className="mt-4 grid gap-2">
            {['home', 'projects', 'skills', 'experience', 'about', 'contact'].map(link => (
              <a key={link} href={`#${link}`} className="capitalize text-slate-300 transition-colors hover:text-white">
                {link}
              </a>
            ))}
            <a
              href="/Dipesh_Resume_FD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition-colors hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="text-sm text-slate-300">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Connect</p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/dipeshkumar123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/dipesh-panjiyar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:panjiyardipesh123@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">panjiyardipesh123@gmail.com</p>
          <p className="text-sm text-slate-400">Remote-friendly • Always learning</p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 text-sm text-slate-500">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Dipesh Kumar Panjiyar. Crafted with care.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-rose-400" fill="currentColor" />
            <span>React & TailwindCSS</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;