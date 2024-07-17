import { loginFailure, loginStart, loginSuccess, logout } from "./loginRedux";
import { publicRequest } from "../reqMethod";
import { registerFailure, registerStart, registerSuccess } from "./registerRedux";
import {fetchDoubtsStart,fetchDoubtsSuccess, fetchDoubtsFailure, addDoubt as addDoubtAction, addResponse as addResponseAction, addFollowUpResponse as addFollowUpResponseAction } from "./doubtRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    dispatch(loginSuccess(res.data));
    console.log(res.data,"api")
  } catch (err) {
    const errorMessage = err.response?.data?.message || 'Login failed. Please check your credentials.';
    dispatch(loginFailure(errorMessage));
  }
};

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/signup", user);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure());
    }
};

export const userLogout = (dispatch) => {
    dispatch(logout());
  };


  //Doubts


  export const addDoubt = (doubtText, user) => async (dispatch) => {
    try {
      const response = await axios.post('https://eduverse-zcxl.onrender.com/adddoubts', {
        title: doubtText,
        description: doubtText,
        student: user._id, // Ensure user._id exists and is correctly passed
      });
  
      console.log("addDoubt API response:", response.data); // Log the response for debugging
      dispatch(addDoubtAction(response.data)); // Dispatch an action with the response data if needed
    } catch (error) {
      console.error('Error adding doubt:', error); // Log any errors encountered
    }
  };
  

  export const addResponse = (doubtId, responseText, user) => async (dispatch) => {
    console.log("responseText:", responseText);  // Logging the responseText to check
    console.log("user:", user);  // Logging the user to check
  
    try {
      const response = await axios.post(`https://eduverse-zcxl.onrender.com/doubts/${doubtId}/response`, {
        responseText,
        teacher: user._id,
      });
  
      dispatch(addResponseAction({
        doubtId,
        response: response.data,
      }));
    } catch (error) {
      console.error('Error adding response:', error);
    }
  };
  
export const addFollowUpResponse = (doubtId, responseId, followUpText, user) => async (dispatch) => {
  try {
    const response = await axios.post(
      `doubts/${doubtId}/response/${responseId}/followup`,
      {
        responseText: followUpText,
        student: user.fName + ' ' + user.lName,
      }
    );

    dispatch(addFollowUpResponseAction({
      doubtId,
      responseId,
      followUpResponse: response.data,
    })); 
  } catch (error) {
    console.error('Error adding follow-up response:', error);
  }
};
export const fetchDoubts = () => async (dispatch) => {
  dispatch(fetchDoubtsStart());
  try {
    const response = await axios.get('https://eduverse-zcxl.onrender.com/alldoubts');
    dispatch(fetchDoubtsSuccess(response.data));
  } catch (error) {
    dispatch(fetchDoubtsFailure(error.message));
  }
};


 