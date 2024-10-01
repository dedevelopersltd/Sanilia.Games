import React from "react";
import { Footer, Navbar } from "../../components";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/images/logo-icon.svg";
import Logout from "../../assets/images/logout.svg";
import UserBg from "./../../assets/images/user_b.svg";
import UserIcon from "./../../assets/images/user_icon.svg";
import FB from "./../../assets/images/fb.svg";
import Social2 from "./../../assets/images/social_2.svg";
import Youtube from "./../../assets/images/youtube.svg";
import Plus from "./../../assets/images/plus.svg";
import { GiWallet } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";




const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="w-full">
        <div className="bg-[#0F0F0F] w-[120px] fixed h-screen left-0 top-0 bottom-0 p-3 custom_border_dashboard ">
          <div className="flex flex-col justify-between items-center h-full">
            <div>
                <div className="flex justify-center">
                  <Link to="/">
                    <img src={LogoIcon} className="h-14" alt="" />
                  </Link>
                </div>
              
                <div className="mt-20 flex justify-center items-center gap-10 flex-col">
                  <div className="icon_rounded active">
                      <lord-icon
                        src="https://cdn.lordicon.com/wmwqvixz.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                        style={{width: "30px", height: "30px"}} />
                  </div>
                  <div className="icon_rounded">
                    <lord-icon
                      src="https://cdn.lordicon.com/gjjvytyq.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{width: "30px", height: "30px"}} />
                  </div>
                  <div className="icon_rounded">
                  <lord-icon
                      src="https://cdn.lordicon.com/ayhtotha.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{width: "30px", height: "30px"}} />
                  </div>
                  <div className="icon_rounded">
                    <lord-icon
                    src="https://cdn.lordicon.com/hrjifpbq.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{width: "30px", height: "30px"}} />
                  </div>
                </div>
            </div>

            <div className="flex justify-center mb-4 ">
              <div className="icon_rounded">
                <img src={Logout} className="h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-[120px] relative box-border">
          <div className="w-full relative">
            <div style={{backgroundImage: `url(${UserBg})`}} className={`bg-cover bg-center w-full h-[450px] relative flex flex-col justify-end`}>
              <div className="absolute w-full top-0 left-0 p-3 custom_bg_header_user">
                  <div className="flex justify-between items-center p-1">
                      <div></div>
                      <div className="flex gap-4 justify-center items-center">
                          <div className="wallet_balance rounded-full text-white p-2 px-6 flex gap-2 justify-center items-center">
                            <GiWallet size={18} />
                            <span>303.00</span>
                          </div>
                          <div className="wallet_balance rounded-lg text-white p-1 flex gap-2 justify-center items-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/lznlxwtc.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{width: "26px", height: "26px"}} />
                          </div>
                          <div className="">
                              <img src={UserIcon} alt="" className="h-12 w-12 rounded-full object-cover" />
                          </div>
                      </div>
                  </div>
              </div>

              <div className="flex justify-between items-center mb-6 mx-auto w-11/12">
                  <div className="flex items-center gap-10 w-[50%]">
                    <img src={UserIcon} className="h-48 w-48 rounded-full"  />
                    <div className="">
                        <div className="flex justify-start gap-6 items-center">
                          <img src={FB} />
                          <img src={Social2} /> 
                          <img src={Youtube} />
                          <img src={Plus} />
                        </div>
                        <div className="mt-5">
                          <div className="mb-2 flex items-center gap-3">
                            <h1 className="text-white text-2xl font-semibold">GAME MASTER NAME</h1>
                            <span className="text-[#C3C3C3] text-[12px]">She/Him</span>
                          </div>
                          <p className="text-[#C3C3C3] text-[12px]">dolor sit amet consectetur. Odio turpis nisl scelerisque aliquam commodo odio dolor sit amet consectetur.</p>
                        </div>
                        <div className="flex justify-start items-center gap-2 mt-3">
                          <div className="custom_pills_dashboard">Tycoon</div>
                          <div className="custom_pills_dashboard">Gaming</div>
                          <div className="custom_pills_dashboard">Racing</div>
                          <img src={Plus} />
                        </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="text-semibold text-white text-sm">Intresting</div>
                    <div className="flex justify-start items-center gap-2 mt-3 mb-4">
                      <div className="custom_pills_dashboard">Tycoon</div>
                      <div className="custom_pills_dashboard">Gaming</div>
                      <div className="custom_pills_dashboard">Racing</div>
                      <img src={Plus} />
                    </div>
                    <div className="text-semibold text-white text-sm">Ratings</div>
                    
                    <div className="flex justify-start items-center gap-2 mt-3 mb-4">
                      <FaStar color="#FFB571" size={20} />
                      <FaStar  color="#FFB571" size={20} />
                      <FaRegStarHalfStroke  color="#FFB571" size={20} />
                      <FaRegStar  color="white" size={20} />
                      <FaRegStar  color="white" size={20} />
                      <div className="text-white ml-2">
                        <span className="font-semibold">3.5</span> 
                        <span className="text-[12px] ml-2">(234)</span>
                      </div>
                      
                    </div>
                  </div>
              </div>
            </div>

          </div>
          <div className="mt-6">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
