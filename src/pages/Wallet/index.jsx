import React, { useEffect, useState } from "react";
import { MainLayout, DashboardLayout } from "../../Layouts";
import { FavCardimg, SearchIcon, SortIcon, StarIcon } from "../../assets";
import { FaChevronDown } from "react-icons/fa";
import Slider from "../../components/Slider";
import Card from "../../components/Carousel/Card";
import Carroussel from "../../components/Carousel/MainCarousel";
import BoxGame from "./../../assets/images/boxgame.svg";
import { useParams, useLocation, Link } from 'react-router-dom';
import Earned from "./../../assets/images/earned.svg";
import Withdraw from "./../../assets/images/withdraw.svg";
import DOTS from "./../../assets/images/dots.svg";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import MasterCard from "../../components/GameCard";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsInfo } from "react-icons/bs";
import UserIcon from "./../../assets/images/master.jpg";


const Dashboard = () => {

  const location = useLocation();
  const hasProfile = location.pathname.includes('profile');
  const [isProfile, setIsProfile] = useState(hasProfile);

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
      title: "Total Revenue",
      value: '$1200',
    },
    {
      id: 2,
      title: "Total Advertismnets",
      value: '145',
    },
    {
      id: 3,
      title: "Earned Balance",
      value: '$560',
    },
    {
      id: 4,
      title: "Runnig Advertismnets",
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
              <div>
                <h1 className="font-bold mb-0 text-md uppercase">Current Balance</h1>
                <p className="mb-3 text-[10px] text-gray-400">Available Amount</p>
              </div>
              <div className="text-2xl font-bold">
                <span>$</span>
                <span>56,520.45</span>
              </div>
              <div className="flex justify-between items-center gap-2 mt-4">
                <div>
                  <div className="flex items-center justify-start gap-3">
                    <img src={Earned} />
                    <span className="text-[14px] text-gray-400">Earned</span>
                  </div>
                  <div className="text-xl mt-2">$2,000.00</div>
                </div>
                <div>
                  <div className="flex items-center justify-start gap-3">
                    <img src={Withdraw} />
                    <span className="text-[14px] text-gray-400">Withdrawal</span>
                  </div>
                  <div className="text-xl mt-2 text-right">$520.00</div>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                  <button className="LoginBtn text-white CorenerRound h-[50px] w-full text-[14px] font-normal leading-normal tracking-[0.26px] capitalize">
                  Withdraw
                </button>
              </div>
          </div>

          <div className="border  CorenerRound custom_bg_dashboard p-6 text-white mb-5 w-full md:w-3/5">
            <div>
              <h1 className="font-bold mb-0 text-md uppercase">Account Stats</h1>
              <p className="mb-3 text-[10px] text-gray-400">Account Details</p>
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
          <div className="flex justify-between items-start md:flex-row flex-col">
            <div className="flex justify-start flex-col gap-1 items-start mb-2 w-full">
              <h1 className="font-bold mb-0 text-md uppercase text-white">Transactions History</h1>
              <p className="mb-3 text-[10px] text-gray-400">Your earning and witdrawals</p>
            </div>

            <div className="flex justify-between items-center gap-4 md:flex-row flex-col w-full md:w-auto mb-4 md:mb-0">
              <select className="w-full md:w-72 bg-transparent outline-none text-white text-sm font-light leading-normal GamesSearch h-[44px] flex items-center px-3 py-2 space-x-4 appearance-none">
                <option value=''>Filter By</option>
              </select>
              <button className="LoginBtn text-white CorenerRound h-[40px] w-36 text-[14px] font-normal leading-normal tracking-[0.26px] capitalize ">
              Export to CSV
                </button>
            </div>
          </div>

            <div className="overflow-x-auto">
            <div className="border custom_bg_dashboard p-3 px-6 text-white mb-0 md:w-full flex justify-between items-center text-left font-bold text-sm w-[1000px]">
                    <div className=" w-[20%]">
                      Player Name
                    </div>

                    <div className=" w-[20%]">
                      Game Name
                    </div>

                    <div className=" w-[20%]">
                      Date
                    </div>

                    <div className=" w-[20%]">
                      Type
                    </div>

                    <div className=" w-[8%]">
                      Amount
                    </div>
              </div>
              {
                [1,2,3,4,5].map((item, index) => (
                  <div className={`border  p-3 px-6 text-white mb-0 md:w-full flex justify-between items-center ${index % 2 === 0 ? 'bg-[#2B2B2B]' : 'custom_bg_dashboard'} border-none  w-[1000px]`}>
                      <div className="flex gap-2 items-center  w-[20%]">
                          <img src={UserIcon} className="object-cover w-10 h-10 rounded-full" />
                          <span className="text-xs">Ahmad Donin</span>
                        </div>
                        <div className="flex items-center gap-3  w-[20%]">
                          <img src={BoxGame} className="object-cover w-12 h-8 CorenerRound" />
                            <div>
                              <div className="font-normal text-xs">Blades In the Dark</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center text-xs  w-[20%]">
                          16-04-2024 09:45 PM
                        </div>

                        <div className="flex gap-2 items-center text-xs  w-[20%]">
                          Withdraw
                        </div>

                        <div className={`flex items-center text-xs  w-[8%] ${index % 2 === 0 ? 'text-red-400' : 'text-green-400'}`}>
                         {index % 2 === 0 ? '-' : '+'} $25.00
                        </div>
                  </div>
                      
                ))
              }
              
             
            </div>
         
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
