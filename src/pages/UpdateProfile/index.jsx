import React, { useEffect, useState } from "react";
import { MainLayout, DashboardLayout } from "../../Layouts";
import { useParams, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearUser, selectAccessToken, selectUser, setUser } from "../../store/userSlice";
import { IoMdCloseCircleOutline } from "react-icons/io";
import httpRequest from "../../axios";
import { UPDATE_PROFILE } from "../../constants/apiEndPoints";
import toast from "react-hot-toast";
import useUnauthenticated from "../../hooks/useUnauthentication";

const Chat = () => {
  const user = useSelector(selectUser);
  const [signup, setSignup] = useState(false);
  const location = useLocation();
  const hasProfile = location.pathname.includes('profile');
  const [isProfile, setIsProfile] = useState(hasProfile);
  const accessToken = useSelector(selectAccessToken)
  const handleUnauthenticated = useUnauthenticated()
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("I am calling");
    // console.log(hasProfile, "hasProfile")
    setIsProfile(hasProfile)
  }, [location])

  const [profileImage, setProfileImage] = useState(user?.image);
  const [coverImage, setCoverImage] = useState(user?.coverImage);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [selectedGames, setSelectedGames] = useState(user?.gamesIntrest);
  const [profileLoading , setProfileLoading] = useState(false)
  const [aboutMe, setAboutMe] = useState(user?.aboutMe || "");

  const normalizedCoverImage = coverImage?.replace(/\\/g, '/');
  const aboutText = user?.aboutMe || "";

  // Truncate the text to 100 characters
  const truncatedText = aboutText.length > 100 ? aboutText.slice(0, 100) + "..." : aboutText;
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
  const removeGame = (id) => {
    setSelectedGames(selectedGames.filter((game , index) => index !== id));
  };
  const handleUpdateProfile =  async(e) =>{
    setProfileLoading(true)
    e.preventDefault();
    try {
      const response = await httpRequest.put(UPDATE_PROFILE, {firstName , lastName , gamesIntrest: selectedGames, aboutMe},
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
  return (
    <DashboardLayout>
      <div className=" bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer  ">
          <div class="flex justify-center items-center">
            <div class="center_popup_div p-10 px-6 md:px-14 CorenerRound w-[90%] bounce-enter">
              
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

                <div className="mb-4">
                  <textarea
                    type="text"
                    name="aboutMe"
                    id="aboutMe"
                    rows="4"
                    cols="50"
                    className="popup_input_custom w-full"
                    placeholder="Write something about yourself"
                    onChange={(e) => setAboutMe(e.target.value)}
                    value={aboutMe}
                    required
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
    </DashboardLayout>
  );
};

export default Chat;
