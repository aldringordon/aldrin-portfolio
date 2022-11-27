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
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F8FFAE" />
      </h1>
    </div>
  );
}

export default Hero;
