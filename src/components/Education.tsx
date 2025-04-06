
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  Card,
  CardContent
} from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-24 top-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl floating"></div>
        <div className="absolute -right-24 bottom-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl floating"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[70vw] h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          {/* Modern flowing timeline design with waves */}
          <div className="space-y-16 relative before:absolute before:inset-0 before:left-[7.5rem] before:ml-0.5 before:w-0.5 before:h-full before:bg-gradient-to-b before:from-red-500 before:via-red-600/50 before:to-transparent before:z-0 md:ml-16">
            {/* BMS College */}
            <AnimatedSection className="relative" animation="fade-in-up">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-900/30 flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:shadow-red-500/50 hover:shadow-xl z-10">
                    <span className="text-white font-bold">2019</span>
                  </div>
                </div>
                
                <div className="md:ml-8 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-sm rounded-3xl relative overflow-hidden transition-all duration-500 transform hover:-translate-y-2 group">
                  {/* Wave element */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-700/20 via-red-500 to-red-700/20"></div>
                  
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 transform rotate-45 translate-x-6 -translate-y-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500"></div>
                  </div>
                  
                  <div className="p-8 relative z-10">
                    <div className="flex flex-col justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent mb-3 transition-all duration-300 group-hover:tracking-wide">
                          BMS College of Engineering
                        </h3>
                        <p className="text-white text-lg mb-1">Bachelor of Electronics and Communication Engineering</p>
                        <p className="text-gray-400 text-sm">Bangalore, Karnataka</p>
                      </div>
                      <div className="mt-4">
                        <span className="inline-flex items-center justify-center px-4 py-1 text-sm text-red-400 border border-red-500/30 rounded-full bg-gradient-to-r from-red-900/20 to-black backdrop-blur-md transition-all duration-300 group-hover:border-red-400/50 group-hover:shadow-red-500/20 group-hover:shadow-lg">
                          2019 - Present
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-medium text-red-400 mb-3 flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          Academic Details
                        </h4>
                        <div className="text-gray-300 pl-4 border-l border-red-800/30">
                          <p className="font-medium">CGPA: 8.5/10</p>
                          <p className="text-sm text-gray-400 mt-2">Relevant Coursework:</p>
                          <p className="text-sm text-gray-400">Digital Electronics, Signal Processing, Embedded Systems, Communication Networks</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-red-400 mb-3 flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          Key Achievements
                        </h4>
                        <ul className="text-gray-300 space-y-2 pl-4 border-l border-red-800/30">
                          <li className="group/item transition-all duration-300 hover:translate-x-1">
                            <div className="flex items-start">
                              <span className="text-red-500 mr-2 group-hover/item:text-red-400">•</span>
                              <span>Member of college's technical team</span>
                            </div>
                          </li>
                          <li className="group/item transition-all duration-300 hover:translate-x-1">
                            <div className="flex items-start">
                              <span className="text-red-500 mr-2 group-hover/item:text-red-400">•</span>
                              <span>Participated in technical symposiums</span>
                            </div>
                          </li>
                          <li className="group/item transition-all duration-300 hover:translate-x-1">
                            <div className="flex items-start">
                              <span className="text-red-500 mr-2 group-hover/item:text-red-400">•</span>
                              <span>Completed hands-on embedded projects</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* RV PU College */}
            <AnimatedSection className="relative" animation="fade-in-up" delay={200}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-none">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-900/30 flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:shadow-red-500/50 hover:shadow-xl z-10">
                    <span className="text-white font-bold">2017</span>
                  </div>
                </div>
                
                <div className="md:ml-8 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-sm rounded-3xl relative overflow-hidden transition-all duration-500 transform hover:-translate-y-2 group">
                  {/* Wave element */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-700/20 via-red-500 to-red-700/20"></div>
                  
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 transform rotate-45 translate-x-6 -translate-y-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500"></div>
                  </div>
                  
                  <div className="p-8 relative z-10">
                    <div className="flex flex-col justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent mb-3 transition-all duration-300 group-hover:tracking-wide">
                          RV PU College
                        </h3>
                        <p className="text-white text-lg mb-1">Pre-University Course</p>
                        <p className="text-gray-400 text-sm">Bangalore, Karnataka</p>
                      </div>
                      <div className="mt-4">
                        <span className="inline-flex items-center justify-center px-4 py-1 text-sm text-red-400 border border-red-500/30 rounded-full bg-gradient-to-r from-red-900/20 to-black backdrop-blur-md transition-all duration-300 group-hover:border-red-400/50 group-hover:shadow-red-500/20 group-hover:shadow-lg">
                          2017 - 2019
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium text-red-400 mb-3 flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          Specialization
                        </h4>
                        <div className="text-gray-300 pl-4 border-l border-red-800/30">
                          <p>Physics, Chemistry, Mathematics, and Biology (PCMB)</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-red-400 mb-3 flex items-center">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          Achievements
                        </h4>
                        <ul className="text-gray-300 space-y-2 pl-4 border-l border-red-800/30">
                          <li className="group/item transition-all duration-300 hover:translate-x-1">
                            <div className="flex items-start">
                              <span className="text-red-500 mr-2 group-hover/item:text-red-400">•</span>
                              <span>Participated in science exhibitions</span>
                            </div>
                          </li>
                          <li className="group/item transition-all duration-300 hover:translate-x-1">
                            <div className="flex items-start">
                              <span className="text-red-500 mr-2 group-hover/item:text-red-400">•</span>
                              <span>Member of college mathematics club</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
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
