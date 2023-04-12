import {createSlice} from "@reduxjs/toolkit";
import {findAllAdminUsersThunk, registerThunk, loginThunk, logoutThunk, profileThunk} from "./users-admin-thunk";
import {updateUser} from "./users-admin-service";

const usersAdminReducer = createSlice({
    name: 'Admin',
    initialState: {
        loading: false,
        users:[],
        currentUser: null,
        error: null
    },
    reducers: {
        editProfile(state, action) {
            updateUser(action.payload)
                .then(res => console.log(res));
            state = {
                ...state,
                currentUser: action.payload
            }
            return state;
        }
    },
    extraReducers: {
        [findAllAdminUsersThunk.fulfilled]: (state, action) => {
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

export const {editProfile} = usersAdminReducer.actions;
export default usersAdminReducer.reducer