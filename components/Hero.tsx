import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "G'day! My name is Aldrin Gordon",
      "SoftwareDeveloper.java",
      "<SkateboardingEnthusiast />",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
        src="https://aldringordon.com/assets/Aldrin.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm text-gray-400 uppercase tracking-[15px]">
          Software Engineer
        </h2>

        <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F8FFAE" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>

          <Link href="#contact">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
