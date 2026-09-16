import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-brandBorder bg-brandBg text-xs font-mono text-brandSecondary">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold text-brandPrimary">{personalInfo.name}</span> — {personalInfo.role}
          <p className="text-[10px] text-brandSecondary mt-1">AI/ML · PYTHON · RAG · GENERATIVE AI</p>
        </div>

        <div>
          © {new Date().getFullYear()} {personalInfo.name}. Built with curiosity and code.
        </div>
      </div>
    </footer>
  );
}