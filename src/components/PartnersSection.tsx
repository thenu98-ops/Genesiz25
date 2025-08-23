import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection: React.FC = () => {
  const partnersImage =
    '/partners.webp'; // 🔄 replace with your transparent image link

  return (
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Partners
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto mb-12 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        GENESIZ'25 is proudly supported by industry leaders and innovators who
        share our vision for technological advancement and innovation.
      </motion.p>

      {/* ✅ Single full-width image */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img
          src={partnersImage}
          alt="Our Partners"
          className="w-full max-w-5xl mx-auto object-contain"
        />
      </motion.div>
    </div>
  );
};

export default PartnersSection;
