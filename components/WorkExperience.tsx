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
      className="relative flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="flex w-full p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
