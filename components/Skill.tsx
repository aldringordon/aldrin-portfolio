/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="relative flex cursor-pointer group"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        className="object-cover
        w-[70px] h-[70px]
        sm:w-[90px] sm:h-[90px]
        transition duration-300 ease-in-out border border-gray-500 rounded-full filter group-hover:blur-sm"
        alt=""
      />
      <div
        className="
      w-[70px] h-[70px]
      sm:w-[90px] sm:h-[90px]
      absolute z-0 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white-100/20 "
      >
        <div className="flex items-center justify-center h-full">
          <p className="font-normal opacity-100 text-zinc-50">typescript</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
