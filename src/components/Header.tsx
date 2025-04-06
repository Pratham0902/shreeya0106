
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Linkedin } from 'lucide-react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element) as { id: string; element: HTMLElement }[];

      // Find the section that's currently in view
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        const rect = element.getBoundingClientRect();

        if (rect.top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="relative text-xl md:text-2xl font-bold overflow-hidden">
            <span className="inline-block relative">
              <span className="relative z-10 bg-gradient-to-r from-red-400 via-red-500 to-white bg-clip-text text-transparent 
                transform transition-all duration-500 hover:scale-105 tracking-wider">
                Shreeya
              </span>
              <span className="relative z-10 text-red-200 italic px-1 font-light">S.</span>
              <span className="relative z-10 bg-gradient-to-l from-red-400 via-red-500 to-white bg-clip-text text-transparent 
                transform transition-all duration-500 hover:scale-105 tracking-wide">
                Srinath
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent transform scale-x-0 transition-transform duration-500 origin-center group-hover:scale-x-100"></span>
            </span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "nav-link",
                activeSection === section.id ? "active" : ""
              )}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <a 
            href="https://github.com/yourgithub" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-600 hover:text-tech-purple transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-600 hover:text-tech-blue transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:shreeyasanthoshi.ec23@bmsce.ac.in" 
            aria-label="Email"
            className="text-gray-600 hover:text-tech-teal transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden text-gray-600"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <nav className="flex flex-col py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "py-3 px-4 text-left",
                  activeSection === section.id ? "text-tech-purple font-medium" : ""
                )}
              >
                {section.label}
              </button>
            ))}
            <div className="flex justify-center space-x-6 py-4 border-t border-gray-100 mt-2">
              <a 
                href="https://github.com/yourgithub" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-600 hover:text-tech-purple transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-600 hover:text-tech-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:shreeyasanthoshi.ec23@bmsce.ac.in" 
                aria-label="Email"
                className="text-gray-600 hover:text-tech-teal transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
