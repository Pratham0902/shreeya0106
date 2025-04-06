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
      {/* Red geometric patterns with animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-32 h-32 bg-red-500 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <div 
            key={index}
            className="absolute w-2 h-2 bg-red-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="slide-in-left" className="text-center md:text-left">
            <div className="inline-block relative mb-3">
              <span className="text-red-500 font-medium text-lg relative z-10 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-red-500 before:transition-all before:duration-500 hover:before:w-full">Hello, I'm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-heading transition-all duration-500 transform hover:scale-[1.01] hover:text-red-400">
              Shreeya Santhoshi Srinath
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-300 transition-all duration-500 transform hover:translate-x-1 hover:text-white">
              Electronics and Communication Engineer
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 transition-all duration-300 hover:text-gray-300">
              A highly motivated engineer passionate about creating innovative solutions in electronics and communication. Committed to excellence with a strong technical mindset.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-transparent text-white border border-red-600 py-3 px-6 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                View Projects
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right" className="hidden md:block">
            <div className="relative p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-red-900/10 rounded-2xl blur-sm transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-red-500/20 to-transparent rounded-2xl blur-md transform -rotate-2"></div>
              
              <div className="relative glassmorphism p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm bg-black/40 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                    <h3 className="font-bold text-white">Shreeya S. Srinath</h3>
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-900/50 to-green-700/30 text-green-400 rounded-full text-sm animate-pulse border border-green-500/30">Available</span>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex group transition-all duration-300 hover:translate-x-1">
                    <span className="font-medium w-24 text-gray-400 group-hover:text-red-400 transition-colors duration-300">Email:</span>
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">shreeyasanthoshi.ec23@bmsce.ac.in</span>
                  </div>
                  <div className="flex group transition-all duration-300 hover:translate-x-1">
                    <span className="font-medium w-24 text-gray-400 group-hover:text-red-400 transition-colors duration-300">LinkedIn:</span>
                    <span className="text-red-400 group-hover:text-red-300 transition-colors duration-300">linkedin.com/in/yourusername</span>
                  </div>
                  <div className="flex group transition-all duration-300 hover:translate-x-1">
                    <span className="font-medium w-24 text-gray-400 group-hover:text-red-400 transition-colors duration-300">GitHub:</span>
                    <span className="text-red-400 group-hover:text-red-300 transition-colors duration-300">github.com/yourusername</span>
                  </div>
                  <div className="flex group transition-all duration-300 hover:translate-x-1">
                    <span className="font-medium w-24 text-gray-400 group-hover:text-red-400 transition-colors duration-300">Phone:</span>
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">+91 7676994096</span>
                  </div>
                  <div className="flex group transition-all duration-300 hover:translate-x-1">
                    <span className="font-medium w-24 text-gray-400 group-hover:text-red-400 transition-colors duration-300">Location:</span>
                    <span className="text-gray-200 group-hover:text-white transition-colors duration-300">Bangalore, Karnataka</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <h4 className="font-medium text-gray-200 mb-2">Core Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="tech-tag transition-all duration-300 hover:bg-red-900/50 hover:scale-105">Python</span>
                    <span className="tech-tag transition-all duration-300 hover:bg-red-900/50 hover:scale-105">C/C++</span>
                    <span className="tech-tag transition-all duration-300 hover:bg-red-900/50 hover:scale-105">MATLAB</span>
                    <span className="tech-tag transition-all duration-300 hover:bg-red-900/50 hover:scale-105">Signal Processing</span>
                    <span className="tech-tag transition-all duration-300 hover:bg-red-900/50 hover:scale-105">Embedded Systems</span>
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
