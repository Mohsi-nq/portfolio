import React from 'react';
import { techCategories } from '../data/portfolioData';

export default function Technologies() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 border-t border-brandBorder bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary block mb-12">
          TECHNOLOGIES I WORK WITH
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((cat) => (
            <div key={cat.name} className="p-6 bg-brandBg border border-brandBorder rounded-xl flex flex-col gap-4">
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-brandPrimary border-b border-brandBorder pb-2">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1 bg-white border border-brandBorder rounded-md text-brandPrimary hover:border-brandPrimary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
