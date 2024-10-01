import React, { useState } from "react";
import { FavCardimg } from "../../assets";

const Slider = () => {
  // Track the current center card (initially the middle one is centered)
  const [centerCard, setCenterCard] = useState(1);

  // Handle click to swap center with clicked card
  const handleClick = (cardIndex) => {
    setCenterCard(cardIndex); // Set the clicked card to center
  };

  return (
    <div className="flex justify-center items-center relative mt-10">
      {/* Left Card */}
      <div
        className={`FeatureCard p-8 w-1/2 CorenerRound absolute left-0 cursor-pointer transition-all duration-500 ${
          centerCard === 0 ? "scale-100 z-[5] relative" : "scale-[.8]"
        }`}
        onClick={() => handleClick(0)}
      >
        <img src={FavCardimg} alt="FavCardimg.svg" />
        <div className="flex flex-col gap-6 pt-3">
          <h1 className="text-white text-center 2xl:text-[40px] sm:text-[26px] text-lg font-semibold sm:leading-[50px] uppercase">
            The evolutionary gaming platform1
          </h1>
          <p className="text-white text-center 2xl:text-lg sm:text-base text-xs font-medium leading-normal tracking-[0.72px] uppercase">
            with more than 3 billion active gamers to transition into the new
            exciting gaming technology
          </p>
          {centerCard === 0 && (
            <button className="CorenerRound w-full favCardBtn text-[#FFB571] h-[73px] 2xl:text-[26px] sm:text-lg text-sm font-bold leading-normal tracking-[0.26px] capitalize">
              Learn More
            </button>
          )}
        </div>
      </div>

      {/* Center Card */}
      <div
        className={`FeatureCard p-8 w-1/2 CorenerRound relative z-[5] cursor-pointer transition-all duration-500 ${
          centerCard === 1 ? "scale-100" : "scale-[.8] absolute left-0"
        }`}
        onClick={() => handleClick(1)}
      >
        <img src={FavCardimg} alt="FavCardimg.svg" />
        <div className="flex flex-col gap-6 pt-3">
          <h1 className="text-white text-center 2xl:text-[40px] sm:text-[26px] text-lg font-semibold sm:leading-[50px] uppercase">
            The evolutionary gaming platform2
          </h1>
          <p className="text-white text-center 2xl:text-lg sm:text-base text-xs font-medium leading-normal tracking-[0.72px] uppercase">
            with more than 3 billion active gamers to transition into the new
            exciting gaming technology
          </p>
          {/* Show Learn More button only on the center card */}
          {centerCard === 1 && (
            <button className="CorenerRound w-full favCardBtn text-[#FFB571] h-[73px] 2xl:text-[26px] sm:text-lg text-sm font-bold leading-normal tracking-[0.26px] capitalize">
              Learn More
            </button>
          )}
        </div>
      </div>

      {/* Right Card */}
      <div
        className={`FeatureCard p-8 w-1/2 CorenerRound absolute right-0 cursor-pointer transition-all duration-500 ${
          centerCard === 2 ? "scale-100 z-[5] relative" : "scale-[.8]"
        }`}
        onClick={() => handleClick(2)}
      >
        <img src={FavCardimg} alt="FavCardimg.svg" />
        <div className="flex flex-col gap-6 pt-3">
          <h1 className="text-white text-center 2xl:text-[40px] sm:text-[26px] text-lg font-semibold sm:leading-[50px] uppercase">
            The evolutionary gaming platform3
          </h1>
          <p className="text-white text-center 2xl:text-lg sm:text-base text-xs font-medium leading-normal tracking-[0.72px] uppercase">
            with more than 3 billion active gamers to transition into the new
            exciting gaming technology
          </p>
          {centerCard === 2 && (
            <button className="CorenerRound w-full favCardBtn text-[#FFB571] h-[73px] 2xl:text-[26px] sm:text-lg text-sm font-bold leading-normal tracking-[0.26px] capitalize">
              Learn More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
