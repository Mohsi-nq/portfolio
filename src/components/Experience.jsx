import React from 'react';

const experiences = [
  {
    role: "AI SOFTWARE DEVELOPER",
    company: "Alonstech",
    period: "2026 – PRESENT",
    location: "Remote",
    highlights: [
      "Conducting end-to-end AI-oriented software development and Python engineering for scalable applications.",
      "Executing comprehensive automated, functional, and regression testing pipelines to ensure high model stability.",
      "Managing bug identification, debugging, and continuous integration (CI/CD) within Agile workflows using Jira and Confluence."
    ]
  },
  {
    role: "AI FULL-STACK ENGINEERING INTERN",
    company: "Mellon AI Labs",
    period: "PREVIOUS",
    location: "",
    highlights: [
      "Built production-ready RAG pipelines in Python to retrieve contextual information and generate precise LLM responses.",
      "Implemented semantic search using embeddings and vector databases for efficient large-scale data retrieval.",
      "Engineered text chunking and data preprocessing pipelines, optimizing models for low-latency, on-device inference."
    ]
  },
  {
    role: "AI/ML INTERN",
    company: "Elevate Labs",
    period: "PREVIOUS",
    location: "",
    highlights: [
      "Developed custom machine learning models applying feature engineering and data cleaning on structured datasets.",
      "Created modular Python scripts for model training, testing, and performance validation across standard ML workflows.",
      "Optimized model execution speed and debugged code structures to enhance overall prediction pipelines."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-brandBg border-t border-brandBorder">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary mb-12 block">
          EXPERIENCE
        </span>

        <div className="relative border-l border-brandBorder pl-8 space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-brandBg border-2 border-brandPrimary group-hover:bg-brandPrimary transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <span className="text-xs font-mono text-brandSecondary uppercase tracking-wide">
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="text-xs font-mono text-brandSecondary">
                    {exp.location}
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-brandPrimary tracking-tight uppercase mb-1">
                {exp.role}
              </h3>
              
              <p className="text-sm font-semibold text-brandPrimary mb-4">
                {exp.company}
              </p>

              {/* Action Bullets */}
              <ul className="space-y-2.5 text-sm text-brandSecondary leading-relaxed font-light">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brandPrimary font-bold select-none">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}