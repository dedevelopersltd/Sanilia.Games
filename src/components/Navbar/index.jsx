import React, { useState, useEffect } from "react";
import { Logo, SearchIcon } from "../../assets";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility
  const [scrolled, setScrolled] = useState(false); // Scroll position for navbar background

  const [login, setLogin] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [otp, setOTP] = useState(false);
  const [changepass, setChangePass] = useState(false);
  const [signup, setSignup] = useState(false);

  // Toggle sidebar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handle_close = async() => {
    setForgot(false); 
    setIsOpen(false);
    setLogin(false);
    setOTP(false);
    setChangePass(false);
    setSignup(false);
  }

  const [selectedGames, setSelectedGames] = useState([]);
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
    const selectedGame = gamesList.find(game => game.id.toString() === selectedGameId);

    if (selectedGame && !selectedGames.some(game => game.id === selectedGame.id)) {
      setSelectedGames([...selectedGames, selectedGame]);
    }
    
    event.target.value = ''; // Reset the select to default
  };

  const removeGame = (id) => {
    setSelectedGames(selectedGames.filter(game => game.id !== id));
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[100] w-full transition-all duration-300 ${
          scrolled ? "bg-black bg-opacity-50 backdrop-blur-md" : ""
        } sm:py-4 py-4`}
      >
        <div className="w-[90%] m-auto flex justify-between items-center">
          <Link to="/">
          <img
            src={Logo}
            className="sm:h-[50px] w-auto h-[50px]"
            alt="Logo.svg"
          />
          </Link>

          {/* Desktop Menu */}
          <ul className="xl:flex hidden 2xl:gap-[68px] gap-[44px]">
            <Link to={"/"}>
              <li className="text-white text-[14px] text-sm font-semibold leading-normal tracking-[0.8px] uppercase ">
                Home
              </li>
            </Link>
            <Link to={"/games/advertisement"}>
              <li className="text-white text-[14px] text-sm font-normal leading-normal tracking-[0.8px] uppercase  hover:text-white hover:font-medium ">
                Apps & Games
              </li>
            </Link>
            {/* <Link to={"/"}>
              <li className="text-white text-[14px] text-sm font-normal leading-normal tracking-[0.8px] uppercase  hover:text-white hover:font-medium ">
                Features
              </li>
            </Link> */}
            <Link to={"/about-us"}>
              <li className="text-white text-[14px] text-sm font-normal leading-normal tracking-[0.8px] uppercase  hover:text-white hover:font-medium ">
                About Us
              </li>
            </Link>
            {/* <Link to={"/"}>
              <li className="text-white text-[14px] text-sm font-normal leading-normal tracking-[0.8px] uppercase  hover:text-white hover:font-medium ">
                Contact
              </li>
            </Link> */}
          </ul>

          {/* Desktop Search and Login */}
          <div className="xl:flex gap-8 hidden items-center">
            <img
              src={SearchIcon}
              className="cursor-pointer h-6 w-6"
              alt="SearchIcon.svg"
            />
            <button className="LoginBtn h-[51px] px-16 rounded-tr-xl rounded-bl-xl font-normal text-sm text-white"  onClick={() => {setIsOpen(false);setLogin(true)}}>
              Log in
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <IoIosMenu
            className="text-white text-[40px] xl:hidden block"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-[120] transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Black overlay */}
        <div
          className="bg-black bg-opacity-50 w-full h-full"
          onClick={toggleMenu}
        ></div>

        {/* White Sidebar */}
        <div className="bg-white w-[90%] h-full p-5 fixed left-0 top-0">
          {/* Close Icon */}
          <IoIosClose
            className="text-black text-[40px] mb-5"
            onClick={toggleMenu}
          />
          <ul className="flex flex-col gap-8">
            <Link to={"/"} onClick={toggleMenu}>
              <li className="text-black text-[20px] font-semibold uppercase">
                Home
              </li>
            </Link>
            <Link to={"/games/advertisement"} onClick={toggleMenu}>
              <li className="text-black text-[20px] font-semibold uppercase">
                Apps & Games
              </li>
            </Link>
            {/* <Link to={"/"} onClick={toggleMenu}>
              <li className="text-black text-[20px] font-semibold uppercase">
                Features
              </li>
            </Link> */}
            <Link to={"/about-us"} onClick={toggleMenu}>
              <li className="text-black text-[20px] font-semibold uppercase">
                About Us
              </li>
            </Link>
            {/* <Link to={"/"} onClick={toggleMenu}>
              <li className="text-black text-[20px] font-semibold uppercase">
                Contact
              </li>
            </Link> */}
          </ul>

          {/* Search and Login for Mobile */}
          <div className="flex gap-8 mt-10">
            <img
              src={SearchIcon}
              className="cursor-pointer"
              alt="SearchIcon.svg"
            />
            <button className="LoginBtn h-[50px] w-[150px] rounded-tr-xl rounded-bl-xl" onClick={() => {setIsOpen(false);setLogin(true)}}>
              Login
            </button>
          </div>
        </div>
      </div>

    {
      login &&
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer ">
        <div class="flex justify-center items-center h-full w-full">
          <div class="center_popup_div p-10 px-8 md:px-14 CorenerRound w-[90%] md:w-[43%] bounce-enter">
            <div className="flex justify-end cursor-pointer absolute right-3 top-3" onClick={() => handle_close()}>
            <IoIosCloseCircle color="white" size={30} />
            </div>
            <form method="post">
              <h1 class="text-4xl font-bold text-center text-white uppercase mb-10">Log <span className="MainHeaderHeading">in</span></h1>
              <div class="mb-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="popup_input_custom w-full"
                  placeholder="Email Address"
                  required 
                />
              </div>
              <div class="mb-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="popup_input_custom w-full"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-6 text-right">
                <Link to="/" className="text-white text-[12px] text-right hover:text-gray-300" onClick={() => {handle_close();setForgot(true)}}>Forgot Password?</Link>
              </div>
              <div className="flex justify-center mt-8">
                <button className="LoginBtn h-[45px] w-[150px] rounded-tr-xl rounded-bl-xl uppercase text-sm" onClick={()=> navigate('/dashboard')}>
                LOG IN
                </button>
              </div>
              <div className="mt-6 text-center">
                <Link to="/" className="text-white text-[12px] text-right hover:text-gray-300" onClick={() => {handle_close();setSignup(true)}}>Don’t have an account? <span className="MainHeaderHeading">Sign up</span></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    }

    {
      signup &&
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer  ">
        <div class="flex justify-center items-center h-full w-full">
          <div class="center_popup_div p-10 px-8 md:px-14 CorenerRound w-[90%] md:w-[43%] bounce-enter">
            <div className="flex justify-end cursor-pointer absolute right-3 top-3" onClick={() => handle_close()}>
            <IoIosCloseCircle color="white" size={30} />
            </div>
            <form method="post">
              <h1 class="text-4xl font-bold text-center text-white uppercase mb-10">Sign <span className="MainHeaderHeading">up</span></h1>
              <div class="mb-6 flex justify-between items-center gap-4 w-full">
                <input
                  type="text"
                  name="first_name"
                  className="popup_input_custom w-full"
                  placeholder="First Name"
                  required 
                />
                <input
                  type="text"
                  name="last_name"
                  className="popup_input_custom w-full"
                  placeholder="Last Name"
                  required 
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
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="popup_input_custom w-full"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="mb-6">
                <select name="games" className="popup_input_custom w-full uppercase selectoption" onChange={handleSelectChange}>
                  <option value="">Select Games You are interested?</option>
                  {gamesList.map((game) => (
                    <option
                      key={game.id}
                      value={game.id}
                      disabled={selectedGames.some(selected => selected.id === game.id)}
                    >
                      {game.name}
                    </option>
                  ))}
                </select>
              </div>
              {
                selectedGames.length > 0 && (
                  <div className="flex flex-wrap gap-2 items-center">
                    {selectedGames.map((game) => (
                      <span key={game.id} className="bg-[#1C1C1C] p-3 pl-5 rounded-3xl text-white flex items-center gap-2 text-[12px] uppercase font-semibold">
                        {game.name}
                        <IoMdCloseCircleOutline color="#F36464" className="cursor-pointer" onClick={() => removeGame(game.id)} />
                      </span>
                    ))}
                  </div>
                )
              }
             
              <div className="flex justify-center mt-8">
                <button className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm">
                CREATE ACCOUNT
                </button>
              </div>
              <div className="mt-6 text-center">
                <Link to="/" className="text-white text-[12px] text-right hover:text-gray-300" 
                onClick={() => {handle_close();setLogin(true)}}>Already have an account? <span className="MainHeaderHeading">log in</span></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    }


    {
          forgot &&
          <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer ">
            <div class="flex justify-center items-center h-full w-full">
              <div class="center_popup_div p-10 px-8 md:px-20 CorenerRound w-[90%] md:w-[43%] bounce-enter">
                <div className="flex justify-end cursor-pointer absolute right-3 top-3" onClick={() => handle_close()}>
                <IoIosCloseCircle color="white" size={30} />
                </div>
                  <h1 class="text-4xl font-bold text-center text-white uppercase mb-3">
                    {
                      changepass ?
                      <>
                        Change <span className="MainHeaderHeading">Password</span>
                      </>
                      :
                      <>
                        Reset <span className="MainHeaderHeading">Password</span>
                      </>
                    }
                    
                  </h1>
                  {
                      (forgot && !otp) &&
                  <>
                    <p className="text-white text-center text-[11px] mb-8">Please enter your email address to get an OTP Code</p>
                    <div class="mb-6">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="popup_input_custom w-full"
                        placeholder="Email Address"
                        required 
                      />
                    </div>
                  </>
                  }
                  {
                  (otp && !changepass) &&
                  <>
                    <p className="text-white text-center text-[11px] mb-8">Please enter the OTP you have received!</p>
                    <div className="flex justify-center mb-6 gap-4 custom_input_flex">
                        <input
                          type="text"
                          name="otp1"
                          class="popup_input_custom_otp"
                          placeholder=""
                          required 
                        />
                        <input
                          type="text"
                          name="otp1"
                          class="popup_input_custom_otp"
                          placeholder=""
                          required 
                        />
                        <input
                          type="text"
                          name="otp1"
                          class="popup_input_custom_otp"
                          placeholder=""
                          required 
                        />
                        <input
                          type="text"
                          name="otp1"
                          class="popup_input_custom_otp"
                          placeholder=""
                          required 
                        />
                    </div>
                  </>
                  }

                  {
                  (otp && changepass) &&
                  <>
                    <p className="text-white text-center text-[11px] mb-8">Fill below form to update your new password!</p>
                    <div class="mb-6">
                      <input
                        type="password"
                        name="new_password"
                        class="popup_input_custom w-full"
                        placeholder="New Password"
                        required 
                      />
                    </div>
                    <div class="mb-6">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="popup_input_custom w-full"
                        placeholder="Confirm Password"
                        required 
                      />
                    </div>
                  </>
                  }
                 
                  <div className="flex justify-center mt-8">
                    {
                      (forgot && !otp) &&
                      <button className="LoginBtn h-[45px] w-[150px] rounded-tr-xl rounded-bl-xl uppercase text-sm" onClick={() => 
                        {
                          setOTP(true)
                        }
                      }>
                        SUBMIT
                      </button>
                    }
                    {
                      (otp && !changepass) &&
                      <button className="LoginBtn h-[45px] w-[150px] rounded-tr-xl rounded-bl-xl uppercase text-sm" onClick={() => 
                        {
                          setChangePass(true)
                        }}
                      >
                        Verify
                      </button>
                    }

                  {
                      (otp && changepass) &&
                      <button className="LoginBtn h-[45px] w-[150px] rounded-tr-xl rounded-bl-xl uppercase text-sm" onClick={() => 
                        {
                          handle_close()
                          setChangePass(true)
                        }}
                      >
                        Submit
                      </button>
                    }
                    
                  </div>
                  <div className="mt-6 text-center">
                    <Link to="/" className="text-white text-[12px] text-right hover:text-gray-300" onClick={() => {handle_close();setLogin(true)}}>Already have an account?  <span className="MainHeaderHeading">Log in</span></Link>
                  </div>
              </div>
            </div>
          </div>
    }

    </>
  );
};

export default Navbar;
