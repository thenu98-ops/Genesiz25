import React from 'react';

const images = [
  '/m1.jpg',
  '/m2.jpg',
  '/m3.jpg', // Replace with your actual paths
];

const Memories: React.FC = () => {
  return (
    <section id="memories" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Gradient Heading */}
        <h2 className="text-4xl sm:text-6xl font-agencyfb mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#e278ff] via-[#bca0ff] to-[#67d4ff]">
          Memories
        </h2>

        {/* Image Cards with Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden p-1 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:scale-105 transform transition-all duration-500"
            >
              <img
                src={src}
                alt={`Memory ${index + 1}`}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memories;
