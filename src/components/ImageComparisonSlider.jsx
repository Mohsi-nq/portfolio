import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ImageComparisonSlider({ imageSrc, altText = "Mohsina Portrait" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div
      className="relative w-full h-full select-none overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Layer: Black & White Image (Default View) */}
      <img
        src={imageSrc}
        alt={altText}
        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 pointer-events-none"
      />

      {/* Top Layer: HD Image Revealed Under the Smaller Cursor Lens */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          clipPath: `circle(55px at ${mousePos.x}px ${mousePos.y}px)`
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Compact Spotlight Ring Indicator (No text badge inside) */}
      {isHovered && (
        <motion.div
          className="absolute w-[110px] h-[110px] rounded-full border border-white/70 shadow-2xl pointer-events-none z-20"
          style={{
            left: mousePos.x - 55,
            top: mousePos.y - 55
          }}
        />
      )}
    </div>
  );
}