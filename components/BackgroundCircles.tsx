import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] mt-52 animate-ping" />
      <div
        className="absolute border  border-[#f8ffae]/10 rounded-full
      h-[480px] w-[480px]
      md:h-[550px] md:w-[550px]
      lg:h-[600px] lg:w-[600px]
      xl:h-[650px] xl:w-[650px]
      mt-52 animate-pulse"
      />
      <div className="absolute border border-[#333333] rounded-full h-[550px] w-[550px] mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
