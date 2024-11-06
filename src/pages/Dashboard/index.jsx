import React, { useEffect, useState } from "react";
import { MainLayout, DashboardLayout } from "../../Layouts";
import { FavCardimg, SearchIcon, SortIcon, StarIcon } from "../../assets";
import { FaChevronDown } from "react-icons/fa";
import Slider from "../../components/Slider";
import Card from "../../components/Carousel/Card";
import Carroussel from "../../components/Carousel/MainCarousel";
import BarBottom from "./../../assets/images/barblack.svg";
import BoxGame from "./../../assets/images/boxgame.svg";
import { useParams, useLocation } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import PlusCard from "./../../assets/images/plus_box_card.svg";
import CUP from "./../../assets/images/cup.svg";
import UserIcon from "./../../assets/images/master.jpg";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import MasterCard from "../../components/GameCard";

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
      title: "Runnig Advertismnets",
      value: '4',
    },
    {
      id: 2,
      title: "Average Session Length",
      value: '40 minutes',
    },
    {
      id: 3,
      title: "Website Members Since",
      value: '2024',
    },
    {
      id: 4,
      title: "Total Advertismnets",
      value: '10',
    },
    {
      id: 5,
      title: "Total Game Hours",
      value: '140',
    },
    {
      id: 6,
      title: "Total Earning",
      value: '$2,500',
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

  const CarBoxes = ({title, smalltext, gamemap, exploretext}) => {
    // console.log(gamemap, "GameMaps")
      return (
        <div className="border border-gray-700 CorenerRound custom_bg_dashboard p-6 w-full text-white mb-5">
          <div>
            <h1 className="font-bold mb-0 text-md">{title}</h1>
            <p className="mb-3 text-[10px] text-gray-400">{smalltext}</p>
          </div>
          <div class="flex justify-between items-center gap-2 flex-wrap">
            {
              gamemap.map((item, index) => (
                <div className="games_boxes  hover:scale-110" key={'game_'+index}>
                  <img src={BoxGame} alt="FavCardimg.svg" className="object-cover w-full" />
                  <div className="p-4 flex justify-between items-start">
                    <div>
                      <h1 className="font-bold text-sm mb-2">{item.title}</h1>
                      <p className="text-[11px]">{item.description}</p>
                    </div>
                    <div className="flex items-center text-sm gap-1">
                      <FaStar color="#FFB571" size={16} />
                      <span className="text-[12px] mt-1">3.5</span>
                    </div>
                  
                  </div>
                </div>
              ))
            }
            <div className="games_boxes flex flex-col justify-center items-center gap-6 h-[260px] cursor-pointer">
              <img src={PlusCard} className="h-10" />
              <p className="text-[10px]">{exploretext}</p>
            </div>
            
          </div>
        </div>
      );
  
  };
  return (
    <DashboardLayout>
      <div className="mb-6 mx-auto w-11/12">
        <div className="flex justify-between items-start gap-4 md:flex-row flex-col">
          <div className="border  CorenerRound custom_bg_dashboard p-6 text-white mb-5 w-full md:w-3/5">
            <div>
              <h1 className="font-bold mb-0 text-md uppercase">{isProfile?'Game Master Profile Overview':'Profile Overview'}</h1>
              <p className="mb-3 text-[10px] text-gray-400">Stats displayed for the user</p>
            </div>
            <div className="flex justify-between items-center flex-wrap gap-6">
              {
                stats.map((item, index) => (
                  <div className="mixing_bg" key={'stats_'+index}>
                    <p className="text-[12px] mb-2">{item.title}</p>
                    <div className="text-white font-bold text-md">{item.value}</div>
                  </div>
                ))
              }
            </div>
          </div>
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
              <div className="custom_pills_dashboard flex justify-between items-center gap-2 mt-3">
                <div>People Registered for this Match</div>
                <div>15</div>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={BoxGame}  className="h-10 w-10 rounded-full" />
                      <div className="text-white text-sm">Game Title</div>
                    </div>
                    <div className="text-[11px]">20 August</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={BoxGame}  className="h-10 w-10 rounded-full" />
                      <div className="text-white text-sm">Game Title</div>
                    </div>
                    <div className="text-[11px]">20 August</div>
                </div>
              </div>
          </div>

          
        </div>
      {
        !isProfile &&
        <>
          <CarBoxes title={'GAMES YOU MIGHT LIKE'} smalltext={'Auto suggested for you!'} gamemap={likegames} exploretext={'Explore more Like This'} />
          <CarBoxes title={'ACTIVE PLAYS'} smalltext={'Games you are part of!'} gamemap={likegames} exploretext={'Find new games'} />
          <CarBoxes title={'FAVOURITE GAMES'} smalltext={'Games you wish to play!'} gamemap={likegames} exploretext={'Find new games'} />
        </>
      }
      {
        isProfile &&
        <>
          <div className="border  CorenerRound custom_bg_dashboard p-6 text-white mb-5 w-full">
              <div>
                <h1 className="font-bold text-md uppercase mb-2">About Me</h1>
                <div className="text-[12px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </div>
              </div>
          </div>

          <div>
            <h1 className="font-bold text-md uppercase mb-8 text-white">GAME MASTER CURRENT ADVERTISEMENTS</h1>
            <div className="flex justify-center items-center gap-4 flex-wrap profile_game_cards">
              <MasterCard />
              <MasterCard />
              <MasterCard />
              <MasterCard />
              <MasterCard />
              <MasterCard />
            </div>
          </div>

        </>
      }
        <div className="mt-10">
            <div className="flex justify-center flex-col gap-1 items-center mb-4">
              <h1 className="font-bold mb-0 text-md uppercase text-white">Profile Overview</h1>
              <p className="mb-3 text-[10px] text-gray-400">What other people think about this user</p>
            </div>
            <div class="md:columns-3 gap-4 space-y-4 text-white">
            {
                reviews.map((item, index) => (  
                  <div className="border  CorenerRound custom_bg_dashboard p-6 text-white mb-5">
                <div className="flex items-center gap-3">
                  <img src={UserIcon} className="w-16 h-16 rounded-full border-2 object-cover border-[#E6E6E6]" />
                  <div>
                    <p className="text-sm mb-2 font-semibold">{item.title}</p>
                    <p className="flex items-center gap-1">
                      <FaStar color={'#FFB571'} /><FaStar color={'#FFB571'} /><FaStar color={'#FFB571'} /><FaStar color={'#FFB571'} /><FaRegStar />
                      <span>4.0</span>
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-[12px]" dangerouslySetInnerHTML={{__html: item.value}}>
                </div>
              </div>
              ))
            }
          </div>

          <div className="flex justify-center my-20">
            <button className="MasterBtn text-white CorenerRound h-[50px] w-[180px] text-[14px] font-normal leading-normal tracking-[0.26px] capitalize">
              Leave a review
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
