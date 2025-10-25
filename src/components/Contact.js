// components/Contact.jsx
import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

const Contact = ({ isVisible }) => {
  const formFields = ['name', 'email', 'message'];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dipeshkumar123',
      label: 'GitHub',
      color: 'hover:text-slate-900'
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
      color: 'hover:text-emerald-600'
    }
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-24 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute inset-x-0 top-16 -z-10 h-48 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-cyan-200/40 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-blue-200/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 shadow-sm">
            Collaborate
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">Let’s design the next great experience</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Whether you’re building a new product, refining a feature or unpacking data insights—drop a line and let’s explore it together.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-10 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Say hello</p>
              <h3 className="mt-3 text-3xl font-semibold">Available for collaborations & open to new challenges</h3>
              <p className="mt-4 text-sm text-blue-100">
                Share a brief, your goals or even a raw idea—happy to jam on strategy, architecture and execution.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-blue-100">
                <a href="mailto:panjiyardipesh123@gmail.com" className="inline-flex items-center gap-3 text-blue-100 transition-colors hover:text-white">
                  <Mail size={18} />
                  panjiyardipesh123@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/dipesh-panjiyar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-blue-100 transition-colors hover:text-white"
                >
                  <Linkedin size={18} />
                  linkedin.com/in/dipesh-panjiyar
                </a>
                <a
                  href="https://github.com/dipeshkumar123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-blue-100 transition-colors hover:text-white"
                >
                  <Github size={18} />
                  github.com/dipeshkumar123
                </a>
              </div>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white">
                <MessageCircle size={18} />
                Quick replies within 24 hours
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-lg shadow-slate-900/5 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">Let’s connect elsewhere</h3>
              <p className="mt-2 text-sm text-slate-500">Follow for product updates, experiments and insights.</p>
              <div className="mt-5 flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/70 bg-white text-slate-500 transition-transform duration-300 hover:-translate-y-1 hover:border-blue-500/60 ${social.color}`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/95 p-10 shadow-xl shadow-slate-900/5 backdrop-blur">
            <h3 className="text-2xl font-semibold text-slate-900">Tell me about your idea</h3>
            <p className="mt-2 text-sm text-slate-500">Share a few details and I’ll reply with next steps.</p>
            <form className="mt-8 space-y-6">
              {formFields.map((field, index) => (
                <div
                  key={field}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 160}ms` }}
                >
                  <label htmlFor={field} className="block text-sm font-semibold text-slate-600 capitalize">
                    {field}
                  </label>
                  {field === 'message' ? (
                    <textarea
                      id={field}
                      rows={4}
                      placeholder="Share your goals, timelines or ideas..."
                      className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-slate-50/60 px-4 py-3 text-sm text-slate-600 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      placeholder={`Your ${field}`}
                      className="mt-2 w-full rounded-2xl border border-slate-200/80 bg-slate-50/60 px-4 py-3 text-sm text-slate-600 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
              >
                Send message
                <ArrowUpRight size={18} />
              </button>
              <p className="text-xs text-slate-400">Powered by a simple email—no subscriptions or spam. Just genuine collaboration.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;