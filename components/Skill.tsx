import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative flex cursor-pointer group"
    >
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-500 rounded-full md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale"
      />
      <div className="absolute z-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white md:w-28 md:h-28 xl:w-32 xl:h-32">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
