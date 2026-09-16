import React from 'react';

const projects = [
  {
    id: "01",
    title: "ON-DEVICE RAG APPLICATION",
    subtitle: "Gemma × Orama Vector Database",
    description:
      "An on-device Retrieval-Augmented Generation application designed to provide context-aware responses while reducing dependency on cloud-based AI services.",
    pipeline:
      "DOCUMENTS ↓ PREPROCESSING ↓ CHUNKING ↓ EMBEDDINGS ↓ ORAMA ↓ SEMANTIC SEARCH ↓ GEMMA ↓ RESPONSE",
    tags: [
      "Python",
      "Gemma",
      "RAG",
      "Orama",
      "Vector Database",
      "Embeddings",
      "NLP"
    ]
  },
  {
    id: "02",
    title: "AUTISM DETECTION FROM 3D BRAIN MRI",
    subtitle: "Deep Learning Pipeline",
    description:
      "A deep learning application utilizing CNN architectures and SHAP interpretability to classify 3D MRI brain scans for early autism detection.",
    pipeline:
      "3D MRI SCANS ↓ SKULL STRIPPING ↓ NORMALIZATION ↓ CNN FEATURE EXTRACTION ↓ SHAP INTERPRETABILITY ↓ CLASSIFICATION",
    tags: ["Python", "TensorFlow", "Nilearn", "ANTS", "DIPY", "SHAP", "CNN"]
  },
  {
    id: "03",
    title: "INTELLIGENT RESUME SCREENING SYSTEM",
    subtitle: "Machine Learning & NLP",
    description:
      "Automates candidate selection by matching resumes with job descriptions using TF-IDF vectorization and cosine similarity scoring.",
    pipeline:
      "RESUME INPUT ↓ TOKENIZATION ↓ TF-IDF VECTORIZATION ↓ COSINE SIMILARITY ↓ RANKING",
    tags: ["Python", "Scikit-learn", "Pandas", "NLP", "TF-IDF", "Streamlit"]
  }
];

export default function Work() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-brandBg border-t border-brandBorder">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brandSecondary block mb-2">
              SELECTED WORK
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brandPrimary uppercase">
              Featured Case Studies
            </h2>
          </div>
          <p className="text-sm text-brandSecondary max-w-sm leading-relaxed font-light">
            A few things I've built while exploring AI, machine learning, and software engineering.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-8 sm:p-12 border border-brandBorder/80 rounded-3xl bg-white/40 backdrop-blur-sm transition-all hover:border-brandPrimary/30"
            >
              <span className="text-xs font-mono text-brandSecondary block mb-4">
                {project.id} // PROJECT
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-brandPrimary tracking-tight uppercase mb-2">
                {project.title}
              </h3>

              <p className="text-xs font-mono font-semibold text-brandPrimary/70 mb-6 uppercase tracking-wider">
                {project.subtitle}
              </p>

              <p className="text-sm sm:text-base text-brandSecondary leading-relaxed max-w-4xl font-light mb-8">
                {project.description}
              </p>

              {/* Workflow Pipeline Container */}
              <div className="p-4 border border-brandBorder/60 rounded-xl bg-white/80 font-mono text-[11px] sm:text-xs text-brandPrimary tracking-tight mb-8 overflow-x-auto whitespace-nowrap">
                {project.pipeline}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 border border-brandBorder rounded-full text-xs font-mono text-brandPrimary bg-white/50"
                  >
                    {tag}
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