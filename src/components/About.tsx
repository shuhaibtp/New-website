
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Download } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  
  const skills = [
    'Search Engine Optimization (SEO)',
    'Pay-Per-Click (PPC) Advertising',
    'Social Media Marketing',
    'Content Strategy & Creation',
    'Email Marketing Campaigns',
    'Digital Analytics & Reporting',
    'Conversion Rate Optimization',
    'Marketing Automation'
  ];
  
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div ref={sectionRef} className="text-center mb-16 md:mb-24 reveal-on-scroll">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Digital Marketing Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 8 years of experience creating successful digital marketing strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="reveal-on-scroll">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-xl z-0" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50 rounded-xl z-0" />
              <img 
                src="/lovable-uploads/60b389b5-f51d-4d9c-b2f7-3fabf39366cd.png"
                alt="Digital Marketing Professional" 
                className="w-full h-auto rounded-2xl shadow-lg z-10 relative"
              />
            </div>
          </div>
          
          <div ref={textRef} className="reveal-on-scroll">
            <h3 className="text-2xl font-semibold mb-4">Hello, I'm Your Digital Marketing Partner</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate digital marketing professional with a focus on creating data-driven strategies that deliver measurable results. With expertise across SEO, PPC, social media, and content marketing, I help businesses of all sizes establish a strong online presence and reach their target audience effectively.
            </p>
            <p className="text-muted-foreground mb-8">
              My approach combines creative thinking with analytical precision to craft marketing campaigns that not only look great but also drive real business growth. I believe in transparency, continuous learning, and building lasting partnerships with my clients.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Core Skills & Expertise</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href="#"
              className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 bg-primary rounded-lg hover:bg-primary/90 focus:shadow-outline focus:outline-none hover-lift"
            >
              Download Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
