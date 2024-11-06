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
import CarasoulSlider from "./Carasoul"

const SliderArr = [
  {
    key: 1,
    content: (
      <Card
        imagen={FavCardimg}
        heading="The evolutionary gaming platform2"
        text="with more than 3 billion active gamers to transition into the new exciting gaming technology"
      />
    ),
  },
  {
    key: 2,
    content: (
      <Card
        imagen={FavCardimg}
        heading="The evolutionary gaming platform2"
        text="with more than 3 billion active gamers to transition into the new exciting gaming technology"
      />
    ),
  },
  {
    key: 3,
    content: (
      <Card
        imagen={FavCardimg}
        heading="The evolutionary gaming platform2"
        text="with more than 3 billion active gamers to transition into the new exciting gaming technology"
      />
    ),
  },
];
const Home = () => {
  return (
    <MainLayout>
      {/* // Main header Slider */}
      <div className="relative">
        <HeaderSlider />



      </div>



      <div className="sm:w-[95%] w-[90%] 2xl:-mt-64 xl:-mt-[200px] relative mt-10 left-[5%] grid xl:grid-cols-2 grid-cols-1 gap-10 overflow-hidden">
        <div className="flex justify-start flex-col">
          <h3 className="text-white text-[20px] font-medium uppercase mt-[1rem] md:mt-[7rem]">
            CHOOSE YOUR
          </h3>
          <h1 className="text-white mb-3 md:mb-0 text-[40px] md:text-[50px] font-semibold sm:leading-[95px] leading-10 uppercase">
            Favorite <span className="MainHeaderHeading">Games</span>
          </h1>
          <p className="text-white text-xs font-normal leading-6 tracking-[0.72px] uppercase">
            hen focusing on the main objectives, Assassin's Creed Valhalla is
            about 59½ Hours in length. If you're a gamer that strives to see
            all{" "}
          </p>
        </div>
        <div>
          <div className=" sm:w-[120%] w-full">
            <BottomHeaderSlider />
          </div>
        </div>
      </div>
      {/* 
        <div className="bar_bottom_header_cirles">
        <img src={MaskBototmleft} alt="" />
      </div> */}


      {/* // Main header Slider */}

      <div className="w-[90%] m-auto mt-10 ">
        <div className="w-full flex justify-end  items-center flex-wrap gap-4">
          <div className="GamesSearch h-[60px] w-max flex items-center px-4 py-2 space-x-4 CorenerRound">
            <img
              className="cursor-pointer"
              src={SearchIcon}
              alt="SearchIcon.svg"
              style={{ height: "30px" }}
            />
            <input
              className="w-72 bg-transparent outline-none text-white text-md font-light leading-normal"
              type="text"
              placeholder="Search With game"
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-white text-md font-normal leading-normal">
              Sort by
            </p>
            <div className="h-[60px] GamesSearch px-4 py-2 CorenerRound flex items-center gap-20 cursor-pointer">
              <p className="text-white text-sm font-normal leading-normal ">
                Newly Launched
              </p>
              <FaChevronDown className="text-white" />
            </div>
            <div className="bg-[#15D274] h-[50px] w-[50px] CorenerRound flex items-center justify-center">
              <img src={SortIcon} alt="SortIcon.svg" style={{ height: "25px" }} />
            </div>
          </div>
        </div>

        <div className="mt-10 w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
        <div className="flex justify-center my-10">
          <button className="FeatureBtn text-white CorenerRound text-[18px] font-normal leading-normal tracking-[0.26px] capitalize">
            See More
          </button>
        </div>
      </div>

      <div className="featur_bg_wrap relative mt-36 mb-24">
        <div className="w-[90%] m-auto mt-10 ">
          <div className="w-full flex md:flex-row flex-col justify-between items-center gap-10">
            <div className="flex flex-col justify-center gap-8 w-full md:w-1/3">
              <h1 className="text-white text-[35px] font-semibold leading-[25px] uppercase">
                Feature
              </h1>
              <p className="text-white text-sm font-light tracking-[0.8px] uppercase">
                with more than 3 billion active gamers gollably set to
                transition into the new exiciing world of gaming, gaming
                techonogy{" "}
              </p>
              <button className="FeatureBtn !h-[55px] !w-[200px] text-white CorenerRound text-[18px] font-normal leading-normal tracking-[0.26px] capitalize">
                See More
              </button>
            </div>
            <div className="border-1 border-white w-full md:w-2/3">
              <CarasoulSlider cards={SliderArr} />
              {/* <Carroussel
                cards={SliderArr}
                height="600px"
                width="80%"
                margin="0 auto"
                offset={5}
                showArrows={false}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full featureBox h-screen mt-20 mb-0 relative">
        <div className="h-full w-full featureBackBlur"></div>
        <div className="h-full w-[90%] absolute left-[5%] z-10 top-0">
          <div className="w-full grid lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-8">
              <h1 className="text-white text-[35px] font-semibold leading-[25px] uppercase">
                Feature
              </h1>
              <p className="text-white text-sm font-normal tracking-[0.8px] uppercase">
                with more than 3 billion active gamers gollably set to
                transition into the new exiciing world of gaming, gaming
                techonogy{" "}
              </p>
              <button className="FeatureBtn text-white CorenerRound text-[18px] font-normal leading-normal tracking-[0.26px] capitalize">
                See More
              </button>
            </div>
            <div className="col-span-1 ">
              <Carroussel
                cards={SliderArr}
                height="600px"
                width="80%"
                margin="0 auto"
                offset={5}
                showArrows={false}
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* ////  Gaming Master start section */}

      <div className="w-[90%] m-auto mt-30">
        <div className="lg:w-1/2 w-full flex flex-col">
          <h3 className="text-white 2xl:text-[16px] sm:text-[16px] text-base font-normal uppercase">
            Meet some Top rated
          </h3>
          <h1 className="text-white 2xl:text-[40px] md:text-[40px] sm:text-[40px] text-lg font-semibold leading-[70px] uppercase">
            Gaming <span className="TopratedGradiant">Masters</span>{" "}
          </h1>
          <p className="text-white text-[14px] font-normal leading-normal tracking-[0.8px] uppercase mt-2">
            hen focusing on the main objectives, Assassin's Creed Valhalla is
            about 59½ Hours in length. If you're a gamer that strives to see all{" "}
          </p>
        </div>
        <div className="w-full mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 pl-16">
          <MasterCard />
          <MasterCard />
          <MasterCard />
          <MasterCard />
          <MasterCard />
          <MasterCard />
        </div>
        <div className="flex justify-center my-20">
          <button className="MasterBtn text-white CorenerRound h-[70px] w-[253px] text-[16px] font-normal leading-normal tracking-[0.26px] capitalize">
            Explore More{" "}
          </button>
        </div>
      </div>
      {/* // Total Count Counter */}

      <div className="w-full CounterBack pt-3 pb-6 my-5 relative mb-10">
        <div className="w-[90%] m-auto gap-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          <div className="flex  justify-center">
            <div className="w-max">
              <h1 className="text-[40px] text-white text-center font-semibold leading-[65px] uppercase">
                100+
              </h1>
              <p className="text-white text-[20px] text-center font-medium leading-normal uppercase">
                Games
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-max">
              <h1 className="text-[40px] text-white text-center font-semibold leading-[65px] uppercase">
                20+
              </h1>
              <p className="text-white text-[20px] text-center font-medium leading-normal uppercase">
                Masters
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-max">
              <h1 className="text-[40px] text-center text-white font-semibold leading-[65px] uppercase">
                99
              </h1>
              <p className="text-white text-[20px] text-center font-medium leading-normal uppercase">
                players
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-max">
              <h1 className="text-[40px] text-white text-center font-semibold leading-[65px] uppercase">
                1000+
              </h1>
              <p className="text-white text-[20px] text-center font-medium leading-normal uppercase">
                Review
              </p>
            </div>
          </div>
        </div>
        <div className="shadowBottoms absolute top-0 -left-32"></div>
      </div>
    </MainLayout>
  );
};

export default Home;
