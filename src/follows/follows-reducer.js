import { createSlice } from "@reduxjs/toolkit";
import {
  findFollowersThunk,
  findFollowingThunk,
  followUserThunk,
  unfollowUserThunk
} from "./follows-thunk";

const followsReducer = createSlice({
  name: 'follows',
  initialState: {
    following: [],
    followers: []
  },
  extraReducers: {
    [unfollowUserThunk.fulfilled]: (state, action) => {
      state.followers = state.followers.filter((follower) => follower.id !== action.payload);
    },
    [followUserThunk.fulfilled]: (state, action) => {
      state.followers.push(action.payload)
    },
    [findFollowersThunk.fulfilled]: (state, action) => {
      state.followers = action.payload
    },
    [findFollowingThunk.fulfilled]: (state, action) => {
      state.following = action.payload
    },
  }

})

export default followsReducer.reducer;