import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Coffee Shop Ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <span className="block text-coffee-100 text-sm md:text-lg tracking-[0.2em] mb-4 uppercase font-bold animate-fade-in-up">
          Est. 2024
        </span>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Sunny Brew <br /> <span className="text-coffee-200">Café</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-100 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
          Awaken your senses with our artisanal roasts and freshly baked warmth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToMenu}
            className="px-8 py-3 bg-coffee-600 hover:bg-coffee-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Menu
          </button>
          <a
            href="#contact"
            className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold transition-all duration-300"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }}>
        <ArrowDown className="text-white/70 h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;