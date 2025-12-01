import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://picsum.photos/600/600?random=10",
    "https://picsum.photos/600/800?random=11",
    "https://picsum.photos/600/500?random=12",
    "https://picsum.photos/600/700?random=13",
    "https://picsum.photos/600/600?random=14",
    "https://picsum.photos/600/800?random=15",
  ];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-sm font-bold text-coffee-600 uppercase tracking-widest mb-2">
            Atmosphere
          </h2>
          <h3 className="font-heading text-4xl font-bold text-stone-900">
            A Glimpse Inside
          </h3>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-zoom-in">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;