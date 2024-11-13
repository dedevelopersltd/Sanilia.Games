import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const ConfirmationModal = ({ isOpen, setIsOpen, onConfirm }) => {
  const [loading, setLoading] = useState(false);

  const handleYesClick = async () => {
    setLoading(true);
    try {
      await onConfirm();
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNoClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer">
          <div className="flex justify-center items-center h-full w-full">
            <div className="center_popup_div p-10 px-6 md:px-14 CorenerRound sm:w-[90%] md:w-[43%] bounce-enter">
              <div
                className="flex justify-end cursor-pointer absolute right-3 top-3"
                onClick={handleNoClick}
              >
                <IoIosCloseCircle color="white" size={30} />
              </div>
              <h1 className="text-4xl font-bold text-center text-white uppercase mb-10">
                Confirm <span className="MainHeaderHeading">Delete</span>
              </h1>
              <p className="text-center text-white mb-6">
                Are you sure you want to delete this item?
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  className="LoginBtn h-[45px] min-w-[90px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                  disabled={loading}
                  onClick={handleYesClick}
                >
                  {loading ? "Loading..." : "Yes"}
                </button>
                <button
                  className="LoginBtn h-[45px] min-w-[90px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                  onClick={handleNoClick}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
