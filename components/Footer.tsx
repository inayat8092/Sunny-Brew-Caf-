import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-coffee-600" />
            <span className="font-heading font-bold text-xl text-stone-200">SUNNY BREW</span>
          </div>
          
          <div className="text-sm">
            © {new Date().getFullYear()} Sunny Brew Café. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-coffee-500 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-coffee-500 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-coffee-500 transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;