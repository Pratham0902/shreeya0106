
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-tech-teal to-tech-purple mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Feel free to reach out if you have any questions or if you're interested in collaborating. I'm always open to discussing new projects and opportunities.
          </p>
        </AnimatedSection>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatedSection animation="slide-in-left">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                <h3 className="text-2xl font-bold text-tech-blue mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-tech-blue/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-tech-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <a href="mailto:shreeya.santhoshi.srinath@gmail.com" className="text-tech-blue hover:underline">
                        shreeya.santhoshi.srinath@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-purple/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-tech-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tech-teal/10 p-3 rounded-full mr-4">
                      <Linkedin className="h-5 w-5 text-tech-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">LinkedIn</h4>
                      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-tech-blue hover:underline">
                        linkedin.com/in/your-profile
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-800/10 p-3 rounded-full mr-4">
                      <Github className="h-5 w-5 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">GitHub</h4>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-tech-blue hover:underline">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-3">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/your-profile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#0077B5] text-white p-2 rounded-full hover:bg-opacity-90 transition-all"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#333] text-white p-2 rounded-full hover:bg-opacity-90 transition-all"
                      aria-label="GitHub Profile"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="mailto:shreeya.santhoshi.srinath@gmail.com" 
                      className="bg-tech-teal text-white p-2 rounded-full hover:bg-opacity-90 transition-all"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-tech-purple mb-6">Send Me a Message</h3>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-100 text-green-700 p-4 rounded-lg animate-fade-in">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="font-medium">Message sent successfully!</span>
                    </div>
                    <p className="mt-2 text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-tech-blue outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-tech-blue outline-none transition-colors"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-tech-blue outline-none transition-colors"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-tech-teal to-tech-purple text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
