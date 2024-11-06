import "./Carasoulcss.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { gamecardpic, StarIcon } from "../../assets";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function CarasoulSlider({ cards }) {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = ["🍔", "🍕", "🌭", "🍗"];

  // Ensure activeIndex is always within the array bounds
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // Repeat items so that we can slice the visible ones
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  // Handle slider click and dragging
  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  // Function to detect drag end and update index based on drag direction
  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      handleClick(-1); // Dragging right, move left
    } else if (info.offset.x < -100) {
      handleClick(1); // Dragging left, move right
    }
  };

  // Handle clicking on a specific item
  const handleItemClick = (clickedIndex) => {
    const currentCenterIndex = 1; // center item in visibleItems array
    const direction = clickedIndex - currentCenterIndex; // Determine how far clicked item is from the center
    if (direction !== 0) {
      handleClick(direction); // Move the carousel based on the direction
    }
  };

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

  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item, index) => {
            return (
              <motion.div
                className="card"
                key={item}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left";
                    } else if (item === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
                drag="x" // Enable dragging horizontally
                dragConstraints={{ left: 0, right: 0 }} // Limit dragging to a horizontal axis
                onDragEnd={handleDragEnd} // Detect when dragging ends
                onClick={() => handleItemClick(index)} // Handle item click
              >
                <>
                  <div className="border CorenerRound GameCardBack overflow-hidden p-3 h-full w-[350px]">
                    <div className="">
                      <img
                        className="h-full w-full object-cover"
                        src={gamecardpic}
                        alt="gamecardpic.svg"
                      />
                    </div>
                    <div className="">
                      <div className="flex justify-between items-start">
                        <div>
                          <h1 className="text-white text-[24px] font-semibold text-center mt-4 uppercase">
                            The evolutionary gaming platform
                          </h1>
                          <p className="text-white text-[12px] font-light text-center uppercase mt-2">
                            With more than 3 billion active gamers to transition
                            into the new exciting gaming technology
                          </p>
                        </div>
                      </div>
                      <div>
                        <button className="CorenerRound mt-3 w-full !px-5 favCardBtn text-[#FFB571] h-[45px] text-sm font-normal leading-normal capitalize">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="buttonscarasoul md:hidden block">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          <SamplePrevArrow className="mr-4" />
        </motion.button>
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          <SampleNextArrow />
        </motion.button>
      </div>
    </div>
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.7, x: direction < 1 ? 50 : -50, opacity: 0 };
  },

  center: ({ position }) => {
    return {
      scale: position() === "center" ? 1 : 0.80,
      x: position() === "center" ? 0 : position() === "left" ? -200 : 200, // Adjust overlap here
      zIndex: getZIndex({ position }),
      opacity: 1,
    };
  },

  exit: ({ direction }) => {
    return { scale: 0.7, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position }) {
  const indexes = {
    left: 1,
    center: 3,
    right: 2,
  };
  return indexes[position()];
}