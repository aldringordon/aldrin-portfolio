/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f8ffae]/80"
      >
        {projects.map((project, i) => (
          <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44">
            <motion.img
              initial={{ y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt=""
            />

            <div className="max-w-6xl px-0 space-y-10 md:px-10">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f8ffae]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Miro Robotic Companion
              </h4>

              <p>
                Miro Robotic Aged Care Companion. Aug 2020 - May 2021.
                Technologies used: Python, Java, PostgreSQL, Rospy. Capstone
                project to program Miro, a biomimetic robot, to act as an aged
                care companion. Implemented Face Recognition, Facial Expression
                Recognition, Speech Recognition, Object Detection, and Restful
                API Database
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f8ffae]/30 left-0 h-[100px] -skew-y-12" />
      <div className="w-full absolute top-[30%] bg-[#f8ffae]/20 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
