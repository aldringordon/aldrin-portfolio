import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

// https://www.bankwest.com.au/content/dam/bankwest/web-assets/images/global/logo/logo-bankwest-desktop-new-global.png
// https://www.sgcontrols.com.au/wp-content/themes/titan/images/logo.png
// http://eic.nu/css/images/EICGreen3.png

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center justify-center h-screen mx-auto overflow-hidden"
    >
      <h3 className="translate-x-[10px] absolute top-[60px] uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="max-w-[370px] flex 
        w-2xl
        translate-y-[10px]
        p-6 space-x-5 overflow-x-scroll snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f8ffae]/80"
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
