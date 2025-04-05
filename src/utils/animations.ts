
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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  const animatedSections = document.querySelectorAll('.animated-section');
  animatedSections.forEach((section) => {
    observer.observe(section);
  });
};
