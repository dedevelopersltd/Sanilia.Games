import React, { useState, useEffect } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import httpRequest from '../../axios';
import { UPDATE_PROFILE } from '../../constants/apiEndPoints';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken, selectUser, setUser } from '../../store/userSlice';
import useUnauthenticated from '../../hooks/useUnauthentication';
import { FaPlus } from "react-icons/fa";


const AddIntrest = ({ addIntrestOpen, setAddIntrestOpen }) => {
  const user = useSelector(selectUser);
  const accessToken = useSelector(selectAccessToken);
  const [intrests, setIntrests] = useState(user?.intrests || [{}]); 
  const dispatch = useDispatch();
  const handleUnauthenticated = useUnauthenticated();
  const [loading , setLoading] = useState(false)


  const handleAddIntrest = () => {
    setIntrests([...intrests, '']); 
  };

  useEffect(() => {
    handleAddIntrest()
  },[])

  const handleChangeIntrest = (index, value) => {
    const newIntrests = [...intrests];
    newIntrests[index] = value;
    setIntrests(newIntrests); 
  };


  const handleDeleteIntrest = (index) => {
    const newIntrests = intrests.filter((_, i) => i !== index);
    setIntrests(newIntrests); 
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const response = await httpRequest.put(UPDATE_PROFILE, { intrests }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success(response?.data?.message);
        dispatch(setUser({
          user: response.data.user,
          accessToken,
        }));
        setAddIntrestOpen(false);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred"
      );
      if (error?.response?.status === 401) {
        handleUnauthenticated();
      }
      console.error("Error response:", error?.response?.data);
    }finally{
        setLoading(false)
    }
  };

  const onClose = () =>{
    setIntrests(user?.intrests)
    setAddIntrestOpen(false);
  }

  return (
    <>
      {addIntrestOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer">
          <div className="flex justify-center items-center h-full w-full">
            <div className="center_popup_div p-10 px-6 md:px-14 CorenerRound sm:w-[90%] md:w-[43%] bounce-enter">
              <div
                className="flex justify-end cursor-pointer absolute right-3 top-3"
                onClick={() => onClose()}
              >
                <IoIosCloseCircle color="white" size={30} />
              </div>
              <form method="post" onSubmit={handleSubmit}>
                <h1 className="text-4xl font-bold text-center text-white uppercase mb-10">
                  Add <span className="MainHeaderHeading">Intrests</span>
                </h1>
                <div className="w-full overflow-auto max-h-[400px]">
                {/* Render input fields for each interest */}
                {intrests.map((intrest, index) => (
                  <div key={index} className="mb-6 flex items-center">
                    <input
                      type="text"
                      name={`intrest-${index}`}
                      id={`intrest-${index}`}
                      className="popup_input_custom w-full"
                      placeholder="Write your interest"
                      value={intrest}
                      onChange={(e) => handleChangeIntrest(index, e.target.value)}
                      required
                    />
                     {
                    index == 0 ?
                    <>
                       <button
                        type="button"
                        onClick={handleAddIntrest}
                        className="LoginBtn h-[35px] min-w-[35px] ml-2 rounded-tr-xl rounded-bl-xl uppercase text-sm flex justify-center items-center"
                      >
                        <FaPlus />
                      </button>
                    </>
                    :
                    <button
                      type="button"
                      onClick={() => handleDeleteIntrest(index)}
                      className="ml-4 text-red-500"
                    >
                      <IoIosCloseCircle color="red" size={26} />
                    </button>
                     }
                   
                  </div>
                ))}
                </div>
                {/* <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    onClick={handleAddIntrest}
                    className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                  >
                    Add Interest
                  </button>
                </div> */}

                <div className="flex justify-center mt-8">
                  <button className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm" disabled={loading}  >
                    {loading ? 'Loading' : 'UPDATE'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddIntrest;
