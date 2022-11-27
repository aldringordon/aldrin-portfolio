import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src="https://aldringordon.com/assets/Bike.jpg"
        className="flex-shrink-0 object-cover w-56 h-56 mb-20 rounded-full md:mb-0 md:rounded-lg md:w-96 md:h-64 xl:w-[500px] xl:h-[300px]"
      />

      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f8ffae]/60">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I’m a Software Engineer based in Perth, Western Australia currently
          working at Bankwest. I primarily focus on back-end development in
          Java, but I also have experience in Mobile App Development, Robotics,
          and Control Systems Automation. If you can’t find me sitting in front
          of my computer, ill either be out skating at the skatepark,
          snowboarding in another country somewhere, or going for a ride along
          the coast.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
