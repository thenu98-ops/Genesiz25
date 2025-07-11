"use client";

import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Prizes = () => {
  return (
    <div>
      <div id="winners">
        <div className="container px-6 py-8 mx-auto">
          {/* <Slide direction="up" triggerOnce>
            <h2 className="text-4xl font-agencyfb mt-16 mb-14 text-center text-white sm:text-6xl">
              Winners
            </h2>
          </Slide> */}

          <div className="grid grid-cols-1 gap-8 mt-16 ml-6 mr-6 sm:ml-4 sm:mr-4 xl:mt-32 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 items-center">
            <Zoom triggerOnce cascade damping={0.1}>
              <div className="w-full p-8 space-y-8 text-center border rounded-lg border-gray-700 backdrop-blur-xl">
                <h2 className="font-agencyfb font-medium text-3xl text-[#1bb198]">
                  Runner Up
                </h2>

                <div className="flex justify-center">
                  <img
                    src="/RunnerUp.png"
                    alt="Runner Up"
                    className="grid grid-cols-1 place-content-center object-center w-auto h-64"
                    loading="lazy"
                  />
                </div>
                {/* <div className="flex-1 min-w-0">
                  <p className="text-3xl font-medium text-[#1bb198] overflow-auto">
                    Team Vertex
                  </p>
                  <p className="text-md text-gray-500 overflow-auto dark:text-gray-400">
                    University of Kelaniya
                  </p>
                </div> */}
                <h2 className="text-3xl font-agencyfb font-semibold text-gray-800 uppercase dark:text-gray-100">
                  40,000 LKR
                </h2>
              </div>

              <div className="w-full p-8 space-y-8 text-center border border-gray-500 rounded-lg">
                <h2 className="font-agencyfb font-medium text-4xl text-[#fe4e6b]">
                  Overall Champions
                </h2>

                <div className="flex justify-center">
                  <img
                    src="/OverallChampion.png"
                    alt="Overall Champions"
                    className="grid grid-cols-1 place-content-center object-center w-auto h-64"
                    loading="lazy"
                  />
                </div>
                {/* <div className="flex-1 min-w-0">
                  <p className="text-3xl font-medium text-[#fe4e6b] overflow-auto">
                    Pathfinders
                  </p>
                  <p className="text-md text-gray-500 overflow-auto dark:text-gray-400">
                    General Sir John Kotelawala Defence University
                  </p>
                </div> */}

                <h2 className="text-4xl font-agencyfb font-semibold text-gray-800 uppercase dark:text-gray-100">
                  60,000 LKR
                </h2>
              </div>

              <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
                <h2 className="font-agencyfb font-medium text-3xl text-[#7175ff]">
                  Best Responsive Team
                </h2>

                <div className="flex justify-center">
                  <img
                    src="/BestResponsive.png"
                    alt="Best Responsive"
                    className="grid grid-cols-1 place-content-center object-center w-auto h-64"
                    loading="lazy"
                  />
                </div>
                {/* <div className="flex-1 min-w-0">
                  <p className="text-3xl font-medium text-[#7175ff] overflow-auto">
                    AgriNexters
                  </p>
                  <p className="text-md text-gray-500 overflow-auto dark:text-gray-400">
                    University of Moratuwa
                  </p>
                </div> */}
                <h2 className="text-3xl font-agencyfb font-semibold text-gray-800 uppercase dark:text-gray-100">
                  20,000 LKR
                </h2>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
