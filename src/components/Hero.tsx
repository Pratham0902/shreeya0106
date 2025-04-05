
import React from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-black">
      {/* Red geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-32 bg-red-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="fade-in" className="text-center md:text-left">
            <p className="text-red-500 font-medium mb-3 text-lg">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-heading">
              Shreeya Santhoshi Srinath
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
              Electronics and Communication Engineer
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8">
              A highly motivated and detail-oriented recent grad with a strong technical mindset and a commitment to excellence. Passionate about creating innovative solutions in the field of electronics and communication.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-gray-900 text-white border border-red-600 py-3 px-6 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right" className="hidden md:block">
            <div className="relative">
              <div className="w-full h-full absolute -right-6 -bottom-6 bg-red-600/20 rounded-lg"></div>
              <div className="w-full h-full absolute -left-6 -top-6 bg-red-500/20 rounded-lg"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg shadow-xl border border-red-900/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-white">Shreeya S. Srinath</h3>
                  <span className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">Available</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex">
                    <span className="font-medium w-24 text-gray-400">Email:</span>
                    <span className="text-gray-200">shreeyasanthoshi.ec23@bmsce.ac.in</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24 text-gray-400">LinkedIn:</span>
                    <span className="text-red-400">linkedin.com/in/yourusername</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24 text-gray-400">GitHub:</span>
                    <span className="text-red-400">github.com/yourusername</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24 text-gray-400">Location:</span>
                    <span className="text-gray-200">Bangalore, Karnataka</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <h4 className="font-medium text-gray-200 mb-2">Core Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">C/C++</span>
                    <span className="tech-tag">MATLAB</span>
                    <span className="tech-tag">Signal Processing</span>
                    <span className="tech-tag">Embedded Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection animation="fade-in" delay={800} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-400 hover:text-red-500 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
