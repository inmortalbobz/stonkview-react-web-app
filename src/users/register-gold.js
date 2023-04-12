import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./gold/users-gold-thunk";
import {useNavigate} from "react-router-dom";

const GoldRegister = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [validatePassword, setValidatePassword] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [role, setRole] = useState('Gold')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleRegister = async () => {
    if (password !== validatePassword) {
      setError('Passwords must match')
      return
    }
    setError(null)
    const newUser = {username, password, companyName, role, email}
    try {
      const originalPromiseResult = await dispatch(registerThunk(newUser)).unwrap()
      navigate("/")
    } catch (error) {
      setError("Unable to register")
    }
  }
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
      <div className="background-moon-two-container container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="mb-5 text-center">Gold User Register</h1>
                {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                )}
                {/* Form */}
                <form>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                        id="username"
                        className="form-control"
                        value={username}
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  {/* Password */}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {/* Validate Password */}
                  <div className="mb-3">
                    <label htmlFor="validatePassword" className="form-label">
                      Re-Enter Password
                    </label>
                    <input
                        id="validatePassword"
                        className="form-control"
                        type="password"
                        value={validatePassword}
                        placeholder="Reenter password"
                        onChange={(e) => setValidatePassword(e.target.value)}
                    />
                  </div>
                  {/* Company Name */}
                  <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">
                      Company Name
                    </label>
                    <input
                        id="companyName"
                        className="form-control"
                        value={companyName}
                        placeholder="Enter your company name"
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                        id="email"
                        className="form-control"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* Register Button */}
                  <button
                      type="button"
                      onClick={handleRegister}
                      className="btn btn-primary w-100 mb-3"
                  >
                    Register
                  </button>
                  {/* Go Back Button */}
                  <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={handleGoBack}
                  >
                    Go Back to Register
                  </button>
                </form>
                {/* Welcome Message */}
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

export default GoldRegister;