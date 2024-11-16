import React, { useState, useRef, useEffect } from "react";
import { Footer, Navbar } from "../../components";
import LogoIcon from "../../assets/images/logo-icon.svg";
import Logout from "../../assets/images/logout.svg";
import UserBg from "./../../assets/images/user_b.svg";
import UserIcon from "./../../assets/images/master.jpg";
import FB from "./../../assets/images/fb.svg";
import Social2 from "./../../assets/images/social_2.svg";
import Youtube from "./../../assets/images/youtube.svg";
import Plus from "./../../assets/images/plus.svg";
import { GiWallet } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Bars from "./../../assets/images/advertisement.svg";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, selectAccessToken, selectUser, setUser } from "../../store/userSlice";
import AboutMe from "../../components/popups/about-me";
import httpRequest from "../../axios";
import { UPDATE_PROFILE } from "../../constants/apiEndPoints";
import toast from "react-hot-toast";
import useUnauthenticated from "../../hooks/useUnauthentication";
import AddIntrest from "../../components/popups/intrests";
import ChangePassword from "../../components/popups/change-password";
import AddSocialLinks from "../../components/popups/add-social-links";
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaSnapchat, FaPinterest, FaTiktok, FaDiscord, FaTwitch, FaReddit, FaSteam, FaXbox, FaPlaystation, FaGithub
} from 'react-icons/fa';
import { LuFolderEdit } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";



const getSocialIcon = (socialName) => {
  const iconProps = { color: 'white', size: 26 }; // Default icon color and size

  switch (socialName) {
    case 'Facebook':
      return <FaFacebook {...iconProps} />;
    case 'Twitter':
      return <FaTwitter {...iconProps} />;
    case 'Instagram':
      return <FaInstagram {...iconProps} />;
    case 'LinkedIn':
      return <FaLinkedin {...iconProps} />;
    case 'YouTube':
      return <FaYoutube {...iconProps} />;
    case 'Snapchat':
      return <FaSnapchat {...iconProps} />;
    case 'Pinterest':
      return <FaPinterest {...iconProps} />;
    case 'TikTok':
      return <FaTiktok {...iconProps} />;
    case 'Discord':
      return <FaDiscord {...iconProps} />;
    case 'Twitch':
      return <FaTwitch {...iconProps} />;
    case 'Reddit':
      return <FaReddit {...iconProps} />;
    case 'Steam':
      return <FaSteam {...iconProps} />;
    case 'Xbox':
      return <FaXbox {...iconProps} />;
    case 'PlayStation':
      return <FaPlaystation {...iconProps} />;
    case 'GitHub':
      return <FaGithub {...iconProps} />;
    default:
      return null;
  }
};



const DashboardLayout = ({ children }) => {
  const user = useSelector(selectUser);
  const location = useLocation();
  const [signup, setSignup] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const hasProfile = location.pathname.includes("profile");
  const [isOpen, setIsOpen] = useState(false);
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [addIntrestOpen, setAddIntrestOpen] = useState(false);
  const [addSocialLinkOpen, setAddSocialLinkOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector(selectAccessToken)
  const handleUnauthenticated = useUnauthenticated()
  const [changePasswordOpen ,setChangePasswordOpen] = useState(false)



  const [profileImage, setProfileImage] = useState(user?.image);
  const [coverImage, setCoverImage] = useState(user?.coverImage);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [selectedGames, setSelectedGames] = useState(user?.gamesIntrest);

  const normalizedCoverImage = coverImage?.replace(/\\/g, '/');
  const aboutText = user?.aboutMe || "";

  // Truncate the text to 100 characters
  const truncatedText = aboutText.length > 100 ? aboutText.slice(0, 100) + "..." : aboutText;



  // Handle file selection and preview
  const handleFileChange = async (e , type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if(type === 'profile'){
          setProfileImage(reader.result);

        }else{
          setCoverImage(reader.result);
        }
      };
      reader.readAsDataURL(file);

      // console.log('token' ,  accessToken)
  
      try {
        // const formData = new FormData();
        // formData.append('image', file);

        const payload  = type === 'profile' ? {image: file} : {coverImage: file}
  
        const response = await httpRequest.put(UPDATE_PROFILE, payload, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`, 
          },
        });
  
        if (response.status === 200 || response.status === 201) {
          toast.success(response?.data?.message);
          dispatch(setUser({
            user: response.data.user,
            accessToken
          }));
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "An unexpected error occurred");
        if (error?.response?.status === 401) {
          handleUnauthenticated();
        }
        console.error("Error response:", error?.response?.data);
      }
    }
  };

  const [profileLoading , setProfileLoading] = useState(false)


  const handleUpdateProfile =  async(e) =>{
    setProfileLoading(true)
    e.preventDefault();
    try {
      const response = await httpRequest.put(UPDATE_PROFILE, {firstName , lastName , gamesIntrest: selectedGames},
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
                }
            }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success(response?.data?.message);
        dispatch(setUser(
           {
            user: response.data.user,
            accessToken
           }

        ))

        setSignup(false)
      } 
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred"
      );
      if(
        error?.response?.status === 401
      ){
        handleUnauthenticated()
      }
      console.error("Error response:", error?.response?.data);
    }finally{
      setProfileLoading(false)
    }
  }
  

  const path = window.location.pathname;
  const lastSlashIndex = path.lastIndexOf("/");
  const slugFromUrl =
    lastSlashIndex !== -1 ? path.substring(lastSlashIndex + 1) : "";
    console.log("slugFromUrl", slugFromUrl);
  const array_include = ["my", "games", "wallet", "chat", "update"];
  const shouldHide = array_include.some((value) => slugFromUrl.includes(value));

  const gamesList = [
    { id: 1, name: "Assassins Creed" },
    { id: 2, name: "Red Dead Redemption 2" },
    { id: 3, name: "Grand Theft Auto V" },
    { id: 4, name: "Resident Evil 2" },
    { id: 5, name: "The Last of Us" },
    { id: 6, name: "The Legend of Zelda" },
    { id: 7, name: "Uncharted 4" },
    { id: 8, name: "Uncharted 5" },
    { id: 9, name: "The Last of Us Part II" },
    { id: 10, name: "God of War" },
  ];

  const handleSelectChange = (event) => {
    const selectedGameId = event.target.value;
    const selectedGame = gamesList.find(
      (game) => game.id.toString() === selectedGameId
    );

    if (
      selectedGame &&
      !selectedGames.some((game) => game.id === selectedGame.id)
    ) {
      setSelectedGames([...selectedGames, selectedGame]);
    }
    // console.log(selectedGames);
    event.target.value = ""; // Reset the select to default
  };

  // const handleSelectChange = (event) => {
  //   const selectedGameId = event.target.value;
  //   console.log('selectedGameId', selectedGameId);
    
  //   const selectedGame = gamesList.find(
  //     (game) => game.id.toString() === selectedGameId
  //   );
    
  //   console.log('selectedGame', selectedGame);
    
  //   if (
  //     selectedGame &&
  //     !formData.gamesIntrest.some((game) => game.id === selectedGame.id)
  //   ) {
  //     setSelectedGames([...selectedGames, selectedGame]);
  //   }
    
  //   console.log('games', formData.gamesIntrest);
    
  //   event.target.value = ""; // Reset the select to default
  // };

  const removeGame = (id) => {
    setSelectedGames(selectedGames.filter((game , index) => index !== id));
  };

  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
 
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    
  }, [isOpen, user]);

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <>
      <div className="w-full">
        <div
          ref={sidebarRef}
          className={`bg-[#0F0F0F] w-[120px] fixed h-screen left-0 top-0 bottom-0 p-3 custom_border_dashboard  transition-transform duration-500 ${
            isOpen
              ? "translate-x-0 md:translate-x-full z-20"
              : "-translate-x-56 md:translate-x-0"
          } `}
        >
          <div className="flex flex-col justify-between items-center h-full z-40">
            <div>
              <div
                className="absolute -right-3 top-0 cursor-pointer md:hidden block"
                onClick={() => setIsOpen(false)}
              >
                <IoCloseCircle color="red" size={30} />
              </div>
              <div className="flex justify-center">
                <Link to="/">
                  <img src={LogoIcon} className="h-14" alt="" />
                </Link>
              </div>

              <div className="mt-14 flex justify-center items-center gap-10 flex-col">
                <Link
                  to="/dashboard"
                  className={`icon_rounded ${
                    slugFromUrl == "dashboard" || slugFromUrl == "|"
                      ? "active"
                      : ""
                  }`}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/wmwqvixz.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>
                <Link
                  to="/my/games"
                  className={`icon_rounded ${
                    slugFromUrl == "games" ? "active" : ""
                  }`}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/eouimtlu.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ width: "30px", height: "30px" }}
                  />
                  {/* <img src={Bars} style={{width: "24px", height: "24px"}} alt="" /> */}
                </Link>
                <Link
                  to="/wallet"
                  className={`icon_rounded ${
                    slugFromUrl == "wallet" ? "active" : ""
                  }`}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/gjjvytyq.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>
                <Link
                  to="/chat"
                  className={`icon_rounded ${
                    slugFromUrl == "chat" ? "active" : ""
                  }`}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/ayhtotha.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>
                <Link
                  to="/profile/update"
                  // onClick={() => setSignup(true)}
                  className={`icon_rounded ${
                    slugFromUrl == "profile" ? "active" : ""
                  }`}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/hrjifpbq.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>
              </div>
            </div>

            <div className="flex justify-center mb-4 ">
              <div onClick={handleLogout} className="icon_rounded">
                <img src={Logout} className="h-6" alt="Logout" />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-0 md:ml-[120px] relative box-border">
          <div className="sticky w-full top-0 left-0 p-3 custom_bg_header_user box-border z-10">
            <div className="flex justify-between items-center p-1">
              <div>
                <div className="md:hidden block">
                  <GiHamburgerMenu
                    color="white"
                    size={30}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
              </div>
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
                    style={{ width: "26px", height: "26px" }}
                  />
                </div>
                <div className="relative">
                  <img
                    onClick={() => setDropdown(!dropdown)}
                    src={user?.image || UserIcon}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover border-2 border-[#E6E6E6]"
                  />
                  {dropdown  && (
                    <div
                      id="dropdown"
                      class="absolute z-10 -left-[130px] top-14  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        {/* <li>
                          <Link
                            to="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </Link>
                        </li> */}
                        <li>
                          <div
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                            onClick={()=> { setChangePasswordOpen(true); setDropdown(false); }}
                          >
                            Change Password
                          </div>
                        </li>

                        <li>
                          <div
                            onClick={handleLogout}
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                          >
                            Sign out
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <div
              style={{
                backgroundImage: shouldHide ? "none" : `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${normalizedCoverImage || UserBg })`,
              }}
              className={`bg-cover bg-center w-full ${
                shouldHide ? "h-0" : "h-[600px] md:h-[450px]"
              } relative flex flex-col justify-end`}
            >
                {shouldHide ? "" :
                <>
              
                    <label
                      htmlFor="cover-pic-upload"
                      className="text-[#929292] text-sm absolute right-0 top-0 flex items-center gap-2 p-4 cursor-pointer hover:text-white"
                    >
                      <LuFolderEdit color={'white'} /> Update Cover
                    </label>
                    <input
                      id="cover-pic-upload"
                      type="file"
                      accept="image/*,image/svg+xml"
                      className="hidden"
                      onChange={(e)=> handleFileChange(e, 'cover') }
                    />
                  </>
                }
              {shouldHide ? (
                ""
              ) : (
                <div className="flex justify-between items-start md:items-center mb-6 mx-auto w-11/12 flex-col md:flex-row">
                  <div className="flex items-center gap-4 flex-col md:flex-row w-full md:w-[50%]">
                    <div className="relative w-[200px]">
                    <img
                      src={profileImage || UserIcon}
                      alt="pp"
                      className="h-36 w-36 md:h-[150px] md:w-[150px] rounded-full object-cover border-4 border-[#E6E6E6]"
                    />
                    <label
                      htmlFor="profile-pic-upload"
                      className="text-[#929292] text-sm absolute right-6 top-2 flex items-center gap-2 p-2 cursor-pointer hover:text-white bg-[#fff] rounded-full hover:bg-[#12d277]"
                    >
                      <LuFolderEdit color={'black'} size={18} />
                    </label>
                    <input
                      id="profile-pic-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => handleFileChange(e, 'profile') }
                    />
                    </div>
                    <div className="w-[90%]">
                      <div className="flex justify-center md:justify-start gap-4 items-center ">
                        {
                          user?.socialLinks?.map((social , index)=>(
                           <a href={social?.link}  target="_blank" rel="noreferrer" >{getSocialIcon(social?.socialName)}</a>

                          ))
                        }
                        {/* <img src={Social2} alt="img"/> */}
                        {/* <img src={Youtube} alt="img"/> */}
                        <div className={`cursor-pointer flex items-center ${user?.socialLinks.length == 0 ? 'gap-2': ''}`} onClick={()=> setAddSocialLinkOpen(true)}>
                          <img src={Plus} alt="add" />
                          {
                            user?.socialLinks.length == 0 &&
                            <>
                              <span className="text-white text-xs">Add Social Media Links</span>
                            </>
                          }
                        </div>
                      </div>
                      <div className="mt-5">
                        <div className="mb-2 flex items-center gap-3 justify-center md:justify-start">
                          <h1 className="text-white text-2xl font-semibold">
                            {user?.firstName} {user?.lastName}
                          </h1>
                          <span className="text-[#C3C3C3] text-[12px]">
                            {/* She/Him */}
                          </span>
                        </div>
                        <p className="text-[#C3C3C3] text-[12px] md:text-left text-center flex items-center">
                          {truncatedText || ""}
                          <div className={`cursor-pointer flex items-center ${aboutText.length == 0 ? 'gap-2': ''}`} onClick={() => setAboutMeOpen(true)}>
                          {
                            aboutText.length > 0 ?
                            <>
                             <FiEdit className="ml-2" color={'white'} />
                            </>
                            :
                            <img
                              src={Plus}
                              alt="img"
                            />
                          }
                          
                          {
                            aboutText.length == 0 &&
                              <>
                                <span className="text-white text-xs">Write About me</span>
                              </>
                            }
                          </div>
                        </p>
                        
                      </div>
                      
                    </div>
                  </div>
                  <div className="w-full md:w-auto">
                    <div className="text-semibold text-white text-sm">
                      Interests
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-2">
                      <div className={`flex justify-center md:justify-start items-center gap-2 mt-3 mb-3 ${ (user?.intrests).length == 0 ?'md:mb-8' : 'md:mb-4' }  ${(user?.intrests).length > 3 && 'overflow-auto w-72 mb-4'}`}>
                        {
                          user?.intrests?.map((intrest , index)=>(
                            <div key={index} className="custom_pills_dashboard">{intrest}</div>

                          ))
                        }
                      </div>
                        {/* <div className="custom_pills_dashboard">Gaming</div>
                        <div className="custom_pills_dashboard">Racing</div> */}
                        <img src={Plus} alt="add"
                          onClick={() => setAddIntrestOpen(true)}
                          />
                      </div>
                    {/* <div className="flex justify-center md:justify-start items-center gap-2 mt-3 mb-4">
                      <div className="custom_pills_dashboard">Tycoon</div>
                      <div className="custom_pills_dashboard">Gaming</div>
                      <div className="custom_pills_dashboard">Racing</div>
                      <img src={Plus} />
                    </div> */}
                    <div className="text-semibold text-white text-sm">
                      Ratings
                    </div>

                    <div className="flex justify-center md:justify-start items-center gap-2 mt-3 mb-4">
                      <FaRegStar color="white" size={20} />
                      <FaRegStar color="white" size={20} />
                      <FaRegStar color="white" size={20} />
                      <FaRegStar color="white" size={20} />
                      <FaRegStar color="white" size={20} />
                      <div className="text-white ml-2">
                        <span className="font-semibold">0</span>
                        <span className="text-[12px] ml-2">(0)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>

      {signup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer  ">
          <div class="flex justify-center items-center h-full w-full">
            <div class="center_popup_div p-10 px-6 md:px-14 CorenerRound sm:w-[90%] md:w-[43%] bounce-enter">
              <div
                className="flex justify-end cursor-pointer absolute right-3 top-3"
                onClick={() => setSignup(false)}
              >
                <IoIosCloseCircle color="white" size={30} />
              </div>
              <form method="post">
                <h1 class="text-4xl font-bold text-center text-white uppercase mb-10">
                  Update <span className="MainHeaderHeading">Profile</span>
                </h1>
                <div class="mb-6 flex justify-between items-center gap-4 w-full">
                  <input
                    type="text"
                    name="first_name"
                    className="popup_input_custom w-full"
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    name="last_name"
                    className="popup_input_custom w-full"
                    placeholder="Last Name"
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="popup_input_custom w-full"
                    placeholder="Email Address"
                    required
                    disabled
                    value={user?.email}
                  />
                </div>

                <div class="mb-6">
                  <select
                    name="games"
                    className="popup_input_custom w-full uppercase selectoption"
                    onChange={handleSelectChange}
                  >
                    <option value="">Select Games You are interested?</option>
                    {gamesList.map((game) => (
                      <option
                        key={game.id}
                        value={game.id}
                        disabled={selectedGames.some(
                          (selected) => selected.id === game.id
                        )}
                      >
                        {game.name}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedGames.length > 0 && (
                  <div className="flex flex-wrap gap-2 items-center">
                    {selectedGames.map((game , index) => (
                      <span
                        key={index}
                        className="bg-[#1C1C1C] p-3 pl-5 rounded-3xl text-white flex items-center gap-2 text-[12px] uppercase font-semibold"
                      >
                        {game.name}
                        <IoMdCloseCircleOutline
                          color="#F36464"
                          className="cursor-pointer"
                          onClick={() => removeGame(index)}
                        />
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-center mt-8">
                  <button
                    className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                    onClick={handleUpdateProfile}
                    disabled={profileLoading}
                  >
                    {profileLoading ? 'Loading' : 'UPDATE PROFILE'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <AboutMe aboutMeOpen={aboutMeOpen} setAboutMeOpen={setAboutMeOpen} />
      <AddIntrest addIntrestOpen={addIntrestOpen} setAddIntrestOpen={setAddIntrestOpen} />
      <ChangePassword changePasswordOpen={changePasswordOpen} setChangePasswordOpen={setChangePasswordOpen} />
      <AddSocialLinks addSocialLinkOpen={addSocialLinkOpen} setAddSocialLinkOpen={setAddSocialLinkOpen}/>
    </>
  );
};

export default DashboardLayout;
