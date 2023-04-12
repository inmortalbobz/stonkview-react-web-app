import {createAsyncThunk} from "@reduxjs/toolkit";
import {welcomeUsers} from "./welcome-service";

export const welcomeUsersThunk = createAsyncThunk(
    'welcomeUsers',
    ()=>welcomeUsers()
)