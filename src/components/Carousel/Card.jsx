import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
// import Styles from "./Card.module.css";

function Card({ imagen, heading, text }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.01)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className="FeatureCard p-8 w-full CorenerRound relative z-[5] cursor-pointer"
      style={{ ...props3, width: "100%" }} // Set the width to be 100%
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="FavCardimg.svg" className="w-full h-auto" />{" "}
      {/* Ensure image also takes full width */}
      <div className="flex flex-col gap-6 pt-3">
        <h1 className="text-white text-center 2xl:text-[40px] sm:text-[26px] text-lg font-semibold sm:leading-[50px] uppercase">
          {heading}
        </h1>
        <p className="text-white text-center 2xl:text-lg sm:text-base text-xs font-medium leading-normal tracking-[0.72px] uppercase">
          {text}
        </p>
        <button className="CorenerRound w-full favCardBtn text-[#FFB571] h-[73px] 2xl:text-[26px] sm:text-lg text-sm font-bold leading-normal tracking-[0.26px] capitalize">
          Learn More
        </button>
      </div>
    </animated.div>
  );
}

export default Card;
