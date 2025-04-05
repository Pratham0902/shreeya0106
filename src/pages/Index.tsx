
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { setupScrollAnimation } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    setupScrollAnimation();
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/f6823ede-d97f-4f5b-8d0a-dd3039c5f5d7.png')] opacity-[0.02] pointer-events-none"></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
