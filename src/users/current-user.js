import React, {useEffect} from "react";
import {profileThunk} from "./users-thunk";
import {useDispatch} from "react-redux";

const CurrentUser = ({children}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(profileThunk())
  }, [])
  return (children)
}

export default CurrentUser