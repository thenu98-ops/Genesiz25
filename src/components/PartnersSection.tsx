import React from 'react';
import { motion } from 'framer-motion';
const PartnersSection: React.FC = () => {
  const partners = [{
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&h=200&auto=format&fit=crop',
    type: 'Platinum Sponsor'
  }, {
    name: 'Innovate AI',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&h=200&auto=format&fit=crop',
    type: 'Gold Sponsor'
  }, {
    name: 'Future Labs',
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c8ce?q=80&w=200&h=200&auto=format&fit=crop',
    type: 'Silver Sponsor'
  }, {
    name: 'Digital Nexus',
    logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=200&h=200&auto=format&fit=crop',
    type: 'Technical Partner'
  }, {
    name: 'Quantum Edge',
    logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=200&h=200&auto=format&fit=crop',
    type: 'Community Partner'
  }, {
    name: 'ByteWave',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200&h=200&auto=format&fit=crop',
    type: 'Educational Partner'
  }];
  return <div className="container mx-auto px-4">
      <motion.h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff]" initial={{
      opacity: 0,
      y: -20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6
    }}>
        Our Partners
      </motion.h2>
      <motion.p className="text-center max-w-2xl mx-auto mb-12 text-gray-300" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6,
      delay: 0.2
    }}>
        GENESIZ'25 is proudly supported by industry leaders and innovators who
        share our vision for technological advancement and innovation.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => <motion.div key={index} className="bg-black bg-opacity-50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#ff2a93]/50 transition-colors flex flex-col items-center" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: index * 0.1
      }}>
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#2ef2ff]/30">
              <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              {partner.name}
            </h3>
            <p className="text-[#ff2a93] text-sm mb-4">{partner.type}</p>
            <button className="text-[#2ef2ff] text-sm hover:underline">
              Learn More
            </button>
          </motion.div>)}
      </div>
    </div>;
};
export default PartnersSection;