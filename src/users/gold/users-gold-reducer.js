import {createSlice} from "@reduxjs/toolkit";
import {findAllGoldUsersThunk, registerThunk, loginThunk, logoutThunk, profileThunk} from "./users-gold-thunk";
import {updateGoldUser} from "./users-gold-service";

const usersGoldReducer = createSlice({
    name: 'Gold',
    initialState: {
        loading: false,
        users:[],
        currentUser: null,
        error: null
    },
    reducers: {
        editGoldProfile(state, action) {
            updateGoldUser(action.payload)
                .then(res => console.log(res));
            state = {
                ...state,
                currentUser: action.payload
            }
            return state;
        }
    },
    extraReducers: {
        [findAllGoldUsersThunk.fulfilled]: (state, action) => {
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

export const {editGoldProfile} = usersGoldReducer.actions;
export default usersGoldReducer.reducer