import React from 'react';
import { motion } from 'framer-motion';
const ScoreboardSection: React.FC = () => {
  // Sample data for demonstration
  const teams = [{
    rank: 1,
    name: 'Team Quantum',
    score: 95,
    project: 'AI-Driven Healthcare Solution'
  }, {
    rank: 2,
    name: 'Binary Beasts',
    score: 92,
    project: 'Smart City Infrastructure'
  }, {
    rank: 3,
    name: 'Tech Titans',
    score: 88,
    project: 'Renewable Energy System'
  }, {
    rank: 4,
    name: 'Code Crusaders',
    score: 85,
    project: 'Blockchain Security Protocol'
  }, {
    rank: 5,
    name: 'Innovation X',
    score: 82,
    project: 'AR Educational Platform'
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
        Competition Scoreboard
      </motion.h2>
      <motion.div className="max-w-4xl mx-auto bg-black bg-opacity-70 backdrop-blur-sm rounded-xl overflow-hidden" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6
    }}>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#ff2a93]/30">
                <th className="px-6 py-4 text-[#2ef2ff]">Rank</th>
                <th className="px-6 py-4 text-[#2ef2ff]">Team</th>
                <th className="px-6 py-4 text-[#2ef2ff]">Project</th>
                <th className="px-6 py-4 text-[#2ef2ff]">Score</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => <motion.tr key={index} className={`border-b border-gray-800 ${index === 0 ? 'bg-gradient-to-r from-[#ff2a93]/10 to-[#2ef2ff]/10' : ''}`} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }}>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${index === 0 ? 'bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] text-black font-bold' : index === 1 ? 'bg-gray-700 text-white' : index === 2 ? 'bg-[#614e1a] text-white' : 'text-gray-400'}`}>
                      {team.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-white">
                    {team.name}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{team.project}</td>
                  <td className="px-6 py-4 font-bold text-[#ff2a93]">
                    {team.score}
                  </td>
                </motion.tr>)}
            </tbody>
          </table>
        </div>
      </motion.div>
      <motion.p className="text-center mt-6 text-gray-400 italic" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6,
      delay: 0.5
    }}>
        Scores will be updated after each evaluation phase
      </motion.p>
    </div>;
};
export default ScoreboardSection;