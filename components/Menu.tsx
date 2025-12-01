import React, { useState } from 'react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Espresso',
    description: 'Rich, full-bodied shot of our house blend.',
    price: '$3.50',
    category: 'Coffee',
  },
  {
    id: '2',
    name: 'Caramel Macchiato',
    description: 'Espresso poured over vanilla milk, topped with caramel drizzle.',
    price: '$5.50',
    category: 'Coffee',
  },
  {
    id: '3',
    name: 'Cold Brew',
    description: 'Steeped for 24 hours for a smooth, low-acid flavor.',
    price: '$4.75',
    category: 'Coffee',
  },
  {
    id: '4',
    name: 'Almond Croissant',
    description: 'Buttery pastry filled with almond paste and topped with flakes.',
    price: '$4.25',
    category: 'Pastry',
  },
  {
    id: '5',
    name: 'Blueberry Muffin',
    description: 'Freshly baked with organic blueberries and a crumb topping.',
    price: '$3.75',
    category: 'Pastry',
  },
  {
    id: '6',
    name: 'Avocado Toast',
    description: 'Sourdough toast topped with smashed avocado, radish, and seeds.',
    price: '$8.50',
    category: 'Sandwich',
  },
  {
    id: '7',
    name: 'Caprese Panini',
    description: 'Fresh mozzarella, tomato, and pesto on ciabatta bread.',
    price: '$9.50',
    category: 'Sandwich',
  },
  {
    id: '8',
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha whisked with steamed oat milk.',
    price: '$6.00',
    category: 'Coffee',
  },
];

const categories = ['All', 'Coffee', 'Pastry', 'Sandwich'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-sm font-bold text-coffee-600 uppercase tracking-widest mb-2">
            Discover
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Our Menu
          </h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Handcrafted beverages and locally sourced bites made fresh daily.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-coffee-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-stone-600 hover:bg-stone-100 hover:text-coffee-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-heading font-bold text-xl text-stone-800 group-hover:text-coffee-700 transition-colors">
                  {item.name}
                </h4>
                <span className="font-bold text-coffee-600 text-lg">{item.price}</span>
              </div>
              <p className="text-stone-500 mb-4 leading-relaxed">
                {item.description}
              </p>
              <span className="inline-block text-xs font-medium text-stone-400 uppercase tracking-wide border border-stone-200 rounded-md px-2 py-1">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;