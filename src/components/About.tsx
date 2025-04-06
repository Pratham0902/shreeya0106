
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative">
      {/* Abstract design elements with animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 top-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-24 bottom-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-red-500/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-red-500/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-red-500/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="relative p-6">
              <div className="bg-gradient-to-tr from-gray-900 to-red-900/20 p-6 rounded-lg backdrop-blur-sm shadow-lg border border-red-900/30 transition-all duration-500 hover:border-red-500/30 hover:shadow-red-900/20 hover:shadow-xl transform hover:scale-[1.01]">
                <div className="bg-gradient-to-r from-gray-800/50 to-red-900/10 p-4 border-l-4 border-red-600 rounded mb-4 transition-all duration-300 hover:from-gray-800/70 hover:to-red-900/20">
                  <p className="italic text-gray-300">"A highly motivated and detail-oriented ECE graduate with a strong technical mindset and a commitment to excellence. Passionate about creating innovative solutions in electronics and communication."</p>
                </div>
                <p className="text-gray-400 mb-4 transition-all duration-300 hover:text-gray-300">I thrive in collaborative environments where I can apply my technical knowledge and problem-solving skills to create meaningful solutions. I'm particularly interested in signal processing and embedded systems.</p>
                <p className="text-gray-400 transition-all duration-300 hover:text-gray-300">My journey in engineering has equipped me with the ability to tackle complex problems methodically, combining theoretical knowledge with practical application.</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <div className="space-y-6">
              <div className="transition-all duration-300 hover:translate-x-1">
                <h3 className="section-subheading">Professional Summary</h3>
                <p className="text-gray-400 transition-all duration-300 hover:text-gray-300">
                  I am an Electronics and Communication Engineering graduate passionate about designing innovative technological solutions. My academic background combined with hands-on project experience has prepared me to take on challenging roles in the field.
                </p>
              </div>
              
              <div>
                <h3 className="section-subheading">What I Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                    <span className="text-red-500 mr-2 group-hover:text-red-400 transition-colors duration-300">•</span>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Strong foundation in digital electronics, signal processing, and embedded systems</span>
                  </li>
                  <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                    <span className="text-red-500 mr-2 group-hover:text-red-400 transition-colors duration-300">•</span>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Experience with programming languages including Python, MATLAB, and C/C++</span>
                  </li>
                  <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                    <span className="text-red-500 mr-2 group-hover:text-red-400 transition-colors duration-300">•</span>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Ability to translate theoretical concepts into practical implementations</span>
                  </li>
                  <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                    <span className="text-red-500 mr-2 group-hover:text-red-400 transition-colors duration-300">•</span>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Excellent communication skills and team collaboration experience</span>
                  </li>
                  <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                    <span className="text-red-500 mr-2 group-hover:text-red-400 transition-colors duration-300">•</span>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Eagerness to learn new technologies and adapt to emerging challenges</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <h3 className="section-subheading">My Interests</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-800/70 text-red-400 px-3 py-1 rounded-full text-sm border border-red-900/30 transition-all duration-300 hover:bg-red-900/30 hover:border-red-500/30 hover:text-white hover:shadow-md transform hover:scale-105">Signal Processing</span>
                  <span className="bg-gray-800/70 text-red-400 px-3 py-1 rounded-full text-sm border border-red-900/30 transition-all duration-300 hover:bg-red-900/30 hover:border-red-500/30 hover:text-white hover:shadow-md transform hover:scale-105">Embedded Systems</span>
                  <span className="bg-gray-800/70 text-red-400 px-3 py-1 rounded-full text-sm border border-red-900/30 transition-all duration-300 hover:bg-red-900/30 hover:border-red-500/30 hover:text-white hover:shadow-md transform hover:scale-105">Communication Networks</span>
                  <span className="bg-gray-800/70 text-red-400 px-3 py-1 rounded-full text-sm border border-red-900/30 transition-all duration-300 hover:bg-red-900/30 hover:border-red-500/30 hover:text-white hover:shadow-md transform hover:scale-105">IoT Applications</span>
                  <span className="bg-gray-800/70 text-red-400 px-3 py-1 rounded-full text-sm border border-red-900/30 transition-all duration-300 hover:bg-red-900/30 hover:border-red-500/30 hover:text-white hover:shadow-md transform hover:scale-105">Machine Learning</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
