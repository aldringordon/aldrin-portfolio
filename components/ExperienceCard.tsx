/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col items-center flex-shrink-0 rounded-lg space-y-7 w-[500px]
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-36 xl:w-[200px] object-cover object-center"
        src="https://www.bankwest.com.au/content/dam/bankwest/web-assets/images/global/logo/logo-bankwest-desktop-new-global.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Associate Software Engineer</h4>
        <p className="mt-1 text-2xl font-bold">Bankwest</p>
        <div className="flex my-2 space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/170px-Javascript-shield.svg.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/170px-Javascript-shield.svg.png"
            alt=""
          />
          <img
            className="w-10 h-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/170px-Javascript-shield.svg.png"
            alt=""
          />
        </div>
        <p className="py-5 text-gray-300 uppercase">
          Started work... - Ended...
        </p>
        <ul className="ml-5 space-y-4 text-lg list-disc">
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary points
          </li>
          <li>Summary pointsSummary points</li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary points
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
