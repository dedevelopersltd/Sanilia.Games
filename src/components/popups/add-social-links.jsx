import React, { useState, useEffect } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import httpRequest from '../../axios';
import { UPDATE_PROFILE } from '../../constants/apiEndPoints';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken, selectUser, setUser } from '../../store/userSlice';
import useUnauthenticated from '../../hooks/useUnauthentication';
import { FaPlus } from "react-icons/fa";


const AddSocialLinks = ({ addSocialLinkOpen, setAddSocialLinkOpen }) => {
  const user = useSelector(selectUser);
  const accessToken = useSelector(selectAccessToken);

  const [socialLinks, setSocialLinks] = useState(user?.socialLinks || [{ socialName: '', link: '' }]);

  const dispatch = useDispatch();
  const handleUnauthenticated = useUnauthenticated();
  const [loading, setLoading] = useState(false);

  const socialNames = [
    'Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube', 'Snapchat', 'Pinterest', 'TikTok',
    'Discord', 'Twitch', 'Reddit', 'Steam', 'Xbox', 'PlayStation', 'GitHub'
  ];
  

  useEffect(() => {
    if (user?.socialLinks) {
      setSocialLinks(user.socialLinks || socialLinks);
    }
  }, [user?.socialLinks]);

  useEffect(() => {
    handleAddSocialLink()
  },[])
  const handleAddSocialLink = () => {
    setSocialLinks((prevLinks) => [...prevLinks, { socialName: '', link: '' }]);
  };

  const handleChangeSocialLink = (index, field, value) => {
    setSocialLinks((prevLinks) =>
      prevLinks.map((link, idx) =>
        idx === index ? { ...link, [field]: value } : link
      )
    );
  };

  const handleDeleteSocialLink = (index) => {
    setSocialLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await httpRequest.put(UPDATE_PROFILE, { socialLinks }, {
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
        setAddSocialLinkOpen(false);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred"
      );
      if (error?.response?.status === 401) {
        handleUnauthenticated();
      }
      console.error("Error response:", error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const onClose = () =>{
    setSocialLinks(user?.socialLinks)
    setAddSocialLinkOpen(false);
  }

  return (
    <>
      {addSocialLinkOpen && (
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
                  Add <span className="MainHeaderHeading">Social Links</span>
                </h1>
                <div className="w-full overflow-auto max-h-[400px]">
                {/* Render input fields for each social link */}
                {socialLinks.map((socialLink, index) => (
                  <div key={index} className="mb-6 flex items-center">
                    <select
                      name={`socialName-${index}`}
                      id={`socialName-${index}`}
                      className="popup_input_custom"
                      value={socialLink.socialName}
                      onChange={(e) => handleChangeSocialLink(index, 'socialName', e.target.value)}
                      required
                    >
                      <option value="">Select Social Media</option>
                      {socialNames.map((name) => (
                        <option key={name} value={name}>{name}</option>
                      ))}
                    </select>

                    <input
                      type="text"
                      name={`link-${index}`}
                      id={`link-${index}`}
                      className="popup_input_custom w-full ml-2"
                      placeholder="Enter your link"
                      value={socialLink.link}
                      onChange={(e) => handleChangeSocialLink(index, 'link', e.target.value)}
                      required
                    />
                  {
                    index == 0 ?
                    <>
                       <button
                        type="button"
                        onClick={handleAddSocialLink}
                        className="LoginBtn h-[35px] min-w-[35px] ml-2 rounded-tr-xl rounded-bl-xl uppercase text-sm flex justify-center items-center"
                      >
                        <FaPlus />
                      </button>
                    </>
                    :
                    <button
                      type="button"
                      onClick={() => handleDeleteSocialLink(index)}
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
                    onClick={handleAddSocialLink}
                    className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                  >
                    Add Social Link
                  </button>
                </div> */}

                <div className="flex justify-center mt-8">
                  <button
                    className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                    disabled={loading}
                  >
                    {loading ? 'Loading...' : 'UPDATE'}
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

export default AddSocialLinks;
