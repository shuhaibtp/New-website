
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Growth Strategy',
    category: 'SEO & PPC',
    description: 'Increased online sales by 137% for a fashion retailer through targeted SEO and PPC campaigns.',
    image: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?q=80&w=2340&auto=format&fit=crop',
  },
  {
    title: 'Social Media Revamp',
    category: 'Social Media',
    description: 'Transformed brand presence across platforms, increasing engagement by 85% and followers by 10K+.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2340&auto=format&fit=crop',
  },
  {
    title: 'Content Marketing Strategy',
    category: 'Content & SEO',
    description: 'Developed a comprehensive content strategy that boosted organic traffic by 210% in 6 months.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2340&auto=format&fit=crop',
  },
  {
    title: 'Lead Generation Campaign',
    category: 'PPC & Conversion',
    description: 'Generated 500+ qualified B2B leads through optimized landing pages and strategic ad campaigns.',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2340&auto=format&fit=crop',
  }
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Content'];
  
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
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <div ref={sectionRef} className="text-center mb-16 md:mb-20 reveal-on-scroll">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my most successful digital marketing campaigns and projects.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm reveal-on-scroll hover-scale"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium mb-2">{project.category}</p>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-5">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide transition duration-200 border border-primary/20 rounded-lg hover:bg-primary/5 focus:shadow-outline focus:outline-none hover-lift"
          >
            View All Projects <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
