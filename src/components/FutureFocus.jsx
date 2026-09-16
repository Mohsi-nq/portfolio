import React from 'react';
import { futureRoles } from '../data/portfolioData';

export default function FutureFocus() {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-brandBorder bg-brandBg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary block mb-6">
          WHAT I'M EXCITED TO BUILD NEXT
        </span>
        <p className="text-sm text-brandSecondary max-w-xl mb-12">
          Real-world AI products, intelligent automation systems, LLM applications, machine learning solutions, and Python-based software.
        </p>

        <div className="flex flex-wrap gap-4">
          {futureRoles.map((role) => (
            <span
              key={role}
              className="text-sm sm:text-lg font-mono font-bold px-6 py-3 bg-white border border-brandBorder rounded-full text-brandPrimary shadow-sm"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}