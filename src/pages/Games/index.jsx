import React, { useEffect, useState } from "react";
import { MainLayout, DashboardLayout } from "../../Layouts";
import { FavCardimg, SearchIcon, SortIcon, StarIcon } from "../../assets";
import { FaChevronDown } from "react-icons/fa";
import Slider from "../../components/Slider";
import Card from "../../components/Carousel/Card";
import Carroussel from "../../components/Carousel/MainCarousel";
import SmallUser from "./../../assets/images/user_small.svg";
import BoxGame from "./../../assets/images/boxgame.svg";
import { useParams, useLocation, Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import WalletPop from "./../../assets/images/wallet_pop.svg";
import CUP from "./../../assets/images/cup.svg";
import DOTS from "./../../assets/images/dots.svg";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import MasterCard from "../../components/GameCard";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsInfo } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasProfile = location.pathname.includes('profile');
  const [isProfile, setIsProfile] = useState(hasProfile);
  const [showpopup, setShowPopup] = useState(false);

  useEffect(() => {
    // console.log("I am calling");
    // console.log(hasProfile, "hasProfile")
    setIsProfile(hasProfile)
  }, [location])
  const games_list = [
    {
      id: 1,
      title: "Fate Core System",
      description: "All time best gaming experince......",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Fate Core System",
      description: "All time best gaming experince......",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Fate Core System",
      description: "All time best gaming experince......",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },      
    {
      id: 4,
      title: "Fate Core System",
      description: "All time best gaming experince......",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
   
  ]

  const statsvalue = [
    {
      id: 1,
      title: "Runnig Advertismnets",
      value: '4',
    },
    {
      id: 2,
      title: "Total Advertismnets",
      value: '145',
    },
    {
      id: 3,
      title: "Upcoming",
      value: '1',
    },
    {
      id: 4,
      title: "Completed",
      value: '10',
    },

  ]

  const ReviewsData = [
    {
      id: 1,
      title: "Alfredo Westervelt",
      value: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br /><br />Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
    {
      id: 2,
      title: "Ashlynn Stanton",
      value: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ',
    },
    {
      id: 3,
      title: "Lydia Herwitz",
      value: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ',
    },
    {
      id: 4,
      title: "Chance Mango",
      value: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do Amet minim mollit non deserunt ullamco est sit aliqua dolor do Amet minim mollit non deserunt ullamco est sit aliqua dolor do  ',
    },
    {
      id: 5,
      title: "Alfredo Westervelt",
      value: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br /><br />Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
    {
      id: 6,
      title: "Kadin Donin",
      value: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br /><br />Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
  ]

  const [likegames, setLikeGames] = useState(games_list);
  const [stats, setStats] = useState(statsvalue);
  const [reviews, setReviews] = useState(ReviewsData);

  const [activeIndex, setActiveIndex] = useState(null); // State to track active dropdown index

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
  };

  return (
    <DashboardLayout>
      <div className="mb-6 mx-auto w-11/12">
        <div className="flex justify-between items-start gap-4 md:flex-row flex-col">

          <div className="border  CorenerRound custom_bg_dashboard p-6 text-white mb-5 w-full md:w-2/5">
              <div className="next_game_bg flex justify-between items-center gap-2">
                <div className="p-3 px-5">
                  <h1 className="font-bold mb-0 text-md uppercase">Next Game</h1>
                  <p className="text-[10px] text-white">Game Title</p>
                </div>
                <div className="pt-3">
                  <img src={CUP} className="h-12 cup_mid" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#2e2b2c] p-1 px-2 rounded-md font-semibold text-white text-2xl">59</div>
                  <div>:</div>
                  <div className="bg-[#2e2b2c] p-1 px-2 rounded-md font-semibold text-white text-2xl">00</div>
                </div>
                
              </div>
              <div className="custom_pills_dashboard flex justify-between items-center gap-2 mt-4">
                <div>People Registered for this Match</div>
                <div>15</div>
              </div>
              <div className="mt-14 flex flex-col gap-3" onClick={() => setShowPopup(true)}>
                  <button className="LoginBtn text-white CorenerRound h-[50px] w-full text-[14px] font-normal leading-normal tracking-[0.26px] capitalize">
                  New Advertisment
                </button>
              </div>
          </div>

          <div className="border  CorenerRound custom_bg_dashboard p-6 text-white mb-5 w-full md:w-3/5">
            <div>
              <h1 className="font-bold mb-0 text-md uppercase">{isProfile?'Game Master Profile Overview':'Profile Overview'}</h1>
              <p className="mb-3 text-[10px] text-gray-400">Stats displayed for the user</p>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-6">
              {
                stats.map((item, index) => (
                  <div className="mixing_bg_half" key={'stats_'+index}>
                    <p className="text-[12px] mb-2">{item.title}</p>
                    <div className="text-white font-bold text-md">{item.value}</div>
                  </div>
                ))
              }
            </div>
          </div>
         

          
        </div>
     
        <div className="mt-3">
            <div className="flex justify-start flex-col gap-1 items-start mb-2">
              <h1 className="font-bold mb-0 text-md uppercase text-white">Game Advertisments</h1>
              <p className="mb-3 text-[10px] text-gray-400">Games advertised by me</p>
            </div>

            <div>
              {
                [1,2,3,4,5].map((item, index) => (
                  <div className="border  CorenerRound custom_bg_dashboard p-6 text-white mb-3 w-full flex justify-between items-center md:flex-row flex-col gap-6 md:gap-0">
                    <div className="flex items-center gap-3">
                      <img src={BoxGame} className="object-cover w-16 h-12 CorenerRound" />
                      <div>
                        <div className="font-semibold">Blades In the Dark</div>
                        <p className="text-[10px] text-[#8a8a8a]">A line about the game here</p>
                      </div>
                    </div>

                    <div className="flex gap-2 items-center">
                      <span className="text-[#4A4A4A] font-semibold text-sm">Date/ Time:</span>
                      <span className="text-[#14D37F] text-sm">7 Sep</span>
                      <span className="text-[10px] text-[#4A4A4A]">|</span>
                      <span className="text-[#14D37F] text-sm">9:00 PM</span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <span className="text-[#4A4A4A] font-semibold text-sm">Status:</span>
                      <span className="text-[#14D37F] text-sm">Upcoming</span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <span className="text-[#4A4A4A] font-semibold text-sm">Players:</span>
                      <span className={`text-[#14D37F] text-sm`}>32/<span className="text-white">50</span></span>
                    </div>

                    <div className="flex items-center">
                      <button className={`${index==0 || index == 1 ? 'LoginBtn' : 'bg-[#111111] border border-[#2e2e2e] cursor-not-allowed' } text-white CorenerRound h-[40px] w-[150px] text-[14px] font-normal leading-normal tracking-[0.26px] capitalize`}>
                        View Requests
                      </button>
                    </div>
                    
                    <div className="flex items-center cursor-pointer relative">
                      {
                        (index==0 || index == 1)  &&
                        <>
                        <img src={DOTS} className="h-6" onClick={() => toggleDropdown(index)} />
                        {
                        activeIndex === index && (
                        <div className="bg-[#4A4A4A] w-[100px] rounded-md absolute right-0 top-6 z-10">
                          <Link className="flex justify-start items-center gap-4 p-2 border-b border-b-[#2e2e2e]">
                            <CiEdit />
                            <span className="text-gray-400 text-sm">Edit</span>
                          </Link>
                          <Link className="flex justify-start items-center gap-4 p-2 border-b border-b-[#2e2e2e]">
                            <RiDeleteBin6Line />
                            <span className="text-gray-400 text-sm">Delete</span>
                          </Link>
                          <Link className="flex justify-start items-center gap-4 p-2 border-b border-b-[#2e2e2e]">
                            <BsInfo />
                            <span className="text-gray-400 text-sm">Details</span>
                          </Link>
                        </div>
                        )}
                        </>
                        

                      }
                      
                    </div>

                  </div>
                ))
              }
              
             
            </div>
         
        </div>
      </div>


      {
      showpopup &&
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer  ">
        <div class="flex justify-center items-center h-full w-full">
          <div class="center_popup_div p-10 px-14 CorenerRound sm:w-[90%] md:w-[55%] bounce-enter custom_ad_height overflow-y-auto">
            <div className="flex justify-end cursor-pointer absolute right-3 top-3" onClick={() => setShowPopup(false)}>
            <IoIosCloseCircle color="white" size={30} />
            </div>
            <form method="post">
              <h1 class="text-4xl font-bold text-center text-white uppercase mb-10">Game <span className="MainHeaderHeading">Advertisement</span></h1>
              <div class="mb-6 flex justify-between items-center gap-4 w-full">
                <div className="w-1/2">
                  <label className="font-semibold text-sm text-white flex flex-col">
                    Select the Genre
                    <span className="text-gray-400 font-normal text-[11px]">select the genre of game </span>
                  </label>
                  <select className="w-full advertisement_inputs">
                    <option>--Choose Genre--</option>
                    <option>High Fantasy</option>
                    <option>High Fantasy</option> 
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="font-semibold text-sm text-white flex flex-col">
                    Select the Game
                    <span className="text-gray-400 font-normal text-[11px]">Game you want to advertise</span>
                  </label>
                  <select className="w-full advertisement_inputs">
                    <option>--Choose Game--</option>
                    <option>Blades in the Dark</option>
                    <option>Blades in the Dark</option> 
                  </select>
                </div>
                
              </div>

              <div class="mb-6 flex justify-between items-center gap-4 w-full">
                <div className="w-1/2">
                  <label className="font-semibold text-sm text-white flex flex-col">
                  Platform
                    <span className="text-gray-400 font-normal text-[11px]">Tools or platform on which the game will be played</span>
                  </label>
                  <input type="text" placeholder="Owlbear Rodeo, dice" className="w-full advertisement_inputs" />
                </div>
                <div className="w-1/2">
                  <label className="font-semibold text-sm text-white flex flex-col">
                  Date and Time
                    <span className="text-gray-400 font-normal text-[11px]">Game you want to advertise</span>
                  </label>
                  <div class="flex justify-between gap-4">
                  <input type="date"  className="w-full advertisement_inputs" />
                  <input type="time"  className="w-full advertisement_inputs" />
                  </div>
                </div>
                
              </div>

              <div class="mb-6 flex justify-between items-center gap-4 w-full">
                <div className="w-1/2">
                  <label className="font-semibold text-sm text-white flex flex-col">
                  Players Required
                    <span className="text-gray-400 font-normal text-[11px]">Number of players that will join the game </span>
                  </label>
                  <div className="relative">
                    <input type="text" placeholder="50" className="w-full advertisement_inputs  !pl-12" />
                    <div className="absolute left-3 top-[26px]">
                        <img src={SmallUser} className="h-4" />
                    </div>
                  </div>
                  
                </div>
                <div className="w-1/2">
                  <label className="font-semibold text-sm text-white flex flex-col">
                  Price and Rating
                    <span className="text-gray-400 font-normal text-[11px]">Payment to be charged & Age ratings</span>
                  </label>
                  <div class="flex justify-between gap-4">
                  <div className="relative w-full">
                    <input type="text" placeholder="20" className="w-full advertisement_inputs  !pl-12" />
                    <div className="absolute left-3 top-[26px]">
                        <img src={WalletPop} className="h-4" />
                    </div>
                  </div>
                  <select className="w-full advertisement_inputs">
                    <option>--Rating--</option>
                    <option>E (Everyone)</option>
                  </select>
                  </div>
                </div>
                
              </div>

              <div class="mb-4 flex justify-between items-center gap-4 w-full">
                <div className="w-full">
                  <label className="font-semibold text-sm text-white flex flex-col">
                  Type of players
                    <span className="text-gray-400 font-normal text-[11px]">What type of players are you looking for</span>
                  </label>
                  <textarea  className="w-full !h-[80px] resize-none advertisement_inputs !p-5" placeholder="Text Description" />
                  
                </div>
              
              </div>

              <div class="mb-0 flex justify-between items-center gap-4 w-full">
                <div className="w-full">
                  <label className="font-semibold text-sm text-white flex flex-col">
                  Game Plan
                    <span className="text-gray-400 font-normal text-[11px]">Write a plan of game u shall be playing</span>
                  </label>
                  <textarea  className="w-full !h-[80px] resize-none advertisement_inputs !p-5" placeholder="Text Description" />
                </div>
              
              </div>
             
              
              <div className="flex justify-center mt-8">
                <button className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm">
                  Advetise Game
                </button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    }

    </DashboardLayout>
  );
};

export default Dashboard;
