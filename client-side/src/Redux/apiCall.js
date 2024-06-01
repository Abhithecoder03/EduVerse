import { loginFailure, loginStart, loginSuccess, logout } from "./loginRedux";
import { publicRequest } from "../reqMethod";
import { registerFailure, registerStart, registerSuccess } from "./registerRedux";

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