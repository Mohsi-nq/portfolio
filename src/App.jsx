import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Capabilities from './components/Capabilities';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Approach from './components/Approach';
import Education from './components/Education';
import Learning from './components/Learning';
import FutureFocus from './components/FutureFocus';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [cursorText, setCursorText] = useState('');

  return (
    <div className="min-h-screen bg-brandBg text-brandPrimary selection:bg-brandPrimary selection:text-white">
      <CustomCursor cursorText={cursorText} />
      <Navbar />
      <main>
        <Hero setCursorText={setCursorText} />
        <About />
        <Capabilities />
        <Experience />
        <Projects setCursorText={setCursorText} />
        <Technologies />
        <Approach />
        <Education />
        <Learning />
        <FutureFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}