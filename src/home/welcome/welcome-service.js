import axios from "axios";
import {BASE_URL} from "../../constances";
export const welcomeUsers= async ()=>{
  const response = await axios.get(`${BASE_URL}/welcome-recent-new-users`)
  const welcomeUsers = response.data
  return welcomeUsers
}