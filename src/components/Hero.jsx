import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import portraitImg from '../assets/portrait.jpg';
import { personalInfo } from '../data/portfolioData';
import ImageComparisonSlider from './ImageComparisonSlider';

export default function Hero({ setCursorText }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const portraitX = useTransform(x, [-300, 300], [-15, 15]);
  const portraitY = useTransform(y, [-300, 300], [-15, 15]);
  const textX = useTransform(x, [-300, 300], [20, -20]);
  const textY = useTransform(y, [-300, 300], [20, -20]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 px-6 lg:px-12 overflow-hidden bg-brandBg"
    >
      {/* Background Oversized Interactive Typography Overlay */}
      <motion.div 
        style={{ x: textX, y: textY }}
        className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none opacity-[0.08] z-0"
      >
        <h1 className="text-[18vw] leading-none font-bold tracking-tighter text-brandPrimary">
          MOHSINA
        </h1>
        <h1 className="text-[18vw] leading-none font-bold tracking-tighter text-brandPrimary">
          MOHSINA
        </h1>
      </motion.div>

      {/* Centered Layered Portrait with HD Comparison Slider */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center">
        <motion.div
          style={{ x: portraitX, y: portraitY }}
          className="relative w-64 h-80 sm:w-80 sm:h-[420px] lg:w-[340px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-brandBorder"
          onMouseEnter={() => setCursorText && setCursorText('EXPLORE')}
          onMouseLeave={() => setCursorText && setCursorText('')}
        >
          <ImageComparisonSlider imageSrc={portraitImg} altText="Mohsina Portrait" />
        </motion.div>
      </div>

      {/* Lower Left Headline & CTA Block */}
      <div className="relative z-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
        <div className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-widest text-brandSecondary mb-2">
            AI / ML / RAG / PYTHON
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brandPrimary mb-3">
            {personalInfo.heroHeadline}
          </h2>
          <p className="text-sm text-brandSecondary mb-6 leading-relaxed">
            {personalInfo.heroSub}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brandPrimary hover:text-brandAccent transition-colors"
            >
              VIEW MY WORK <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 border border-brandBorder rounded-full text-xs font-mono font-semibold text-brandPrimary hover:border-brandPrimary transition-all uppercase"
            >
              LET'S CONNECT
            </a>
          </div>
        </div>

        {/* Floating Social Pill Buttons & Scroll Indicator */}
        <div className="flex flex-col items-start lg:items-end gap-6 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-brandBorder rounded-full shadow-sm hover:border-brandPrimary transition-colors text-brandPrimary font-medium"
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-brandBorder rounded-full shadow-sm hover:border-brandPrimary transition-colors text-brandPrimary font-medium"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-brandBorder rounded-full shadow-sm hover:border-brandPrimary transition-colors text-brandPrimary font-medium"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
          <span className="text-brandSecondary tracking-widest uppercase text-[10px]">
            SCROLL TO EXPLORE ↓
          </span>
        </div>
      </div>
    </section>
  );
}