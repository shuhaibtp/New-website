
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="font-display text-xl font-semibold tracking-tight inline-block mb-4">
              DigitalMarketer<span className="text-blue-600">.</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Helping businesses grow their online presence with strategic digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  PPC Management
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Content Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Analytics & Reporting
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to my newsletter for digital marketing tips and insights.
            </p>
            <form className="mb-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-l-lg border border-border focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-sm text-muted-foreground">
              I'll never share your email with anyone else.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} DigitalMarketer. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
