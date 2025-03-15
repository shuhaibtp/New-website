
import React, { useEffect, useRef } from 'react';
import { BarChart2, Zap, Search, Share2, LineChart, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Search className="h-10 w-10 mb-5 text-blue-500" />,
    title: 'SEO Optimization',
    description: 'Improve your website\'s visibility in search engines with data-driven SEO strategies.'
  },
  {
    icon: <BarChart2 className="h-10 w-10 mb-5 text-indigo-500" />,
    title: 'PPC Management',
    description: 'Maximize ROI with targeted pay-per-click campaigns across Google, Facebook, and more.'
  },
  {
    icon: <Share2 className="h-10 w-10 mb-5 text-blue-600" />,
    title: 'Social Media Marketing',
    description: 'Build a strong social presence and engage with your audience across all platforms.'
  },
  {
    icon: <LineChart className="h-10 w-10 mb-5 text-indigo-600" />,
    title: 'Analytics & Reporting',
    description: 'Gain insights from comprehensive analytics to inform and optimize your strategies.'
  },
  {
    icon: <TrendingUp className="h-10 w-10 mb-5 text-blue-500" />,
    title: 'Content Strategy',
    description: 'Create compelling content that drives engagement, conversions, and brand loyalty.'
  },
  {
    icon: <Zap className="h-10 w-10 mb-5 text-indigo-500" />,
    title: 'Conversion Optimization',
    description: 'Boost conversion rates through A/B testing, landing page optimization, and UX improvements.'
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div ref={sectionRef} className="text-center mb-16 md:mb-24 reveal-on-scroll">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Digital Marketing Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing services tailored to help your business grow online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={cn(
                "bg-card p-8 rounded-2xl shadow-sm border border-border/50 reveal-on-scroll hover-scale transition-all",
                "hover:shadow-md hover:border-blue-100"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
