/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { DiJava } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandPython } from "react-icons/tb";
import { IconContext } from "react-icons";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col items-center flex-shrink-0 rounded-lg
      snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 visited:opacity-100
      cursor-pointer transition-opacity duration-200
      w-[350px] h-[510px]"
    >
      <img
        className="max-w-[150px] max-h-[55px] object-cover object-center"
        src="https://www.bankwest.com.au/content/dam/bankwest/web-assets/images/global/logo/logo-bankwest-desktop-new-global.png"
        alt=""
      />

      <div className="px-3 pt-2 md:px-10">
        <h4 className="font-light text-center text-1xl">
          Associate Software Engineer
        </h4>

        <p className="mt-1 text-2xl font-bold text-center">Bankwest</p>

        <div className="flex items-center justify-center my-2 space-x-2">
          <IconContext.Provider
            value={{
              color: "",
              size: "2em",
              className: "gray",
            }}
          >
            <div>
              <DiJava />
            </div>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "",
              size: "1.7em",
              className: "gray",
            }}
          >
            <div>
              <IoLogoJavascript />
            </div>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "",
              size: "1.7em",
              className: "gray",
            }}
          >
            <div>
              <TbBrandPython />
            </div>
          </IconContext.Provider>
        </div>

        <p className="py-2 text-center text-gray-300 uppercase">
          Jun 2022 - Present
        </p>

        <ul className="space-y-2 text-xs list-disc">
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </li>
          <li>
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s.
          </li>
          <li>
            It has survived not only five centuries, but also the leap into
            electronic typesetting.
          </li>
          <li>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </li>
          <li>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </li>
          <li>
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
