
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative">
      {/* Abstract design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 top-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-24 bottom-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-red-500/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg border border-red-900/30 transform -rotate-2">
                <div className="p-4 border-l-4 border-red-600 bg-gray-800/50 rounded mb-4">
                  <p className="italic text-gray-300">"A highly motivated and detail-oriented recent grad Electronics and Communication Engineering (ECE) student with a strong technical mindset and a commitment to excellence. Passionate about creating innovative solutions in the field of electronics and communication."</p>
                </div>
                <p className="text-gray-400 mb-4">I thrive in collaborative environments where I can apply my technical knowledge and problem-solving skills to create meaningful solutions. I'm particularly interested in signal processing and embedded systems.</p>
                <p className="text-gray-400">My journey in engineering has equipped me with the ability to tackle complex problems methodically, combining theoretical knowledge with practical application to develop robust solutions.</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <div className="space-y-6">
              <div>
                <h3 className="section-subheading">Professional Summary</h3>
                <p className="text-gray-400">
                  I am an Electronics and Communication Engineering graduate passionate about designing innovative technological solutions. My academic background combined with hands-on project experience has prepared me to take on challenging roles in the field of electronics.
                </p>
              </div>
              
              <div>
                <h3 className="section-subheading">What I Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-400">Strong foundation in digital electronics, signal processing, and embedded systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-400">Experience with programming languages including Python, MATLAB, and C/C++</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-400">Ability to translate theoretical concepts into practical implementations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-400">Excellent communication skills and team collaboration experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-400">Eagerness to learn new technologies and adapt to emerging challenges</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <h3 className="section-subheading">My Interests</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm">Signal Processing</span>
                  <span className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm">Embedded Systems</span>
                  <span className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm">Communication Networks</span>
                  <span className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm">IoT Applications</span>
                  <span className="bg-gray-800 text-red-400 px-3 py-1 rounded-full text-sm">Machine Learning</span>
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
