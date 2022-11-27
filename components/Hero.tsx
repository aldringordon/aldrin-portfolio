import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7ABBA" />
      </h1>
    </div>
  );
}

export default Hero;
