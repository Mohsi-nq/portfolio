import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-12 border-t border-brandBorder bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary block mb-12">
          EDUCATION
        </span>

        <div className="divide-y divide-brandBorder border-t border-b border-brandBorder">
          {educationData.map((edu, idx) => (
            <div key={idx} className="py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-brandPrimary tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-sm text-brandSecondary mt-1">{edu.institution}</p>
              </div>
              <span className="text-xs font-mono text-brandSecondary">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}