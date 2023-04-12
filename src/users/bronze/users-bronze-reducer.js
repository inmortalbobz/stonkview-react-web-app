import {createSlice} from "@reduxjs/toolkit";
import {findAllBronzeUsersThunk, registerThunk, loginThunk, logoutThunk, profileThunk} from "./users-bronze-thunk";
import {updateBronzeUser} from "./users-bronze-service";

const usersBronzeReducer = createSlice({
    name: 'Bronze',
    initialState: {
        loading: false,
        users:[],
        currentUser: null,
        error: null
    },
    reducers: {
        editBronzeProfile(state, action) {
            updateBronzeUser(action.payload)
                .then(res => console.log(res));
            state = {
                ...state,
                currentUser: action.payload
            }
            return state;
        }
    },
    extraReducers: {
        [findAllBronzeUsersThunk.fulfilled]: (state, action) => {
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

export const {editBronzeProfile} = usersBronzeReducer.actions;
export default usersBronzeReducer.reducer