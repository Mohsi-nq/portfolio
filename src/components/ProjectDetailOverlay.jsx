import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowUpRight, Github } from 'lucide-react';

export default function ProjectDetailOverlay({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-brandPrimary/40 backdrop-blur-md flex justify-end"
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full max-w-2xl bg-white h-full overflow-y-auto p-8 lg:p-12 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between border-b border-brandBorder pb-6 mb-8">
            <span className="text-xs font-mono text-brandSecondary">{project.id} // CASE STUDY</span>
            <button onClick={onClose} className="p-2 text-brandPrimary hover:opacity-50">
              <X className="w-6 h-6" />
            </button>
          </div>

          <h2 className="text-3xl font-bold text-brandPrimary tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-brandSecondary mb-8">{project.subtitle}</p>

          <div className="flex flex-col gap-8 text-sm">
            <div>
              <h4 className="font-mono text-xs uppercase text-brandSecondary mb-2">01 OVERVIEW</h4>
              <p className="text-brandPrimary leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase text-brandSecondary mb-2">02 PROBLEM STATEMENT</h4>
              <p className="text-brandPrimary leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase text-brandSecondary mb-2">03 ARCHITECTURE</h4>
              <div className="flex flex-wrap items-center gap-2 p-4 bg-brandBg border border-brandBorder rounded-lg font-mono text-xs">
                {project.architecture.map((step, i) => (
                  <React.Fragment key={i}>
                    <span className="text-brandPrimary font-bold">{step}</span>
                    {i < project.architecture.length - 1 && <span className="text-brandSecondary">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase text-brandSecondary mb-2">04 TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-brandBg border border-brandBorder rounded-full font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brandBorder flex items-center gap-4 mt-12">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3 bg-brandPrimary text-brandBg rounded-full font-mono text-xs font-bold uppercase flex items-center justify-center gap-2 hover:bg-brandSecondary transition-colors"
          >
            <Github className="w-4 h-4" /> REPOSITORY ↗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}