import React, { useState } from "react";
import { MainLayout, DashboardLayout } from "../../Layouts";
import { BottomHeaderSlider, GameCard, HeaderSlider } from "../../components";
import { FavCardimg, SearchIcon, SortIcon } from "../../assets";
import { FaChevronDown } from "react-icons/fa";
import Slider from "../../components/Slider";
import MasterCard from "../../components/MasterCard";
import Card from "../../components/Carousel/Card";
import Carroussel from "../../components/Carousel/MainCarousel";
import BarBottom from "./../../assets/images/barblack.svg";
import BoxGame from "./../../assets/images/boxgame.svg";
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import PlusCard from "./../../assets/images/plus_box_card.svg";



const Dashboard = () => {

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

  const [likegames, setLikeGames] = useState(games_list);

  const CarBoxes = ({title, smalltext, gamemap, exploretext}) => {
    console.log(gamemap, "GameMaps")
      return (
        <div className="border border-gray-700 CorenerRound custom_bg_dashboard p-6 w-full text-white mb-5">
          <div>
            <h1 className="font-bold mb-0 text-md">{title}</h1>
            <p className="mb-3 text-[10px] text-gray-400">{smalltext}</p>
          </div>
          <div class="flex justify-between items-center gap-2 flex-wrap">
            {
              gamemap.map((item, index) => (
                <div className="games_boxes" key={'game_'+index}>
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
        <CarBoxes title={'GAMES YOU MIGHT LIKE'} smalltext={'Auto suggested for you!'} gamemap={likegames} exploretext={'Explore more Like This'} />
        <CarBoxes title={'ACTIVE PLAYS'} smalltext={'Games you are part of!'} gamemap={likegames} exploretext={'Find new games'} />
        <CarBoxes title={'FAVOURITE GAMES'} smalltext={'Games you wish to play!'} gamemap={likegames} exploretext={'Find new games'} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
