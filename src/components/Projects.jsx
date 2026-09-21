import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-12 bg-brandBg border-t border-brandBorder">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary">Featured Artifacts</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brandPrimary uppercase mt-1">
            SELECTED PROJECTS
          </h2>
        </div>
        <p className="text-xs font-mono text-brandSecondary max-w-xs">
          Practical systems combining AI models, vector search, software engineering, and clean architecture.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="p-8 border border-brandBorder rounded-xl bg-white/60 backdrop-blur-sm hover:border-brandPrimary transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6">
                <span className="text-xs font-mono font-bold text-brandSecondary">{project.id}</span>
                <h3 className="text-2xl font-bold text-brandPrimary uppercase tracking-tight mt-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-emerald-600 uppercase mt-1">{project.subtitle}</p>
                <p className="text-sm text-brandSecondary mt-4 leading-relaxed">{project.description}</p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-neutral-100 rounded text-[11px] font-mono text-brandSecondary border border-brandBorder">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-8">
                  <a href={project.projectUrl} className="px-4 py-2 bg-brandPrimary text-white rounded-full text-xs font-mono font-bold uppercase flex items-center gap-1.5">
                    VIEW PROJECT <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {project.repoUrl ? (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border border-brandBorder rounded-full text-xs font-mono font-semibold text-brandPrimary hover:bg-neutral-100 flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5" /> VIEW REPO <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="px-4 py-2 border border-brandBorder rounded-full text-xs font-mono text-neutral-400 flex items-center gap-1.5 cursor-not-allowed">
                      <Github className="w-3.5 h-3.5" /> [GitHub Repository]
                    </span>
                  )}
                </div>
              </div>

              {/* Architecture Pipeline */}
              <div className="lg:col-span-6 bg-neutral-900 text-neutral-100 p-6 rounded-lg font-mono text-xs overflow-x-auto border border-neutral-800">
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-4">// System Architecture Pipeline</span>
                <div className="flex flex-wrap items-center gap-2">
                  {project.architecture.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span className="px-2.5 py-1 bg-neutral-800 border border-neutral-700 rounded text-neutral-200">
                        {step}
                      </span>
                      {idx < project.architecture.length - 1 && (
                        <span className="text-neutral-500">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}