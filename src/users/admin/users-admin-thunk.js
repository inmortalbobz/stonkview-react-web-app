import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers, register, login, profile, logout, deleteUser} from "./users-admin-service";

export const findAllAdminUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const registerThunk = createAsyncThunk(
    'register',
    async(user) => await register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async(user) => await login(user)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async() => await logout()
)

export const profileThunk = createAsyncThunk(
    'profile',
    async() => await profile()
)

export const deleteUserThunk = createAsyncThunk(
    'delete',
    async (uid) => {
        await deleteUser(uid)
        return uid
    }
)