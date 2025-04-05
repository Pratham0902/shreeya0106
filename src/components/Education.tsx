
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tech-teal to-tech-purple mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-tech-teal via-tech-blue to-tech-purple"></div>
            
            {/* BMS College */}
            <AnimatedSection className="relative mb-16 md:mb-24" animation="fade-in-up">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-tech-blue mb-2">BMS College of Engineering</h3>
                  <p className="text-gray-600 mb-1">Bachelor of Electronics and Communication Engineering</p>
                  <p className="text-gray-500 mb-3">Bangalore, Karnataka</p>
                  <div className="text-gray-700">
                    <p className="font-medium">CGPA: 8.5/10</p>
                    <p className="text-sm text-gray-500 mt-2">Relevant Coursework:</p>
                    <p className="text-sm text-gray-600">Digital Electronics, Signal Processing, Embedded Systems, Communication Networks</p>
                  </div>
                </div>
                
                <div className="md:w-1/2 pl-10 md:pl-12 order-1 md:order-2 relative">
                  <div className="absolute left-0 md:left-0 top-3 w-6 h-6 rounded-full bg-white border-4 border-tech-teal z-10"></div>
                  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                    <span className="text-tech-purple font-bold">2019 - 2023</span>
                    <div className="mt-3 space-y-2">
                      <h4 className="font-medium">Key Achievements:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Member of college's technical team</li>
                        <li>• Participated in various technical symposiums</li>
                        <li>• Completed multiple hands-on projects in embedded systems and signal processing</li>
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
                  <div className="absolute right-0 md:left-0 top-3 w-6 h-6 rounded-full bg-white border-4 border-tech-purple z-10"></div>
                  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                    <span className="text-tech-blue font-bold">2017 - 2019</span>
                    <div className="mt-3 space-y-2">
                      <h4 className="font-medium">Specialization:</h4>
                      <p className="text-gray-600 text-sm">Physics, Chemistry, Mathematics, and Biology (PCMB)</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Built a strong foundation in scientific principles and mathematical concepts that would later support my engineering education.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 md:pl-12 order-1 md:order-1 md:text-right">
                  <h3 className="text-2xl font-bold text-tech-purple mb-2">RV PU College</h3>
                  <p className="text-gray-600 mb-1">Pre-University Course</p>
                  <p className="text-gray-500 mb-3">Bangalore, Karnataka</p>
                  <div className="text-gray-700">
                    <p className="font-medium">Achievements:</p>
                    <ul className="md:list-none md:text-right">
                      <li>• Participated in science exhibitions</li>
                      <li>• Member of the college mathematics club</li>
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
