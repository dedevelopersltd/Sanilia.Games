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
import { IoSendSharp } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";


const Chat = () => {

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

  const ChatsUsers = [
    {
      id: 1,
      title: "Marina Jolly",
      value: 'the background image will be hidden based...',
    },
    {
      id: 2,
      title: "Babak Shammas",
      value: 'the background image will be hidden based...',
    },
    {
      id: 3,
      title: "Alix joseph",
      value: 'the background image will be hidden based...',
    },
    {
      id: 4,
      title: "Rockstar Benj",
      value: 'the background image will be hidden based...',
    },
    {
      id: 5,
      title: "Hafsa shaikh",
      value: 'the background image will be hidden based...',
    },
    {
      id: 6,
      title: "Jackson Roy",
      value: 'the background image will be hidden based...',
    },
  ]

  const chatsArray = [
    {
      id: 1,
      name: "Babak Shammas",
      text: "That's great. I will collate all the materials from the media agency for buying locations, footfall verses media costs. I presume the plan is still to look for live locations life?",
      date: '1:58 PM',
      user: 1,
    },
    {
      id: 2,
      name: "Charlotte de Crum",
      text: "It would be great to sync with you both EOD to have a quick run through before tomorrow.",
      date: '1:58 PM',
      user: 0,
    },
    {
      id: 3,
      name: "Babak Shammas",
      text: "That's great. I will collate all the materials from the media agency for buying locations, footfall horns media costs. I presume the plan is still to look for live locations life?",
      date: '1:58 PM',
      user: 1,
    },
    {
      id: 4,
      name: "Babak Shammas",
      text: "That's great. I will collate all the materials from the media agency for buying locations, footfall horns media costs. I presume the plan is still to look for live locations life?",
      date: '1:58 PM',
      user: 1,
    },
    {
      id: 5,
      name: "Charlotte de Crum",
      text: "That's great. I will collate all the materials from the media agency for buying locations, footfall horns media costs. I presume the plan is still to look for live locations life?",
      date: '1:58 PM',
      user: 0,
    },
    {
      id: 6,
      name: "Charlotte de Crum",
      text: "It would be great to sync with you both EOD to have a quick run through before tomorrow.",
      date: '1:58 PM',
      user: 1,
    },
    {
      id: 5,
      name: "Charlotte de Crum",
      text: "That's great. I will collate all the materials from the media agency for buying locations, footfall horns media costs. I presume the plan is still to look for live locations life?",
      date: '1:58 PM',
      user: 0,
    },
  ]

  const [likegames, setLikeGames] = useState(games_list);
  const [stats, setStats] = useState(statsvalue);
  const [chatusers, setChatUsers] = useState(ChatsUsers);
  const [chats, setChats] = useState(chatsArray);

  const [activeIndex, setActiveIndex] = useState(null); // State to track active dropdown index

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
  };

  return (
    <DashboardLayout>
      <div className="mb-6 mx-auto w-11/12">
        <div className="flex justify-between items-stretch chat_wrap h-full md:flex-row flex-col">

          <div className="chat-left p-4 w-full md:w-1/4 flex-grow chat-left-user mb-6 md:mb-0 overflow-y-auto md:overflow-none md:h-full">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-white text-[18px] font-bold">My Chats</h1>
            </div>
            <div className="GamesSearch h-[44px] flex items-center px-4 py-2 space-x-4 CorenerRound w-full mb-4">
              <img
                className="cursor-pointer"
                src={SearchIcon}
                alt="SearchIcon.svg"
                style={{ height: "26px" }}
              />
              <input
                className="w-full bg-transparent outline-none text-white text-sm font-light leading-normal"
                type="text"
                placeholder="Search Names"
              />
            </div>
            <div className="user_chats">
            {
              chatusers.map((item, index) => (
                <div
                  key={index}
                  className={`chat-user cursor-pointer ${activeIndex === index ? "active" : ""}`}
                >
                  <div className={`flex justify-between items-center gap-0 mb-4 border-b border-b-[#4A4A4A] px-2 pb-3 pt-3 ${index === 0 ? "chat_user_bg" : ""}`}>  
                    <div className="flex justify-between items-center mb-0 gap-2">
                      <img src={UserIcon} className="h-12 w-12 rounded-full object-cover" />
                      <div className="">
                        <div className="text-white text-[13px] font-semibold">{item.title}</div>
                        <div className="text-gray-400 text-[11px] w-2/3 overflow-hidden whitespace-nowrap text-ellipsis">{item.value}</div>
                      </div>
                    </div>
                    <div>
                      {
                        index % 2 === 0 && (
                          <div className="text-xs cursor-pointer rounded-full w-6 h-6 text-white bg-[#15D274] flex justify-center items-center mr-4">{index+1}</div>
                        )
                      }
                    
                    </div>
                  </div>
                </div>
              ))
            }
            </div>
            
          </div>


          <div className="chat-left p-4 w-full md:w-3/4 flex-grow h-full !border-l-0">
            <div className="chat_header mb-4 border-b border-b-[#363636] pb-3">
                <div className="flex justify-start items-center mb-0 gap-4">
                  <img src={UserIcon} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <h1 className="text-white text-[14px] font-normal">Marina Jolly</h1>
                    <p className="text-gray-400 text-[10px]">Last seen 5h ago</p>
                  </div>
                </div>
            </div>
            <div className="h-[490px] overflow-y-auto">
            {chats.map((item, index) => (
              <div key={"chat_"+index} className={`flex items-center ${item.user== 0 ? "justify-start flex-row-reverse" : "justify-start"} gap-3  mb-5`}>
                <div>
                  <img src={UserIcon} className="w-8 h-8 object-cover rounded-full" />
                </div>
                <div className={`p-3 ${item.user== 0 ? "chat_text_right" : "chat_text_left"} w-3/4`}>
                    <div className="text-[11px] font-semibold text-white flex items-center gap-2">
                      <span>{item.name}</span>
                      <span className="text-[10px] text-[#919191] text-normal">{item.date}</span>
                    </div>
                    <div className="text-white text-xs mt-1">{item.text}</div>
                </div>
              </div>
            ))}
            </div>
            <div>
            <div className="GamesSearch min-h-[44px] flex items-center px-4 py-2 space-x-4 CorenerRound w-full mt-4 relative">
             
              <textarea
                className="w-full resize-none bg-transparent outline-none text-white text-[12px] font-normal leading-normal"
                type="text"
                placeholder="Type a message here..."
              />
              <div className="button_chat flex items-center gap-4">
                <GrAttachment color="white" size={14} />
                <IoSendSharp color="white" size={20}/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
