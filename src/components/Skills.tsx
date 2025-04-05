
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const technicalSkills = [
    { name: 'Programming Languages', items: ['Python', 'HTML', 'ARM Assembly', 'C/C++', 'MATLAB'] },
    { name: 'Frameworks and Tools', items: ['Jupyter Notebook', 'Google Colab', 'EAGLE', 'KiCad', 'Vivado', 'MATLAB Simulink'] },
    { name: 'Soft Skills', items: ['Strong leadership', 'Teamwork', 'Communication abilities', 'Problem-solving', 'Analytical thinking', 'Technical writing', 'Presentation delivery'] }
  ];

  const renderSkillBar = (skill: string, proficiency: number, delay: number) => (
    <AnimatedSection key={skill} animation="slide-in-right" delay={delay} className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-500 text-sm">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-tech-teal to-tech-purple" 
          style={{ width: `${proficiency}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </AnimatedSection>
  );

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Core Competencies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tech-teal to-tech-purple mx-auto rounded-full mb-8"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <AnimatedSection animation="fade-in-up">
              <h3 className="text-xl font-bold text-tech-blue mb-6">Technical Proficiency</h3>
              {renderSkillBar('Python', 90, 0)}
              {renderSkillBar('C/C++', 85, 100)}
              {renderSkillBar('MATLAB', 80, 200)}
              {renderSkillBar('Signal Processing', 85, 300)}
              {renderSkillBar('Embedded Systems', 75, 400)}
            </AnimatedSection>
          </div>
          
          <div>
            <AnimatedSection animation="fade-in-up" delay={100}>
              <h3 className="text-xl font-bold text-tech-purple mb-8">Skill Categories</h3>
              
              <div className="space-y-8">
                {technicalSkills.map((category, index) => (
                  <div key={category.name} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span key={item} className="tech-tag">
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
          <div className="bg-gradient-to-r from-tech-teal/10 to-tech-purple/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-tech-teal mb-2">Problem Solving</h4>
                <p className="text-gray-600 text-sm">Analytical approach to debugging and troubleshooting complex technical issues</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-tech-blue mb-2">Technical Communication</h4>
                <p className="text-gray-600 text-sm">Ability to explain technical concepts clearly and concisely to various audiences</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-tech-purple mb-2">Adaptability</h4>
                <p className="text-gray-600 text-sm">Quick to learn new technologies and adapt to changing requirements</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
