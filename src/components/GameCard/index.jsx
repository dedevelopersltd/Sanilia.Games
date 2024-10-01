import React from "react";
import { gamecardpic, StarIcon } from "../../assets";

const GameCard = () => {
  return (
    <div className="border CorenerRound GameCardBack overflow-hidden">
      <div className="h-80">
        <img
          className="h-full w-full object-cover"
          src={gamecardpic}
          alt="gamecardpic.svg"
        />
      </div>
      <div className="py-2 px-7">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-white text-[18px] font-semibold leading-normal capitalize mt-3">
              (D&D) 5th Edition
            </h1>
            <p className="text-white text-[14px] font-light leading-normal capitalize mt-2">
              All time best gaming experince......
            </p>
          </div>
          <div className="flex items-center mt-3">
            <img src={StarIcon} alt="StarIcon.svg" />
            <span className="text-white text-[14px] font-medium leading-normal capitalize">
              3.5
            </span>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-1 mt-2">
          <div className="flex justify-between mb-2">
            <p className="text-white text-[14px] font-medium leading-normal capitalize">
              Game System
            </p>
            <span className="text-white text-[14px] font-light leading-normal capitalize">
              Pc Gaming
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-white text-[14px] font-medium leading-normal capitalize">
              Schedule
            </p>
            <span className="text-white text-[14px] font-light leading-normal capitalize">
              Feb 20, 9:00 AM
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-white text-[14px] font-medium leading-normal capitalize">
              Seating
            </p>
            <span className="text-white text-[14px] font-light leading-normal capitalize">
              20{" "}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-white text-[14px] font-medium leading-normal capitalize">
              Cost
            </p>
            <span className="text-[#FFB571] text-[20px] font-semibold leading-normal capitalize">
              $200{" "}
            </span>
          </div>
          <p className="text-center text-[#FFB571] text-[14px] font-medium leading-normal capitalize">
            Game Master Name
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
