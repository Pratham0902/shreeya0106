
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-black relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Leadership & Accomplishments</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="bg-gradient-to-r from-gray-900/70 to-red-900/20 p-8 rounded-lg mb-10 border border-red-900/30 transition-all duration-500 hover:border-red-500/40 transform hover:scale-[1.01] hover:shadow-red-900/20 hover:shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">Senior Coordinator, Singularity - BMSCE</h3>
              <p className="text-gray-400 mb-6">
                Led technical initiatives at the college's premier ECE club, organizing events and fostering innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group transition-transform duration-300 hover:translate-x-1">
                  <span className="text-red-500 text-xl mr-3 transition-colors duration-300 group-hover:text-red-400">•</span>
                  <div>
                    <h4 className="font-medium text-red-400 group-hover:text-white transition-colors duration-300">Technical Leadership</h4>
                    <p className="text-gray-400">Coordinated a team of 15+ members, organizing workshops and technical competitions.</p>
                  </div>
                </div>
                <div className="flex items-start group transition-transform duration-300 hover:translate-x-1">
                  <span className="text-red-500 text-xl mr-3 transition-colors duration-300 group-hover:text-red-400">•</span>
                  <div>
                    <h4 className="font-medium text-red-400 group-hover:text-white transition-colors duration-300">Knowledge Sharing</h4>
                    <p className="text-gray-400">Facilitated peer learning sessions focused on emerging technologies in electronics.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection animation="slide-in-left">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-red-900/30 h-full transition-all duration-300 hover:border-red-500/40 transform hover:scale-[1.02] hover:shadow-red-900/20 hover:shadow-lg">
                <h3 className="text-xl font-bold text-red-400 mb-4">Technical Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group transition-transform duration-300 hover:translate-x-1">
                    <span className="text-red-500 mr-2 transition-colors duration-300 group-hover:text-red-400">•</span>
                    <span className="text-gray-400">Developed an innovative signal processing algorithm that improved noise reduction efficiency by 35%</span>
                  </li>
                  <li className="flex items-start group transition-transform duration-300 hover:translate-x-1">
                    <span className="text-red-500 mr-2 transition-colors duration-300 group-hover:text-red-400">•</span>
                    <span className="text-gray-400">Implemented embedded systems solutions for real-world applications</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-red-900/30 h-full transition-all duration-300 hover:border-red-500/40 transform hover:scale-[1.02] hover:shadow-red-900/20 hover:shadow-lg">
                <h3 className="text-xl font-bold text-red-400 mb-4">Professional Growth</h3>
                <ul className="space-y-3">
                  <li className="flex items-start group transition-transform duration-300 hover:translate-x-1">
                    <span className="text-red-500 mr-2 transition-colors duration-300 group-hover:text-red-400">•</span>
                    <span className="text-gray-400">Advanced training in digital signal processing and embedded systems design</span>
                  </li>
                  <li className="flex items-start group transition-transform duration-300 hover:translate-x-1">
                    <span className="text-red-500 mr-2 transition-colors duration-300 group-hover:text-red-400">•</span>
                    <span className="text-gray-400">Continuous learning through technical conferences and emerging technology workshops</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-in-up" delay={200} className="mt-10">
            <div className="bg-gray-900/30 p-6 rounded-lg border border-red-900/30 transition-all duration-500 hover:border-red-500/40 hover:shadow-red-900/20 hover:shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Core Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-gray-900 to-red-900/20 p-4 rounded border border-red-900/20 shadow-sm transition-all duration-300 hover:border-red-500/30 hover:shadow-md transform hover:scale-105">
                  <h4 className="font-medium text-red-400 mb-2">Leadership</h4>
                  <p className="text-gray-400 text-sm">Leading technical teams and coordinating complex projects</p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-red-900/20 p-4 rounded border border-red-900/20 shadow-sm transition-all duration-300 hover:border-red-500/30 hover:shadow-md transform hover:scale-105">
                  <h4 className="font-medium text-red-400 mb-2">Teamwork</h4>
                  <p className="text-gray-400 text-sm">Collaborating effectively and fostering inclusive environments</p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-red-900/20 p-4 rounded border border-red-900/20 shadow-sm transition-all duration-300 hover:border-red-500/30 hover:shadow-md transform hover:scale-105">
                  <h4 className="font-medium text-red-400 mb-2">Adaptability</h4>
                  <p className="text-gray-400 text-sm">Quickly learning new skills to meet evolving project requirements</p>
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
