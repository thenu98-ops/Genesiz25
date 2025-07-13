import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/1.webp',
  '/1.webp',
  '/1.webp',
  '/1.webp',
  '/1.webp',
  '/1.webp',
    '/1.webp',
  '/1.webp',
  '/1.webp',
  '/1.webp',
  '/1.webp',
  '/1.webp',
  // ➕ Add more as needed
];

const MemoriesSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Limit preview on homepage (e.g., first 4)
  const previewImages = images.slice(0, 4);

  return (
    <div className="px-6 py-16 bg-[#0f0f0f] text-white min-h-screen flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] bg-clip-text text-transparent">
        Precious Memories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
        {previewImages.map((img, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition duration-300"
            onClick={() => setSelectedImage(img)}
            whileHover={{ scale: 1.03 }}
          >
            <img src={img} alt={`Memory ${index + 1}`} className="w-full h-48 object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Optional: Link to full gallery */}
      <a href="/gallery" className="mt-8 text-[#2ef2ff] underline text-lg hover:text-[#ff2a93] transition">
        View All Memories
      </a>

      {/* Fullscreen Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoriesSection;
