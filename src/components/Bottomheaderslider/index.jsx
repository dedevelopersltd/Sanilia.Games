import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FavrouteCard from "../FavrouteCard";
// Import your icon (using Font Awesome or your custom icon)
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

// Custom Next Arrow Component
const SamplePrevArrow = (props) => {
  const { className,  onClick, disabled } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow SlidesEndBtn ${
        disabled ? "slidesEnd" : "SlidePresent"
      } ${className}`}
    >
      <IoIosArrowRoundBack
        class="arrows"
        style={{ color: "white", fontSize: "40px" }}
      />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className,  onClick, disabled } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow SliderStartBtn  ${
        disabled ? "slidesEnd" : "SlidePresent"
      }  ${className}`}
    >
      <IoIosArrowRoundForward
        class="arrows"
        style={{ color: "white", fontSize: "40px" }}
      />
    </div>
  );
}

const BottomHeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    nextArrow: (
      <SampleNextArrow
        onClick={() => setCurrentSlide(currentSlide + 1)}
        disabled={currentSlide >= totalSlides - 2}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        onClick={() => setCurrentSlide(currentSlide - 1)}
        disabled={currentSlide <= 0}
      />
    ),
    beforeChange: ( newIndex) => setCurrentSlide(newIndex),

    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="sm:p-5">
          <FavrouteCard />
        </div>
        <div className="sm:p-5">
          <FavrouteCard />
        </div>
        <div className="sm:p-5">
          <FavrouteCard />
        </div>
      </Slider>
    </div>
  );
};

export default BottomHeaderSlider;
