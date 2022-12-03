import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen mx-auto text-center ">
      <h3 className="absolute translate-x-[10px] top-[70px] uppercase tracking-[20px] text-gray-500 text-2xl z-40">
        About
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 flex flex-col items-center justify-start sm:justify-center pt-5 px-2 mx-auto overflow-hidden text-center top-[125px] max-w-7xl z-10"
      >
        <motion.img
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          src="https://aldringordon.com/assets/Bike.jpg"
          className="flex-shrink-0 object-cover
          w-[300px] mb-10 rounded-lg sm:w-[400px]
          md:w-[500px]
          lg:w-[600px] xl:w-[700px]"
        />

        <div className="px-0 space-y-10 md:px-10">
          <motion.h4
            initial={{
              opacity: 0,
              x: -200,
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
            className="text-2xl font-semibold md:text-4xl md:pt-8"
          >
            A <span className="underline decoration-[#f8ffae]/60">little</span>{" "}
            background
          </motion.h4>
          <motion.p
            initial={{
              opacity: 0,
              y: 200,
            }}
            transition={{
              duration: 1.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="text-s md:text-base 
            max-w-[450px]
            sm:max-w-[500px]
            md:max-w-[550px]
            lg:max-w-[600px]
            xl:max-w-[700px]"
          >
            I’m a Software Engineer based in Perth, Western Australia currently
            working at Bankwest. I primarily focus on back-end development in
            Java, but I also have experience in Mobile App Development,
            Robotics, and Control Systems Automation. If you can’t find me
            sitting in front of my computer, ill either be out skating at the
            skatepark, snowboarding in another country somewhere, or going for a
            ride along the coast.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
