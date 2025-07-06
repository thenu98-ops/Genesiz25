import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
const ContactSection: React.FC = () => {
  const teamMembers = [{
    name: 'Alex Chen',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=facearea&facepad=2',
    email: 'alex@genesiz25.com',
    phone: '+1 (555) 123-4567',
    socials: {
      linkedin: '#',
      github: '#',
      instagram: '#'
    }
  }, {
    name: 'Sarah Johnson',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=facearea&facepad=2',
    email: 'sarah@genesiz25.com',
    phone: '+1 (555) 234-5678',
    socials: {
      linkedin: '#',
      github: '#',
      instagram: '#'
    }
  }, {
    name: 'Michael Park',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=facearea&facepad=2',
    email: 'michael@genesiz25.com',
    phone: '+1 (555) 345-6789',
    socials: {
      linkedin: '#',
      github: '#',
      instagram: '#'
    }
  }, {
    name: 'Priya Sharma',
    role: 'Sponsorship Coordinator',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=facearea&facepad=2',
    email: 'priya@genesiz25.com',
    phone: '+1 (555) 456-7890',
    socials: {
      linkedin: '#',
      github: '#',
      instagram: '#'
    }
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
        Contact Us
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
        Have questions about GENESIZ'25? Reach out to our committee members who
        are ready to assist you with any inquiries.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {teamMembers.map((member, index) => <motion.div key={index} className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(255,42,147,0.2)] transition-shadow" initial={{
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
            <div className="h-60 overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-white">
                {member.name}
              </h3>
              <p className="text-[#ff2a93] text-sm mb-4">{member.role}</p>
              <div className="flex items-center mb-3">
                <MailIcon className="w-4 h-4 text-[#2ef2ff] mr-3" />
                <a href={`mailto:${member.email}`} className="text-gray-300 text-sm hover:text-white">
                  {member.email}
                </a>
              </div>
              <div className="flex items-center mb-4">
                <PhoneIcon className="w-4 h-4 text-[#2ef2ff] mr-3" />
                <a href={`tel:${member.phone}`} className="text-gray-300 text-sm hover:text-white">
                  {member.phone}
                </a>
              </div>
              <div className="flex space-x-4">
                <a href={member.socials.linkedin} className="text-gray-400 hover:text-[#2ef2ff]">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href={member.socials.github} className="text-gray-400 hover:text-[#2ef2ff]">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={member.socials.instagram} className="text-gray-400 hover:text-[#2ef2ff]">
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>)}
      </div>
      <motion.div className="max-w-3xl mx-auto bg-black bg-opacity-60 backdrop-blur-sm p-8 rounded-xl border border-[#ff2a93]/20" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.6
    }}>
        <h3 className="text-2xl font-bold mb-6 text-center text-[#2ef2ff]">
          Send Us a Message
        </h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input type="text" id="name" className="w-full bg-black bg-opacity-70 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2ef2ff] focus:outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input type="email" id="email" className="w-full bg-black bg-opacity-70 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2ef2ff] focus:outline-none" placeholder="Your Email" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-300 mb-2">
              Subject
            </label>
            <input type="text" id="subject" className="w-full bg-black bg-opacity-70 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2ef2ff] focus:outline-none" placeholder="Message Subject" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea id="message" rows={5} className="w-full bg-black bg-opacity-70 border border-gray-700 rounded-lg p-3 text-white focus:border-[#2ef2ff] focus:outline-none" placeholder="Your Message"></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-8 py-3 bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] text-black font-bold rounded-full hover:shadow-[0_0_15px_rgba(255,42,147,0.5)] transition-shadow">
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>;
};
export default ContactSection;