import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProfile } from "../users/users-reducer";
import { useNavigate } from "react-router";
import "./profile.css";

const EditItem = (input) => {
  let data = JSON.parse(JSON.stringify(input.post));
  const [profile, update] = useState(data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editProfileHandler = () => {
    dispatch(editProfile(profile))
  };

  const updateProfileHandler = () => {
    editProfileHandler()
    navigate(-1)
  };

  const inputChangeHandler = (e, field) => {
    update({
      ...profile,
      [field]: e.target.value,
    });
  };

  return (
      <>
        <div className="profile-card">
          <div className="profile-title">About Me</div>
        <div className="row">
          <div className={profile.role === "Gold"
              ? "col-md-6 mt-5" : "col-md-4 mt-5"}>
            <label className="form-label">User Name</label>
            <input type="text" className="form-control"
                   placeholder="Enter Username"
                   value={profile.username}
                   onChange={(e) => inputChangeHandler(e, 'username')}
                  />
          </div>
          {
              profile.role === "Gold" &&
              <div className="col-md-6 mt-5">
                <label className="form-label">Name</label>
                <input type="text" className="form-control"
                       placeholder="Enter Company Name"
                       value={profile.companyName}
                       onChange={(e) => inputChangeHandler(e, 'companyName')}
                />
              </div>
          }
          {
            (profile.role === "Bronze" || profile.role === "Admin") &&
              <div className="col-md-4 mt-5">
                <label className="form-label">FirstName</label>
                <input type="text" className="form-control"
                       placeholder="Enter FirstName"
                       value={profile.firstName}
                       onChange={(e) => inputChangeHandler(e, 'firstName')}
                />
              </div>
          }
          {
              (profile.role === "Bronze" || profile.role === "Admin") &&
              <div className="col-md-4 mt-5">
                <label className="form-label">LastName</label>
                <input type="text" className="form-control"
                       placeholder="Enter LastName"
                       value={profile.lastName}
                       onChange={(e) => inputChangeHandler(e, 'lastName')}
                />
              </div>
          }
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="text" className="form-control"
                     placeholder="Enter email"
                     value={profile.email}
                     onChange={(e) => inputChangeHandler(e, 'email')}/>
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input type="text" className="form-control"
                     placeholder="Enter City"
                     value={profile.city}
                     onChange={(e) => inputChangeHandler(e, 'city')}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input type="phoneNumber" className="form-control"
                     placeholder="Enter PhoneNumber"
                     value={profile.phoneNumber}
                     onChange={(e) => inputChangeHandler(e, 'phoneNumber')}/>
            </div>

            <div className="col-md-6">
              <label className="form-label">Tier</label>
              <input type="text" className="form-control"
                     value={profile.role}
                     onChange={(e) => inputChangeHandler(e, 'role')} readOnly/>
            </div>
          </div>

          <div className="col-md-12">
            <label className="form-label">Bio</label>
            <textarea className="form-control"
                   placeholder="Introduce yourself"
                   value={profile.Iam}
                   onChange={(e) => inputChangeHandler(e, 'Iam')}/>
          </div>
          <div className="col-md-6">
            <label className="form-label">New Password</label>
            <input type="password" className="form-control"
                   onChange={(e) => inputChangeHandler(e, 'password')}/>
          </div>
        </div>

          <div className="profile-card">
            <div className="profile-title">Social Media Detail</div>

            <div className="col-md-6">
              <label className="form-label"><i
                  className="bi bi-facebook"></i> Facebook</label>
              <input type="text" className="form-control"
                     value={profile.facebook}
                     onChange={(e) => inputChangeHandler(e, 'facebook')}/>
            </div>

            <div className="col-md-6">
              <label className="form-label"><i
                  className="bi bi-twitter"></i> Twitter</label>
              <input type="text" className="form-control"
                     value={profile.twitter}
                     onChange={(e) => inputChangeHandler(e, 'twitter')}/>
            </div>

            <div className="col-md-6">
              <label className="form-label"><i
                  className="bi bi-linkedin"></i> Linkedin</label>
              <input type="text" className="form-control"
                     aria-label="Linkedin" value={profile.linkedin}
                     onChange={(e) => inputChangeHandler(e, 'linkedin')}/>
            </div>

            <div className="col-md-6">
              <label className="form-label"><i
                  className="bi bi-instagram"></i> Instagram</label>
              <input type="text" className="form-control"
                     value={profile.instagram}
                     onChange={(e) => inputChangeHandler(e, 'instagram')}/>
            </div>
          </div>


            <div
                className="gap-3 d-md-flex justify-content-md-end text-center mt-3 mb-3">
              <button type="button" className="btn btn-secondary btn-lg"
                      onClick={() => navigate("../profile/")}>Cancel
              </button>
              <button type="button" className="btn btn-primary btn-lg"
                      onClick={() => updateProfileHandler()}>Update
              </button>
            </div>

  </>
  )
}

const EditProfileComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  return (
      <>
        <h1>Edit Profile</h1>
        {
            !currentUser &&
            <div className="alert alert-info">
              Please log in to edit your profile.
            </div>
        }
        {currentUser && <EditItem key={currentUser._id} post={currentUser} />}
      </>
  );
};

export default EditProfileComponent;