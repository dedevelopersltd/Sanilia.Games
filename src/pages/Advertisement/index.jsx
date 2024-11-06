import React from "react";
import { MainLayout } from "../../Layouts";
import { BottomHeaderSlider, GameCard, HeaderSlider } from "../../components";
import { FavCardimg, SearchIcon, SortIcon } from "../../assets";
import { FaChevronDown } from "react-icons/fa";
import Slider from "../../components/Slider";
import MasterCard from "../../components/MasterCard";
import Card from "../../components/Carousel/Card";
import Carroussel from "../../components/Carousel/MainCarousel";
import BarBottom from "./../../assets/images/barblack.svg";
import MaskBototmleft from "./../../assets/images/mask_bottom_left.svg";

const Advertisement = () => {
  return (
    <MainLayout>
      {/* // Main header Slider */}
      {/* <div className="relative">
        <HeaderSlider />
      </div> */}
      <div className="bar_bottom_header_cirles">
        <img src={MaskBototmleft} alt="" />
      </div>

      {/* // Main header Slider */}

      <div className="w-[90%] m-auto mt-32 z-10 relative">
        <div className="w-full flex justify-end  items-center flex-wrap gap-4">
          <div className="GamesSearch h-[54px] w-full md:w-max flex items-center px-4 py-2 space-x-4 ">
            <img
              className="cursor-pointer"
              src={SearchIcon}
              alt="SearchIcon.svg"
              style={{ height: "22px" }}
            />
            <input
              className="w-64 bg-transparent outline-none text-white text-sm font-light leading-normal"
              type="text"
              placeholder="Game Name"
            />
          </div>
          <div className="flex items-center gap-4 flex-col md:flex-row  w-full md:w-auto">
            <p className="text-white text-sm font-normal leading-normal ">
              Sort by
            </p>

            <div className="flex gap-4 items-center filter_select flex-wrap  w-full md:w-auto">
              <select className=" bg-transparent outline-none text-white text-sm font-light leading-normal GamesSearch h-[54px] flex items-center px-3 py-2 space-x-4 appearance-none w-full md:w-[160px]">
                <option value=''>Age Rating</option>
              </select>
              <select className="w-full md:w-[160px] bg-transparent outline-none text-white text-sm font-light leading-normal GamesSearch h-[54px] flex items-center px-3 py-2 space-x-4 appearance-none">
                <option value=''>Genere</option>
              </select>
              <select className="w-full md:w-60 bg-transparent outline-none text-white text-sm font-light leading-normal GamesSearch h-[54px] flex items-center px-3 py-2 space-x-4 appearance-none">
                <option value=''>Newly Launched</option>
              </select>
            </div>

           
            <div className="bg-[#15D274] h-[50px] w-[70px] CorenerRound flex items-center justify-center">
              <img src={SortIcon} alt="SortIcon.svg" style={{ height: "25px" }} />
            </div>
          </div>
        </div>

        <div className="mt-10 w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]">
          {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(element => (
              <GameCard />  
            ))
          }
         
        </div>
        <div className="flex justify-center my-10 gap-2">
          {
            [1,2,3,4,5].map((element, index) => (
              <button className={`${index===0 && "bg-[#1FCF43]"} border border-[#1FCF43] button_custom_rounded h-[50px] w-[70px] text-white text-md font-bold capitalize hover:bg-[#1FCF43]`}>
               {index+1}
              </button>
            ))
          }
          
        </div>
      </div>

    </MainLayout>
  );
};

export default Advertisement;
