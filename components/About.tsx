import React from 'react';
import { Coffee, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <img 
                src="https://picsum.photos/400/500?random=1" 
                alt="Barista pouring coffee" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
              <img 
                src="https://picsum.photos/400/400?random=2" 
                alt="Coffee beans" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://picsum.photos/400/400?random=3" 
                alt="Cozy seating" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
              <img 
                src="https://picsum.photos/400/500?random=4" 
                alt="Latte art" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-heading text-sm font-bold text-coffee-600 uppercase tracking-widest mb-2">
              Our Story
            </h2>
            <h3 className="font-heading text-4xl font-bold text-stone-900 mb-6">
              More than just a cup of coffee.
            </h3>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Founded in 2024, Sunny Brew Café began with a simple mission: to bring sunshine to your daily routine through exceptional coffee and genuine community connection.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              We source our beans ethically from sustainable farms and roast them in small batches to preserve their unique flavor profiles. Our pastries are baked fresh every morning, filling the air with the comforting scent of butter and vanilla.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-coffee-50 rounded-xl">
                <Coffee className="h-8 w-8 text-coffee-600 mb-3" />
                <h4 className="font-bold text-stone-800">Ethical Sourcing</h4>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-coffee-50 rounded-xl">
                <Award className="h-8 w-8 text-coffee-600 mb-3" />
                <h4 className="font-bold text-stone-800">Master Roasting</h4>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-coffee-50 rounded-xl">
                <Heart className="h-8 w-8 text-coffee-600 mb-3" />
                <h4 className="font-bold text-stone-800">Made with Love</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;