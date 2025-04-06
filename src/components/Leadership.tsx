
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-black relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-700/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl floating"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Leadership & Accomplishments</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="bg-gradient-to-r from-black/80 via-gray-900/60 to-black/80 relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-[1.01] hover:shadow-red-900/20 hover:shadow-xl">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 transform rotate-45 -translate-x-6 -translate-y-6 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">Senior Coordinator, Singularity</h3>
                <p className="text-gray-400 mb-6">
                  Technical initiatives at the college's ECE club.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start group transition-transform duration-300 hover:translate-x-1">
                    <span className="text-red-500 text-xl mr-3 transition-colors duration-300 group-hover:text-red-400">•</span>
                    <div>
                      <h4 className="font-medium text-red-400 group-hover:text-white transition-colors duration-300">Technical Leadership</h4>
                      <p className="text-gray-400">Coordinated team of 15+ members for technical competitions.</p>
                    </div>
                  </div>
                  <div className="flex items-start group transition-transform duration-300 hover:translate-x-1">
                    <span className="text-red-500 text-xl mr-3 transition-colors duration-300 group-hover:text-red-400">•</span>
                    <div>
                      <h4 className="font-medium text-red-400 group-hover:text-white transition-colors duration-300">Knowledge Sharing</h4>
                      <p className="text-gray-400">Peer learning sessions on emerging technologies.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom gradient line */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-700/20 via-red-500 to-red-700/20"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <AnimatedSection animation="slide-in-left">
              <div className="bg-gradient-to-br from-black to-gray-900/50 backdrop-blur-sm rounded-3xl relative overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-red-900/20 hover:shadow-lg group">
                {/* Accent element */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-red-500/30 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-red-500/50 transition-all duration-500"></div>
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gradient bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent mb-4">Technical Achievements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start group/item transition-transform duration-300 hover:translate-x-1">
                      <span className="text-red-500 mr-2 transition-colors duration-300 group-hover/item:text-red-400">•</span>
                      <span className="text-gray-400">Developed signal processing algorithm with 35% improved noise reduction</span>
                    </li>
                    <li className="flex items-start group/item transition-transform duration-300 hover:translate-x-1">
                      <span className="text-red-500 mr-2 transition-colors duration-300 group-hover/item:text-red-400">•</span>
                      <span className="text-gray-400">Implemented embedded systems for real-world applications</span>
                    </li>
                  </ul>
                </div>
                
                {/* Bottom gradient line */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right">
              <div className="bg-gradient-to-br from-black to-gray-900/50 backdrop-blur-sm rounded-3xl relative overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-red-900/20 hover:shadow-lg group">
                {/* Accent element */}
                <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 left-0 w-8 h-8 bg-red-500/30 transform rotate-45 -translate-x-4 -translate-y-4 group-hover:bg-red-500/50 transition-all duration-500"></div>
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gradient bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent mb-4">Professional Growth</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start group/item transition-transform duration-300 hover:translate-x-1">
                      <span className="text-red-500 mr-2 transition-colors duration-300 group-hover/item:text-red-400">•</span>
                      <span className="text-gray-400">Advanced training in signal processing and embedded systems</span>
                    </li>
                    <li className="flex items-start group/item transition-transform duration-300 hover:translate-x-1">
                      <span className="text-red-500 mr-2 transition-colors duration-300 group-hover/item:text-red-400">•</span>
                      <span className="text-gray-400">Learning through technical conferences and workshops</span>
                    </li>
                  </ul>
                </div>
                
                {/* Bottom gradient line */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-in-up" delay={200} className="mt-10">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gradient-to-br from-gray-900/70 to-black relative rounded-full p-1 transition-all duration-300 hover:shadow-red-500/30 hover:shadow-lg transform hover:scale-105 group">
                <div className="bg-black rounded-full p-5">
                  <h4 className="font-medium text-red-400 text-center group-hover:text-white transition-colors duration-300">Leadership</h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/70 to-black relative rounded-full p-1 transition-all duration-300 hover:shadow-red-500/30 hover:shadow-lg transform hover:scale-105 group">
                <div className="bg-black rounded-full p-5">
                  <h4 className="font-medium text-red-400 text-center group-hover:text-white transition-colors duration-300">Teamwork</h4>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/70 to-black relative rounded-full p-1 transition-all duration-300 hover:shadow-red-500/30 hover:shadow-lg transform hover:scale-105 group">
                <div className="bg-black rounded-full p-5">
                  <h4 className="font-medium text-red-400 text-center group-hover:text-white transition-colors duration-300">Adaptability</h4>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
