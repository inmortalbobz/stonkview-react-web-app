import { createSlice } from "@reduxjs/toolkit";
import { welcomeUsersThunk } from "./welcome-thunk";

const welcomeRecentNewUsersReducer = createSlice({
  name: 'welcomeUsers',
  initialState: [],
  extraReducers: {
    [welcomeUsersThunk.fulfilled]: (state, action) => {
      return state = action.payload
    },
  }
})

export default welcomeRecentNewUsersReducer.reducer;