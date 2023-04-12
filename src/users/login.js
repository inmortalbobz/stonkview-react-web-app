import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./users-thunk";
import { useNavigate } from "react-router";
import './background-image.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    const loginUser = { username, password };
    try {
      await dispatch(loginThunk(loginUser)).unwrap();
      navigate("/");
    } catch (error) {
      setError("Unable to login");
    }
  };

  const handleLoginLink = () => {
    navigate("/register");
  };

  const handleChange = (setter) => (e) => setter(e.target.value);

  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="mb-5 text-center">Login</h1>
                {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                )}
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                        id="username"
                        className="form-control"
                        value={username}
                        placeholder="Enter username"
                        onChange={handleChange(setUsername)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                        id="password"
                        className="form-control"
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={handleChange(setPassword)}
                    />
                  </div>
                  <button
                      type="button"
                      onClick={handleLogin}
                      className="btn btn-primary w-100"
                  >
                    Login
                  </button>

                  <p className="text-center">
                    Do not have an account?{" "}
                    <span
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={handleLoginLink}
                    >
                  Please Register
                </span>
                  </p>
                </form>
                {currentUser && (
                    <h2 className="mt-3 text-center">
                      Welcome {currentUser.role} {currentUser.username}
                    </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
