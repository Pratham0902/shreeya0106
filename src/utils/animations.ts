
export const setupScrollAnimation = () => {
  // Check if IntersectionObserver is supported
  if (!('IntersectionObserver' in window)) {
    // For browsers that don't support IntersectionObserver
    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach((section) => {
      section.classList.add('visible');
    });
    return;
  }

  // Create observer for animated sections
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  // Observe all animated sections
  const animatedSections = document.querySelectorAll('.animated-section');
  animatedSections.forEach((section) => {
    sectionObserver.observe(section);
  });

  // Add parallax effect for background elements
  const parallaxElements = document.querySelectorAll('.parallax');
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    parallaxElements.forEach((element) => {
      const speed = element.getAttribute('data-speed') || '0.5';
      const yPos = -scrollPosition * parseFloat(speed);
      // Fix the TypeScript error by checking if element is HTMLElement
      if (element instanceof HTMLElement) {
        element.style.transform = `translateY(${yPos}px)`;
      }
    });
  });

  // Add hover effects to interactive elements
  const interactiveElements = document.querySelectorAll('.interactive');
  
  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove('active');
    });
  });

  // Add floating animation to specified elements
  setupFloatingAnimation();
};

const setupFloatingAnimation = () => {
  const floatingElements = document.querySelectorAll('.floating');
  
  floatingElements.forEach((element, index) => {
    // Create different animation durations and delays for variety
    const duration = 3 + Math.random() * 2;
    const delay = Math.random() * 1;
    
    if (element instanceof HTMLElement) {
      element.style.animation = `floating ${duration}s ease-in-out ${delay}s infinite alternate`;
    }
  });
};

// Add this to the CSS using a style tag since we can't modify the CSS file directly
const addAnimationStyles = () => {
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    @keyframes floating {
      0% { transform: translateY(0); }
      100% { transform: translateY(-10px); }
    }
    
    .interactive {
      transition: all 0.3s ease;
    }
    
    .interactive.active {
      transform: scale(1.05);
      box-shadow: 0 10px 25px -5px rgba(220, 38, 38, 0.2);
    }
    
    /* Glowing effect */
    .glow-on-hover:hover {
      box-shadow: 0 0 15px rgba(220, 38, 38, 0.5);
    }
    
    /* Text reveal effect */
    .text-reveal {
      overflow: hidden;
    }
    
    .text-reveal span {
      display: inline-block;
      transform: translateY(100%);
      opacity: 0;
      transition: transform 0.5s ease, opacity 0.5s ease;
    }
    
    .text-reveal.visible span {
      transform: translateY(0);
      opacity: 1;
    }
    
    /* Glassmorphism effect */
    .glassmorphism {
      background-color: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  `;
  document.head.appendChild(styleTag);
};

// Run once when the page loads
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', addAnimationStyles);
}
