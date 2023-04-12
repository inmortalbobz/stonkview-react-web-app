import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllAdminUsersThunk, deleteUserThunk} from "./admin/users-admin-thunk";

const AdminControlledUserList = () => {
  const {currentUser, users} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findAllAdminUsersThunk())
  }, [])
  const deleteUserHandler = (uid) => {
    dispatch(deleteUserThunk(uid))
    dispatch(findAllAdminUsersThunk())
  }
  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="mb-5 text-center">All Users</h1>
            {!currentUser || (currentUser && currentUser.role !== "Admin") ? (
                <div className="alert alert-danger" role="alert">
                  You do not have permission!!! You shall not pass!!!
                </div>
            ) : (
                <div className="card">
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      {Object.entries(users).map(([key, user]) =>
                          currentUser._id !== key ? (
                              <li key={key} className="list-group-item">
                                <div className="row">
                                  <div className="col-md-8 d-flex align-items-center">
                                    <a href={"/profile/" + key} className="text-primary font-weight-bold">{user.username}</a>
                                  </div>
                                  <div className="col-md-4 text-right">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                          deleteUserHandler(key);
                                        }}
                                    >
                                      Delete This User
                                    </button>
                                  </div>
                                </div>
                              </li>
                          ) : null
                      )}
                    </ul>
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default AdminControlledUserList;