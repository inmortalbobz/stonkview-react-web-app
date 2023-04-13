import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import "./profile.css";
import {findAllAdminUsersThunk} from "../users/admin/users-admin-thunk";
import {
  findFollowersThunk,
  findFollowingThunk,
  followUserThunk,
  unfollowUserThunk
} from "../follows/follows-thunk";

const Profile = () => {
  const {uid} = useParams()
  const {currentUser} = useSelector((state) => state.users)
  const {users} = useSelector((state) => state.users)
  const profile = users[window.location.href.split("/").at(-1)]
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findAllAdminUsersThunk())
  }, [])
  const navigate = useNavigate();
  const author = profile != null ? profile._id : "000000000000000000000000";
  const name = profile ? profile.role == "Gold" ? profile.companyName
      : profile.firstName + " " + profile.lastName : "";

  useEffect(() => {
    dispatch(findFollowersThunk(uid))
    dispatch(findFollowingThunk(uid))
  }, [])

  const handleGoBack = () => {
    navigate(-1)
  }
  const {followers, following} = useSelector((state) => state.follows)
  const handleFollow = () => {
    dispatch(followUserThunk({
      followed: uid
    }))
    navigate(0)
  }
  let notShowFollowBtn
  for (let i = 0; i < followers.length; i++) {
    let check = followers[i].follower?._id
    if (check === currentUser?._id) {
      notShowFollowBtn = true;
      break;
    }
  }
  const handleUnFollow = () => {
    dispatch(unfollowUserThunk(
        {followed:uid}
    ))
    navigate(0)
  }
  return (
      <>
        <h1 className="mb-5"> {name}'s Profile</h1>
        {
            !notShowFollowBtn && currentUser && currentUser._id !== author &&
            <button onClick={handleFollow}
                    className="btn btn-success me-2">
              Follow
            </button>
        }
        {
            notShowFollowBtn && currentUser && currentUser._id !== author &&
            <button onClick={handleUnFollow}
                    className="btn btn-danger me-2">
              UnFollow
            </button>
        }
        <button
            className="btn btn-primary"
            onClick={handleGoBack}>
          Go Back
        </button>
        {
            profile &&
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div>
                    <div>
                      <div className="profile-card">
                        <div className="profile-title">
                          <h4 className="mb-4 mt-0">About</h4>
                          <div className="row">
                            <div className="col-md-6">
                              <label className="form-label">Name</label>
                              <div className="display-field">{name}</div>
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">City</label>
                              <div className="display-field">{profile.city ? profile.city : "No info"}</div>
                            </div>
                          </div>


                          <div className="col-md-12">
                            <label className="form-label">Bio</label>
                            <div className="display-field">{profile.Iam ? profile.Iam : "No info"}</div>
                          </div>
                        </div>


                      </div>
                    </div>


                    <div className="profile-card">
                      <div className="profile-title">Social Media Detail</div>

                      <div className="col-md-6">
                        <label className="form-label"><i
                            className="bi bi-facebook"></i> Facebook</label>
                        <div className="display-field">{profile.facebook ? profile.facebook : "No info"}</div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label"><i
                            className="bi bi-twitter"></i> Twitter</label>
                        <div className="display-field">{profile.twitter ? profile.twitter : "No info"}</div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label"><i
                            className="bi bi-linkedin"></i> Linkedin</label>
                        <div className="display-field">{profile.linkedin ? profile.linkedin : "No info"}</div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label"><i
                            className="bi bi-instagram"></i> Instagram</label>
                        <div className="display-field">{profile.instagram ? profile.instagram : "No info"}</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>


              <div className="profile-card">
                <div className="profile-title">Groups/Links</div>

                <div className="col-md-4">
                  <label className="form-label">Following</label>
                  <ul className="list-group">
                    {
                        following && following.map((follow) =>
                            <li className="list-group-item">
                              {currentUser?._id !== follow.followed?._id && <a
                                  href={`/profile/${follow.followed?._id}`}>
                                {follow.followed?.username}
                              </a>}
                              {currentUser?._id === follow.followed?._id && <a
                                  href={`/profile`}>
                                {follow.followed?.username}
                              </a>}
                              {!follow.follower && 'inactive user'}
                            </li>
                        )
                    }
                  </ul>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Followers</label>
                  <ul className="list-group">
                    {
                        followers && followers.map((follow) =>
                            <li className="list-group-item">
                              {currentUser?._id !== follow.follower?._id && <a
                                  href={`/profile/${follow.follower?._id}`}>
                                {follow.follower?.username}
                              </a>}
                              {currentUser?._id === follow.follower?._id && <a
                                  href={`/profile`}>
                                {follow.follower?.username}
                              </a>}
                              {!follow.follower && 'inactive user'}
                            </li>
                        )
                    }
                  </ul>
                </div>

              </div>
            </div>

        }
      </>
  )
}
export default Profile