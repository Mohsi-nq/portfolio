import React from 'react';

export default function Learning() {
  return (
    <section className="py-24 px-6 lg:px-12 border-t border-brandBorder bg-brandPrimary text-brandBg">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          STILL LEARNING. <br /> STILL BUILDING.
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
          Technology changes quickly, especially in AI. I don't want my learning to stop at the technologies I already know. I'm continuously exploring AI Engineering, Generative AI, LLM applications, RAG systems, Python backend development, automation testing, DevOps, CI/CD, and modern software engineering practices.
        </p>
        <span className="text-xs font-mono uppercase text-gray-500 tracking-widest">
          I learn best by building, breaking, debugging, asking questions, and trying again.
        </span>
      </div>
    </section>
  );
}