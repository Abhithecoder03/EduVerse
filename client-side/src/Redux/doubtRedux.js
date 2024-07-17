import { createSlice } from "@reduxjs/toolkit";



const doubtSlice = createSlice({
  name: "doubt",
 
    initialState: {
      doubts: [],
      loading: false,
      error: null,
   
  },
  reducers: {
    fetchDoubtsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDoubtsSuccess: (state, action) => {
      state.doubts = action.payload;
      state.loading = false;
    },
    fetchDoubtsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addDoubt: (state, action) => {
      state.doubts.push(action.payload);
     
    },
    addResponse: (state, action) => {
      const doubt = state.doubts.find(doubt => doubt._id === action.payload.doubtId);
      if (doubt) {
        doubt.responses.push(action.payload.response);
      }
    },
    addFollowUpResponse: (state, action) => {
      const doubt = state.doubts.find(doubt => doubt._id === action.payload.doubtId);
      if (doubt) {
        const response = doubt.responses.find(response => response._id === action.payload.responseId);
        if (response) {
          response.responses.push(action.payload.followUpResponse);
        }
      }
    }
  },
});

export const { fetchDoubtsStart, fetchDoubtsSuccess, fetchDoubtsFailure, addDoubt, addResponse, addFollowUpResponse } = doubtSlice.actions;
export default doubtSlice.reducer;
