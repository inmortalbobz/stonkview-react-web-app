import axios from "axios";
import {BASE_URL} from "../../constances";
const api = axios.create({withCredentials:true})
export const findAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/profile`)
    let allUsers = {}
    response.data.forEach((user,i) => allUsers[user._id] = user);
    return allUsers
}

export const register = async (user) => {
    const response = await api.post(`${BASE_URL}/bronze-register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${BASE_URL}/login`, user)
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${BASE_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_URL}/logout`)
    return response.data
}

export const updateBronzeUser = async (profile) => {
    const response = await axios.put(`${BASE_URL}/bronze-user`, profile)
    return response.data
}