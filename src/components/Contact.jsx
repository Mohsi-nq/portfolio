import React from 'react';
import confetti from 'canvas-confetti';
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const handleTalkClick = () => {
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 border-t border-brandBorder bg-brandBg min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-start gap-6">
        <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary">
          GET IN TOUCH
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-xl lg:text-7xl tracking-tight text-brandPrimary uppercase leading-[1.1] max-w-3xl">
          LOOKING FOR A DRIVEN <br /> AI & SOFTWARE DEVELOPER?
        </h2>

        {/* Subtitle Body Text */}
        <p className="text-sm sm:text-base text-brandSecondary max-w-xl leading-relaxed font-light text-center mx-auto">
          I'm actively seeking full-time roles in AI Engineering and Software Development. From intelligent RAG systems to full-stack ML applications, I'm ready to bring practical technical skills and immediate value to your team.
        </p>

        {/* Central Black Pill Button */}
        <a
          href={`mailto:${personalInfo.email}`}
          onClick={handleTalkClick}
          className="mt-4 px-8 py-4 bg-black text-white rounded-full text-sm font-medium tracking-wide flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-md"
        >
          LET'S TALK OPPORTUNITIES <ArrowUpRight className="w-4 h-4 shrink-0" />
        </a>

        {/* Bottom Social Pill Buttons Container */}
        <div className="w-full flex justify-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-sm border border-brandBorder/60 rounded-full text-brandPrimary hover:border-brandPrimary transition-colors shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-sm border border-brandBorder/60 rounded-full text-brandPrimary hover:border-brandPrimary transition-colors shadow-sm"
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-sm border border-brandBorder/60 rounded-full text-brandPrimary hover:border-brandPrimary transition-colors shadow-sm"
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}