
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      
      // Reset form
      setFormState({ name: '', email: '', message: '' });
      
      // Show success toast
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-24 top-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-24 bottom-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            Feel free to reach out if you have any questions or if you're interested in collaborating. I'm always open to discussing new projects and opportunities.
          </p>
        </AnimatedSection>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatedSection animation="slide-in-left">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-md border border-red-900/30 transition-all duration-300 hover:border-red-500/50 hover:shadow-red-900/20 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start group transition-all duration-300">
                    <div className="bg-red-900/30 p-3 rounded-full mr-4 group-hover:bg-red-600/50 transition-all duration-300">
                      <Mail className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Email</h4>
                      <a href="mailto:shreeyasanthoshi.ec23@gmail.com" className="text-red-400 hover:underline">
                        shreeyasanthoshi.ec23@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group transition-all duration-300">
                    <div className="bg-red-900/30 p-3 rounded-full mr-4 group-hover:bg-red-600/50 transition-all duration-300">
                      <Phone className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Phone</h4>
                      <p className="text-gray-400">+91 7676994096</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group transition-all duration-300">
                    <div className="bg-red-900/30 p-3 rounded-full mr-4 group-hover:bg-red-600/50 transition-all duration-300">
                      <Linkedin className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">LinkedIn</h4>
                      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                        linkedin.com/in/your-profile
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group transition-all duration-300">
                    <div className="bg-red-900/30 p-3 rounded-full mr-4 group-hover:bg-red-600/50 transition-all duration-300">
                      <Github className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">GitHub</h4>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h4 className="font-medium text-white mb-3">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/your-profile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#0077B5]/20 text-white p-2 rounded-full hover:bg-[#0077B5]/80 transition-all duration-300"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
                      aria-label="GitHub Profile"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="mailto:shreeyasanthoshi.ec23@gmail.com" 
                      className="bg-red-600/30 text-white p-2 rounded-full hover:bg-red-600 transition-all duration-300"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg shadow-md border border-red-900/30 transition-all duration-300 hover:border-red-500/50 hover:shadow-red-900/20 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-white mb-2 transition-colors duration-300 group-focus-within:text-red-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-white mb-2 transition-colors duration-300 group-focus-within:text-red-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-white mb-2 transition-colors duration-300 group-focus-within:text-red-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
