"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const CollabClubs = () => {
  return (
    <div className="mx-2 py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Fade triggerOnce>
          <h2 className="text-center mt-3 mb-3 text-xl md:text-2xl font-accuminvariable leading-8 text-white">
            Organized by
          </h2>
          <div className="flex place-content-center">
            <div className="flex items-center justify-center">
              <img
                src="/ERIC Logo.png"
                alt="ERIC_KDU Logo"
                className=" w-auto h-20 md:h-24"
                loading="lazy"
              />
              <div className="absolute inset-0  h-32"></div>
            </div>
          </div>

          <h2 className="text-center mt-6 mb-3 text-xl md:text-2xl font-accuminvariable leading-8 text-white">
            in collaboration with
          </h2>
          <div className="flex items-center justify-center">
            <img
              src="/Colabs.png"
              alt="Collaborating Clubs"
              className=" w-auto h-18 md:h-24"
              loading="lazy"
            />
            <div className="absolute inset-0  h-32"></div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CollabClubs;
