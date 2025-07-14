"use client";

import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

const contacts = [
  {
    name: "Melanka Waladeniya",
    role: "ERIC President",
    phone: "+94772607085",
    email: "melankarasan1234@gmail.com",
    image: "/1.webp",
  },
  {
    name: "Deepna Weerakoon",
    role: "ERIC Secretary",
    phone: "+94718153813",
    email: "deepnaweerakoon@gmail.com",
    image: "/2.webp",
  },
  {
    name: "Rochana Lokubalasuriya",
    role: "GENESIZ '25 Co-Chair",
    phone: "+94775033216",
    email: "rochanasasmitha123@gmail.com",
    image: "/3.webp",
  },
  {
    name: "Lalitha Dulanjana",
    role: "ERIC Treasurer",
    phone: "+94719964493",
    email: "dulanjanalalitha00@gmail.com",
    image: "/4.webp",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="bg-[#0f0f0f] pt-16 pb-24 px-4 text-white">
      <div className="max-w-screen-xl mx-auto text-center font-accuminvariable">
        <Slide direction="up" triggerOnce>
          <h2 className="text-4xl sm:text-6xl font-agencyfb mb-12 bg-gradient-to-r from-[#ff2a93] to-[#2ef2ff] bg-clip-text text-transparent">
            Contact Us
          </h2>
        </Slide>

        <Fade cascade triggerOnce damping={0.1}>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {contacts.map((contact, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,42,147,0.3)] transition duration-300"
              >
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="mx-auto mb-4 w-28 h-28 rounded-full border-2 border-[#2ef2ff] shadow-md"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-white mb-1">{contact.name}</h3>
                <p className="text-sm text-gray-300 mb-3">{contact.role}</p>
                <div className="text-sm text-[#2ef2ff] space-y-1">
                  <p>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </p>
                  <p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
