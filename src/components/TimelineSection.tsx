// import React from 'react';
// import { motion } from 'framer-motion';
// const TimelineSection: React.FC = () => {
//   const events = [{
//     date: '13th JULY',
//     event: 'Registration Opening'
//   }, {
//     date: '26th JULY',
//     event: 'Registration Closing'
//   }, {
//     date: '30th JULY',
//     event: 'Awareness Session & Proposal Submission Opening (Online)'
//   }, {
//     date: '11th AUG',
//     event: 'Proposal Submission Closing'
//   }, {
//     date: '18th AUG',
//     event: 'Announcing Finalists'
//   }, {
//     date: '23rd AUG',
//     event: 'Event Date – Grand Finale & Award Ceremony (Physical)'
//   }];
//   return <div className="container mx-auto px-4">
//       <motion.h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff]" initial={{
//       opacity: 0,
//       y: -20
//     }} whileInView={{
//       opacity: 1,
//       y: 0
//     }} viewport={{
//       once: true
//     }} transition={{
//       duration: 0.6
//     }}>
//         Competition Timeline
//       </motion.h2>
//       <div className="flex justify-center mb-12">
//         {/* <motion.div initial={{
//         opacity: 0,
//         scale: 0.9
//       }} whileInView={{
//         opacity: 1,
//         scale: 1
//       }} viewport={{
//         once: true
//       }} transition={{
//         duration: 0.6
//       }} className="max-w-3xl">
//           <img src="/WhatsApp_Image_2025-07-04_at_10.04.03_a215caa0.jpg" alt="GENESIZ'25 Timeline" className="w-full rounded-lg shadow-lg" />
//         </motion.div> */}
//       </div>
//       <div className="max-w-4xl mx-auto">
//         <div className="relative">
//           {/* Vertical line */}
//           <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ff2a93] to-[#2ef2ff]"></div>
//           {events.map((item, index) => <motion.div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-16`} initial={{
//           opacity: 0,
//           y: 30
//         }} whileInView={{
//           opacity: 1,
//           y: 0
//         }} viewport={{
//           once: true
//         }} transition={{
//           duration: 0.6,
//           delay: index * 0.1
//         }}>
//               <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 mb-4 md:mb-0">
//                 <div className={`bg-black bg-opacity-70 p-6 rounded-lg border-l-4 ${index % 2 === 0 ? 'border-[#2ef2ff]' : 'border-[#ff2a93]'}`}>
//                   <div className="text-xl font-bold text-white mb-2">
//                     {item.date}
//                   </div>
//                   <div className={`text-lg ${index % 2 === 0 ? 'text-[#2ef2ff]' : 'text-[#ff2a93]'}`}>
//                     {item.event}
//                   </div>
//                 </div>
//               </div>
//               <div className="md:w-1/2 flex justify-center items-center">
//                 <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] border-4 border-black"></div>
//               </div>
//             </motion.div>)}
//         </div>
//       </div>
//     </div>;
// };
// export default TimelineSection;


import React from 'react';
import { motion } from 'framer-motion';

const TimelineSection: React.FC = () => {
  const events = [
    { date: '13th JULY', event: 'Registration Opening' },
    { date: '2nd AUG', event: 'Registration Closing' },
    { date: '30th JULY', event: 'Awareness Session & Proposal Submission Opening (Online)' },
    { date: '11th AUG', event: 'Proposal Submission Closing' },
    { date: '18th AUG', event: 'Announcing Finalists' },
    { date: '23rd AUG', event: 'Event Date – Grand Finale & Award Ceremony (Physical)' }
  ];

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Competition Timeline
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#ff2a93] to-[#2ef2ff]"></div>

          {events.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Left container */}
              <div className="md:w-1/2 flex justify-center md:justify-end px-14">
                {index % 2 === 0 && (
                  <div className="bg-black bg-opacity-70 p-6 rounded-lg border-l-4 border-[#2ef2ff] w-full max-w-[16rem] text-right">
                    <div className="text-xl font-bold text-white mb-2">{item.date}</div>
                    <div className="text-lg text-[#2ef2ff]">{item.event}</div>
                  </div>
                )}
              </div>

              {/* Dot in center */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] border-4 border-black z-10"></div>

              {/* Right container */}
              <div className="md:w-1/2 flex justify-center md:justify-start px-14">
                {index % 2 !== 0 && (
                  <div className="bg-black bg-opacity-70 p-6 rounded-lg border-l-4 border-[#ff2a93] w-full max-w-sm text-left">
                    <div className="text-xl font-bold text-white mb-2">{item.date}</div>
                    <div className="text-lg text-[#ff2a93]">{item.event}</div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
