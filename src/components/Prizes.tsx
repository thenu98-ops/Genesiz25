"use client";

import React from "react";
import { Zoom } from "react-awesome-reveal";

const Prizes = () => {
  return (
    <div id="winners" className="bg-[#0f0f0f] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-10 xl:gap-16 md:grid-cols-2 lg:grid-cols-3 items-center">
          <Zoom triggerOnce cascade damping={0.1}>
            {/* Runner Up */}
            <div className="group relative w-full p-8 space-y-8 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_#1bb19840] hover:border-[#1bb198] transition-all duration-300">
              <h2 className="font-agencyfb text-3xl text-[#1bb198]">
                Runner Up
              </h2>
              <div className="flex justify-center">
                <img
                  src="/DDD/s.png"
                  alt="Runner Up"
                  className="h-64 object-contain"
                  loading="lazy"
                />
              </div>
              <h2 className="text-3xl font-agencyfb font-semibold text-white uppercase">
                40,000 LKR
              </h2>
            </div>

            {/* Overall Champions */}
            <div className="group relative w-full p-8 space-y-8 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_#fe4e6b40] hover:border-[#fe4e6b] transition-all duration-300">
              <h2 className="font-agencyfb text-4xl text-[#fe4e6b]">
                Overall Champions
              </h2>
              <div className="flex justify-center">
                <img
                  src="/DDD/g.png"
                  alt="Overall Champions"
                  className="h-64 object-contain"
                  loading="lazy"
                />
              </div>
              <h2 className="text-4xl font-agencyfb font-semibold text-white uppercase">
                70,000 LKR
              </h2>
            </div>

            {/* Best Responsive Team */}
            <div className="group relative w-full p-8 space-y-8 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_#7175ff40] hover:border-[#7175ff] transition-all duration-300">
              <h2 className="font-agencyfb text-3xl text-[#7175ff]">
                Best Responsive Team
              </h2>
              <div className="flex justify-center">
                <img
                  src="/DDD/b.png"
                  alt="Best Responsive"
                  className="h-64 object-contain"
                  loading="lazy"
                />
              </div>
              <h2 className="text-3xl font-agencyfb font-semibold text-white uppercase">
                20,000 LKR
              </h2>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
