"use client";

import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <div id="contact" className="pt-6">
      <div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 font-accuminvariable">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <Slide direction="up" triggerOnce>
              <h2 className="text-4xl text-center font-agencyfb mb-12 text-white sm:text-6xl">
                Contact Us
              </h2>
            </Slide>
          </div>

          <Fade cascade triggerOnce damping={0.1}>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-32">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <img
                  src="/arunalu.png"
                  alt="Contact"
                  className="mx-auto mb-4 w-36 h-36 "
                  loading="lazy"
                />
                <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Arunalu Rathnathunga
                </h3>
                <p>ERIC President</p>

                <h3 className="mt-3 text-custom-cyan-100 text-lg">
                  <a href="tel:+94773605216"> +94 77 360 5216 </a>
                </h3>
                <h3 className=" text-custom-cyan-100 text-lg">
                  <a href={"mailto:arunaluindudunu@gmail.com"}>
                    arunaluindudunu@gmail.com
                  </a>
                </h3>
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400">
                <img
                  src="/sanjana.png"
                  alt="Contact"
                  className="mx-auto mb-4 w-36 h-36 "
                  loading="lazy"
                />
                <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sandali Sanjana
                </h3>
                <p>ERIC Secretary</p>

                <h3 className="mt-3 text-custom-cyan-100 text-lg">
                  <a href="tel:+94714677849"> +94 71 467 7849 </a>
                </h3>
                <h3 className=" text-custom-cyan-100 text-lg">
                  <a href={"mailto:sanji.614@gmail.com"}>sanji.614@gmail.com</a>
                </h3>
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400">
                <img
                  src="/isuru.png"
                  alt="Contact"
                  className="mx-auto mb-4 w-36 h-36 "
                  loading="lazy"
                />
                <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Isuru Darshana
                </h3>
                <p>GENESIZ &apos;24 Co-Chair</p>

                <h3 className="mt-3 text-custom-cyan-100 text-lg">
                  <a href="tel:+94772702015"> +94 77 270 2015 </a>
                </h3>
                <h3 className=" text-custom-cyan-100 text-lg">
                  <a href={"mailto:isurudharshana127@gmail.com"}>
                    isurudharshana127@gmail.com
                  </a>
                </h3>
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400">
                <img
                  src="/kesara.png"
                  alt="Contact"
                  className="mx-auto mb-4 w-36 h-36 "
                  loading="lazy"
                />
                <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kesara Hansajith
                </h3>
                <p>GENESIZ &apos;24 Co-Chair</p>

                <h3 className="mt-3 text-custom-cyan-100 text-lg">
                  <a href="tel:+94716820004"> +94 71 682 0004 </a>
                </h3>
                <h3 className=" text-custom-cyan-100 text-lg">
                  <a href={"mailto:kesarahansaji@gmail.com"}>
                    kesarahansaji@gmail.com
                  </a>
                </h3>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
