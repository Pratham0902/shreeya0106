
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tech-teal to-tech-purple mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-tech-teal/20 to-tech-purple/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform -rotate-2">
                <div className="p-4 border-l-4 border-tech-teal bg-gray-50 rounded mb-4">
                  <p className="italic text-gray-700">"A highly motivated and detail-oriented recent grad Electronics and Communication Engineering (ECE) student with a strong technical mindset and a commitment to excellence. Passionate about creating innovative solutions in the field of electronics and communication."</p>
                </div>
                <p className="text-gray-600 mb-4">I thrive in collaborative environments where I can apply my technical knowledge and problem-solving skills to create meaningful solutions. I'm particularly interested in signal processing and embedded systems.</p>
                <p className="text-gray-600">My journey in engineering has equipped me with the ability to tackle complex problems methodically, combining theoretical knowledge with practical application to develop robust solutions.</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <div className="space-y-6">
              <div>
                <h3 className="section-subheading">Professional Summary</h3>
                <p className="text-gray-600">
                  I am an Electronics and Communication Engineering graduate passionate about designing innovative technological solutions. My academic background combined with hands-on project experience has prepared me to take on challenging roles in the field of electronics.
                </p>
              </div>
              
              <div>
                <h3 className="section-subheading">What I Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-tech-purple mr-2">•</span>
                    <span className="text-gray-600">Strong foundation in digital electronics, signal processing, and embedded systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-purple mr-2">•</span>
                    <span className="text-gray-600">Experience with programming languages including Python, MATLAB, and C/C++</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-purple mr-2">•</span>
                    <span className="text-gray-600">Ability to translate theoretical concepts into practical implementations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-purple mr-2">•</span>
                    <span className="text-gray-600">Excellent communication skills and team collaboration experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tech-purple mr-2">•</span>
                    <span className="text-gray-600">Eagerness to learn new technologies and adapt to emerging challenges</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <h3 className="section-subheading">My Interests</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-50 text-tech-blue px-3 py-1 rounded-full text-sm">Signal Processing</span>
                  <span className="bg-purple-50 text-tech-purple px-3 py-1 rounded-full text-sm">Embedded Systems</span>
                  <span className="bg-teal-50 text-tech-teal px-3 py-1 rounded-full text-sm">Communication Networks</span>
                  <span className="bg-blue-50 text-tech-blue px-3 py-1 rounded-full text-sm">IoT Applications</span>
                  <span className="bg-purple-50 text-tech-purple px-3 py-1 rounded-full text-sm">Machine Learning</span>
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
