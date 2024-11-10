import React, { useEffect, useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import httpRequest from '../../axios';
import { UPDATE_PROFILE } from '../../constants/apiEndPoints';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken, selectUser, setUser } from '../../store/userSlice';
import useUnauthenticated from '../../hooks/useUnauthentication';

const AboutMe = ({aboutMeOpen ,  setAboutMeOpen }) => {
    const user = useSelector(selectUser)
    const accessToken = useSelector(selectAccessToken)
    const [aboutMe , setAboutMe] = useState(user?.aboutMe || '')
    const dispatch = useDispatch()
    const handleUnauthenticated = useUnauthenticated()
    const [loading , setLoading] = useState(false)
    
    // useEffect(()=>{
    //     setAboutMe(user?.aboutMe)
    // },[user])
    
    console.log(user)


    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
          const response = await httpRequest.put(UPDATE_PROFILE, {aboutMe},
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

            setAboutMeOpen(false);
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
            setLoading(false)
        }
      };

      const onClose = () =>{
        setAboutMe(user?.aboutMe)
        setAboutMeOpen(false);
      }

  return (
    <>
      {
      aboutMeOpen &&
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer  ">
        <div class="flex justify-center items-center h-full w-full">
          <div class="center_popup_div p-10 px-6 md:px-14 CorenerRound sm:w-[90%] md:w-[43%] bounce-enter">
            <div className="flex justify-end cursor-pointer absolute right-3 top-3" onClick={() => onClose()}>
            <IoIosCloseCircle color="white" size={30} />
            </div>
            <form method="post">
              <h1 class="text-4xl font-bold text-center text-white uppercase mb-10">About <span className="MainHeaderHeading">Me</span></h1>
              <div className="mb-6">
                <input
                  type="text"
                  name="aboutMe"
                  id="aboutMe"
                  className="popup_input_custom w-full"
                  placeholder="Write something about yourself"
                  onChange={e => setAboutMe(e.target.value)}
                  value={aboutMe}
                  required 
                />
              </div>
              
               
             
             
              <div className="flex justify-center mt-8">
                <button className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm" disabled={loading} onClick={handleSubmit} >
                {loading ? 'Loading...' : 'UPDATE'}
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default AboutMe
