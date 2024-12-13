import React, { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import httpRequest from '../../axios';
import { CHANGE_PASSWORD } from '../../constants/apiEndPoints';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken, selectUser } from '../../store/userSlice';
import useUnauthenticated from '../../hooks/useUnauthentication';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = ({ changePasswordOpen, setChangePasswordOpen }) => {
    const accessToken = useSelector(selectAccessToken);
    const user = useSelector(selectUser);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleUnauthenticated = useUnauthenticated();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const email = user?.email

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (newPassword !== confirmPassword) {
            toast.error("New password and confirm password do not match.");
            setLoading(false);
            return;
        }

        try {
            const response = await httpRequest.post(CHANGE_PASSWORD, 
                {email, currentPassword, newPassword, confirmPassword },
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                }
            );
            if (response.status === 200 || response.status === 201) {
                toast.success(response?.data?.message);
                setChangePasswordOpen(false);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "An unexpected error occurred");
            if (error?.response?.status === 401) {
                handleUnauthenticated();
            }
            console.error("Error response:", error?.response?.data);
        } finally {
            setLoading(false);
        }
    };

    const onClose = () =>{
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
        setChangePasswordOpen(false);
      }
    
    const [passwordError, setPasswordError] = useState("");

    const ChangeHandling = (e) => {
        const value = e.target.value;
            setNewPassword(value)
            const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(value)) {
                setPasswordError("Password must be at least 8 characters long and include a capital letter, a number, and a special character.");
            } else {
                setPasswordError("");
            }        
    }

    return (
        <>
            {changePasswordOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-[#18181810] backdrop-blur-[20px] h-screen w-full popup_outer">
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="center_popup_div p-10 px-6 md:px-14 CorenerRound sm:w-[90%] md:w-[43%] bounce-enter">
                            <div className="flex justify-end cursor-pointer absolute right-3 top-3" onClick={() => onClose()}>
                                <IoIosCloseCircle color="white" size={30} />
                            </div>
                            <form method="post" onSubmit={handleSubmit}>
                                <h1 className="text-4xl font-bold text-center text-white uppercase mb-10">
                                    Change <span className="MainHeaderHeading">Password</span>
                                </h1>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        id="currentPassword"
                                        className="popup_input_custom w-full"
                                        placeholder="Current Password"
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        value={currentPassword}
                                        required
                                    />
                                </div>
                                <div className="mb-6 relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="newPassword"
                                        id="newPassword"
                                        className="popup_input_custom w-full"
                                        placeholder="New Password"
                                        onChange={(e) => {
                                            ChangeHandling(e)
                                        }}
                                        
                                        value={newPassword}
                                        required
                                    />
                                    <div className="absolute right-4 top-[50%] transform -translate-y-1/2 cursor-pointer">
                                        {
                                        showPassword ?
                                        <FaEye color="white" size={20} onClick={() => setShowPassword(false)} /> :
                                        <FaEyeSlash color="white" size={20} onClick={() => setShowPassword(true)} />
                                        }
                                    </div>
                                </div>
                                {passwordError && (
                                    <p className="text-red-500 text-xs mb-4">{passwordError}</p>
                                )}
                            
                                <div className="mb-6 relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        className="popup_input_custom w-full"
                                        placeholder="Confirm New Password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        value={confirmPassword}
                                        required
                                    />
                                    <div className="absolute right-4 top-[50%] transform -translate-y-1/2 cursor-pointer">
                                        {
                                        showPassword ?
                                        <FaEye color="white" size={20} onClick={() => setShowPassword(false)} /> :
                                        <FaEyeSlash color="white" size={20} onClick={() => setShowPassword(true)} />
                                        }
                                    </div>
                                </div>
                                <div className="flex justify-center mt-8">
                                    <button
                                        className="LoginBtn h-[45px] min-w-[180px] rounded-tr-xl rounded-bl-xl uppercase text-sm"
                                        disabled={loading || passwordError}
                                        type="submit"
                                    >
                                        {loading ? 'Loading...' : 'Update'}
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

export default ChangePassword;
