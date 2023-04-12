import {createSlice} from "@reduxjs/toolkit";
import {findAllUsersThunk, registerThunk, loginThunk, logoutThunk, profileThunk} from "./users-thunk";
import {updateBronzeUser} from "./bronze/users-bronze-service";
import {updateGoldUser} from "./gold/users-gold-service";

const usersReducer = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users:[],
    currentUser: null,
    error: null
  },
  reducers: {
    editProfile(state, action) {
      if (action.payload.role == "Gold"){
        updateGoldUser(action.payload)
        .then(res => console.log(res));
      }
      else {
        updateBronzeUser(action.payload)
        .then(res => console.log(res));
      }
      state = {
        ...state,
        currentUser: action.payload
      }
      return state;
    }
  },
  extraReducers: {
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [registerThunk.rejected]: (state, action) => {
      state.error = action.payload
      state.currentUser = null
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.payload
      state.currentUser = null
      return action.payload
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [profileThunk.rejected]: (state, action) => {
      state.error = action.payload
      state.currentUser = null
    }
  }
})

export const {editProfile} = usersReducer.actions;
export default usersReducer.reducer