import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-6 lg:px-12 bg-brandBg flex flex-col justify-between overflow-hidden">
      {/* Top Recruiter Signal */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brandBorder pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-wider text-brandSecondary">
            {personalInfo.role} @ {personalInfo.company} · {personalInfo.location}
          </span>
        </div>
        <span className="text-xs font-mono text-brandSecondary uppercase">
          {personalInfo.subTagline}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 z-10">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-brandPrimary tracking-tighter uppercase leading-none">
            {personalInfo.name}
          </h1>
          <p className="mt-3 text-lg font-mono font-semibold text-emerald-600 uppercase tracking-widest">
            {personalInfo.role}
          </p>
          <p className="mt-2 text-xl sm:text-2xl font-light text-brandPrimary">
            "{personalInfo.tagline}"
          </p>
          <p className="mt-4 text-sm sm:text-base text-brandSecondary max-w-xl leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Subdued Open to Work Line */}
          <div className="mt-4 inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 rounded text-xs font-mono text-emerald-800">
            {personalInfo.openToWork}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-brandPrimary text-white rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center gap-2"
            >
              VIEW MY WORK <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-6 py-3 border border-brandBorder rounded-full text-xs font-mono font-bold text-brandPrimary hover:bg-neutral-200 transition-all uppercase flex items-center gap-2"
            >
              LET'S CONNECT <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Profile Links */}
          <div className="mt-8 flex items-center gap-6 text-xs font-mono text-brandSecondary">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-brandPrimary transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" /> GITHUB
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-brandPrimary transition-colors flex items-center gap-1">
              <Linkedin className="w-4 h-4" /> LINKEDIN
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-brandPrimary transition-colors flex items-center gap-1">
              <Mail className="w-4 h-4" /> EMAIL
            </a>
          </div>
        </div>

        {/* Existing Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-2xl overflow-hidden border border-brandBorder shadow-xl bg-neutral-200">
            <img 
              src="/portrait.jpg" 
              alt="Mohsina" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}