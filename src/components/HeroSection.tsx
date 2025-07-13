import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-23T00:00:00');
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

  const fonts = ['font-mono', 'font-serif', 'font-sans', 'font-black'];
  const [currentFont, setCurrentFont] = useState(0);

  useEffect(() => {
    const fontInterval = setInterval(() => {
      setCurrentFont(prev => (prev + 1) % fonts.length);
    }, 2000);
    return () => clearInterval(fontInterval);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center pt-20 px-4">
      <div className="max-w-6xl w-full">
        <div className="mb-4 flex justify-center">
          <img
            src="logoo.png"
            alt="GENESIZ'25 Banner"
            className="w-full max-w-4xl rounded-lg shadow-2xl"
          />
        </div>

        <div className="text-center">
          <motion.h2
            className="text-xl md:text-3xl text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            THE NEXT GENERATION
          </motion.h2>

          <motion.div
            className={`text-xl md:text-3xl mb-8 ${fonts[currentFont]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="mb-1 text-[#ff2a93]">PREPARE FOR REVELATION.</div>
            <div className="mb-1 text-white">HEIGHTEN YOUR SENSES.</div>
            <div className="text-[#2ef2ff]">THE UNVEILING NEARS.</div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <a
              href="https://forms.gle/vf51rE4HQQnyrrmZA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#ff2a93] to-[#7a2aff] text-white font-bold rounded-full text-lg hover:shadow-[0_0_15px_rgba(255,42,147,0.8)] transition-shadow"
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
                className="px-8 py-4 bg-gradient-to-r from-[#2ef2ff] to-[#2a93ff] text-black font-bold rounded-full text-lg hover:shadow-[0_0_15px_rgba(46,242,255,0.8)] transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delegate Booklet
              </motion.button>
            </a>
          </div>

          <div className="bg-black bg-opacity-50 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl mb-6 text-[#2ef2ff]">Event Countdown</h3>
            <div className="flex justify-center gap-4 md:gap-10">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff]">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
