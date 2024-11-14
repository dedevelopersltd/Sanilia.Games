import React, { useState, useEffect } from "react";
import { Logo, SearchIcon } from "../../assets";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import httpRequest from "../../axios";
import { FORGOT_PASSWORD, LOGIN, REGISTER, RESET_PASSWORD, VERIFY_OTP } from "../../constants/apiEndPoints";
import {
  selectIsAuthenticated,
  selectUser,
  setUser,
} from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility
  const [scrolled, setScrolled] = useState(false); // Scroll position for navbar background

  const [login, setLogin] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [otp, setOTP] = useState(false);
  const [changepass, setChangePass] = useState(false);
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [resetConfirmPassword, setResetConfirmPassword] = useState("");
  const [otpCode, setOtpCode] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });
  const dispatch = useDispatch();

  // Toggle sidebar
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleOTPCodeChange = (e) => {
  //   const { name, value } = e.target;
  //   setOtpCode((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  //   if (value && name !== "otp4") {
  //     const nextInput = document.querySelector(`[name=otp${parseInt(name.charAt(3)) + 1}]`);
  //     if (nextInput) {
  //       nextInput.focus();
  //     }
  //   }
  // };
  const handleOTPCodeChange = (e) => {
    const { name, value } = e.target;

    // Only update if the value is a digit (0-9)
    if (value && !/^\d$/.test(value)) return;

    setOtpCode((prevOtpCode) => ({
      ...prevOtpCode,
      [name]: value,
    }));

    // Move to the next input field automatically
    if (value && name !== "otp4") {
      const nextInput = document.querySelector(`[name=otp${parseInt(name.charAt(3)) + 1}]`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === "Backspace") {
      const prevInput = document.querySelector(`[name=otp${parseInt(e.target.name.charAt(3)) - 1}]`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const [otpLoading , setOtpLoading] = useState(false)

  const handleSubmitOTP = async() => {
    
    setOtpLoading(true)
    const fullOTP = `${otpCode.otp1}${otpCode.otp2}${otpCode.otp3}${otpCode.otp4}`;
    if(!otpCode.otp1 || !otpCode.otp2 || !otpCode.otp3 || !otpCode.otp4){
      toast.error("Please fill all OTP fields");
      setOtpLoading(false)
      return
    }

    try {
      const response = await httpRequest.post(VERIFY_OTP, {email: forgotEmail , otp: fullOTP });
      if (response.status === 200 || response.status === 201) {
        toast.success(response?.data?.message);
        setChangePass(true)
        setOtpCode({
          otp1: "",
          otp2: "",
          otp3: "",
          otp4: "",
        })
      } else {
        toast.error("Error while creating account");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred"
      );
      console.error("Error response:", error?.response?.data);
    }finally{
      setOtpLoading(false)
    }

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

  const handle_close = async () => {
    setForgot(false);
    setIsOpen(false);
    setLogin(false);
    setOTP(false);
    setChangePass(false);
    setSignup(false);
  };

  // const [gamesIntrest, setgamesIntrest] = useState([]);
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gameLevel: "Master",
    gamesIntrest: [],
  });

  // Handle change for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle game selection
  const handleSelectChange = (event) => {
    const selectedGameId = event.target.value;
    console.log('selectedGameId', selectedGameId);
    
    const selectedGame = gamesList.find(
      (game) => game.id.toString() === selectedGameId
    );
    
    console.log('selectedGame', selectedGame);
    
    if (
      selectedGame &&
      !formData.gamesIntrest.some((game) => game.id === selectedGame.id)
    ) {
      setFormData({
        ...formData,
        gamesIntrest: [...formData.gamesIntrest, selectedGame], // Create a new array with spread syntax
      });
    }
    
    console.log('games', formData.gamesIntrest);
    
    event.target.value = ""; // Reset the select to default
  };
  
  // Remove game from selected games
  const removeGame = (id) => {
    setFormData({
      ...formData,
      gamesIntrest: formData.gamesIntrest.filter((_, index) => index !== id),
    });
  };

 const [registerLoading , setRegisterLoading] = useState(false)
  // Handle form submit
  const handleRegister = async (e) => {
    if(!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.gameLevel || !formData.gamesIntrest){
      toast.error("Please fill all fields");
      return
    }
    if(formData?.password?.length < 8){
      toast.error("Password must be of 8 characters.");
      e.preventDefault();
      return

    }
    e.preventDefault();
    setRegisterLoading(true)
    console.log("Form Data:", formData);
    try {
      const response = await httpRequest.post(REGISTER, formData);
      if (response.status === 200 || response.status === 201) {
        toast.success(response?.data?.message);
        setLogin(true);
        setSignup(false);
      } else {
        toast.error("Error while creating account");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred"
      );
      console.error("Error response:", error?.response?.data);
    }finally{
      setRegisterLoading(false)
    }
  };

  const handleLogin = async (e) => {
    console.log("called");
    e.preventDefault();
    setLoginLoading(true)

    try {
      const response = await httpRequest.post(LOGIN, { email, password });
      if (response.status === 200 || response.status === 201) {
        console.log(response.data.data?.original?.member_info?.credits);
        dispatch(
          setUser({
            user: response.data.user,
            accessToken: response.data.accessToken,
          })
        );
        toast.success(response?.data?.message);
        navigate("/dashboard");
      } else {
        toast.error("Error while logging in");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred"
      );
      console.error("Error response:", error?.response?.data);
    }finally{
      setLoginLoading(false)
    }
  };
  const isLoggedIn = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const handleLoginClicked = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      setIsOpen(false);
      setLogin(true);
    }
  };

  console.log("user is", user, " is logged in", isLoggedIn);
 const [forgotLoading , setForgotLoading] = useState(false)

  const handleForgotPassword = async () => {
    setForgotLoading(true)
    if(forgotEmail === ''){
      toast.error("Please enter your email")
      setForgotLoading(false)
      return
    }
    try {
      const response = await httpRequest.post(FORGOT_PASSWORD, {
        email: forgotEmail,
      });
      if (response.status === 200 || response.status === 201) {
        toast.success(response?.data?.message);
        setOTP(true);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred"
      );
      console.error("Error response:", error?.response?.data);
    }finally{
      setForgotLoading(false)
    }
  };

  const [resetLoading , setResetLoading] = useState(false)

  const handleResetPassword = async() =>{
    if(!resetPassword || !resetConfirmPassword){
      toast.error("Please enter your new password and confirm password")
      return
    }
    if(resetPassword !== resetConfirmPassword){
      toast.error("Password and confirm password do not match")
      return
    }
    setResetLoading(true)
    try {
      const response = await httpRequest.post(RESET_PASSWORD, {
        email: forgotEmail,
        password: resetPassword,
        confirmPassword: resetConfirmPassword
      });
      if (response.status === 200 || response.status === 201) {
        toast.success(response?.data?.message);
        setOTP(false)
        setChangePass(false)
        setForgot(false)
        setLogin(true);
      }
    } catch (error) {
     
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred"
      );
      console.error("Error response:", error?.response?.data);
    }finally{
      setResetLoading(false)
    }
  }

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
            <button
              className="LoginBtn h-[51px] px-16 rounded-tr-xl rounded-bl-xl font-normal text-sm text-white"
              onClick={handleLoginClicked}
            >
              {isLoggedIn ? "Dashboard" : "Login"}
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
            <button
              className="LoginBtn h-[50px] w-[150px] rounded-tr-xl rounded-bl-xl"
              onClick={handleLoginClicked}
            >
              {isLoggedIn ? "Dashboard" : "Log In"}
            </button>
          </div>
        </div>
      </div>

      {login && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer ">
          <div class="flex justify-center items-center h-full w-full">
            <div class="center_popup_div p-10 px-8 md:px-14 CorenerRound w-[90%] md:w-[43%] bounce-enter">
              <div
                className="flex justify-end cursor-pointer absolute right-3 top-3"
                onClick={() => handle_close()}
              >
                <IoIosCloseCircle color="white" size={30} />
              </div>
              <form onSubmit={handleLogin} method="post">
                <h1 class="text-4xl font-bold text-center text-white uppercase mb-10">
                  Log <span className="MainHeaderHeading">in</span>
                </h1>
                <div class="mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="popup_input_custom w-full"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6 text-right">
                  <Link
                    to="/"
                    className="text-white text-[12px] text-right hover:text-gray-300"
                    onClick={() => {
                      handle_close();
                      setForgot(true);
                    }}
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="LoginBtn h-[45px] w-[150px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                    disabled={loginLoading}
                  >
                    {loginLoading ? 'Loading...' : 'Login'}
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to="/"
                    className="text-white text-[12px] text-right hover:text-gray-300"
                    onClick={() => {
                      handle_close();
                      setSignup(true);
                    }}
                  >
                    Don’t have an account?{" "}
                    <span className="MainHeaderHeading">Sign up</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {signup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer">
          <div className="flex justify-center items-center h-full w-full">
            <div className="center_popup_div p-10 px-8 md:px-14 CorenerRound w-[90%] md:w-[43%] bounce-enter">
              <div
                className="flex justify-end cursor-pointer absolute right-3 top-3"
                onClick={handle_close}
              >
                <IoIosCloseCircle color="white" size={30} />
              </div>
              <form onSubmit={handleRegister} method="post">
                <h1 className="text-4xl font-bold text-center text-white uppercase mb-10">
                  Sign <span className="MainHeaderHeading">up</span>
                </h1>
                <div className="w-full overflow-auto max-h-[450px]">
                    <div className="mb-6 flex justify-between items-center gap-4 w-full">
                      <input
                        type="text"
                        name="firstName"
                        className="popup_input_custom w-full"
                        placeholder="First Name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="lastName"
                        className="popup_input_custom w-full"
                        placeholder="Last Name"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        name="email"
                        className="popup_input_custom w-full"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="password"
                        name="password"
                        className="popup_input_custom w-full"
                        placeholder="Password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  
                    <div className="mb-6">
                      <select
                        name="gameLevel"
                        className="popup_input_custom w-full uppercase selectoption"
                        onChange={handleChange}
                      >
                        <option value="">I am a?</option>
                        <option value="Master">Game Master (GM)</option>
                        <option value="Normal Player">Player</option>
                      </select>
                    </div>
                    <div className="mb-6">
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
                            disabled={formData.gamesIntrest.length > 0 && formData?.gamesIntrest?.some(
                              (selected) => selected.id === game.id
                            )}
                          >
                            {game.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {formData.gamesIntrest.length > 0 && (
                      <div className="flex flex-wrap gap-2 items-center">
                        {formData?.gamesIntrest?.map((game, index) => (
                          <span
                            key={game.id}
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
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                    disabled = {registerLoading}
                  >
                    {registerLoading ? 'Loading...' : 'CREATE ACCOUNT'}
                  </button>
                </div>
                <div className="mt-2 text-center">
                  <Link
                    to="/"
                    className="text-white text-[12px] text-right hover:text-gray-300"
                    onClick={() => {
                      handle_close();
                      setLogin(true);
                    }}
                  >
                    Already have an account?{" "}
                    <span className="MainHeaderHeading">log in</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {forgot && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer ">
          <div class="flex justify-center items-center h-full w-full">
            <div class="center_popup_div p-10 px-8 md:px-20 CorenerRound w-[90%] md:w-[43%] bounce-enter">
              <div
                className="flex justify-end cursor-pointer absolute right-3 top-3"
                onClick={() => handle_close()}
              >
                <IoIosCloseCircle color="white" size={30} />
              </div>
              <h1 class="text-4xl font-bold text-center text-white uppercase mb-3">
                {changepass ? (
                  <>
                    Change <span className="MainHeaderHeading">Password</span>
                  </>
                ) : (
                  <>
                    Reset <span className="MainHeaderHeading">Password</span>
                  </>
                )}
              </h1>
              {forgot && !otp && (
                <>
                  <p className="text-white text-center text-[11px] mb-8">
                    Please enter your email address to get an OTP Code
                  </p>
                  <div class="mb-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="popup_input_custom w-full"
                      placeholder="Email Address"
                      onChange={(e) => setForgotEmail(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}
              {otp && !changepass && (
                <>
                  <p className="text-white text-center text-[11px] mb-8">
                    Please enter the OTP you have received!
                  </p>
                  <div className="flex justify-center mb-6 gap-4 custom_input_flex">
                      <input
                        type="text"
                        name="otp1"
                        className="popup_input_custom_otp"
                        value={otpCode.otp1}
                        onChange={handleOTPCodeChange}
                        onKeyUp={handleKeyUp}
                        maxLength="1"
                        required
                      />
                      <input
                        type="text"
                        name="otp2"
                        className="popup_input_custom_otp"
                        value={otpCode.otp2}
                        onChange={handleOTPCodeChange}
                        onKeyUp={handleKeyUp}
                        maxLength="1"
                        required
                      />
                      <input
                        type="text"
                        name="otp3"
                        className="popup_input_custom_otp"
                        value={otpCode.otp3}
                        onChange={handleOTPCodeChange}
                        onKeyUp={handleKeyUp}
                        maxLength="1"
                        required
                      />
                      <input
                        type="text"
                        name="otp4"
                        className="popup_input_custom_otp"
                        value={otpCode.otp4}
                        onChange={handleOTPCodeChange}
                        onKeyUp={handleKeyUp}
                        maxLength="1"
                        required
                      />
                    </div>
                  {/* <div className="flex justify-center mb-6 gap-4 custom_input_flex">
                    <input
                      type="text"
                      name="otp1"
                      class="popup_input_custom_otp"
                      value={otpCode.otp1}
                      onChange={handleOTPCodeChange}
                      required
                    />
                    <input
                      type="text"
                      name="otp2"
                      class="popup_input_custom_otp"
                      value={otpCode.otp2}
                      onChange={handleOTPCodeChange}
                      required
                    />
                    <input
                      type="text"
                      name="otp3"
                      class="popup_input_custom_otp"
                      value={otpCode.otp3}
                      onChange={handleOTPCodeChange}
                      required
                    />
                    <input
                      type="text"
                      name="otp4"
                      class="popup_input_custom_otp"
                      value={otpCode.otp4}
                      onChange={handleOTPCodeChange}
                      required
                    />
                  </div> */}
                </>
              )}

              {otp && changepass && (
                <>
                  <p className="text-white text-center text-[11px] mb-8">
                    Fill below form to update your new password!
                  </p>
                  <div class="mb-6">
                    <input
                      type="password"
                      name="resetPassword"
                      class="popup_input_custom w-full"
                      placeholder="New Password"
                      onChange={e => setResetPassword(e.target.value)}

                      required
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="password"
                      name="resetConfirmPassword"
                      class="popup_input_custom w-full"
                      placeholder="Confirm Password"
                      onChange={e => setResetConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}

              <div className="flex justify-center mt-8">
                {forgot && !otp && (
                  <button
                    className="LoginBtn h-[45px] w-[150px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                    onClick={handleForgotPassword}
                    disabled = {forgotLoading}
                  >
                    {forgotLoading ? 'Loading...' : 'SUBMIT'}
                  </button>
                )}
                {otp && !changepass && (
                  <button
                    className="LoginBtn h-[45px] w-[150px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                    onClick={handleSubmitOTP}
                    disabled={otpLoading}
                  >
                    {otpLoading ?'Loading...' : 'Verify'}
                  </button>
                )}

                {otp && changepass && (
                  <button
                    className="LoginBtn h-[45px] w-[150px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                    onClick={handleResetPassword}
                    disabled={resetLoading}
                  >
                    {resetLoading ? 'Loading' : 'Submit'}
                  </button>
                )}
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/"
                  className="text-white text-[12px] text-right hover:text-gray-300"
                  onClick={() => {
                    handle_close();
                    setLogin(true);
                  }}
                >
                  Already have an account?{" "}
                  <span className="MainHeaderHeading">Log in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
