import React from "react";
import { MasterAvtar, StarIcon } from "../../assets";

const MasterCard = ({detail}) => {
  return (
    <div className="p-3 MasterCard CorenerRound flex items-center gap-4">
      {
        detail == 1 ?
        <>
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              src={MasterAvtar}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </>
        :
        <div className="h-[75px] -ml-14 w-[75px] rounded-full overflow-hidden">
          <img
            src={MasterAvtar}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      }
     
      <div className="w-[87%] flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white text-[16px] font-medium leading-normal capitalize">
            NINJA
          </h1>
          <div className="flex gap-1">
            <img src={StarIcon} alt="StarIcon.svg" />
            <span className="text-white text-[14px] font-medium leading-normal capitalize">
              3.5
            </span>
          </div>
        </div>
        {
        detail == 1 ? "" :
            <p className="text-[#C3C3C3] text-[13px] font-light leading-normal capitalize">
              dolor sit amet consectetur. Odio turpis nisl scelerisque aliquam
              commodo odio
            </p>
        }
      </div>
    </div>
  );
};

export default MasterCard;
