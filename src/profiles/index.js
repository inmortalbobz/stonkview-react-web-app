import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import NavigationSidebar from "../home/left-side-bar";
import "./profile.css";
import {findFollowersThunk, findFollowingThunk} from "../follows/follows-thunk";

const Header = ({ onEditProfileClick }) => {
  return (
      <div className="header d-flex align-items-center justify-content-between">
        <h2>Profile</h2>
        <button
            className="rounded-pill btn btn-light bg-secondary text-white"
            onClick={onEditProfileClick}
        >
          Edit Profile
        </button>
      </div>
  );
};

const Profile = () => {
  const {currentUser} = useSelector((state) => state.users)
  const {followers, following} = useSelector((state) => state.follows)
  const dispatch = useDispatch()
  const author = currentUser != null ? currentUser._id
      : "000000000000000000000000";
  const name = currentUser ? currentUser.role === "Gold"
      ? currentUser.companyName : currentUser.firstName + " "
      + currentUser.lastName : "";
  useEffect(() => {
    dispatch(findFollowersThunk(author))
    dispatch(findFollowingThunk(author))
  }, [author])

  const handleGoBack = () => {
    navigate(-1)
  }
  const navigate = useNavigate();
  return (
      <>
        <div className="container-fluid">
        <div className="d-flex">
        <div className="col-2 d-none d-xl-block">
          <NavigationSidebar/>
        </div>
          <div className="col">
        {
            !currentUser &&
                <div className="alert alert-info">
                  Please log in to view your profile.
                </div>
        }

        {
            currentUser &&
            <div className="profile-container">
              <Header onEditProfileClick={() => navigate("../edit-profile")} />
              <div className="profile-card">
                <div className="profile-title">
                  <div className="col-5">
                    <h4>About Me</h4>
                  </div>
                </div>


                <div className="row">
                  <div className="col-md-6 mt-5">
                    <label className="form-label">User Name</label>
                    <div className="display-field">{currentUser.username}</div>
                  </div>
                  <div className="col-md-6 mt-5">
                    <label className="form-label">Name</label>
                    <div className="display-field">{name}</div>
                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <div className="display-field">{currentUser.email ? currentUser.email : "No info"}</div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <div className="display-field">{currentUser.city ? currentUser.city : "No info"}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <div className="display-field">{currentUser.phoneNumber ? currentUser.phoneNumber : "No info"}</div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Tier</label>
                    <div className="display-field">{currentUser.role}</div>
                  </div>

                </div>

                <div className="col-md-12">
                  <label className="form-label">Bio</label>
                  <div className="display-field">{currentUser.Iam ? currentUser.Iam : "No info"}</div>
                </div>
              </div>

              <div className="profile-card">
                <div className="profile-title">Social Media Detail</div>

                <div className="col-md-6">
                  <label className="form-label"><i
                      className="bi bi-facebook"></i> Facebook</label>
                  <div className="display-field">{currentUser.facebook ? currentUser.facebook : "No info"}</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label"><i
                      className="bi bi-twitter"></i> Twitter</label>
                  <div className="display-field">{currentUser.twitter ? currentUser.twitter : "No info"}</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label"><i
                      className="bi bi-linkedin"></i> Linkedin</label>
                  <div className="display-field">{currentUser.linkedin ? currentUser.linkedin : "No info"}</div>
                </div>

                <div className="col-md-6">
                  <label className="form-label"><i
                      className="bi bi-instagram"></i> Instagram</label>
                  <div className="display-field">{currentUser.instagram ? currentUser.instagram : "No info"}</div>
                </div>
              </div>


              <div className="profile-card">
                <div className="profile-title">Groups/Links</div>

                <div className="col-md-4">
                  <label className="form-label">Following</label>
                  <ul className="list-group">
                    {following &&
                        following.map((follow) => (
                            <li className="list-group-item">
                              {currentUser._id !== follow.followed._id && (
                                  <a href={`/profile/${follow.followed?._id}`}>
                                    {follow.followed.username}
                                  </a>
                              )}
                              {currentUser._id === follow.followed._id && (
                                  <a href={`/profile`}>{follow.followed.username}</a>
                              )}
                            </li>
                        ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Followers</label>
                  <ul className="list-group">
                    {followers &&
                        followers.map((follow) => (
                            <li className="list-group-item">
                              {currentUser._id !== follow.follower?._id && (
                                  <a href={`/profile/${follow.follower?._id}`}>
                                    {follow.follower?.username}
                                  </a>
                              )}
                              {currentUser._id === follow.follower?._id && (
                                  <a href={`/profile`}>{follow.follower?.username}</a>
                              )}
                            </li>
                        ))}
                  </ul>
                </div>

              </div>
              <button
                  className="btn btn-primary mt-3"
                  onClick={handleGoBack}>
                Go Back
              </button>
            </div>
        }
        </div>
        </div>
        </div>
      </>
  )
}
export default Profile