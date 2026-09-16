import React from 'react';
import { motion } from 'framer-motion';
import { capabilities } from '../data/portfolioData';

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 lg:px-12 border-t border-brandBorder bg-brandBg">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary block mb-12">
          WHAT I DO
        </span>

        <div className="divide-y divide-brandBorder border-t border-b border-brandBorder">
          {capabilities.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline transition-colors hover:bg-white/50 px-4"
            >
              <span className="md:col-span-2 text-xs font-mono text-brandSecondary group-hover:text-brandPrimary transition-colors">
                {item.id}
              </span>
              <h3 className="md:col-span-4 text-xl font-bold text-brandPrimary tracking-tight group-hover:translate-x-2 transition-transform">
                {item.title}
              </h3>
              <p className="md:col-span-6 text-sm text-brandSecondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}