
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 top-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-24 bottom-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-700"></div>
            
            {/* BMS College */}
            <AnimatedSection className="relative mb-16 md:mb-24" animation="fade-in-up">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-red-400 mb-2 transition-colors duration-300 hover:text-white">BMS College of Engineering</h3>
                  <p className="text-white mb-1">Bachelor of Electronics and Communication Engineering</p>
                  <p className="text-gray-500 mb-3">Bangalore, Karnataka</p>
                  <div className="text-gray-400">
                    <p className="font-medium">CGPA: 8.5/10</p>
                    <p className="text-sm text-gray-500 mt-2">Relevant Coursework:</p>
                    <p className="text-sm text-gray-400">Digital Electronics, Signal Processing, Embedded Systems, Communication Networks</p>
                  </div>
                </div>
                
                <div className="md:w-1/2 pl-10 md:pl-12 order-1 md:order-2 relative">
                  <div className="absolute left-0 md:left-0 top-3 w-6 h-6 rounded-full bg-black border-4 border-red-500 z-10 animate-pulse"></div>
                  <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg shadow-md border border-red-900/30 transition-all duration-300 hover:border-red-500/40 transform hover:scale-[1.02] hover:shadow-red-900/20 hover:shadow-xl">
                    <span className="text-red-400 font-bold">2019 - 2023</span>
                    <div className="mt-3 space-y-2">
                      <h4 className="font-medium text-white">Key Achievements:</h4>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li className="transition-transform duration-300 hover:translate-x-1">• Member of college's technical team</li>
                        <li className="transition-transform duration-300 hover:translate-x-1">• Participated in various technical symposiums</li>
                        <li className="transition-transform duration-300 hover:translate-x-1">• Completed multiple hands-on projects in embedded systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* PU College */}
            <AnimatedSection className="relative" animation="fade-in-up" delay={200}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 pr-10 md:pr-12 mb-6 md:mb-0 order-2 md:order-2 relative">
                  <div className="absolute right-0 md:left-0 top-3 w-6 h-6 rounded-full bg-black border-4 border-red-600 z-10 animate-pulse"></div>
                  <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg shadow-md border border-red-900/30 transition-all duration-300 hover:border-red-500/40 transform hover:scale-[1.02] hover:shadow-red-900/20 hover:shadow-xl">
                    <span className="text-red-400 font-bold">2017 - 2019</span>
                    <div className="mt-3 space-y-2">
                      <h4 className="font-medium text-white">Specialization:</h4>
                      <p className="text-gray-400 text-sm">Physics, Chemistry, Mathematics, and Biology (PCMB)</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Built a strong foundation in scientific principles and mathematical concepts.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-1 md:order-1 md:text-right">
                  <h3 className="text-2xl font-bold text-red-400 mb-2 transition-colors duration-300 hover:text-white">RV PU College</h3>
                  <p className="text-white mb-1">Pre-University Course</p>
                  <p className="text-gray-500 mb-3">Bangalore, Karnataka</p>
                  <div className="text-gray-400">
                    <p className="font-medium">Achievements:</p>
                    <ul className="md:list-none md:text-right">
                      <li className="transition-transform duration-300 hover:translate-x-[-4px]">• Participated in science exhibitions</li>
                      <li className="transition-transform duration-300 hover:translate-x-[-4px]">• Member of the college mathematics club</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
