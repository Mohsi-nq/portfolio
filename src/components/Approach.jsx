import React from 'react';
import { processSteps } from '../data/portfolioData';

export default function Approach() {
  return (
    <section id="approach" className="py-24 px-6 lg:px-12 border-t border-brandBorder bg-brandBg">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary block mb-12">
          FROM IDEA TO IMPACT
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div key={step.id} className="p-8 bg-white border border-brandBorder rounded-xl flex flex-col justify-between min-h-[200px]">
              <span className="text-xs font-mono text-brandSecondary">{step.id}</span>
              <div>
                <h3 className="text-lg font-bold text-brandPrimary tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-brandSecondary leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}