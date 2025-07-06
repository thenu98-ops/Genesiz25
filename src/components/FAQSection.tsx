import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
const FAQItem: React.FC<{
  question: string;
  answer: string;
}> = ({
  question,
  answer
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-gray-800 last:border-b-0">
      <button className="flex justify-between items-center w-full py-5 px-4 text-left hover:bg-black hover:bg-opacity-30 transition-colors" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <ChevronDownIcon className={`w-5 h-5 text-[#2ef2ff] transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="p-4 pt-0 text-gray-300">{answer}</p>
      </div>
    </div>;
};
const FAQSection: React.FC = () => {
  const faqs = [{
    question: "Who can participate in GENESIZ'25?",
    answer: "GENESIZ'25 is open to students, professionals, and tech enthusiasts from all backgrounds. Teams can consist of 2-4 members, and at least one member should have technical knowledge relevant to the project."
  }, {
    question: 'What are the registration fees?',
    answer: "Registration for GENESIZ'25 is completely free! We believe in providing equal opportunities for all innovators to showcase their talents without any financial barriers."
  }, {
    question: 'What kind of projects are eligible?',
    answer: 'We welcome projects in various domains including AI/ML, IoT, Robotics, Blockchain, AR/VR, and other cutting-edge technologies. Projects should address real-world problems and demonstrate innovation.'
  }, {
    question: 'Is this a team or individual competition?',
    answer: "GENESIZ'25 is primarily a team competition. Teams can consist of 2-4 members. However, we do accept individual participants for exceptional project proposals."
  }, {
    question: 'What are the judging criteria?',
    answer: 'Projects will be evaluated based on innovation, technical complexity, practical application, presentation quality, and potential impact. Our panel of industry experts will provide comprehensive feedback.'
  }, {
    question: 'What will the winners receive?',
    answer: 'Winners will receive cash prizes, mentorship opportunities from industry leaders, internship offers from our partner companies, and extensive media coverage for their innovative solutions.'
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
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <motion.div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          {faqs.map((faq, index) => <motion.div key={index} initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.1
        }}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>)}
        </motion.div>
        <motion.div className="text-center mt-8" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.5
      }}>
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <a href="#contact" className="inline-block px-6 py-3 bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] text-black font-bold rounded-full hover:shadow-[0_0_15px_rgba(46,242,255,0.5)] transition-shadow">
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>;
};
export default FAQSection;