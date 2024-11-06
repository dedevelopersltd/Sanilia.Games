import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderPic1 } from "../../assets";
import BarBottom from "./../../assets/images/barblack.svg";
import MaskBototmleft from "./../../assets/images/mask_bottom_left.svg";

const HeaderSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500000000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slider-dots",
  };

  return (
    <>
      <div className="xl:h-screen h-[80vh] md:h-[50vh] w-full">
        <Slider {...settings}>
          <div className="xl:h-screen h-[80vh] md:h-[50vh] w-full">
            <img src={SliderPic1} className="h-full  w-full object-cover" alt="" />
          </div>
          <div className="xl:h-screen h-[80vh] md:h-[50vh] w-full">
            <img src={SliderPic1} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="xl:h-screen h-[80vh] md:h-[50vh] w-full">
            <img src={SliderPic1} className="h-full w-full object-cover" alt="" />
          </div>
          <div className="xl:h-screen h-[80vh] md:h-[50vh] w-full">
            <img src={SliderPic1} className="h-full w-full object-cover" alt="" />
          </div>
        </Slider>
      </div>

      <div className="h-full w-full absolute bg-[#18181856] top-0 left-0"></div>
      <div className="w-[90%] absolute left-[5%] h-full md:h-[70%] top-0 flex items-center ">
        <div className="xl:w-1/2 w-full flex flex-col xl:mt-32">
          <h3 className="text-white text-[24px]  font-medium uppercase">
            Get Ready to
          </h3>
          <h1 className="text-white text-[30px] mb-5 md:mb-0 md:text-[60px] font-semibold sm:leading-[95px] leading-10 uppercase">
            Play & <span className="MainHeaderHeading">Conquer</span>
          </h1>
          <p className="text-white text-[16px] font-normal leading-normal tracking-[0.72px] uppercase">
            hen focusing on the main objectives, Assassin's Creed Valhalla is
            about 59½ Hours in length. If you're a gamer that strives to see
            all{" "}
          </p>
          <button className="MasterBtn h-[70px] w-[235px]  mt-10 text-white CorenerRound text-[18px] font-normal leading-normal tracking-[0.26px] capitalize">
            Explore Now{" "}
          </button>
        </div>
      </div>
      <div className="bar_bottom_header">
        <img src={BarBottom} alt="BarBottomHeader.svg" />
      </div>

      <div className="bar_bottom_header_cirles">
        <img src={MaskBototmleft} alt="" />
      </div>
    </>



  );
};

export default HeaderSlider;
