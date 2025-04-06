
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const technicalSkills = [
    { name: 'Programming Languages', items: ['Python', 'HTML', 'ARM Assembly', 'C/C++', 'MATLAB'] },
    { name: 'Frameworks and Tools', items: ['Jupyter Notebook', 'Google Colab', 'IDLE', 'Keil', 'Vivado', 'MATLAB Simulink'] },
    { name: 'Soft Skills', items: ['Strong leadership', 'Teamwork', 'Communication abilities', 'Problem-solving', 'Analytical thinking', 'Technical writing', 'Presentation delivery'] }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative">
      {/* Abstract design elements with animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 top-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-24 bottom-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-red-500/10 rounded-full blur-lg floating"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-red-600/5 rounded-full blur-xl floating"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Core Competencies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <AnimatedSection animation="fade-in-up">
              <h3 className="text-xl font-bold text-red-500 mb-6">Technical Proficiency</h3>
              
              {/* Skill Bars with Animation */}
              <div className="space-y-6">
                <div className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium group-hover:text-red-400 transition-colors duration-300">Python</span>
                    <span className="text-gray-500 text-sm">90%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 group-hover:from-red-500 group-hover:to-red-300 transition-all duration-1000 animate-pulse" 
                         style={{ width: '90%', animationDuration: '3s' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium group-hover:text-red-400 transition-colors duration-300">C/C++</span>
                    <span className="text-gray-500 text-sm">85%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 group-hover:from-red-500 group-hover:to-red-300 transition-all duration-1000 animate-pulse" 
                         style={{ width: '85%', animationDuration: '3.2s' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium group-hover:text-red-400 transition-colors duration-300">MATLAB</span>
                    <span className="text-gray-500 text-sm">80%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 group-hover:from-red-500 group-hover:to-red-300 transition-all duration-1000 animate-pulse" 
                         style={{ width: '80%', animationDuration: '3.4s' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium group-hover:text-red-400 transition-colors duration-300">Signal Processing</span>
                    <span className="text-gray-500 text-sm">85%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 group-hover:from-red-500 group-hover:to-red-300 transition-all duration-1000 animate-pulse" 
                         style={{ width: '85%', animationDuration: '3.6s' }}></div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium group-hover:text-red-400 transition-colors duration-300">Embedded Systems</span>
                    <span className="text-gray-500 text-sm">75%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 group-hover:from-red-500 group-hover:to-red-300 transition-all duration-1000 animate-pulse" 
                         style={{ width: '75%', animationDuration: '3.8s' }}></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div>
            <AnimatedSection animation="fade-in-up" delay={100}>
              <h3 className="text-xl font-bold text-red-500 mb-8">Skill Categories</h3>
              
              <div className="space-y-8">
                {technicalSkills.map((category, index) => (
                  <div key={category.name} 
                       className="bg-gradient-to-br from-gray-900 to-black p-5 rounded-lg border border-red-900/20 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_5px_15px_rgba(220,38,38,0.15)] transform hover:translate-y-[-2px]">
                    <h4 className="font-semibold text-red-400 mb-3">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span key={item} className="inline-block bg-red-900/20 text-white px-3 py-1 rounded-full text-sm border border-red-500/20 transition-all duration-300 hover:bg-red-900/40 hover:border-red-400/30 transform hover:scale-105">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        <AnimatedSection animation="fade-in-up" delay={300} className="mt-16">
          <div className="bg-gradient-to-r from-black to-red-950/10 p-6 rounded-lg border border-red-900/20">
            <h3 className="text-xl font-bold text-white mb-4">Key Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg shadow-sm border border-red-900/20 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_5px_15px_rgba(220,38,38,0.15)] transform hover:translate-y-[-2px]">
                <h4 className="font-medium text-red-400 mb-2">Problem Solving</h4>
                <p className="text-gray-400 text-sm">Analytical approach to debugging and troubleshooting complex technical issues</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg shadow-sm border border-red-900/20 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_5px_15px_rgba(220,38,38,0.15)] transform hover:translate-y-[-2px]">
                <h4 className="font-medium text-red-400 mb-2">Technical Communication</h4>
                <p className="text-gray-400 text-sm">Ability to explain technical concepts clearly and concisely to various audiences</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg shadow-sm border border-red-900/20 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_5px_15px_rgba(220,38,38,0.15)] transform hover:translate-y-[-2px]">
                <h4 className="font-medium text-red-400 mb-2">Adaptability</h4>
                <p className="text-gray-400 text-sm">Quick to learn new technologies and adapt to changing requirements</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
