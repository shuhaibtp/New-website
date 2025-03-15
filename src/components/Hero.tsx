
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-transparent opacity-40" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={heroRef} className="reveal-on-scroll">
            <span className="inline-block py-1 px-3 mb-5 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Digital Marketing Expert
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
              Turning Clicks Into <span className="text-gradient">Customers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Expert digital marketing strategist helping businesses grow their online presence, reach more customers, and increase revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:shadow-outline focus:outline-none hover-lift"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide transition duration-200 border border-primary/20 rounded-lg hover:bg-primary/5 focus:shadow-outline focus:outline-none hover-lift"
              >
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
