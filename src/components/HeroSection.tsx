import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-07-29T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Start glitch animation after initial fade-in
    const startGlitch = setTimeout(() => {
      setShowGlitch(true);
    }, 1000); // Start after 1 second

    // Stop glitch animation after 3 seconds
    const stopGlitch = setTimeout(() => {
      setShowGlitch(false);
    }, 6000); // Stop after 6 seconds total (3s delay + 3s animation)

    return () => {
      clearTimeout(startGlitch);
      clearTimeout(stopGlitch);
    };
  }, []);



  return (
    <div 
      className="w-full flex flex-col justify-center items-center px-4 overflow-hidden bg-cover bg-center bg-[url('/sample_bg.jpg')] relative"
    >
      {/* Background overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-55"></div>
      
      {/* Content */}
      <div className="min-h-screen max-w-6xl w-full h-full flex flex-col justify-end pb-12 lg:pb-4 md:pb-12 relative z-10">
        <div className="mt-10 mb-4 flex justify-center">
          <img
            src="GENESIZ_25-LOGO.png"
            alt="GENESIZ'25 Banner"
            className="w-full max-w-4xl md:max-w-2xl  lg:max-w-2xl rounded-lg shadow-2xl"
          />
        </div>

        <div className="text-center">
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-12 lg:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            THE NEXT GENERATION
          </motion.h2>

          <motion.div
            className={`text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 lg:mb-4 transition-all duration-500 ${showGlitch ? 'font-mono' : 'font-sans'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div 
              className="mb-1 text-[#ff2a93]"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0.8, 1],
                textShadow: showGlitch 
                  ? ["0 0 0px #ff2a93", "0 0 10px #ff2a93, 0 0 20px #ff2a93, 0 0 30px #ff2a93"]
                  : ["0 0 10px #ff2a93, 0 0 20px #ff2a93, 0 0 30px #ff2a93", "0 0 0px #ff2a93"]
              }}
              transition={{ 
                opacity: { delay: 1.5, duration: 0.8, ease: "easeInOut" },
                textShadow: { duration: 0.5, ease: "easeInOut" }
              }}
              style={{ 
                animation: showGlitch ? "glitch 0.3s infinite" : "none"
              }}
            >
              PREPARE FOR REVELATION
            </motion.div>
            <motion.div 
              className="mb-1 text-white"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0.8, 1],
                textShadow: showGlitch 
                  ? ["0 0 0px #ffffff", "0 0 10px #ffffff, 0 0 20px #ffffff"]
                  : ["0 0 10px #ffffff, 0 0 20px #ffffff", "0 0 0px #ffffff"]
              }}
              transition={{ 
                opacity: { delay: 2, duration: 0.8, ease: "easeInOut" },
                textShadow: { duration: 0.5, ease: "easeInOut" }
              }}
              style={{ 
                animation: showGlitch ? "glitch 0.3s infinite 0.1s" : "none"
              }}
            >
              HEIGHTEN YOUR SENSES
            </motion.div>
            <motion.div 
              className="text-[#2ef2ff]"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0.8, 1],
                textShadow: showGlitch 
                  ? ["0 0 0px #2ef2ff", "0 0 10px #2ef2ff, 0 0 20px #2ef2ff, 0 0 30px #2ef2ff"]
                  : ["0 0 10px #2ef2ff, 0 0 20px #2ef2ff, 0 0 30px #2ef2ff", "0 0 0px #2ef2ff"]
              }}
              transition={{ 
                opacity: { delay: 2.5, duration: 0.8, ease: "easeInOut" },
                textShadow: { duration: 0.5, ease: "easeInOut" }
              }}
              style={{ 
                animation: showGlitch ? "glitch 0.3s infinite 0.2s" : "none"
              }}
            >
              THE UNVEILING NEARS
            </motion.div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 lg:mb-4 ">
            <a
              href="https://forms.gle/vf51rE4HQQnyrrmZA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#ff2a93] to-[#7a2aff] text-white font-bold rounded-full text-sm md:text-base hover:shadow-[0_0_15px_rgba(255,42,147,0.8)] transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
            </a>

            <a
              href="https://drive.google.com/file/d/1QW2xGXu3CRQfm6QWruHCKe1vP4uGaQXX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#2ef2ff] to-[#2a93ff] text-black font-bold rounded-full text-sm md:text-base hover:shadow-[0_0_15px_rgba(46,242,255,0.8)] transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delegate Booklet
              </motion.button>
            </a>
          </div>

          <div className="flex justify-center">
            <div className="bg-black bg-opacity-50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl w-full max-w-2xl mx-4 sm:mx-0">
              <h3 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-white">Registrations are closing soon</h3>
              <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map(item => (
                  <div key={item.label} className="flex flex-col items-center">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff]">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-gray-300">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
