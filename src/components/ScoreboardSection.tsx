import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Scoreboard: React.FC = () => {
  const [teams, setTeams] = useState([
    { name: "Tech Pera", uni: "University of Peradeniya", score: 60 },
    { name: "Neo Node", uni: "University of Moratuwa", score: 20 },
    { name: "Pulztrones", uni: "University of Moratuwa", score: 80 },
    { name: "Bioplastic Revolution", uni: "University of Moratuwa", score:100 },
    { name: "Invex", uni: "University of Peradeniya", score:70},
    { name: "Brainly Squad", uni: "University of Peradeniya", score: 40 },
    { name: "InnovateX", uni: "Kotelawala Defence University", score: 30 },
    { name: "Mindspark", uni: "Sri Lanka Institute of Information Technology", score: 50 },
    { name: "SPELLBINDERS", uni: "Kotelawala Defence University", score:10 },
    { name: "Hydrotech", uni: "University of Kelaniya", score: 90 },
  ]);

  // Auto-sort teams by score whenever scores update
  useEffect(() => {
    const sorted = [...teams].sort((a, b) => b.score - a.score);
    setTeams(sorted);
  }, []);

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-black bg-opacity-60 backdrop-blur-lg p-6 sm:p-8 rounded-2xl w-full max-w-3xl shadow-2xl">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a93] via-[#2ef2ff] to-[#7a2aff]">
          🏆 Scoreboard
        </h3>

        <div className="space-y-3">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              className="flex justify-between items-center bg-gradient-to-r from-[#1e1e2f] to-[#2a2a3d] px-4 py-3 rounded-xl shadow-md hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white">
                  {index + 1}. {team.name}
                </span>
                <span className="text-sm text-gray-400">{team.uni}</span>
              </div>
              {/* <div className="text-2xl font-extrabold text-[#2ef2ff]">
                {team.score}
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
