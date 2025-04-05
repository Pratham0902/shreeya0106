
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Leadership & Accomplishments</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tech-teal to-tech-purple mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in-up">
            <div className="bg-gradient-to-r from-tech-teal/10 to-tech-purple/10 p-8 rounded-lg mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Senior Coordinator, Singularity - BMSCE</h3>
              <p className="text-gray-600 mb-6">
                Led technical initiatives, organized events, and facilitated knowledge-sharing sessions within the college's premier ECE technical club.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-tech-purple text-xl mr-3">•</span>
                  <div>
                    <h4 className="font-medium text-gray-800">Event Management</h4>
                    <p className="text-gray-600">Successfully planned and executed technical workshops, seminars, and competitions that enhanced student learning and engagement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tech-purple text-xl mr-3">•</span>
                  <div>
                    <h4 className="font-medium text-gray-800">Team Leadership</h4>
                    <p className="text-gray-600">Coordinated a team of 15+ members, delegating responsibilities and ensuring smooth operation of club activities throughout the academic year.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-tech-purple text-xl mr-3">•</span>
                  <div>
                    <h4 className="font-medium text-gray-800">Knowledge Transfer</h4>
                    <p className="text-gray-600">Organized peer learning sessions where students could share technical knowledge and collaborate on projects in a supportive environment.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection animation="slide-in-left">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-tech-blue mb-4">Technical Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-tech-teal mr-2">•</span>
                    <span className="text-gray-600">Developed an innovative signal processing algorithm that improved noise reduction efficiency by 35%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-teal mr-2">•</span>
                    <span className="text-gray-600">Successfully implemented and tested embedded systems solutions for real-world applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-teal mr-2">•</span>
                    <span className="text-gray-600">Contributed to research projects focused on improving communication technologies</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-tech-purple mb-4">Professional Development</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-tech-blue mr-2">•</span>
                    <span className="text-gray-600">Completed advanced training in digital signal processing and embedded systems design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-blue mr-2">•</span>
                    <span className="text-gray-600">Actively participated in technical conferences and workshops to stay updated with industry trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-blue mr-2">•</span>
                    <span className="text-gray-600">Engaged in continuous learning through online courses and self-study in emerging technologies</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection animation="fade-in-up" delay={200} className="mt-10">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Core Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                  <h4 className="font-medium text-tech-teal mb-2">Leadership</h4>
                  <p className="text-gray-600 text-sm">Demonstrated ability to lead technical teams and coordinate complex projects</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                  <h4 className="font-medium text-tech-blue mb-2">Teamwork</h4>
                  <p className="text-gray-600 text-sm">Effective collaborator who values diverse perspectives and fosters inclusive environments</p>
                </div>
                <div className="bg-white p-4 rounded border border-gray-100 shadow-sm">
                  <h4 className="font-medium text-tech-purple mb-2">Adaptability</h4>
                  <p className="text-gray-600 text-sm">Quick to learn new skills and technologies to meet evolving project requirements</p>
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
