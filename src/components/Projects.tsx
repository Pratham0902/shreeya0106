
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image?: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Python Password Generator",
      description: "Developed a secure and efficient password recommendation system to prevent saving, reused passwords.",
      detailedDescription: "Developed a secure and efficient password recommendation system that generates strong, randomized passwords. The system implements advanced cryptographic techniques to ensure password security while maintaining user-friendliness. Features include varying password complexity, custom character sets, and memorable password options.",
      technologies: ["Python", "Cryptography", "GUI"]
    },
    {
      id: 2,
      title: "Mental Health Suicide Prevention System",
      description: "Designed a technology-driven approach for de-risking and mitigating mental health crises using predictive analytics.",
      detailedDescription: "Designed a comprehensive technology-driven approach for identifying potential mental health crises before they escalate. The system uses natural language processing to analyze text patterns, sentiment analysis to detect emotional distress, and machine learning algorithms to identify concerning behavioral patterns. Integrated with support resources and emergency services for immediate intervention when necessary.",
      technologies: ["Python", "Machine Learning", "NLP", "Mental Health API"]
    },
    {
      id: 3,
      title: "Teleconferencing System Development Project",
      description: "Engineering a remote monitoring solution for patients' mental health status using AI-powered models.",
      detailedDescription: "Engineered a remote monitoring teleconferencing solution specifically designed for mental health professionals to maintain contact with at-risk patients. The system features secure video conferencing, appointment scheduling, automated check-ins, mood tracking, and analytics dashboards for clinicians to monitor patient progress. Implemented end-to-end encryption for patient privacy and HIPAA compliance.",
      technologies: ["Telemedicine API", "Web Development", "AI Models", "Secure Communication"]
    },
    {
      id: 4,
      title: "Child Safety Using Edge-Fog Cloud-Enabled Smart IoT Wearable Device",
      description: "Developed an advanced IoT solution for child safety monitoring using cloud and edge computing technologies.",
      detailedDescription: "Designed and developed an IoT wearable device for child safety that leverages edge computing for real-time processing and cloud infrastructure for data storage and analytics. The device includes GPS tracking, geofencing capabilities, emergency alerts, and activity monitoring. The system uses a distributed architecture to ensure minimal latency for critical safety features while optimizing battery life.",
      technologies: ["IoT", "Cloud Computing", "Edge Computing", "Embedded Systems"]
    },
    {
      id: 5,
      title: "Detection of Periodic Signals in Noise Using MATLAB",
      description: "Utilized advanced correlation techniques to extract periodic signals from noisy data environments.",
      detailedDescription: "Implemented a robust signal processing system capable of detecting and extracting periodic signals from extremely noisy environments. The project utilizes advanced correlation techniques, Fourier analysis, and adaptive filtering to isolate target signals. Developed custom MATLAB algorithms that significantly outperform standard methods in low signal-to-noise ratio conditions, with applications in communications, biomedical signal processing, and acoustic analysis.",
      technologies: ["MATLAB", "Signal Processing", "Digital Filters", "Data Analysis"]
    },
    {
      id: 6,
      title: "Radio Telescope Development",
      description: "Assisted in the construction and calibration of a functional radio telescope for astronomical observations.",
      detailedDescription: "Collaborated on designing and building a functional radio telescope capable of detecting cosmic radio sources. The project involved antenna design optimization, receiver circuit construction, signal amplification and filtering stages, and data collection systems. Developed calibration procedures to ensure accurate astronomical measurements and created software for astronomical data analysis and visualization.",
      technologies: ["Radio Frequency Design", "Signal Processing", "Astronomy", "Electronics"]
    }
  ];

  const openProjectDetails = (project: Project) => {
    setActiveProject(project);
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Projects & Research Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tech-teal to-tech-purple mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the significant projects I've worked on, showcasing my technical skills and problem-solving abilities.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="fade-in-up" 
              delay={index * 100}
              className="project-card group hover:-translate-y-2"
            >
              <div className="h-full flex flex-col">
                <div className="mb-2">
                  <span className="text-xs font-medium text-tech-teal">PROJECT {project.id}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-tech-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => openProjectDetails(project)}
                  className="flex items-center text-tech-blue hover:text-tech-purple transition-colors mt-auto"
                >
                  <span className="mr-2">View Details</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto animate-scale-in">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-tech-blue">{activeProject.title}</h3>
                <button 
                  onClick={closeProjectDetails}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <p className="text-gray-700 mb-6">
                {activeProject.detailedDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap">
                  {activeProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">Key Outcomes:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Successfully implemented core functionality with high performance</li>
                  <li>Solved complex technical challenges through innovative approaches</li>
                  <li>Gained valuable experience in the project's technical domain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
