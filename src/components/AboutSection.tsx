import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const phases = [
    {
      title: 'Phase 1: Registration',
      description:
        "Assemble your squad and secure your spot. GENESIZ'25 is calling the next wave of tech disruptors—are you in?",
      // icon: '🚀',
    },
    {
      title: 'Phase 2: Proposal Submission',
      description:
        'Bring your boldest concepts to the table. Submit a proposal that dares to challenge convention and redefine the edge.',
      // icon: '💡',
    },
    {
      title: 'Phase 3: Grand Finale',
      description:
        'The top contenders go head-to-head in the ultimate tech showdown. Pitch. Prove. Prevail. The spotlight is yours.',
      // icon: '🏆',
    },
  ];

  return (
    <div className="container mx-auto px-4 w-full max-w-7xl sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About GENESIZ'25
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#2ef2ff]">
            The Next Generation
          </h3>
          <p className="font-sans text-gray-300 mb-4">
            GENESIZ &apos;25 is not just a competition, it&apos;s a launchpad for the
            visionaries and creators shaping tomorrow’s tech. Hosted by the
            Robotics and Innovation Club, this event unites bold minds ready to
            solve challenges that matter.
          </p>
          <p className="text-gray-300">
            Whether you&apos;re coding your first project or engineering future
            solutions, GENESIZ'25 offers the space to showcase your skills,
            connect with industry leaders, and push the boundaries of what's
            possible.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff2a93]/20 to-[#2ef2ff]/20"></div>
            <img
              src="DDD\\Lucid_Realism_A_hyperrealistic_cinematic_photograph_of_a_dark__0.jpg"
              alt="Technology Innovation"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.h3
        className="text-3xl font-bold mb-10 text-center text-[#2ef2ff]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Competition Phases
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-[#ff2a93]/30 hover:border-[#2ef2ff]/50 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* <div className="text-4xl mb-4">{phase.icon}</div> */}
            <h4 className="text-xl font-bold mb-4 text-[#ff2a93]">
              {phase.title}
            </h4>
            <p className="text-gray-300">{phase.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
