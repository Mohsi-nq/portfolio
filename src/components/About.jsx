import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 border-t border-brandBorder bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary">
            {aboutContent.title}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brandPrimary mt-4">
            {aboutContent.heading}
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {aboutContent.labels.map((label) => (
              <span key={label} className="text-[10px] font-mono uppercase px-3 py-1 bg-brandBg border border-brandBorder rounded-full text-brandSecondary">
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-6 text-base text-brandSecondary leading-relaxed">
          {aboutContent.bio.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}