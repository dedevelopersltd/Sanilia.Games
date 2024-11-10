import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../store/userSlice";


const useUnauthenticated = (userType) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUnauthenticated = useCallback(() => {
    console.log("Handling unauthenticated state");


    dispatch(clearUser());
    navigate("/");

    toast.error("Your session has expired. Please login again.");
  }, [dispatch, navigate]);

  return handleUnauthenticated;
};

export default useUnauthenticated;
