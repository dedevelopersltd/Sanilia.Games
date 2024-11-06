import React,{ useState, useEffect } from "react";
import { MainLayout } from "../../Layouts";
import { FavCardimg, gamecardpic, SortIcon } from "../../assets";
import Vigilantes from "../../assets/images/image.webp";
import MasterCard from "../../components/MasterCard";
import UserIcon from "./../../assets/images/master.jpg";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { use } from "framer-motion/m";

const GameDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const ReviewsData = [
    {
      id: 1,
      title: "Alfredo Westervelt",
      value: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
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
    
  ]

  const [reviews, setReviews] = useState(ReviewsData);


  const GameData = () => {
    return (
      <div className=" w-full">
      <div className="border border-[#4b4b4b] rounded-lg w-full p-4">
        <div className="text-white rounded-full px-4 py-2 bg-[#15d274] text-xs inline-block">2 SEATS LEFT</div>
        <div className="items-center text-white mt-3 ">
          <div className="flex justify-start w-full items-center gap-1">
            <h1 className="text-2xl font-bold">$11.65</h1> /
            <div className="text-gray-500 text-md">Session</div>
          </div>
          <small className="text-gray-400 !text-[12px]">Each player will be charged when a session starts.</small>
          <hr className="mt-4 mb-4 border-t-[#4b4b4b]" />
            <b className="text-sm uppercase">Details</b>
            <div>
              <div className="game_details_box">
                <span>Gener:</span>
                <span>High Fantasy</span>
              </div>
              <div className="game_details_box">
                <span>Date & TIme:</span>
                <span>Oct 17 | 5:00 PM</span>
              </div>
              <div className="game_details_box">
                <span>Players Required:</span>
                <span>50</span>
              </div>
              <div className="game_details_box">
                <span>Rating:</span>
                <span>E (Everyone)</span>
              </div>
            </div>
          <hr className="mt-4 mb-4 border-t-[#4b4b4b]" />
          <b className="text-sm uppercase mb-2">PlatForm Required</b>
            <div className="text-[12px] mt-2">
              Owlbear Rodeo, dice
            </div>
        </div>
      </div>
      <div className="mt-6">
        <MasterCard detail={1} />
      </div>
    </div>
    )
  }
  return (
    <MainLayout>
      <div className="w-[90%] md:w-[70%] mx-auto mt-32 z-10 relative">
          <div className="">
            <img src={Vigilantes} className="w-full h-[200px] md:h-[450px] object-cover rounded-xl" />
          </div>
          <div className="mt-4 flex justify-between items-start gap-4 md:flex-row flex-col">
            <div className="w-full md:w-2/3">
              <div>
                <h1 className="text-2xl text-white font-bold">Demon slayer Reloaded!</h1>
                <p className="text-gray-500 text-sm mt-1">Dungeons & Dragons 5e | Campaign</p>
              </div>

              <div className="w-full md:hidde block mt-5">
                <GameData />
              </div>
            
              <div className="mt-6">
                <h1 className="text-xl text-white font-bold mb-4">Game Plan</h1>
                <div className="game_description">
                  <p>
                    This website doesn't have the system, makes sense it's not official and homebrewed! THIS IS NOT DND 5E! Campaign Overview:
                  </p>
                  <p>
                    Step into a world where the night is alive with dark forces and the path to glory is paved with perilous trials. Welcome to Demon Slayer: Reloaded, an intense and immersive tabletop RPG where your destiny is shaped by every choice you make!
                  </p>
                  <p>
                    About This Game:
                  </p>
                  <p>
                    Are you ready to immerse yourself in a meticulously crafted world where your skills, strategies, and decisions matter? Our game system is designed for those who thrive on deep, tactical gameplay. While this is a highly detailed and number-intensive experience, it offers an unparalleled depth that brings every aspect of your journey to life.
                  </p>
                  <p>
                  Why This Game Stands Out:<br />

                  Original Storyline: Dive into a fresh narrative set in the Demon Slayer universe, but with a unique twist. We’re not using the established characters from the show. Instead, you and your fellow players will create and develop entirely new characters, bringing your own vision to life within the rich framework of the Demon Slayer world.<br /><br />

                  Innovative Power System: Utilize the intricate power mechanics of the Demon Slayer universe to create a character that is uniquely yours. Master the art of combat and harness the abilities of the Demon Slayer Corps with precision and strategy. The depth of the system allows for intricate customization and tactical gameplay.<br /><br />

                  Dynamic Plot: Your journey begins in the Final Selection, a grueling test that will push you to your limits. Whether you’re old friends or newly acquainted comrades, your actions and decisions will shape the unfolding story. The narrative evolves based on your choices, leading to an unpredictable and personalized adventure.<br /><br />

                  What to Expect:<br /><br />

                  Intense Tactical Combat: Prepare for a game where every move counts. With a focus on detailed mechanics, you'll need to strategize, plan, and execute your actions with precision. Success depends on your ability to adapt and master the complexities of the power system.<br /><br />

                  Rich Character Development: Create a character with unique skills, backstory, and motivations. Your journey will allow you to explore and expand your abilities, forming a hero who stands out in the world of demon slayers.
                  </p>
                </div>

              </div>

              <div className="mt-6">
                <h1 className="text-xl text-white font-bold mb-4">Type of players</h1>
                <div className="game_description">
                  <p>
                  <b>Combat / Tactics</b> Medium
                  <br /> <br />
                  <b>Roleplay</b> High
                  <br /> <br />
                  <b>Puzzles</b> Low
                  <br /> <br />
                  <b>Experience level</b> Beginner
                  </p>
                 
                </div>

              </div>
              <hr className="mb-4 border-t-[#4b4b4b]" />
              <h1 className="text-2xl text-white font-bold uppercase mb-4">Game master Reviews</h1>
              <div class="gap-2 text-white grid  grid-cols-1 md:grid-cols-2 mb-10">
            {
                reviews.map((item, index) => (  
              <div className="border  CorenerRound custom_bg_dashboard p-6 text-white mb-0">
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

            </div>

            {/* // ADD GAME DATE HERE */}
            <div className="md:block hidden w-1/3">
              <GameData />
            </div>
            
            {/* <div className=" w-full md:w-1/3">
              <div className="border border-[#4b4b4b] rounded-lg w-full p-4">
                <div className="text-white rounded-full px-4 py-2 bg-[#15d274] text-xs inline-block">2 SEATS LEFT</div>
                <div className="items-center text-white mt-3 ">
                  <div className="flex justify-start w-full items-center gap-1">
                    <h1 className="text-2xl font-bold">$11.65</h1> /
                    <div className="text-gray-500 text-md">Session</div>
                  </div>
                  <small className="text-gray-400 !text-[12px]">Each player will be charged when a session starts.</small>
                  <hr className="mt-4 mb-4 border-t-[#4b4b4b]" />
                    <b className="text-sm uppercase">Details</b>
                    <div>
                      <div className="game_details_box">
                        <span>Gener:</span>
                        <span>High Fantasy</span>
                      </div>
                      <div className="game_details_box">
                        <span>Date & TIme:</span>
                        <span>Oct 17 | 5:00 PM</span>
                      </div>
                      <div className="game_details_box">
                        <span>Players Required:</span>
                        <span>50</span>
                      </div>
                      <div className="game_details_box">
                        <span>Rating:</span>
                        <span>E (Everyone)</span>
                      </div>
                    </div>
                  <hr className="mt-4 mb-4 border-t-[#4b4b4b]" />
                  <b className="text-sm uppercase mb-2">PlatForm Required</b>
                    <div className="text-[12px] mt-2">
                      Owlbear Rodeo, dice
                    </div>
                </div>
              </div>
              <div className="mt-6">
                <MasterCard detail={1} />
              </div>
            </div> */}
          </div>
      </div>
    </MainLayout>
  );
};

export default GameDetails;
