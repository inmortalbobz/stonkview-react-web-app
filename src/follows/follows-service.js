import axios from "axios";
import {FOLLOWS_URL} from "../constances";
import {USERS_URL} from "../constances";

const api = axios.create({withCredentials:true})

export const followUser = async (follow) =>{
  const response = await api.post(`${FOLLOWS_URL}`,follow)
  return response.data
}

export const unfollowUser = async (follow) => {
  const response = await api.delete(`${FOLLOWS_URL}`,follow)
  return response.data
};

export const findFollowers = async (followed)=>{
  const response = await api.get(`${USERS_URL}/${followed}/followers`)
  return response.data
}

export const findFollowing = async(follower)=>{
  const response = await api.get(`${USERS_URL}/${follower}/following`)
  return response.data
}