import React from "react";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-sm py-12 mt-20">
      <div className="container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <motion.div
            className="mb-8 md:mb-0"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] mb-2">
              GENESIZ'25
            </div>
            <div className="text-gray-400 w-full md:w-96 mt-3 mb-6">The 4th edition, GENESIZ &apos;25 organized by the Electronic, Robotics, and Innovation Club (ERIC-KDU) of General Sir John Kotelawala Defence University.</div>
          </motion.div>
          <motion.div
            className="flex space-x-6"
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            {[
              {
                icon: <FacebookIcon className="w-5 h-5" />,
                link: "https://www.facebook.com/KDUERIC/",
              },
              {
                icon: <InstagramIcon className="w-5 h-5" />,
                link: "https://www.instagram.com/eric__kdu/",
              },
              {
                icon: <YoutubeIcon className="w-5 h-5" />,
                link: "https://www.youtube.com/@eric-kdu5921",
              },
              {
                icon: <LinkedinIcon className="w-5 h-5" />,
                link: "https://www.linkedin.com/company/eric-kdu/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-[#ff2a93] hover:to-[#2ef2ff] hover:text-black transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center w-full">
            © 2025 GENESIZ &apos;25. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
