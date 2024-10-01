import React from "react";
import { CardImg, StarIcon } from "../../assets";

const FavrouteCard = () => {
  return (
    <div className="w-full FavCard CorenerRound">
      <img src={CardImg} alt="CardImg.svg" style={{borderRadius: "0 23px 0 0"}} />
      <div className="px-5 py-4 flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-[14px] text-white font-light capitalize">
            Base game
          </h3>
          <h1 className="text-[20px] text-white font-semibold leading-normal capitalize">
            StarFinder
          </h1>
        </div>
        <div className="flex gap-1">
          <img src={StarIcon} alt="StarIcon.svg" />
          <span className="text-white text-[14px] font-light leading-normal capitalize">
            3.5
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavrouteCard;
