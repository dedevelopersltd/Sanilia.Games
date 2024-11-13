import React, { useEffect } from "react";
import {  useNavigate, useParams } from 'react-router-dom';
import httpRequest from "../../axios";
import toast from "react-hot-toast";
import { VERIFY_EMAIL } from "../../constants/apiEndPoints";


const VerifyEmail = () => {
    const navigate = useNavigate();
  
    const { token } = useParams(); 
    console.log('token ' , token)
    useEffect(() => {
  
      const verifyEmail = async () => {
        try {
          const response = await httpRequest.get(`${VERIFY_EMAIL}/${token}`);
          if (response.status === 200 || response.status === 201 ) {
            toast.success(response.data.message || 'Email Verified Successfully')
            navigate('/');
          } 
        } catch (error) {
          console.error("Verification error:", error);
          toast.error(error.response.data.message || "An error occurred during verification.");
        }
      };
  
      if (token) {
        verifyEmail();
    }else{
        navigate('/')
    }
    }, [navigate, token]);
  return (
    <div className="flex justify-center items-center h-screen">
    <h1 className="w-[90%] text-center text-white z-10 relative">
      Verifying Email
    </h1>
  </div>

  );
};

export default VerifyEmail;
