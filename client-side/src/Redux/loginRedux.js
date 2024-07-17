import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    errorMessage: '', // Add error message field
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.errorMessage = ''; // Reset error message on new login attempt
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
      state.errorMessage = ''; // Reset error message on successful login
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload; // Set error message from backend
    },
    resetError: (state) => {
      state.error = false;
      state.errorMessage = ''; // Action to reset error state and message
    },
    logout: (state) => {
      state.currentUser = null;
      state.error = false;
      state.errorMessage = '';
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, resetError, logout } = userSlice.actions;
export default userSlice.reducer;
