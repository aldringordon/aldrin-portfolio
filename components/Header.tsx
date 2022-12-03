import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { SiLinkedin, SiGithub, SiBitbucket } from "react-icons/si";
import { MdOutlineEmail, MdHome } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        <IconContext.Provider
          value={{
            color: "gray",
            size: "1.8em",
            className: "betterhover:-translate-y-1 px-1",
          }}
        >
          <div>
            <Link href="https://linkedin.com/in/aldringordon">
              <SiLinkedin />
            </Link>
          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            color: "gray",
            size: "1.8em",
            className: "betterhover:-translate-y-1 px-1",
          }}
        >
          <div>
            <Link href="https://bitbucket.org/aldringordon/">
              <SiBitbucket />
            </Link>
          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            color: "gray",
            size: "1.8em",
            className: "betterhover:-translate-y-1 px-1",
          }}
        >
          <div>
            <Link href="https://github.com/aldringordon">
              <SiGithub />
            </Link>
          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            color: "gray",
            size: "2.2em",
            className: "betterhover:-translate-y-1 px-1",
          }}
        >
          <div>
            <Link href="https://aldringordon.com/">
              <HiOutlineNewspaper />
            </Link>
          </div>
        </IconContext.Provider>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <IconContext.Provider
          value={{
            color: "gray",
            size: "2em",
            className: "betterhover:-translate-y-1 px-1",
          }}
        >
          <div>
            <Link href="#contact">
              <MdOutlineEmail />
            </Link>
          </div>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            color: "gray",
            size: "2em",
            className: "betterhover:-translate-y-1 px-1",
          }}
        >
          <div>
            <Link href="#hero">
              <MdHome />
            </Link>
          </div>
        </IconContext.Provider>
      </motion.div>
    </header>
  );
}

export default Header;
