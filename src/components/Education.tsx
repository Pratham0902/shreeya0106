
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 top-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-24 bottom-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[70vw] h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          {/* New more aesthetic timeline design */}
          <div className="space-y-16 relative">
            {/* BMS College */}
            <AnimatedSection className="relative" animation="fade-in-up">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-900 shadow-lg shadow-red-900/30 z-10">
                    <span className="text-white font-bold">2019</span>
                  </div>
                  <div className="h-full w-1 bg-gradient-to-b from-red-600/80 to-transparent hidden md:block"></div>
                </div>
                
                <div className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-2xl border border-red-900/30 shadow-[0_5px_15px_rgba(220,38,38,0.1)] hover:shadow-[0_8px_25px_rgba(220,38,38,0.2)] hover:border-red-500/30 transition-all duration-500 transform hover:translate-y-[-5px] flex-1">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-red-400 mb-1 transition-colors duration-300 hover:text-white">BMS College of Engineering</h3>
                      <p className="text-white mb-1">Bachelor of Electronics and Communication Engineering</p>
                      <p className="text-gray-500">Bangalore, Karnataka</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-red-900/30 text-red-400 px-4 py-1 rounded-full text-sm border border-red-500/20">2019 - Present</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Academic Details</h4>
                      <div className="text-gray-400">
                        <p className="font-medium">CGPA: 8.5/10</p>
                        <p className="text-sm text-gray-500 mt-2">Relevant Coursework:</p>
                        <p className="text-sm text-gray-400">Digital Electronics, Signal Processing, Embedded Systems, Communication Networks</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Key Achievements</h4>
                      <ul className="text-gray-400 text-sm space-y-2">
                        <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Member of college's technical team</span>
                        </li>
                        <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Participated in various technical symposiums</span>
                        </li>
                        <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                          <span className="text-red-500 mr-2">•</span>
                          <span>Completed multiple hands-on projects in embedded systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* RV PU College */}
            <AnimatedSection className="relative" animation="fade-in-up" delay={200}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-900 shadow-lg shadow-red-900/30 z-10">
                    <span className="text-white font-bold">2017</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-black to-gray-900 p-6 rounded-2xl border border-red-900/30 shadow-[0_5px_15px_rgba(220,38,38,0.1)] hover:shadow-[0_8px_25px_rgba(220,38,38,0.2)] hover:border-red-500/30 transition-all duration-500 transform hover:translate-y-[-5px] flex-1">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-red-400 mb-1 transition-colors duration-300 hover:text-white">RV PU College</h3>
                      <p className="text-white mb-1">Pre-University Course</p>
                      <p className="text-gray-500">Bangalore, Karnataka</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-red-900/30 text-red-400 px-4 py-1 rounded-full text-sm border border-red-500/20">2017 - 2019</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-white mb-2">Specialization</h4>
                    <p className="text-gray-400 mb-3">Physics, Chemistry, Mathematics, and Biology (PCMB)</p>
                    
                    <h4 className="text-lg font-medium text-white mb-2">Achievements</h4>
                    <ul className="text-gray-400 text-sm space-y-2">
                      <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Participated in science exhibitions</span>
                      </li>
                      <li className="flex items-start group transition-all duration-300 hover:translate-x-1">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Member of the college mathematics club</span>
                      </li>
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
