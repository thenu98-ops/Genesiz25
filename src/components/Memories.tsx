'use client'

import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Memories = () => {
  return (
    <div id="prizes">
      <div className="container px-6 py-8 mx-auto">
        <Slide direction="up" triggerOnce>
          <h2 className="text-4xl font-agencyfb mt-16 mb-14 text-center text-white sm:text-6xl">
            Memories
          </h2>
        </Slide>

        <div className="grid grid-cols-1 gap-2 mt-6 ml-6 mr-6 sm:ml-4 sm:mr-4 xl:mt-12 md:grid-cols-2 lg:grid-cols-2 items-center">
          <Fade triggerOnce cascade>
            <div className="w-full p-10 md:p-20 space-y-8 text-center">
              <div className="flex justify-center">
                <img
                  src="/2022.png"
                  alt="Genesiz Logo"
                  className="grid grid-cols-1 place-content-center object-center w-auto h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full p-10 md:p-20 space-y-8 text-center">
              <div className="flex justify-center">
                <img
                  src="/2023.png"
                  alt="Genesiz Logo"
                  className="grid grid-cols-1 place-content-center object-center w-auto h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Memories;
