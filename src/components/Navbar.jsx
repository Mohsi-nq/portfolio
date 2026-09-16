import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-brandBg/80 backdrop-blur-md border-b border-brandBorder px-6 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-wider text-brandSecondary">
          Available for AI / Software Projects
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-brandSecondary">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-brandPrimary transition-colors">
            {link}
          </a>
        ))}
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="/MOHSINA_RESUME.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 border border-brandBorder rounded-full text-xs font-mono font-semibold text-brandPrimary hover:bg-neutral-200 transition-all uppercase flex items-center gap-1.5"
        >
          <FileText className="w-3.5 h-3.5" /> RESUME
        </a>

        <a
          href={`mailto:${personalInfo.email}`}
          className="px-4 py-2 border border-brandBorder bg-black text-white rounded-full text-xs font-mono font-semibold hover:bg-neutral-800 transition-all uppercase flex items-center gap-1.5"
        >
          LET'S TALK <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-brandPrimary" aria-label="Toggle menu">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-brandBg border-b border-brandBorder p-6 flex flex-col gap-4 text-sm font-mono uppercase md:hidden">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-brandPrimary">
              {link}
            </a>
          ))}
          <a
            href="/MOHSINA_RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 text-brandPrimary font-bold"
          >
            <FileText className="w-4 h-4" /> RESUME
          </a>
          <a href={`mailto:${personalInfo.email}`} onClick={() => setIsOpen(false)} className="flex items-center gap-1 text-brandAccent font-bold">
            LET'S TALK <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
}