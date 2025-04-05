
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'scale-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className,
  animation = 'fade-in-up',
  delay = 0,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {
          setTimeout(() => {
            if (sectionRef.current) {
              entry.target.classList.add('animate-' + animation);
              sectionRef.current.style.opacity = '1';
            }
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animation, delay]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={cn(className, 'opacity-0')}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
